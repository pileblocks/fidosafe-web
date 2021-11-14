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
                "name": "setFidoSafeCode",
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
    tvc: "te6ccgEChAEAEdEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8guBBQSDArIh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfDAGAToi0NcLA6k4ANwhxwDcIdcNH/K8Id0B2zz4R27yfAYCKCCCEHAzBIC74wIgghB97NDbu+MCGwcDPCCCEHK6knW64wIgghB8RhyfuuMCIIIQfezQ27rjAhkLCAN2MPhCbuMA0ds8JI4mJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+T97NDbssHzMzOzclw+wCSXwTi4wB/+GeACXQE9nCIiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhLbrOW+EsgbvJ/joDiM/hMbrOW+EwgbvJ/joDiMvhNbrOW+E0gbvJ/jiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATiMfhKNIODCgoBAoiDAyQw+EJu4wDTH9Mf0ds82zx/+GeADHQEenBvAMiNBtPcGVyYXRpb24gZmFpbGVkLiBzZGtFcnJvciCDbPCRwcHDbPIuywgZXhpdENvZGUgjbPCNwcHBrDmsNAw7bPNs82zxbDlZVBEwkzzWrAiCOgN9YkoAwkoAg4liVJM+EtjXeIaUyIY6A31UCets8IBgXZg8EINs8JI6A3lMDu46AjoDiXwVlExEQAyIjjoDkXybbPDfINlMDoY6A5BJtEgEIII6A5BIBGiHbPDMmgDBYoM8LBzZgAixTQLklwn+x8tBCU0ChUwS7joCOgOIwFRQBRCSWU2PPCwc35F8n2zw4yDdTBKGWU2PPCwc35IB/IaEloDVtASIgllNjzwsHN+RTQKE1JI6A3xYBFF8n2zw4yDeAfzVtARRfJds8Nsg1gH8ybQEUXybbPDfINjCAf20DLjD4Qm7jAPpBldTR0PpA39HbPNs8f/hngBp0Akgg+HL4T/hT2zwg+QBwyM+GQMoHy//J0Ph0ghBwMwSA+FTbPFtyQQRQIIIQBZwNb7vjAiCCEDmOy8O74wIgghBdRvh8u+MCIIIQcDMEgLvjAk5DNRwEUCCCEF13jDm64wIgghBimlt7uuMCIIIQaLVfP7rjAiCCEHAzBIC64wIzMi8dAyAw+EJu4wDSB9HbPNs8f/hngB50AhIgwAGOgI6A4jAuHwIQIMD/joCOgOIpIAIQIMAAjoCOgOIjIQEMIMACjoDeIgRqcG8AyI0GkNhbiBub3QgY29udGludWU6IGFjY291bnQgg2zz4VNs8i6IGlzIGZyb3plbo2zxrWGtUBBBwbwDIids8iShrJyQEFts82zzbPIIIGcZia1ZVJQIGiNs8JioATFBsZWFzZSBjb25maXJtIHRoZSBkZXBsb3kgdHJhbnNhY3Rpb24uAF5lZHVjdGVkIGZyb20gdGhlIG5ldyBGaWRvU2FmZSBjb250cmFjdCBhZGRyZXNzLgD+U3RlcCDikaEKCkRlcGxveWluZyBuZXcgY29udHJhY3QuIFdlIHNlbmQgYSBtZXNzYWdlIHRvIHlvdXIgY29udHJhY3QgdG8gZGVwbG95IHRoZSBjb250cmFjdCBjb2RlLiBUaGUgYXNzb2NpYXRlZCBmZWVzIHdpbGwgYmUgZAQacIjbPIIQDJeM0ojbPCxVKyoAno0IZwizKfV5pkkKM4kHk0LqEv/LHtrl2tUztTFRcZ3+H7QUVFRxIMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAACGkhnlAzxbLH8zJcPsAXwMAPlBsZWFzZSBjb25maXJtIHRoZSB0cmFuc2FjdGlvbi4B/lN0ZXAg4pGgCgpXZSdsbCBjcmVhdGUgYSBuZXcgY29udHJhY3QgZm9yIHlvdS4KCipOb3RlKiBUbyBkZXBsb3kgdGhlIGNvbnRyYWN0LCBpdCBzaG91bGQgaGF2ZSBhIHBvc2l0aXZlIGJhbGFuY2UuIEZvciB0aGlzLCBub3ctAEggd2Ugd2lsbCBzZW5kIDEgVE9OIHRvIHRoaXMgYWRkcmVzcy4BBNs8UwIqMPhCbuMA+Ebyc3/4ZtH4ANs8f/hnMHQCFu1E0NdJwgGKjoDigDEC/HDtRND0BXD4am34a234bG34bYj4boj4b3D4cG34cY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhycPhzjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+HSAQPQO8r3XC//4YnD4Y3D4ZoODAxww+EJu4wDR2zzbPH/4Z4BxdAMeMPhCbuMA1NHbPNs8f/hngDR0ADD4QvhFIG6SMHDeuvLgZPgA+Epxsfhq+GsEUCCCEEYqMHC64wIgghBQ6QQ4uuMCIIIQWGQtCrrjAiCCEF1G+Hy64wJCOjc2Axww+EJu4wDR2zzbPH/4Z4A+dAOEMPhCbuMA0ds8IY4uI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADYZC0KjPFgFvIgLLH/QAyXD7AJEw4uMAf/hngDh0Af5wbW8Cc22C8IeWU2Nm7iGFLbVtzLYLxWRZi2GMhl/FDIsat0C7oSjjyMv/cFiAIPRDgvClYRUUdwntNDfvuJRguUoSC3/pQ3nHldHrsENahH7lgMjL/3FYgCD0Q4LwFmU+rzTJIUZxIPJoXUJf+WPbXLtapnamKi4zv8P2gorIOQAWy/9yWIAg9ENvAjEDIDD4Qm7jANIH0ds82zx/+GeAO3QCEiDAAI6AjoDiMEA8BBJwbwDIids82zw/a1Y9AgjbPNs8VT4BFIIQUOkEOPhU2zxBAFBDaGVja2luZyBpZiB0aGUgcGF5bWVudCBpcyBzdWNjZWVkZWQuLi4KARSCEHAzBID4VNs8QQCojQhnDH4yKnyAOWT4+2mYnXCwR7J6UDMGNXT6FjRbU88VDeJcVHEgyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkK4hREbLH87NyXD7AF8DAy4w+EJu4wD6QZXU0dD6QN/R2zzbPH/4Z4BNdARQIIIQDJeM0rrjAiCCEA9th+m64wIgghAecmdiuuMCIIIQOY7Lw7rjAktJR0QDMDD4Qm7jANcN/5XU0dDT/9/R2zzbPH/4Z4BFdAEYIPhzghByupJ12zwwRgCWjQhnDSsIqKO4T2mhv33EowXKUJBb/0obzjyuj12CGtQj9ywEXMjPhYjOjQVOYloAAAAAAAAAAAAAAAAAABcn9gRAzxbLH8lw+wBbAx4w+EJu4wDU0ds82zx/+GeASHQAJPhFIG6SMHDe+EK68uBl+AD4bwMeMPhCbuMA1NHbPNs8f/hngEp0ACT4RSBukjBw3vhCuvLgZPgA+G4DIDD4Qm7jANIA0ds82zx/+GeATHQBCvhS2zwwTQG4cIgii7kmLqN8Pj4jDk+BdMjOznHPCwUhc3CCEDuaygD4VMjPg4ECAM9AU4hukzDPgZUBz4PL/+L4I88LP4uAAAAABM7mRsjPFlVAyM7Lf8oAywfMzc3JcPsAXwODBEYggQ3ruuMCIIIIGcZiuuMCIIILalM9uuMCIIIQBZwNb7rjAnNvUk8DHDD4Qm7jANHbPNs8f/hngFB0ARZ0+HCCEDmOy8PbPFEAlo0IZw0rCKijuE9pob99xKMFylCQW/9KG848ro9dghrUI/csBFzIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAWLZBEQM8Wyx/JcPsAWwMcMPhCbuMA0ds82zx/+GeAU3QEFnBvAMiJ2zz4VNs8bmtYVAII2zzbPFZVAJ6NCGcMPLKbGzdxDCltq25lsF4rIsxbDGQy/ihkWNW6Bd0JRxxUcSDIz4WIzo0FTmJaAAAAAAAAAAAAAAAAAAAGcyThQM8Wyx/MyXD7AF8DARiWIW+IwACzjoDoyTFXAQwh2zwzzxFgAzz6RF1VAts8MzMhzzXCCJUhz4TqMo6A4oBAfyBw2zxaWVsBGF8i2zwzyDIhz4TqMm0BGlkitgtwcH9VBcEA2zxbBFAlzzWrAiCOgN9VApKAMJKAIOJYlSXPhLY23iGlMiGOgN9VA4AQ2zwgamlmXAQg2zwljoDeUwO7joCOgOJfBmVhXl0DIiOOgORfJ9s8OMg3UwOhjoDkX21fAQggjoDkXwFGIds8MyDBCpkngDAioM8LBzifU3WSgFeSgDfiIqDPCwc44jBgABxvjW+NWSBviJJvjJEw4gIsU1C5JsJ/sfLQRVNQoVMEu46AjoDiMGNiAUQkllNzzwsHOORfKNs8Ocg4UwShllNzzwsHOOSAfyGhJaA1bQEiIJZTc88LBzjkU0ChNSSOgN9kARRfKNs8Ocg4gH81bQAmIG+IIJulgQD/qAFvi2+IoJEx4gIibwAijoDhcJMjwwCOgOgwbCFoZwESXakMMjRc2zwybQEKcNs8bCFtARRfJts8N8g2gH8ybQEUXyfbPDjINzCAf20BOiHPNab5IddLIJYjcCLXMTTeMCG7lFMSzjOOgOJbbAEiXNcYMyPOM13bPDTIM1MSzjNtADoBIG+In2+NIG+IgQD/oZRvjG8A35JvAOJYb4xvjACIWW91ciBjb250cmFjdCBpcyByZWFkeSEKClBsZWFzZSBuYXZpZ2F0ZSB0byBodHRwOi8vbG9jYWxob3N0OjgwODAvIy8DIDD4Qm7jANIA0ds82zx/+GeAcHQBBts8MHEBuvhP+FPbPG34VIu5JgG1KZ6+Iw5PgXTIzs6LEODPFiLPFM+D+FPIz4OBAgDPQFMzbpMwz4GVAc+Dy//ijQQAAAAAAAAAAAAAAAAPJHhxYM8WAcjL/83NySBw+wBfA3IAyAHQyCHSADObz4Mh0x8zAc+Dyx+Sz4HiIdIAM53PgyHSANIANALKAMoAks+B4iH0BDMB9ABtItIANJgi1QE09AQwMd5VAnBZyMv/WYBA9EPI9AAhz4MyzSH0BDMB9AABxwDyt8kDkDD4Qm7jANHbPCqOMyzQ0wH6QDAxyM+HIM5xzwthXoFVkMjPkAAAN67MzMxVYMjMzM7MVSDIzMzMzc3NyXD7AJJfCuLjAH/4Z4B1dADS+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhG+EP4QsjL/8s/ygDLBwEgbpMwz4GXyMwBz4PPEeIBIG6TMM+Bl8jMAc+DzxHiASBukzDPgZfIzgHPg88R4lVgyMzMyx/0AM7L/wHIzs3Nye1UBAaIiIiDg4N2BE6IiI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIiDg4N3BAaIiIiDg4N4BAyIOog5iDh/fn15A2qIN4g2jQhgAzcA62+tRrs77NWW17+Sx48VP/Oe0pkBgByvzPAO4dr8NYgz+EsgbvJ/MjD4Tnt9egAEZW4B/lVzZSB0aGlzIGJvdCB0byBjcmVhdGUgYSBuZXcgRmlkb1NhZmUgaW4gMyBlYXN5IHN0ZXBzOgoK4pGgIFlvdSBmdW5kIGEgbmV3IGNvbnRyYWN0IGFkZHJlc3MuCgrikaEgV2UgZGVwbG95IHRvIHRoaXMgYWRkcmVzcy4KCuJ8AOKRoiBZb3UgcmVjZWl2ZSB0aGUgd2ViIGxpbmsgYW5kIHN0YXJ0IHdvcmtpbmcgd2l0aCB5b3VyIGNvbnRyYWN0LgoKRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBodHRwczovL2ZpZG9zYWZlLmNvbQAMTm9ydG9uAAowLjIuMwAyRmlkb1NhZmUgQ3JlYXRlICYgQ29uZmlybQC47UTQ0//TP9IA0wf0BAEgbpPQ10zfAfQEASBuk9DXTN8B9AQBIG6U0PpAMN8B1NHQ1NTTH/QE+kDT/9TR0PpA0fh0+HP4cvhx+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShg4IAFHNvbCAwLjQ3LjAAAA==",
    code: "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",
    codeHash: "2148333fdaa41b4870a584bb7baa8901861d16636a020bf9faa4edf5a905e63b",
};
module.exports = { FidosafeDebotContract };