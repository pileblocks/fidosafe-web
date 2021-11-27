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
    codeHash: "651e6289846d6825006e89a517518486ce06e990c7f5b8f5b804fef26e510980",
};
module.exports = { FidosafeContract };