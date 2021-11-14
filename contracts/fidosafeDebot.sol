pragma ton -solidity >= 0.43.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
import "./imports/Sdk.sol";
import "./imports/Debot.sol";
import "./imports/Terminal.sol";
import "./imports/UserInfo.sol";
import "./imports/ConfirmInput.sol";

interface FidoSafe {
   function sendTransaction(address dest, uint128 value, bool bounce, uint8 flags, TvmCell payload  ) external;
}

abstract contract FSafe {
   constructor(uint256 pubkey) public {}
}

contract FidoSafeDebot is Debot {

    bytes mIcon;
    TvmCell mCode;
    uint32 contractVersion;

    uint128 constant INITIAL_BALANCE = 1000000000;

    mapping(uint256 => address) fidosafeAddresses;

    function setIcon(bytes icon) public {
        require(msg.pubkey() == tvm.pubkey(), 100);
        tvm.accept();
        mIcon = icon;
    }

    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string key, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "FidoSafe Create & Confirm";
        version = "0.2.3";
        publisher = "Norton";
        key = "Use this bot to create a new FidoSafe in 3 easy steps:\n\n① You fund a new contract address.\n\n② We deploy to this address.\n\n③ You receive the web link and start working with your contract.\n\nFor more information, see https://fidosafe.com";
        author = "Norton";
        support = address.makeAddrStd(0, 0x66e01d6df5a8d7677d9ab2daf7f258f1e2a7fe73da5320300395f99e01dc3b5f);
        language = "en";
        dabi = m_debotAbi.get();
        icon = mIcon;
    }

    function setFidoSafeCode(TvmCell code) public {
        require(msg.pubkey() == tvm.pubkey(), 101);
        tvm.accept();
        mCode = code;
    }

    address userAccount;
    uint256 userPubkey;
    address fidoSafeAddress;

    function start() public override {
        contractVersion = 4;
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
                "Step ②\n\nDeploying new contract. We send a message to your contract to deploy the contract code. The associated fees will be deducted from the new FidoSafe contract address."
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
        FidoSafe(uAccount).sendTransaction{
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
            call: {FSafe, userPubkey}
        });
        tvm.sendrawmsg(deployMsg, 0);
    }

    function deploySucceed() public {
        Terminal.print(0, format("Your contract is ready!\n\nPlease navigate to http://localhost:8080/#/{}", fidoSafeAddress));
    }

    function printError(uint32 sdkError, uint32 exitCode) public {
        Terminal.print(0, format("Operation failed. sdkError {}, exitCode {}", sdkError, exitCode));
    }


    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
        return [ Terminal.ID, UserInfo.ID, ConfirmInput.ID ];
    }


}