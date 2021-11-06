pragma ton -solidity >= 0.43.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

contract Sample {

    event LogCall(uint256 pubkey);

    modifier onlyAdmin() {
        //require(msg.pubkey() != 0, 120);
        tvm.accept();
        _;
    }

    function testRequire() public onlyAdmin {
        emit LogCall(msg.pubkey());
        //require(false, 100, "This is the test message");
    }

}