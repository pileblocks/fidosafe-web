pragma ton-solidity >= 0.43.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract Fidosafe {

    struct User {
        uint256 pubkey;
        uint8 role;
    }

    struct Transaction {
        uint32 id;
        User initiator;
        TvmCell params;
        string paramsStr;
        uint8 status;
        uint32 created;
        uint8 trType;
        uint32 completed;
    }

    struct Confirmation {
        uint32 trId;
        uint32 id;
        User user;
        uint8 resolution;
        uint32 created;
    }

    mapping(uint32 => Transaction) mTransactions;

    mapping(uint256 => User) mUsers;

    mapping(uint32 => Confirmation[]) mConfirmations;

    uint8 constant USER_ROLE_ADMIN = 1;
    uint8 constant USER_ROLE_GUEST = 0;

    uint8 constant TR_TYPE_ADD_USER = 1;
    uint8 constant TR_TYPE_REMOVE_USER = 2;
    uint8 constant TR_TYPE_CHANGE_CONFIRMS = 3;
    uint8 constant TR_TYPE_RECEIVE = 4;
    uint8 constant TR_TYPE_SEND = 5;

    uint8 constant TR_STATUS_CONFIRMED = 100;
    uint8 constant TR_STATUS_DECLINED = 103;
    uint8 constant TR_STATUS_IN_PROGRESS = 0;

    uint8 constant CONFIRMATION_ACCEPT = 1;
    uint8 constant CONFIRMATION_DECLINE = 2;

    uint constant OP_CODE_CONFLICT = 409;
    uint constant OP_CODE_INVALID = 400;
    uint constant OP_CODE_UNAUTH = 403;
    uint constant OP_CODE_NOPUB = 401;
    uint constant OP_CODE_NOTFOUND = 404;

    uint constant MINIMUM_RECEIVE_AMOUNT = 500_000_000;
    uint constant MINIMUM_SEND_AMOUNT = 300_000_000;


    uint32 public currentTransactionId;
    // Allows to modify the code
    uint32 version;

    // Number of confirmations necessary to approve an operation
    uint8 requiredConfirmations;

    event UserCreated(string text, uint32 time);

    constructor(uint256 pubkey) public {

        currentTransactionId = 1;
        version = 1_000_702;
        require(pubkey != 0, 120);
        tvm.accept();
        User user = User(pubkey, 1);
        mUsers[pubkey] = user;
        requiredConfirmations = 1;

        //
        // Two initial transactions to add balance + a user account
        //

        uint32 trId = genTransactionId();
        TvmBuilder params;
        params.store(pubkey);
        TvmCell paramsCell = params.toCell();
        Transaction tr = Transaction(trId, user, paramsCell, format("{}", pubkey), TR_STATUS_CONFIRMED, now, TR_TYPE_ADD_USER, now);
        mTransactions[trId] = tr;

        uint32 confId = genTransactionId();
        Confirmation conf = Confirmation(trId, confId, user, CONFIRMATION_ACCEPT, now);
        mConfirmations[trId].push(conf);


        trId = genTransactionId();
        TvmBuilder receiveParams;
        uint128 initBalance = 1_000_000_000;
        receiveParams.store(msg.sender, initBalance);
        paramsCell = receiveParams.toCell();
        tr = Transaction(trId, user, paramsCell, format("{}|{}", msg.sender, initBalance), TR_STATUS_CONFIRMED, now, TR_TYPE_RECEIVE, now);
        mTransactions[trId] = tr;

        confId = genTransactionId();
        conf = Confirmation(trId, confId, user, CONFIRMATION_ACCEPT, now);
        mConfirmations[trId].push(conf);

    }

    modifier onlyAdmin() {
        require(msg.pubkey() != 0, OP_CODE_NOPUB);
        require(isInAdmins(msg.pubkey()), OP_CODE_UNAUTH);
        _;
    }

    function isInAdmins(uint256 pubkey) private view returns (bool) {
        if (mUsers.exists(pubkey) && mUsers[pubkey].role == USER_ROLE_ADMIN) {
            return true;
        }
        return false;
    }

    //---------------------------------
    // Service functions
    //---------------------------------

    function genTransactionId() private returns (uint32) {
        uint32 id = currentTransactionId;
        currentTransactionId += 1;
        return id;
    }

    function isActiveTransaction(uint32 trId) private view returns (bool) {
        if (mTransactions.exists(trId)) {
            Transaction tr = mTransactions[trId];
            if (tr.status == TR_STATUS_IN_PROGRESS) {
                return true;
            }
        }
        return false;
    }

    function setTransactionStatus(uint32 trId, uint8 status) private {
        if (mTransactions.exists(trId)) {
            mTransactions[trId].status = status;
        }
    }

    function confExists(User user, Confirmation[] confs) private pure returns (bool) {
        for (Confirmation conf: confs) {
            if (conf.user.pubkey == user.pubkey) {
                return true;
            }
        }
        return false;
    }

    function addConfirmation(uint32 trId, User user) private {
        uint32 confId = genTransactionId();
        if (!confExists(user, mConfirmations[trId])) {
            Confirmation conf = Confirmation(trId, confId, user, CONFIRMATION_ACCEPT, now);
            mConfirmations[trId].push(conf);
        }
    }

    //
    // Parsers
    //

    function addUserParser(uint32 trId) private view returns (uint256 pubkey) {
        Transaction tr = mTransactions[trId];
        TvmSlice slice = tr.params.toSlice();
        return slice.decode(uint256);
    }

    function changeConfirmationsParser(uint32 trId) private view returns (uint8 numConfirms) {
        Transaction tr = mTransactions[trId];
        TvmSlice slice = tr.params.toSlice();
        return slice.decode(uint8);
    }

    function removeUserParser(uint32 trId) private view returns (uint256 pubkey) {
        Transaction tr = mTransactions[trId];
        TvmSlice slice = tr.params.toSlice();
        return slice.decode(uint256);
    }

    function sendTransferParser(uint32 trId) private view returns (address recipient, uint128 value) {
        Transaction tr = mTransactions[trId];
        TvmSlice slice = tr.params.toSlice();
        return slice.decode(address, uint128);
    }
    //
    //  Contract UX operations
    //

    function addUser(uint32 trId, uint256 pubkey) onlyAdmin public {
        tvm.accept();
        // Check if the user is already among the users
        require(!mUsers.exists(pubkey), OP_CODE_CONFLICT, "User already exists");

        Transaction tr;
        User user = mUsers[msg.pubkey()];
        // Check if the transaction exists and its status is in progress, if not = create a transaction
        if (trId != 0) {
            require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active or does not exist");
            tr = mTransactions[trId];
            // Check that the type of the transaction corresponds to addUser
            require(tr.trType == TR_TYPE_ADD_USER, OP_CODE_CONFLICT, "The transaction type is from a different operation");
            require(addUserParser(trId) == pubkey, OP_CODE_CONFLICT, "The transaction data is different to the requested operation data");
        }
        else {
            trId = genTransactionId();
            TvmBuilder params;
            params.store(pubkey);
            TvmCell paramsCell = params.toCell();
            tr = Transaction(trId, user, paramsCell, format("0x{:x}", pubkey), TR_STATUS_IN_PROGRESS, now, TR_TYPE_ADD_USER, now);
        }

        // add the confirmation if not already exists
        addConfirmation(trId, user);

        uint8 numUsers = uint8(getUsers().length);

        // check if the necessary amount of confirmations is received (including +1 from the user)
        (uint8 accepted, uint8 declined) = getNumConfirmations(trId);

        // run the operation
        // change the transaction status
        if (accepted >= requiredConfirmations) {
            tr.status = TR_STATUS_CONFIRMED;
            tr.completed = now;
            mUsers[pubkey] = User(pubkey, 1);
        }
        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
            tr.completed = now;
        }
        mTransactions[trId] = tr;
    }

    function removeUser(uint32 trId, uint256 pubkey) onlyAdmin public {
        tvm.accept();
        // Check if the user is already among the users
        require(mUsers.exists(pubkey), OP_CODE_CONFLICT, "User does not exist");
        uint8 numUsers = uint8(getUsers().length);
        require(numUsers > 1, OP_CODE_CONFLICT, "Cannot remove the last user");
        require(numUsers - 1 >= requiredConfirmations, OP_CODE_CONFLICT, "The number of remaining users should not be less than the number of confirmations");

        Transaction tr;
        User user = mUsers[msg.pubkey()];
        // Check if the transaction exists and its status is in progress, if not = create a transaction
        if (trId != 0) {
            require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active or does not exist");
            tr = mTransactions[trId];
            // Check that the type of the transaction corresponds to addUser
            require(tr.trType == TR_TYPE_REMOVE_USER, OP_CODE_CONFLICT, "The transaction type is from a different operation");
            require(removeUserParser(trId) == pubkey, OP_CODE_CONFLICT, "The transaction data is different to the requested operation data");
        }
        else {
            trId = genTransactionId();
            TvmBuilder params;
            params.store(pubkey);
            TvmCell paramsCell = params.toCell();
            tr = Transaction(trId, user, paramsCell, format("0x{:x}", pubkey), TR_STATUS_IN_PROGRESS, now, TR_TYPE_REMOVE_USER, now);
        }
        // add the confirmation if not already exists
        addConfirmation(trId, user);



        // check if the necessary amount of confirmations is received (including +1 from the user)
        (uint8 accepted, uint8 declined) = getNumConfirmations(trId);
        // run the operation
        // change the transaction status
        if (accepted >= requiredConfirmations) {
            tr.status = TR_STATUS_CONFIRMED;
            tr.completed = now;
            delete mUsers[pubkey];
        }
        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
            tr.completed = now;
        }
        mTransactions[trId] = tr;
    }

    function changeReqConfirmations(uint32 trId, uint8 newReqConfirmations) onlyAdmin public {
        tvm.accept();
        Transaction tr;
        User user = mUsers[msg.pubkey()];
        uint8 numUsers = uint8(getUsers().length);

        require(newReqConfirmations <= numUsers, OP_CODE_CONFLICT, "The number of confirmations must not exceed the number of users");

        // Check if the transaction exists and its status is in progress, if not = create a transaction
        if (trId != 0) {
            require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active");
            tr = mTransactions[trId];
            // Check that the type of the transaction corresponds to addUser
            require(tr.trType == TR_TYPE_CHANGE_CONFIRMS, OP_CODE_CONFLICT, "The transaction type is from a different operation");
            require(changeConfirmationsParser(trId) == newReqConfirmations, OP_CODE_CONFLICT, "The transaction data is different to the requested operation data");
        } else {
            trId = genTransactionId();
            TvmBuilder params;
            params.store(newReqConfirmations);
            TvmCell paramsCell = params.toCell();
            tr = Transaction(trId, user, paramsCell, format("{}", newReqConfirmations), TR_STATUS_IN_PROGRESS, now, TR_TYPE_CHANGE_CONFIRMS, now);
        }
        // add the confirmation if not already exists
        addConfirmation(trId, user);

        // check if the necessary amount of confirmations is received (including +1 from the user)
        (uint8 accepted, uint8 declined) = getNumConfirmations(trId);

        // run the operation
        // change the transaction status
        if (accepted >= requiredConfirmations) {
            tr.status = TR_STATUS_CONFIRMED;
            tr.completed = now;
            requiredConfirmations = newReqConfirmations;
        }
        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
            tr.completed = now;
        }
        mTransactions[trId] = tr;
    }

    function resolveTransaction(uint32 trId, uint8 resolution) onlyAdmin public {
        tvm.accept();
        require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active or does not exist");
        User user = mUsers[msg.pubkey()];
        require(!confExists(user, mConfirmations[trId]), OP_CODE_CONFLICT, "You have already provided the resolution");
        require(resolution == CONFIRMATION_ACCEPT || resolution == CONFIRMATION_DECLINE, OP_CODE_INVALID, "Invalid resolution");
        uint32 confId = genTransactionId();
        Confirmation conf = Confirmation(trId, confId, user, resolution, now);
        mConfirmations[trId].push(conf);

        uint8 numUsers = uint8(getUsers().length);
        (, uint8 declined) = getNumConfirmations(trId);

        if (declined > numUsers - requiredConfirmations) {
            Transaction tr = mTransactions[trId];
            tr.status = TR_STATUS_DECLINED;
            mTransactions[trId] = tr;
        }
    }

    function sendTransfer(uint32 trId, address recipient, uint128 value) onlyAdmin public {
        tvm.accept();
        require(address(this).balance > value, OP_CODE_CONFLICT, "Not enough tokens to perform the operation");
        require(value > MINIMUM_SEND_AMOUNT, OP_CODE_CONFLICT, "Please specify a greater amount");

        Transaction tr;
        User user = mUsers[msg.pubkey()];
        // Check if the transaction exists and its status is in progress, if not = create a transaction
        if (trId != 0) {
            require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active or does not exist");
            tr = mTransactions[trId];
            // Check that the type of the transaction corresponds to addUser
            require(tr.trType == TR_TYPE_SEND, OP_CODE_CONFLICT, "The transaction type is from a different operation");
            (address rec, uint128 val) = sendTransferParser(trId);
            require((val == value) && (rec == recipient), OP_CODE_CONFLICT, "The transaction data is different to the requested operation data");
        }
        else {
            trId = genTransactionId();
            TvmBuilder params;
            params.store(recipient, value);
            TvmCell paramsCell = params.toCell();
            tr = Transaction(trId, user, paramsCell, format("{}", value), TR_STATUS_IN_PROGRESS, now, TR_TYPE_SEND, now);
        }

        // add the confirmation if not already exists
        addConfirmation(trId, user);

        uint8 numUsers = uint8(getUsers().length);

        // check if the necessary amount of confirmations is received (including +1 from the user)
        (uint8 accepted, uint8 declined) = getNumConfirmations(trId);

        // run the operation
        // change the transaction status
        if (accepted >= requiredConfirmations) {
            tr.status = TR_STATUS_CONFIRMED;
            tr.completed = now;
            recipient.transfer(value, true, 1);
        }
        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
            tr.completed = now;
        }
        mTransactions[trId] = tr;
    }



    receive() external {
        require(msg.value > MINIMUM_RECEIVE_AMOUNT, OP_CODE_CONFLICT, format("The message amount is less than minimum: {}", MINIMUM_RECEIVE_AMOUNT));
        tvm.accept();
        User user = User(msg.pubkey(), 0);

        uint32 trId = genTransactionId();
        TvmBuilder params;
        params.store(msg.sender, msg.value);
        TvmCell paramsCell = params.toCell();
        Transaction tr = Transaction(trId, user, paramsCell, format("{}|{}", msg.sender, msg.value), TR_STATUS_CONFIRMED, now, TR_TYPE_RECEIVE, now);
        mTransactions[trId] = tr;

        uint32 confId = genTransactionId();
        Confirmation conf = Confirmation(trId, confId, user, CONFIRMATION_ACCEPT, now);
        mConfirmations[trId].push(conf);
    }


    //---------------------------------
    // Off-chain functions
    //---------------------------------

    function getUsers() public view returns (User[] users) {
        for ((, User user): mUsers) {
            users.push(user);
        }
    }

    function getTransactions(uint32 start, uint8 number) public view returns (Transaction[] transactions) {
        uint32 id = start;
        Transaction tr;

        optional(uint32, Transaction) firstPair = mTransactions.prevOrEq(id);

        if (firstPair.hasValue()) {

            (uint32 id, Transaction tr) = firstPair.get();

            for (uint8 counter=0; counter < number; counter++) {
                transactions.push(tr);
                optional(uint32, Transaction) nextPair = mTransactions.prev(id);

                if (nextPair.hasValue()) {
                    (uint32 newId, Transaction newTr) = nextPair.get();
                    id = newId;
                    tr = newTr;
                }
                else {
                    break;
                }
            }
        }
        return transactions;
    }

    function getConfirmations(uint32 trId) public view returns (Confirmation[] confirmations) {
        require(mConfirmations.exists(trId), OP_CODE_NOTFOUND);
        Confirmation[] confarr = mConfirmations[trId];

        for (Confirmation conf: confarr) {
            confirmations.push(conf);
        }
        return confirmations;
    }

    function getNumConfirmations(uint32 trId) public view returns (uint8 accepted, uint8 declined) {

        accepted = 0;
        declined = 0;

        if (mConfirmations.exists(trId)) {
            Confirmation[] confs = mConfirmations[trId];
            for (Confirmation conf: confs) {
                if (conf.resolution == CONFIRMATION_ACCEPT) {
                    accepted += 1;
                } else if (conf.resolution == CONFIRMATION_DECLINE) {
                    declined += 1;
                }
            }
        }
        return (accepted, declined);
    }

    function getRequiredConfirmations() public view returns (uint8 rc) {
        return requiredConfirmations;
    }

    function getNumberOfUsers() public view returns (uint8 numberOfUsers) {
        return uint8(getUsers().length);
    }

}