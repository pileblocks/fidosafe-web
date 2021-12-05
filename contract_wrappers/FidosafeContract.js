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
    codeHash: "f0c97408b2a45db429397d66c5e21bdf94962b011e019adc596b19f601affd1d",
};
module.exports = { FidosafeContract };