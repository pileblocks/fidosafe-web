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
    codeHash: "760ab29befcbca95b45fa32ebf92f2e3ab0cc89728837e8846d966f551b1d476",
};
module.exports = { FidosafeDebotContract };