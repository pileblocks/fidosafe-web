pragma ton -solidity >= 0.43.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
import "./imports/Sdk.sol";
import "./imports/Debot.sol";
import "./imports/Terminal.sol";
import "./imports/UserInfo.sol";
import "./imports/ConfirmInput.sol";

interface SafeAccount {
   function sendTransaction(address dest, uint128 value, bool bounce, uint8 flags, TvmCell payload) external;
}

interface Fidosafe {
    function addUser(uint32 trId, uint256 pubkey) external;
    function changeReqConfirmations(uint32 trId, uint8 newReqConfirmations) external;
    function resolveTransaction(uint32 trId, uint8 resolution) external;
}

abstract contract Fsafe {
   constructor(uint256 pubkey) public {}
}

contract FidosafeDebot is Debot {

    bytes mIcon;
    TvmCell mCode;
    uint32 contractVersion;
    uint128 constant INITIAL_BALANCE = 1_000_000_000;

    mapping(uint256 => address) fidosafeAddresses;

    address userAccount;
    uint256 userPubkey;
    address fidoSafeAddress;

    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
        return [ Terminal.ID, UserInfo.ID, ConfirmInput.ID ];
    }

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        mIcon = icon;
    }

    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string key, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "Fidosafe Create & Confirm";
        version = "0.5.0";
        publisher = "Norton";
        key = "Use this bot to create a new Fidosafe in 3 easy steps:\n\n① You fund a new contract address.\n\n② We deploy to this address.\n\n③ You receive the web link and start working with your contract.\n\nFor more information, see https://fidosafe.com";
        author = "Norton";
        support = address.makeAddrStd(0, 0x66e01d6df5a8d7677d9ab2daf7f258f1e2a7fe73da5320300395f99e01dc3b5f);
        language = "en";
        dabi = m_debotAbi.get();
        icon = mIcon;
    }

    function setFidosafeCode(TvmCell code) public {
        require(msg.pubkey() == tvm.pubkey(), 101);
        tvm.accept();
        mCode = code;
    }

    //
    // UX flow operations
    //

    function start() public override {
        contractVersion = 4;
        UserInfo.getPublicKey(tvm.functionId(setDefaultPubkey));
    }

    function reInit() public {
        contractVersion = 5;
        UserInfo.getPublicKey(tvm.functionId(setDefaultPubkey));
    }

    function setDefaultPubkey(uint256 value) public {
        userPubkey = value;
        UserInfo.getAccount(tvm.functionId(setDefaultAccount));
    }

    function setDefaultAccount(address value) public {
        userAccount = value;
        TvmCell deployState = tvm.insertPubkey(mCode, userPubkey);
        fidoSafeAddress = address.makeAddrStd(0, tvm.hash(deployState));
        Sdk.getAccountType(tvm.functionId(checkStatus), fidoSafeAddress);
    }

    function runCheckStatusPaid() public {
        Sdk.getAccountType(tvm.functionId(checkStatusPaid), fidoSafeAddress);
    }

    function checkStatusPaid(int8 acc_type) public {
    if (acc_type == 0) {
        Sdk.getAccountType(tvm.functionId(checkStatus), fidoSafeAddress);
    } else {
        Terminal.print(0, format("Checking if the payment is succeeded...\n"));
        runCheckStatusPaid();
    }
}

    function checkStatus(int8 acc_type) public {
        if (acc_type == 1) {

            deploySucceed();

        } else if (acc_type == -1)  { // acc is inactive
            Terminal.print(0, "Step ①\n\nWe'll create a new contract for you.\n\n*Note* To deploy the contract, it should have a positive balance. For this, now we will send 1 TON to this address.");
            ConfirmInput.get(tvm.functionId(confirmPayment), "Please confirm the transaction.");

        } else  if (acc_type == 0) { // acc is uninitialized
            Terminal.print(0, format(
                "Step ②\n\nDeploying new contract. We send a message to your contract to deploy the contract code. The associated fees will be deducted from the new Fidosafe contract address."
            ));
            ConfirmInput.get(tvm.functionId(confirmDeploy), "Please confirm the deploy transaction.");

        } else if (acc_type == 2) {  // acc is frozen
            Terminal.print(0, format("Can not continue: account {} is frozen", fidoSafeAddress));
        }
    }

    function confirmPayment(bool value) public {
        creditAccount(userAccount);
    }

    function confirmDeploy(bool value) public {
        deployContract();
    }

    function creditAccount(address uAccount) public {
        optional(uint256) pubkey = 0;
        TvmCell empty;
        SafeAccount(uAccount).sendTransaction{
            abiVer: 2,
            extMsg: true,
            sign: true,
            pubkey: pubkey,
            time: uint64(now),
            expire: 0,
            callbackId: tvm.functionId(runCheckStatusPaid),
            onErrorId: tvm.functionId(printError)  // Just repeat if something went wrong
        }(fidoSafeAddress, INITIAL_BALANCE, false, 3, empty);
    }

    function deployContract() public {
        TvmCell image = tvm.insertPubkey(mCode, userPubkey);
        optional(uint256) none;
        TvmCell deployMsg = tvm.buildExtMsg({
            abiVer: 2,
            dest: fidoSafeAddress,
            callbackId: tvm.functionId(deploySucceed),
            onErrorId:  tvm.functionId(printError),    // Just repeat if something went wrong
            time: 0,
            expire: 0,
            sign: true,
            pubkey: none,
            stateInit: image,
            call: {Fsafe, userPubkey}
        });
        tvm.sendrawmsg(deployMsg, 0);
    }

    function deploySucceed() public {
        Terminal.print(0, format("Your contract is ready!\n\nPlease navigate to https://fidosafe.com/#/{}/users", fidoSafeAddress));
    }

    function printError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("Operation failed. sdkError {}, exitCode {}", sdkError, exitCode));
    }

    //
    // Off-chain operations
    //

    function addHeaders(TvmBuilder msg) private pure returns (TvmBuilder) {
        // Pack internal message header (see TON blockchain spec for TLB-scheme).
        msg.store(false, true, true, false, address(0), address(this));
        msg.storeTons(0);
        msg.storeUnsigned(0, 1);
        msg.storeTons(0);
        msg.storeTons(0);
        msg.store(uint64(0));
        msg.store(uint32(0));
        msg.storeUnsigned(0, 1); //init: nothing$0
        msg.storeUnsigned(1, 1); //body: right$1
        return msg;
    }

    function getAddUserData(address fsAddress, uint32 trId, uint256 uPubkey) public view returns(TvmCell data) {
        TvmCell body = tvm.encodeBody(FidosafeDebot.addUser, fsAddress, trId, uPubkey);
        TvmBuilder msgData;
        msgData = addHeaders(msgData);
        msgData.store(body);
        data = msgData.toCell();
    }

    function addUser(address fsAddress, uint32 trId, uint256 uPubkey) public {
        Terminal.print(0, format("Add new user: {}", uPubkey));
        Fidosafe(fsAddress).addUser{
            abiVer: 2,
            extMsg: true,
            sign: true,
            pubkey: userPubkey,
            time: uint64(now),
            expire: 0,
            callbackId: tvm.functionId(reInit),
            onErrorId: tvm.functionId(printError)  // Just repeat if something went wrong
        }(trId, uPubkey);
    }

    function getChangeReqConfirmationsData(address fsAddress, uint32 trId, uint8 newReqConfirmations) public view returns(TvmCell data) {
        TvmCell body = tvm.encodeBody(FidosafeDebot.changeReqConfirmations, fsAddress, trId, newReqConfirmations);
        TvmBuilder msgData;
        msgData = addHeaders(msgData);
        msgData.store(body);
        data = msgData.toCell();
    }

    function changeReqConfirmations(address fsAddress, uint32 trId, uint8 newReqConfirmations) public {
        Terminal.print(0, format("Change confirmations to: {}", newReqConfirmations));
        Fidosafe(fsAddress).changeReqConfirmations{
            abiVer: 2,
            extMsg: true,
            sign: true,
            pubkey: userPubkey,
            time: uint64(now),
            expire: 0,
            callbackId: tvm.functionId(reInit),
            onErrorId: tvm.functionId(printError)  // Just repeat if something went wrong
        }(trId, newReqConfirmations);
    }

    function getResolveTransactionData(address fsAddress, uint32 trId, uint8 resolution) public view returns(TvmCell data) {
        TvmCell body = tvm.encodeBody(FidosafeDebot.resolveTransaction, fsAddress, trId, resolution);
        TvmBuilder msgData;
        msgData = addHeaders(msgData);
        msgData.store(body);
        data = msgData.toCell();
    }

    function resolveTransaction(address fsAddress, uint32 trId, uint8 resolution) public {
        Terminal.print(0, format("Resolution: {}", resolution));
        Fidosafe(fsAddress).resolveTransaction{
            abiVer: 2,
            extMsg: true,
            sign: true,
            pubkey: userPubkey,
            time: uint64(now),
            expire: 0,
            callbackId: tvm.functionId(reInit),
            onErrorId: tvm.functionId(printError)  // Just repeat if something went wrong
        }(trId, resolution);
    }

}