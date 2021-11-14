import type { FidoTransaction, FidoUser } from "../data/AppTypes";
import { FidosafeContract } from "../../contract_wrappers/FidosafeContract";
import { Account } from "@tonclient/appkit";
import { signerNone, TonClient, MessageBodyType } from "@tonclient/core";

export class SafeContractApi {

    constructor(address) {

        function decodeText(hex):string {
            let str = '';
            for (var i = 0; i < hex.length; i += 2)
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            return str;
        }

        const client = new TonClient({
            network: {
                endpoints: [process.env.VUE_APP_EVERSCALE_URL]
            }
        });
        this.account = new Account(FidosafeContract, {
            address: address,
            client,
            signer: signerNone(),
        });

        this.account.subscribeMessages("boc", async (msg) => {

            const decoded = await this.account.decodeMessage(msg.boc);
            console.log(decoded);
            switch (decoded.body_type) {
                case MessageBodyType.Event:
                    if (decoded.name === "UserCreated") {
                        decoded.value.text = decodeText(decoded.value.text);
                    }
                    console.log(`External outbound message, event "${ decoded.name }", parameters`, JSON.stringify(decoded.value));
                    break;
            }

        });

    }

    async getUsers(): Promise<Array<FidoUser>> {
        let out = await this.account.runLocal("getUsers", {});
        return out.decoded.output.users;
    }

    async getTransactions(): Promise<Array<FidoTransaction>> {
        let out = await this.account.runLocal("getTransactions", {});
        return out.decoded.output.transactions;
    }
}