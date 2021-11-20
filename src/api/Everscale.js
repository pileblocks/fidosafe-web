import { signerNone, TonClient } from "@tonclient/core";
import { Account } from "@tonclient/appkit";
import { FidosafeDebotContract } from "../../contract_wrappers/FidosafeDebotContract";
import Vue from 'vue'

export const Everscale = {
    install: function() {
        const client = new TonClient({
        network: {
            endpoints: [process.env.VUE_APP_EVERSCALE_URL]
        }
        });
        Vue.prototype.everscale = client;
        Vue.prototype.debotAccount = new Account(FidosafeDebotContract, {
            address: process.env.VUE_APP_DEBOT_CONTRACT,
            client,
            signer: signerNone(),
        });
    }
}