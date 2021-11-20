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
    tvc: "te6ccgECkgEAFMcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8guPBQSRArIh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfCYGAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAYCKCCCEF1G+Hy74wIgghB97NDbu+MCLQcCKCCCEGi1Xz+74wIgghB97NDbu+MCJAgEUCCCEHAzBIC64wIgghByupJ1uuMCIIIQfEYcn7rjAiCCEH3s0Nu64wIRDwwJA3Yw+EJu4wDR2zwkjiYm0NMB+kAwMcjPhyDOcc8LYV4hVTDIz5P3s0NuywfMzM7NyXD7AJJfBOLjAH/4Z44KggT2cIiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Etus5b4SyBu8n+OgOIz+Exus5b4TCBu8n+OgOIy+E1us5b4TSBu8n+OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOIx+Eo0kZELCwECiJEDJDD4Qm7jANMf0x/R2zzbPH/4Z44NggR6cG8AyI0G09wZXJhdGlvbiBmYWlsZWQuIHNka0Vycm9yIINs8JHBwcNs8i7LCBleGl0Q29kZSCNs8I3BwcHlGeQ4DDts82zzbPFtGZGMDLjD4Qm7jAPpBldTR0PpA39HbPNs8f/hnjhCCAkgg+HL4T/hT2zwg+QBwyM+GQMoHy//J0Ph0ghBwMwSA+FTbPFuAPwMgMPhCbuMA0gfR2zzbPH/4Z44SggISIMABjoCOgOIwIxMCECDA/46AjoDiHhQCECDAAI6AjoDiGBUBDCDAAo6A3hYEanBvAMiNBpDYW4gbm90IGNvbnRpbnVlOiBhY2NvdW50IINs8+FTbPIuiBpcyBmcm96ZW6Ns8eWZ5FwII2zzbPGRjBBBwbwDIids8iR15HBkEFts82zzbPIIIGcZieWRjGgIGiNs8Gx8ATFBsZWFzZSBjb25maXJtIHRoZSBkZXBsb3kgdHJhbnNhY3Rpb24uAF5lZHVjdGVkIGZyb20gdGhlIG5ldyBGaWRvc2FmZSBjb250cmFjdCBhZGRyZXNzLgD+U3RlcCDikaEKCkRlcGxveWluZyBuZXcgY29udHJhY3QuIFdlIHNlbmQgYSBtZXNzYWdlIHRvIHlvdXIgY29udHJhY3QgdG8gZGVwbG95IHRoZSBjb250cmFjdCBjb2RlLiBUaGUgYXNzb2NpYXRlZCBmZWVzIHdpbGwgYmUgZAQacIjbPIIQDJeM0ojbPCFjIB8Ano0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACGkhnlAzxbLH8zJcPsAXwMAPlBsZWFzZSBjb25maXJtIHRoZSB0cmFuc2FjdGlvbi4B/lN0ZXAg4pGgCgpXZSdsbCBjcmVhdGUgYSBuZXcgY29udHJhY3QgZm9yIHlvdS4KCipOb3RlKiBUbyBkZXBsb3kgdGhlIGNvbnRyYWN0LCBpdCBzaG91bGQgaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2UuIEZvciB0aGlzLCBub3ciAEggd2Ugd2lsbCBzZW5kIDEgVE9OIHRvIHRoaXMgYWRkcmVzcy4BBNs8YQRQIIIQXXeMObrjAiCCEGIH59m64wIgghBimlt7uuMCIIIQaLVfP7rjAispKCUCKjD4Qm7jAPhG8nN/+GbR+ADbPH/4ZyaCAhbtRNDXScIBio6A4o4nAvxw7UTQ9AVw+Gpt+Gtt+Gxt+G2I+G6I+G9w+HBt+HGNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4cnD4c40IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPh0gED0DvK91wv/+GJw+GNw+GaRkQMcMPhCbuMA0ds82zx/+GeOf4IDQjD4Qm7jAPpBldTR0PpA39cNB5XU0dDTB9/R2zzbPH/4Z44qggTqcG8AyI0GUNoYW5nZSBjb25maXJtYXRpb25zIHRvOiCDbPCNwcHDbPNs82zwhi7kmDDZijz4jDk+BdMjOznHPCwUhcMjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAAGzCOjIzxbLH8sHzclw+wBbeUZkYwMeMPhCbuMA1NHbPNs8f/hnjiyCADD4QvhFIG6SMHDeuvLgZPgA+Epxsfhq+GsEUCCCEAWcDW+74wIgghAYbMUeu+MCIIIQUOkEOLvjAiCCEF1G+Hy74wJcUTcuBFAgghBUBWmouuMCIIIQWGQtCrrjAiCCEFwOayO64wIgghBdRvh8uuMCNTIwLwMcMPhCbuMA0ds82zx/+GeOPIIDnDD4Qm7jAPpBldTR0PpA39cNB5XU0dDTB9/R2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANwOayOM8WzMlw+wCRMOLjAH/4Z44xggI2iFMSyM+RiB+fZs7LB8nIINs8MVzMMckyMGwhkVgDhDD4Qm7jANHbPCGOLiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA2GQtCozxYBbyICyx/0AMlw+wCRMOLjAH/4Z44zggH+cG1vAnNtgvCHllNjZu4hhS21bcy2C8VkWYthjIZfxQyLGrdAu6Eo48jL/3BYgCD0Q4LwpWEVFHcJ7TQ377iUYLlKEgt/6UN5x5XR67BDWoR+5YDIy/9xWIAg9EOC8BZlPq80ySFGcSDyaF1CX/lj21y7WqZ2piouM7/D9oKKyDQAFsv/cliAIPRDbwIxAx4w+EJu4wDU0ds82zx/+GeONoIAJPhFIG6SMHDe+EK68uBl+AD4bwRQIIIQGUHX9LrjAiCCEDmOy8O64wIgghBGKjBwuuMCIIIQUOkEOLrjAkRBQDgDIDD4Qm7jANIH0ds82zx/+GeOOYICEiDAAI6AjoDiMD46BBJwbwDIids82zw9eWQ7AgjbPNs8YzwBFIIQUOkEOPhU2zw/AFBDaGVja2luZyBpZiB0aGUgcGF5bWVudCBpcyBzdWNjZWVkZWQuLi4KARSCEHAzBID4VNs8PwCojQhnDH4yKnyAOWT4+2mYnXCwR7J6UDMGNXT6FjRbU88VDeJcVHEgyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkK4hREbLH87NyXD7AF8DAy4w+EJu4wD6QZXU0dD6QN/R2zzbPH/4Z45bggMwMPhCbuMA1w3/ldTR0NP/39HbPNs8f/hnjkKCARgg+HOCEHK6knXbPDBDAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFyf2BEDPFssfyXD7AFsDQjD4Qm7jAPpBldTR0PpA39cN/5XU0dDT/9/R2zzbPH/4Z45FggTYcG8AyIvkFkZCBuZXcgdXNlcjogjbPCNwcHDbPNs82zwhi7kmDDZijz4jDk+BdMjOznHPCwUhcMjPg4ECAM9A+FMgbpMwz4GVAc+Dy//i+CPPCz+LgAAAAASZ03P4zxbLHwHIy//Nzclw+wBbeUZkYwRMJM81qwIgjoDfWJKAMJKAIOJYlSTPhLY13iGlMiGOgN9VAnrbPCBQT3RHBCDbPCSOgN5TA7uOgI6A4l8Fc0tJSAMiI46A5F8m2zw3yDZTA6GOgORKe0oBCCCOgORKARoh2zwzJoAwWKDPCwc2bgIsU0C5JcJ/sfLQQlNAoVMEu46AjoDiME1MAUQkllNjzwsHN+RfJ9s8OMg3UwShllNjzwsHN+SAfyGhJaA1ewEiIJZTY88LBzfkU0ChNSSOgN9OARRfJ9s8OMg3gH81ewEUXyXbPDbINYB/MnsBFF8m2zw3yDYwgH97BFAgghAMl4zSuuMCIIIQDxVyRLrjAiCCEA9th+m64wIgghAYbMUeuuMCWVZUUgMcMPhCbuMA0ds82zx/+GeOU4IBFnX4cIIQOY7Lw9s8XwMeMPhCbuMA1NHbPNs8f/hnjlWCACT4RSBukjBw3vhCuvLgZPgA+G4DnDD4Qm7jAPpBldTR0PpA39cN/5XU0dDT/9/R2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI8VckSM8WzMlw+wCRMOLjAH/4Z45XggI2iFMSyM+QZQdf0s7L/8nIINs8MVzMMckyMGwhkVgApiD4KI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjPhaDOzjEgcPoCMSDPgTEgcPoCMSBw+gIxcAHLP3AByx8gz4ExIHHPCwAxAyAw+EJu4wDSANHbPNs8f/hnjlqCAQr4Uts8MFsBuHCIIou5Ji6jfD4+Iw5PgXTIzs5xzwsFIXNwghA7msoA+FTIz4OBAgDPQFOIbpMwz4GVAc+Dy//i+CPPCz+LgAAAAATO5kbIzxZVQMjOy3/KAMsHzM3NyXD7AF8DkQRGIIEN67rjAiCCCBnGYrrjAiCCC2pTPbrjAiCCEAWcDW+64wKBfWBdAxww+EJu4wDR2zzbPH/4Z45eggEWdPhwghA5jsvD2zxfAJaNCGcNKwioo7hPaaG/fcSjBcpQkFv/ShvOPK6PXYIa1CP3LARcyM+FiM6NBU5iWgAAAAAAAAAAAAAAAAAAFi2QREDPFssfyXD7AFsDHDD4Qm7jANHbPNs8f/hnjmGCBCZwbwDIids8+FTbPIti91c2Vyc4fHlmYgMM2zzbPNs8eWRjAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DARiWIW+IwACzjoDoyTFlAQwh2zwzzxFuAzz6RF1VAts8MzMhzzXCCJUhz4TqMo6A4oBAfyBw2zxoZ2kBGF8i2zwzyDIhz4TqMnsBGlkitgtwcH9VBcEA2zxpBFAlzzWrAiCOgN9VApKAMJKAIOJYlSXPhLY23iGlMiGOgN9VA4AQ2zwgeHd0agQg2zwljoDeUwO7joCOgOJfBnNvbGsDIiOOgORfJ9s8OMg3UwOhjoDkbXttAQggjoDkbQFGIds8MyDBCpkngDAioM8LBzifU3WSgFeSgDfiIqDPCwc44jBuABxvjW+NWSBviJJvjJEw4gIsU1C5JsJ/sfLQRVNQoVMEu46AjoDiMHFwAUQkllNzzwsHOORfKNs8Ocg4UwShllNzzwsHOOSAfyGhJaA1ewEiIJZTc88LBzjkU0ChNSSOgN9yARRfKNs8Ocg4gH81ewAmIG+IIJulgQD/qAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCF2dQESXakMMjRc2zwyewEKcNs8bCF7ARRfJts8N8g2gH8yewEUXyfbPDjINzCAf3sBOiHPNab5IddLIJYjcCLXMTTeMCG7lFMSzjOOgOJbegEiXNcYMyPOM13bPDTIM1MSzjN7ADoBIG+In2+NIG+IgQD/oZRvjG8A35JvAOJYb4xvjACGWW91ciBjb250cmFjdCBpcyByZWFkeSEKClBsZWFzZSBuYXZpZ2F0ZSB0byBodHRwczovL2ZpZG9zYWZlLmNvbS8jLwMgMPhCbuMA0gDR2zzbPH/4Z45+ggEG2zwwfwG6+E/4U9s8bfhUi7kmAbUpnr4jDk+BdMjOzosQ4M8WIs8Uz4P4U8jPg4ECAM9AUzNukzDPgZUBz4PL/+KNBAAAAAAAAAAAAAAAAA8keHFgzxYByMv/zc3JIHD7AF8DgADIAdDIIdIAM5vPgyHTHzMBz4PLH5LPgeIh0gAznc+DIdIA0gA0AsoAygCSz4HiIfQEMwH0AG0i0gA0mCLVATT0BDAx3lUCcFnIy/9ZgED0Q8j0ACHPgzLNIfQEMwH0AAHHAPK3yQOQMPhCbuMA0ds8Ko4zLNDTAfpAMDHIz4cgznHPC2FegVWQyM+QAAA3rszMzFVgyMzMzsxVIMjMzMzNzc3JcPsAkl8K4uMAf/hnjoOCANL4VPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+Eb4Q/hCyMv/yz/KAMsHASBukzDPgZfIzAHPg88R4gEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jOAc+DzxHiVWDIzMzLH/QAzsv/AcjOzc3J7VQEBoiIiJGRkYQEToiIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEiJGRkYUEBoiIiJGRkYYEDIg6iDmIOI2Mi4cDaog3iDaNCGADNwDrb61Guzvs1ZbXv5LHjxU/857SmQGAHK/M8A7h2vw1iDP4SyBu8n8yMPhOiYuIAARlbgH+VXNlIHRoaXMgYm90IHRvIGNyZWF0ZSBhIG5ldyBGaWRvc2FmZSBpbiAzIGVhc3kgc3RlcHM6CgrikaAgWW91IGZ1bmQgYSBuZXcgY29udHJhY3QgYWRkcmVzcy4KCuKRoSBXZSBkZXBsb3kgdG8gdGhpcyBhZGRyZXNzLgoK4ooA4pGiIFlvdSByZWNlaXZlIHRoZSB3ZWIgbGluayBhbmQgc3RhcnQgd29ya2luZyB3aXRoIHlvdXIgY29udHJhY3QuCgpGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZmlkb3NhZmUuY29tAAxOb3J0b24ACjAuNC45ADJGaWRvc2FmZSBDcmVhdGUgJiBDb25maXJtALjtRNDT/9M/0gDTB/QEASBuk9DXTN8B9AQBIG6T0NdM3wH0BAEgbpTQ+kAw3wHU0dDU1NMf9AT6QNP/1NHQ+kDR+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhm+GP4YgIK9KQg9KGRkAAUc29sIDAuNDcuMAAA",
    code: "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",
    codeHash: "f36ee6ba6ecf1a3444d50be4cc4254627a25e8f2286ff14e8f418b4bb335153e",
};
module.exports = { FidosafeDebotContract };