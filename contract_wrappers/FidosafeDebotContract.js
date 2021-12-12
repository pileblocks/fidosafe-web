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
    codeHash: "69750e4eadd0dc43dc0cb456dcc5fabbe4646fb57a3a501713f6b649d12408bd",
};
module.exports = { FidosafeDebotContract };