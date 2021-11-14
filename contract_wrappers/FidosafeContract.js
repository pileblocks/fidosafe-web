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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "addUser",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "removeUser",
                "inputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
                    },
                    {
                        "name": "trId",
                        "type": "uint32"
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
    codeHash: "cc5fd140c5c7bc0d81bcc4d7014b6239a34acc00e30345e5c0f2bb7dc5a8ab22",
};
module.exports = { FidosafeContract };