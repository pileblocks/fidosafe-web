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
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "f18276735fe118abe3b87b7a64d0c2e664e702d8d1f40fb9a6de0dad70efcfc5",
};
module.exports = { FidosafeContract };