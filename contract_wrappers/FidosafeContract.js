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
                "inputs": [],
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
                                "name": "transactionId",
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
    codeHash: "6c9f848102f35de86c95524087a2f94e9f98064d66484e1acefe4d813144bcfc",
};
module.exports = { FidosafeContract };