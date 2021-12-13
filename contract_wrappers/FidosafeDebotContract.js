const FidosafeDebotContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "getRequiredInterfaces",
                "inputs": [],
                "outputs": [
                    {
                        "name": "interfaces",
                        "type": "uint256[]"
                    }
                ]
            },
            {
                "name": "setIcon",
                "inputs": [
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDebotInfo",
                "id": "0xDEB",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "version",
                        "type": "bytes"
                    },
                    {
                        "name": "publisher",
                        "type": "bytes"
                    },
                    {
                        "name": "key",
                        "type": "bytes"
                    },
                    {
                        "name": "author",
                        "type": "bytes"
                    },
                    {
                        "name": "support",
                        "type": "address"
                    },
                    {
                        "name": "hello",
                        "type": "bytes"
                    },
                    {
                        "name": "language",
                        "type": "bytes"
                    },
                    {
                        "name": "dabi",
                        "type": "bytes"
                    },
                    {
                        "name": "icon",
                        "type": "bytes"
                    }
                ]
            },
            {
                "name": "setFidosafeCode",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "start",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "reInit",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setDefaultPubkey",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setDefaultAccount",
                "inputs": [
                    {
                        "name": "value",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "runCheckStatusPaid",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "checkStatusPaid",
                "inputs": [
                    {
                        "name": "acc_type",
                        "type": "int8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "checkStatus",
                "inputs": [
                    {
                        "name": "acc_type",
                        "type": "int8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "confirmPayment",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "confirmDeploy",
                "inputs": [
                    {
                        "name": "value",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "creditAccount",
                "inputs": [
                    {
                        "name": "uAccount",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployContract",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "deploySucceed",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "printError",
                "inputs": [
                    {
                        "name": "sdkError",
                        "type": "uint32"
                    },
                    {
                        "name": "exitCode",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getAddUserData",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "uPubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "data",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "addUser",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "uPubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getChangeReqConfirmationsData",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "newReqConfirmations",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "data",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "changeReqConfirmations",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "newReqConfirmations",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getResolveTransactionData",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "resolution",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "data",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "resolveTransaction",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "resolution",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getRemoveUserData",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "uPubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "data",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "removeUser",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "uPubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getSendTransferData",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "data",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "sendTransfer",
                "inputs": [
                    {
                        "name": "fsAddress",
                        "type": "address"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDebotOptions",
                "inputs": [],
                "outputs": [
                    {
                        "name": "options",
                        "type": "uint8"
                    },
                    {
                        "name": "debotAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAbi",
                        "type": "bytes"
                    },
                    {
                        "name": "targetAddr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "setABI",
                "inputs": [
                    {
                        "name": "dabi",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "caaff262ecb1e86dd030d8ab21cf69a6679d54fe4de290bce938a2a4b31707c4",
};
module.exports = { FidosafeDebotContract };