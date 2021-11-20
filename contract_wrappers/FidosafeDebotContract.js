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
                        "name": "newReqConfirmations",
                        "type": "uint8"
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
    codeHash: "5ba323cccb7051d2f79ae5c3eeb327f79f16863b5ce6973cd4622d82ed809098",
};
module.exports = { FidosafeDebotContract };