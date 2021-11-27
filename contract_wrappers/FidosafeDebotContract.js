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
    tvc: "te6ccgEClwEAFjUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8guUBQSWArIh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfCsGAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAYCKCCCEFhkLQq74wIgghB97NDbu+MCMQcDPCCCEGi1Xz+74wIgghByupJ1u+MCIIIQfezQ27vjAikPCAIoIIIQfEYcn7rjAiCCEH3s0Nu64wIMCQN2MPhCbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+GeTCocE9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNJaWCwsBAoiWAyQw+EJu4wDTH9Mf0ds82zx/+GeTDYcEenBvAMiNBtPcGVyYXRpb24gZmFpbGVkLiBzZGtFcnJvciCDbPCRwcHDbPIuywgZXhpdENvZGUgjbPCNwcHB7RnsOAw7bPNs82zxbRmZlBFAgghBrWPcnuuMCIIIQcDMEgLrjAiCCEHBZRoS64wIgghByupJ1uuMCJxQSEAMuMPhCbuMA+kGV1NHQ+kDf0ds82zx/+GeTEYcCSCD4cvhP+FPbPCD5AHDIz4ZAygfL/8nQ+HSCEHAzBID4VNs8W4U/A7Aw+EJu4wD6QZXU0dD6QN/XDR+V1NHQ0x/f1w0HldTR0NMH39HbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA8FlGhIzxbMyXD7AJEw4uMAf/hnkxOHAjyIVHEjyM+RrWPcns7LH8sHycgg2zwxXMwxyTIwbDGWgQMgMPhCbuMA0gfR2zzbPH/4Z5MVhwISIMABjoCOgOIwJhYCECDA/46AjoDiIRcCECDAAI6AjoDiGxgBDCDAAo6A3hkEanBvAMiNBpDYW4gbm90IGNvbnRpbnVlOiBhY2NvdW50IINs8+FTbPIuiBpcyBmcm96ZW6Ns8e2h7GgII2zzbPGZlBBBwbwDIids8iSB7HxwEFts82zzbPIIIGcZie2ZlHQIGiNs8HiIATFBsZWFzZSBjb25maXJtIHRoZSBkZXBsb3kgdHJhbnNhY3Rpb24uAF5lZHVjdGVkIGZyb20gdGhlIG5ldyBGaWRvc2FmZSBjb250cmFjdCBhZGRyZXNzLgD+U3RlcCDikaEKCkRlcGxveWluZyBuZXcgY29udHJhY3QuIFdlIHNlbmQgYSBtZXNzYWdlIHRvIHlvdXIgY29udHJhY3QgdG8gZGVwbG95IHRoZSBjb250cmFjdCBjb2RlLiBUaGUgYXNzb2NpYXRlZCBmZWVzIHdpbGwgYmUgZAQacIjbPIIQDJeM0ojbPCRlIyIAno0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACGkhnlAzxbLH8zJcPsAXwMAPlBsZWFzZSBjb25maXJtIHRoZSB0cmFuc2FjdGlvbi4B/lN0ZXAg4pGgCgpXZSdsbCBjcmVhdGUgYSBuZXcgY29udHJhY3QgZm9yIHlvdS4KCipOb3RlKiBUbyBkZXBsb3kgdGhlIGNvbnRyYWN0LCBpdCBzaG91bGQgaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2UuIEZvciB0aGlzLCBub3clAEggd2Ugd2lsbCBzZW5kIDEgVE9OIHRvIHRoaXMgYWRkcmVzcy4BBNs8YwNWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cNB5XU0dDTB9/R2zzbPH/4Z5MohwTQcG8AyIvFJlc29sdXRpb246II2zwjcHBw2zzbPNs8Iou5Jgw2Yo8+Iw5PgXTIzs5xzwsFUxLIz4OBAgDPQPhTIG6TMM+BlQHPg8v/4vgjzws/i4AAAAAAWmiuOM8Wyx/LB83JcPsAXwN7RmZlBFAgghBdRvh8uuMCIIIQXXeMObrjAiCCEGKaW3u64wIgghBotV8/uuMCMC4tKgIqMPhCbuMA+Ebyc3/4ZtH4ANs8f/hnK4cCFu1E0NdJwgGKjoDikywC/HDtRND0BXD4am34a234bG34bYj4boj4b3D4cG34cY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhycPhzjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HSAQPQO8r3XC//4YnD4Y3D4ZpaWAxww+EJu4wDR2zzbPH/4Z5OEhwMeMPhCbuMA1NHbPNs8f/hnky+HADD4QvhFIG6SMHDeuvLgZPgA+Epxsfhq+GsDHDD4Qm7jANHbPNs8f/hnkzyHBE4gggtqUz274wIgghAYbMUeu+MCIIIQRiowcLvjAiCCEFhkLQq74wJhVkIyBFAgghBPfZiwuuMCIIIQUOkEOLrjAiCCEFQFaai64wIgghBYZC0KuuMCQDg2MwOEMPhCbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYZC0KjPFgFvIgLLH/QAyXD7AJEw4uMAf/hnkzSHAf5wbW8Cc22C8IeWU2Nm7iGFLbVtzLYLxWRZi2GMhl/FDIsat0C7oSjjyMv/cFiAIPRDgvClYRUUdwntNDfvuJRguUoSC3/pQ3nHldHrsENahH7lgMjL/3FYgCD0Q4LwFmU+rzTJIUZxIPJoXUJf+WPbXLtapnamKi4zv8P2gorINQAWy/9yWIAg9ENvAjEDHjD4Qm7jANTR2zzbPH/4Z5M3hwAk+EUgbpIwcN74Qrry4GX4APhvAyAw+EJu4wDSB9HbPNs8f/hnkzmHAhIgwACOgI6A4jA+OgQScG8AyInbPNs8PXtmOwII2zzbPGU8ARSCEFDpBDj4VNs8PwBQQ2hlY2tpbmcgaWYgdGhlIHBheW1lbnQgaXMgc3VjY2VlZGVkLi4uCgEUghBwMwSA+FTbPD8AqI0IZwx+Mip8gDlk+PtpmJ1wsEeyelAzBjV0+hY0W1PPFQ3iXFRxIMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlnIz5CuIURGyx/Ozclw+wBfAwNWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cN/5XU0dDT/9/R2zzbPH/4Z5NBhwTacG8AyIvkFkZCBuZXcgdXNlcjogjbPCNwcHDbPNs82zwii7kmDDZijz4jDk+BdMjOznHPCwVTEsjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAASZ03P4zxbLHwHIy//Nzclw+wBfA3tGZmUEUCCCEDSp/Wy64wIgghA5jsvDuuMCIIIQQEwrvLrjAiCCEEYqMHC64wJUUURDAy4w+EJu4wD6QZXU0dD6QN/R2zzbPH/4Z5NdhwNWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cNB5XU0dDTB9/R2zzbPH/4Z5NFhwTscG8AyI0GUNoYW5nZSBjb25maXJtYXRpb25zIHRvOiCDbPCNwcHDbPNs82zwii7kmDDZijz4jDk+BdMjOznHPCwVTEsjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAAGzCOjIzxbLH8sHzclw+wBfA3tGZmUETCTPNasCII6A31iSgDCSgCDiWJUkz4S2Nd4hpTIhjoDfVQJ62zwgUE92RwQg2zwkjoDeUwO7joCOgOJfBXVLSUgDIiOOgORfJts8N8g2UwOhjoDkSn1KAQggjoDkSgEaIds8MyaAMFigzwsHNnACLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jBNTAFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNX0BIiCWU2PPCwc35FNAoTUkjoDfTgEUXyfbPDjIN4B/NX0BFF8l2zw2yDWAfzJ9ARRfJts8N8g2MIB/fQMwMPhCbuMA1w3/ldTR0NP/39HbPNs8f/hnk1KHARgg+HOCEHK6knXbPDBTAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFyf2BEDPFssfyXD7AFsDsDD4Qm7jAPpBldTR0PpA39cNH5XU0dDTH9/XDQeV1NHQ0wff0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAC0qf1sjPFszJcPsAkTDi4wB/+GeTVYcCPIhUcSPIz5EBMK7yzssfywfJyCDbPDFczDHJMjBsMZaBBFAgghAFnA1vuuMCIIIQDJeM0rrjAiCCEA9th+m64wIgghAYbMUeuuMCXltZVwMcMPhCbuMA0ds82zx/+GeTWIcBFnX4cIIQOY7Lw9s8YAMeMPhCbuMA1NHbPNs8f/hnk1qHACT4RSBukjBw3vhCuvLgZPgA+G4DIDD4Qm7jANIA0ds82zx/+GeTXIcBCvhS2zwwXQG4cIgii7kmLqN8Pj4jDk+BdMjOznHPCwUhc3CCEDuaygD4VMjPg4ECAM9AU4hukzDPgZUBz4PL/+L4I88LP4uAAAAABM7mRsjPFlVAyM7Lf8oAywfMzc3JcPsAXwOWAxww+EJu4wDR2zzbPH/4Z5NfhwEWdPhwghA5jsvD2zxgAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFi2QREDPFssfyXD7AFsERCCBDeu64wIggggZxmK64wIgggidU2O64wIgggtqUz264wKGgn9iAxww+EJu4wDR2zzbPH/4Z5NjhwQmcG8AyInbPPhU2zyLYvdXNlcnOH57aGQDDNs82zzbPHtmZQCejQhnDDyymxs3cQwpbatuZbBeKyLMWwxkMv4oZFjVugXdCUccVHEgyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAABnMk4UDPFssfzMlw+wBfAwEYliFviMAAs46A6MkxZwEMIds8M88RcAM8+kRdVQLbPDMzIc81wgiVIc+E6jKOgOKAQH8gcNs8amlrARhfIts8M8gyIc+E6jJ9ARpZIrYLcHB/VQXBANs8awRQJc81qwIgjoDfVQKSgDCSgCDiWJUlz4S2Nt4hpTIhjoDfVQOAENs8IHp5dmwEINs8JY6A3lMDu46AjoDiXwZ1cW5tAyIjjoDkXyfbPDjIN1MDoY6A5G99bwEIII6A5G8BRiHbPDMgwQqZJ4AwIqDPCwc4n1N1koBXkoA34iKgzwsHOOIwcAAcb41vjVkgb4iSb4yRMOICLFNQuSbCf7Hy0EVTUKFTBLuOgI6A4jBzcgFEJJZTc88LBzjkXyjbPDnIOFMEoZZTc88LBzjkgH8hoSWgNX0BIiCWU3PPCwc45FNAoTUkjoDfdAEUXyjbPDnIOIB/NX0AJiBviCCbpYEA/6gBb4tviKCRMeICIm8AIo6A4XCTI8MAjoDoMGwheHcBEl2pDDI0XNs8Mn0BCnDbPGwhfQEUXybbPDfINoB/Mn0BFF8n2zw4yDcwgH99ATohzzWm+SHXSyCWI3Ai1zE03jAhu5RTEs4zjoDiW3wBIlzXGDMjzjNd2zw0yDNTEs4zfQA6ASBviJ9vjSBviIEA/6GUb4xvAN+SbwDiWG+Mb4wAhllvdXIgY29udHJhY3QgaXMgcmVhZHkhCgpQbGVhc2UgbmF2aWdhdGUgdG8gaHR0cHM6Ly9maWRvc2FmZS5jb20vIy8DsDD4Qm7jAPpBldTR0PpA39cNH5XU0dDTH9/XDf+V1NHQ0//f0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACAnVNjjPFszJcPsAkTDi4wB/+GeTgIcCPIhUcSPIz5E99mLCzssfy//JyCDbPDFczDHJMjBsMZaBAKYg+CiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARYz4Wgzs4xIHD6AjEgz4ExIHD6AjEgcPoCMXAByz9wAcsfIM+BMSBxzwsAMQMgMPhCbuMA0gDR2zzbPH/4Z5ODhwEG2zwwhAG6+E/4U9s8bfhUi7kmAbUpnr4jDk+BdMjOzosQ4M8WIs8Uz4P4U8jPg4ECAM9AUzNukzDPgZUBz4PL/+KNBAAAAAAAAAAAAAAAAA8keHFgzxYByMv/zc3JIHD7AF8DhQDIAdDIIdIAM5vPgyHTHzMBz4PLH5LPgeIh0gAznc+DIdIA0gA0AsoAygCSz4HiIfQEMwH0AG0i0gA0mCLVATT0BDAx3lUCcFnIy/9ZgED0Q8j0ACHPgzLNIfQEMwH0AAHHAPK3yQOQMPhCbuMA0ds8Ko4zLNDTAfpAMDHIz4cgznHPC2FegVWQyM+QAAA3rszMzFVgyMzMzsxVIMjMzMzNzc3JcPsAkl8K4uMAf/hnk4iHANL4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAMsHASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jOAc+DzxHiVWDIzMzLH/QAzsv/AcjOzc3J7VQEBoiIiJaWlokEToiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiJaWlooEBoiIiJaWlosEDIg6iDmIOJKRkIwDaog3iDaNCGADNwDrb61Guzvs1ZbXv5LHjxU/857SmQGAHK/M8A7h2vw1iDP4SyBu8n8yMPhOjpCNAARlbgH+VXNlIHRoaXMgYm90IHRvIGNyZWF0ZSBhIG5ldyBGaWRvc2FmZSBpbiAzIGVhc3kgc3RlcHM6CgrikaAgWW91IGZ1bmQgYSBuZXcgY29udHJhY3QgYWRkcmVzcy4KCuKRoSBXZSBkZXBsb3kgdG8gdGhpcyBhZGRyZXNzLgoK4o8A4pGiIFlvdSByZWNlaXZlIHRoZSB3ZWIgbGluayBhbmQgc3RhcnQgd29ya2luZyB3aXRoIHlvdXIgY29udHJhY3QuCgpGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZmlkb3NhZmUuY29tAAxOb3J0b24ACjAuNS4wADJGaWRvc2FmZSBDcmVhdGUgJiBDb25maXJtALjtRNDT/9M/0gDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wHU0dDU1NMf9AT6QNP/1NHQ+kDR+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KGWlQAUc29sIDAuNDcuMAAA",
    code: "te6ccgEClAEAFggABCSK7VMg4wMgwP/jAiDA/uMC8guRAgGTArIh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfCgDAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAMCKCCCEFhkLQq74wIgghB97NDbu+MCLgQDPCCCEGi1Xz+74wIgghByupJ1u+MCIIIQfezQ27vjAiYMBQIoIIIQfEYcn7rjAiCCEH3s0Nu64wIJBgN2MPhCbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+GeQB4QE9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNJOTCAgBAoiTAyQw+EJu4wDTH9Mf0ds82zx/+GeQCoQEenBvAMiNBtPcGVyYXRpb24gZmFpbGVkLiBzZGtFcnJvciCDbPCRwcHDbPIuywgZXhpdENvZGUgjbPCNwcHB4Q3gLAw7bPNs82zxbQ2NiBFAgghBrWPcnuuMCIIIQcDMEgLrjAiCCEHBZRoS64wIgghByupJ1uuMCJBEPDQMuMPhCbuMA+kGV1NHQ+kDf0ds82zx/+GeQDoQCSCD4cvhP+FPbPCD5AHDIz4ZAygfL/8nQ+HSCEHAzBID4VNs8W4I8A7Aw+EJu4wD6QZXU0dD6QN/XDR+V1NHQ0x/f1w0HldTR0NMH39HbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA8FlGhIzxbMyXD7AJEw4uMAf/hnkBCEAjyIVHEjyM+RrWPcns7LH8sHycgg2zwxXMwxyTIwbDGTfgMgMPhCbuMA0gfR2zzbPH/4Z5AShAISIMABjoCOgOIwIxMCECDA/46AjoDiHhQCECDAAI6AjoDiGBUBDCDAAo6A3hYEanBvAMiNBpDYW4gbm90IGNvbnRpbnVlOiBhY2NvdW50IINs8+FTbPIuiBpcyBmcm96ZW6Ns8eGV4FwII2zzbPGNiBBBwbwDIids8iR14HBkEFts82zzbPIIIGcZieGNiGgIGiNs8Gx8ATFBsZWFzZSBjb25maXJtIHRoZSBkZXBsb3kgdHJhbnNhY3Rpb24uAF5lZHVjdGVkIGZyb20gdGhlIG5ldyBGaWRvc2FmZSBjb250cmFjdCBhZGRyZXNzLgD+U3RlcCDikaEKCkRlcGxveWluZyBuZXcgY29udHJhY3QuIFdlIHNlbmQgYSBtZXNzYWdlIHRvIHlvdXIgY29udHJhY3QgdG8gZGVwbG95IHRoZSBjb250cmFjdCBjb2RlLiBUaGUgYXNzb2NpYXRlZCBmZWVzIHdpbGwgYmUgZAQacIjbPIIQDJeM0ojbPCFiIB8Ano0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACGkhnlAzxbLH8zJcPsAXwMAPlBsZWFzZSBjb25maXJtIHRoZSB0cmFuc2FjdGlvbi4B/lN0ZXAg4pGgCgpXZSdsbCBjcmVhdGUgYSBuZXcgY29udHJhY3QgZm9yIHlvdS4KCipOb3RlKiBUbyBkZXBsb3kgdGhlIGNvbnRyYWN0LCBpdCBzaG91bGQgaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2UuIEZvciB0aGlzLCBub3ciAEggd2Ugd2lsbCBzZW5kIDEgVE9OIHRvIHRoaXMgYWRkcmVzcy4BBNs8YANWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cNB5XU0dDTB9/R2zzbPH/4Z5AlhATQcG8AyIvFJlc29sdXRpb246II2zwjcHBw2zzbPNs8Iou5Jgw2Yo8+Iw5PgXTIzs5xzwsFUxLIz4OBAgDPQPhTIG6TMM+BlQHPg8v/4vgjzws/i4AAAAAAWmiuOM8Wyx/LB83JcPsAXwN4Q2NiBFAgghBdRvh8uuMCIIIQXXeMObrjAiCCEGKaW3u64wIgghBotV8/uuMCLSsqJwIqMPhCbuMA+Ebyc3/4ZtH4ANs8f/hnKIQCFu1E0NdJwgGKjoDikCkC/HDtRND0BXD4am34a234bG34bYj4boj4b3D4cG34cY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhycPhzjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HSAQPQO8r3XC//4YnD4Y3D4ZpOTAxww+EJu4wDR2zzbPH/4Z5CBhAMeMPhCbuMA1NHbPNs8f/hnkCyEADD4QvhFIG6SMHDeuvLgZPgA+Epxsfhq+GsDHDD4Qm7jANHbPNs8f/hnkDmEBE4gggtqUz274wIgghAYbMUeu+MCIIIQRiowcLvjAiCCEFhkLQq74wJeUz8vBFAgghBPfZiwuuMCIIIQUOkEOLrjAiCCEFQFaai64wIgghBYZC0KuuMCPTUzMAOEMPhCbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYZC0KjPFgFvIgLLH/QAyXD7AJEw4uMAf/hnkDGEAf5wbW8Cc22C8IeWU2Nm7iGFLbVtzLYLxWRZi2GMhl/FDIsat0C7oSjjyMv/cFiAIPRDgvClYRUUdwntNDfvuJRguUoSC3/pQ3nHldHrsENahH7lgMjL/3FYgCD0Q4LwFmU+rzTJIUZxIPJoXUJf+WPbXLtapnamKi4zv8P2gorIMgAWy/9yWIAg9ENvAjEDHjD4Qm7jANTR2zzbPH/4Z5A0hAAk+EUgbpIwcN74Qrry4GX4APhvAyAw+EJu4wDSB9HbPNs8f/hnkDaEAhIgwACOgI6A4jA7NwQScG8AyInbPNs8OnhjOAII2zzbPGI5ARSCEFDpBDj4VNs8PABQQ2hlY2tpbmcgaWYgdGhlIHBheW1lbnQgaXMgc3VjY2VlZGVkLi4uCgEUghBwMwSA+FTbPDwAqI0IZwx+Mip8gDlk+PtpmJ1wsEeyelAzBjV0+hY0W1PPFQ3iXFRxIMjPhYjOjQROYloAAAAAAAAAAAAAAAAAAMDPFlnIz5CuIURGyx/Ozclw+wBfAwNWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cN/5XU0dDT/9/R2zzbPH/4Z5A+hATacG8AyIvkFkZCBuZXcgdXNlcjogjbPCNwcHDbPNs82zwii7kmDDZijz4jDk+BdMjOznHPCwVTEsjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAASZ03P4zxbLHwHIy//Nzclw+wBfA3hDY2IEUCCCEDSp/Wy64wIgghA5jsvDuuMCIIIQQEwrvLrjAiCCEEYqMHC64wJRTkFAAy4w+EJu4wD6QZXU0dD6QN/R2zzbPH/4Z5BahANWMPhCbuMA+kGV1NHQ+kDf1w0fldTR0NMf39cNB5XU0dDTB9/R2zzbPH/4Z5BChATscG8AyI0GUNoYW5nZSBjb25maXJtYXRpb25zIHRvOiCDbPCNwcHDbPNs82zwii7kmDDZijz4jDk+BdMjOznHPCwVTEsjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAAGzCOjIzxbLH8sHzclw+wBfA3hDY2IETCTPNasCII6A31iSgDCSgCDiWJUkz4S2Nd4hpTIhjoDfVQJ62zwgTUxzRAQg2zwkjoDeUwO7joCOgOJfBXJIRkUDIiOOgORfJts8N8g2UwOhjoDkR3pHAQggjoDkRwEaIds8MyaAMFigzwsHNm0CLFNAuSXCf7Hy0EJTQKFTBLuOgI6A4jBKSQFEJJZTY88LBzfkXyfbPDjIN1MEoZZTY88LBzfkgH8hoSWgNXoBIiCWU2PPCwc35FNAoTUkjoDfSwEUXyfbPDjIN4B/NXoBFF8l2zw2yDWAfzJ6ARRfJts8N8g2MIB/egMwMPhCbuMA1w3/ldTR0NP/39HbPNs8f/hnkE+EARgg+HOCEHK6knXbPDBQAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFyf2BEDPFssfyXD7AFsDsDD4Qm7jAPpBldTR0PpA39cNH5XU0dDTH9/XDQeV1NHQ0wff0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAC0qf1sjPFszJcPsAkTDi4wB/+GeQUoQCPIhUcSPIz5EBMK7yzssfywfJyCDbPDFczDHJMjBsMZN+BFAgghAFnA1vuuMCIIIQDJeM0rrjAiCCEA9th+m64wIgghAYbMUeuuMCW1hWVAMcMPhCbuMA0ds82zx/+GeQVYQBFnX4cIIQOY7Lw9s8XQMeMPhCbuMA1NHbPNs8f/hnkFeEACT4RSBukjBw3vhCuvLgZPgA+G4DIDD4Qm7jANIA0ds82zx/+GeQWYQBCvhS2zwwWgG4cIgii7kmLqN8Pj4jDk+BdMjOznHPCwUhc3CCEDuaygD4VMjPg4ECAM9AU4hukzDPgZUBz4PL/+L4I88LP4uAAAAABM7mRsjPFlVAyM7Lf8oAywfMzc3JcPsAXwOTAxww+EJu4wDR2zzbPH/4Z5BchAEWdPhwghA5jsvD2zxdAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFi2QREDPFssfyXD7AFsERCCBDeu64wIggggZxmK64wIgggidU2O64wIgggtqUz264wKDf3xfAxww+EJu4wDR2zzbPH/4Z5BghAQmcG8AyInbPPhU2zyLYvdXNlcnOHt4ZWEDDNs82zzbPHhjYgCejQhnDDyymxs3cQwpbatuZbBeKyLMWwxkMv4oZFjVugXdCUccVHEgyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAABnMk4UDPFssfzMlw+wBfAwEYliFviMAAs46A6MkxZAEMIds8M88RbQM8+kRdVQLbPDMzIc81wgiVIc+E6jKOgOKAQH8gcNs8Z2ZoARhfIts8M8gyIc+E6jJ6ARpZIrYLcHB/VQXBANs8aARQJc81qwIgjoDfVQKSgDCSgCDiWJUlz4S2Nt4hpTIhjoDfVQOAENs8IHd2c2kEINs8JY6A3lMDu46AjoDiXwZybmtqAyIjjoDkXyfbPDjIN1MDoY6A5Gx6bAEIII6A5GwBRiHbPDMgwQqZJ4AwIqDPCwc4n1N1koBXkoA34iKgzwsHOOIwbQAcb41vjVkgb4iSb4yRMOICLFNQuSbCf7Hy0EVTUKFTBLuOgI6A4jBwbwFEJJZTc88LBzjkXyjbPDnIOFMEoZZTc88LBzjkgH8hoSWgNXoBIiCWU3PPCwc45FNAoTUkjoDfcQEUXyjbPDnIOIB/NXoAJiBviCCbpYEA/6gBb4tviKCRMeICIm8AIo6A4XCTI8MAjoDoMGwhdXQBEl2pDDI0XNs8MnoBCnDbPGwhegEUXybbPDfINoB/MnoBFF8n2zw4yDcwgH96ATohzzWm+SHXSyCWI3Ai1zE03jAhu5RTEs4zjoDiW3kBIlzXGDMjzjNd2zw0yDNTEs4zegA6ASBviJ9vjSBviIEA/6GUb4xvAN+SbwDiWG+Mb4wAhllvdXIgY29udHJhY3QgaXMgcmVhZHkhCgpQbGVhc2UgbmF2aWdhdGUgdG8gaHR0cHM6Ly9maWRvc2FmZS5jb20vIy8DsDD4Qm7jAPpBldTR0PpA39cNH5XU0dDTH9/XDf+V1NHQ0//f0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACAnVNjjPFszJcPsAkTDi4wB/+GeQfYQCPIhUcSPIz5E99mLCzssfy//JyCDbPDFczDHJMjBsMZN+AKYg+CiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARYz4Wgzs4xIHD6AjEgz4ExIHD6AjEgcPoCMXAByz9wAcsfIM+BMSBxzwsAMQMgMPhCbuMA0gDR2zzbPH/4Z5CAhAEG2zwwgQG6+E/4U9s8bfhUi7kmAbUpnr4jDk+BdMjOzosQ4M8WIs8Uz4P4U8jPg4ECAM9AUzNukzDPgZUBz4PL/+KNBAAAAAAAAAAAAAAAAA8keHFgzxYByMv/zc3JIHD7AF8DggDIAdDIIdIAM5vPgyHTHzMBz4PLH5LPgeIh0gAznc+DIdIA0gA0AsoAygCSz4HiIfQEMwH0AG0i0gA0mCLVATT0BDAx3lUCcFnIy/9ZgED0Q8j0ACHPgzLNIfQEMwH0AAHHAPK3yQOQMPhCbuMA0ds8Ko4zLNDTAfpAMDHIz4cgznHPC2FegVWQyM+QAAA3rszMzFVgyMzMzsxVIMjMzMzNzc3JcPsAkl8K4uMAf/hnkIWEANL4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAMsHASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jOAc+DzxHiVWDIzMzLH/QAzsv/AcjOzc3J7VQEBoiIiJOTk4YEToiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiJOTk4cEBoiIiJOTk4gEDIg6iDmIOI+OjYkDaog3iDaNCGADNwDrb61Guzvs1ZbXv5LHjxU/857SmQGAHK/M8A7h2vw1iDP4SyBu8n8yMPhOi42KAARlbgH+VXNlIHRoaXMgYm90IHRvIGNyZWF0ZSBhIG5ldyBGaWRvc2FmZSBpbiAzIGVhc3kgc3RlcHM6CgrikaAgWW91IGZ1bmQgYSBuZXcgY29udHJhY3QgYWRkcmVzcy4KCuKRoSBXZSBkZXBsb3kgdG8gdGhpcyBhZGRyZXNzLgoK4owA4pGiIFlvdSByZWNlaXZlIHRoZSB3ZWIgbGluayBhbmQgc3RhcnQgd29ya2luZyB3aXRoIHlvdXIgY29udHJhY3QuCgpGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZmlkb3NhZmUuY29tAAxOb3J0b24ACjAuNS4wADJGaWRvc2FmZSBDcmVhdGUgJiBDb25maXJtALjtRNDT/9M/0gDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wHU0dDU1NMf9AT6QNP/1NHQ+kDR+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KGTkgAUc29sIDAuNDcuMAAA",
    codeHash: "7250da3ea2465954a0afab4684d7a6de42dc0d0e927fe06425cb7c82a70a8c54",
};
module.exports = { FidosafeDebotContract };