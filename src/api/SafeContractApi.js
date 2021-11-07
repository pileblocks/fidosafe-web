import type { FidoTransaction, FidoUser } from "../data/AppTypes";
import { FidosafeContract } from "../contract_wrappers/FidosafeContract";
import { Account } from "@tonclient/appkit";
import { signerNone, TonClient } from "@tonclient/core";

export class SafeContractApi {


    constructor(address) {
        const client = new TonClient({
            network: {
                endpoints: ['http://localhost']
            }
        });
        this.account = new Account(FidosafeContract, {
            address: address,
            client,
            signer: signerNone(),
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