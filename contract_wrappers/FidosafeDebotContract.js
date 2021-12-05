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
    codeHash: "f4cd8bcd2707c25db2367325e5eacca8b9f83290ff08b80dc49db9e4a87e5922",
};
module.exports = { FidosafeDebotContract };