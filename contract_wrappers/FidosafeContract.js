const FidosafeContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addUser",
                "inputs": [
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "removeUser",
                "inputs": [
                    {
                        "name": "trId",
                        "type": "uint32"
                    },
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeReqConfirmations",
                "inputs": [
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
                "name": "resolveTransaction",
                "inputs": [
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
                "name": "sendTransfer",
                "inputs": [
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
                "name": "getUsers",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "pubkey",
                                "type": "uint256"
                            },
                            {
                                "name": "role",
                                "type": "uint8"
                            }
                        ],
                        "name": "users",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "getTransactions",
                "inputs": [
                    {
                        "name": "start",
                        "type": "uint32"
                    },
                    {
                        "name": "number",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint32"
                            },
                            {
                                "components": [
                                    {
                                        "name": "pubkey",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "role",
                                        "type": "uint8"
                                    }
                                ],
                                "name": "initiator",
                                "type": "tuple"
                            },
                            {
                                "name": "params",
                                "type": "cell"
                            },
                            {
                                "name": "paramsStr",
                                "type": "bytes"
                            },
                            {
                                "name": "status",
                                "type": "uint8"
                            },
                            {
                                "name": "created",
                                "type": "uint32"
                            },
                            {
                                "name": "trType",
                                "type": "uint8"
                            },
                            {
                                "name": "completed",
                                "type": "uint32"
                            }
                        ],
                        "name": "transactions",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "getConfirmations",
                "inputs": [
                    {
                        "name": "trId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "trId",
                                "type": "uint32"
                            },
                            {
                                "name": "id",
                                "type": "uint32"
                            },
                            {
                                "components": [
                                    {
                                        "name": "pubkey",
                                        "type": "uint256"
                                    },
                                    {
                                        "name": "role",
                                        "type": "uint8"
                                    }
                                ],
                                "name": "user",
                                "type": "tuple"
                            },
                            {
                                "name": "resolution",
                                "type": "uint8"
                            },
                            {
                                "name": "created",
                                "type": "uint32"
                            }
                        ],
                        "name": "confirmations",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "getNumConfirmations",
                "inputs": [
                    {
                        "name": "trId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "accepted",
                        "type": "uint8"
                    },
                    {
                        "name": "declined",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getRequiredConfirmations",
                "inputs": [],
                "outputs": [
                    {
                        "name": "rc",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getNumberOfUsers",
                "inputs": [],
                "outputs": [
                    {
                        "name": "numberOfUsers",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "currentTransactionId",
                "inputs": [],
                "outputs": [
                    {
                        "name": "currentTransactionId",
                        "type": "uint32"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "UserCreated",
                "inputs": [
                    {
                        "name": "text",
                        "type": "bytes"
                    },
                    {
                        "name": "time",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "bd0dd4a41ca0ee6ebbebd2bb990e4f1d70b2359a93c9fe079fd279b9b9f5023e",
};
module.exports = { FidosafeContract };