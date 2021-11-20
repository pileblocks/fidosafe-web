pragma ton -solidity >= 0.43.0;
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
    }

    struct Confirmation {
        uint32 transactionId;
        User user;
        uint8 resolution;
        uint32 created;
    }

    mapping(uint32 => Transaction) mTransactions;

    mapping(uint256 => User) mUsers;

    mapping(uint32 => Confirmation[]) mConfirmations;

    uint8 constant USER_ROLE_ADMIN = 1;

    uint8 constant TR_TYPE_ADD_USER = 1;
    uint8 constant TR_TYPE_REMOVE_USER = 2;
    uint8 constant TR_TYPE_CHANGE_CONFIRMS = 3;

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

    // Allows to modify the code
    uint32 version;

    // Number of confirmations necessary to approve an operation
    uint8 requiredConfirmations;

    event UserCreated(string text, uint32 time);

    constructor(uint256 pubkey) public {
        version = 1_100_504;
        require(pubkey != 0, 120);
        tvm.accept();
        mUsers[pubkey] = User(pubkey, 1);
        requiredConfirmations = 1;
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

    function genTransactionId() private pure returns (uint32) {
        rnd.shuffle();
        uint32 id = rnd.next(uint32(0xFFFFFFFF)) | 0xF0000000;
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
        if (!confExists(user, mConfirmations[trId])) {
            Confirmation conf = Confirmation(trId, user, CONFIRMATION_ACCEPT, now);
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
            tr = Transaction(trId, user, paramsCell, format("0x{:x}", pubkey), TR_STATUS_IN_PROGRESS, now, TR_TYPE_ADD_USER);
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
            mUsers[pubkey] = User(pubkey, 1);
        }
        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
        }
        mTransactions[trId] = tr;
    }

    function removeUser(uint32 trId, uint256 pubkey) onlyAdmin public {
        // TODO: if req confirmations more than the remaining users => dec the conf number
        tvm.accept();
        if (mUsers.exists(pubkey)) {
            delete mUsers[pubkey];
        }
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
            tr = Transaction(trId, user, paramsCell, format("{}", newReqConfirmations), TR_STATUS_IN_PROGRESS, now, TR_TYPE_CHANGE_CONFIRMS);
        }
        // add the confirmation if not already exists
        addConfirmation(trId, user);

        // check if the necessary amount of confirmations is received (including +1 from the user)
        (uint8 accepted, uint8 declined) = getNumConfirmations(trId);

        // run the operation
        // change the transaction status
        if (accepted >= requiredConfirmations) {
            tr.status = TR_STATUS_CONFIRMED;
            requiredConfirmations = newReqConfirmations;
        }

        if (declined > numUsers - requiredConfirmations) {
            tr.status = TR_STATUS_DECLINED;
        }
        mTransactions[trId] = tr;
    }

    function resolveTransaction(uint32 trId, uint8 resolution) onlyAdmin public {
        tvm.accept();
        require(isActiveTransaction(trId), OP_CODE_CONFLICT, "The transaction is not active or does not exist");
        User user = mUsers[msg.pubkey()];
        require(!confExists(user, mConfirmations[trId]), OP_CODE_CONFLICT, "You have already provided the resolution");
        require(resolution == CONFIRMATION_ACCEPT || resolution == CONFIRMATION_DECLINE, OP_CODE_INVALID, "Invalid resolution");
        Confirmation conf = Confirmation(trId, user, resolution, now);
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

    function getTransactions() public view returns (Transaction[] transactions) {
        for ((, Transaction tr): mTransactions) {
            transactions.push(tr);
        }
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