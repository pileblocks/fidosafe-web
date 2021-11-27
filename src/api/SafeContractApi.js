import type { FidoConfirmation, FidoTransaction, FidoUser, NumConfirmations } from "../data/AppTypes";
import { FidosafeContract } from "../../contract_wrappers/FidosafeContract";
import { Account } from "@tonclient/appkit";
import { signerNone, MessageBodyType } from "@tonclient/core";
import { RESOLUTION_CONFIRM } from "../data/AppTypes";

type DecodedMessage = {
    body_type: string,
    name: string,
    value: Object
}

export class SafeContractApi {

    static _hexToString(hex) {
        let strBytes = [];
        for (let c = 0; c < hex.length; c += 2)
            strBytes.push(parseInt(hex.substr(c, 2), 16));
        let uint8Array = new Uint8Array(strBytes.length);
        uint8Array.set(strBytes);
        return new TextDecoder("utf-8").decode(uint8Array)
    }



    constructor(address, client, vue) {

        this.account = new Account(FidosafeContract, {
            address: address,
            client,
            signer: signerNone(),
        });

        this.vue = vue;

        //this.vue.everscale.abi.decode_boc({params: [{name:"params", type:"uint256"}], boc:'te6ccgEBAQEAIgAAQJrpVI2gaJa3ihfpdnd5nh4ZKQXKp15SqBGvzJ+/yAAA', allow_partial: true}).then((data)=>{console.log(data)})
        this.vue.everscale.abi.decode_boc({params: [{name:"params", type:"uint8"}], boc:'te6ccgEBAQEAAwAAAgI=', allow_partial: true}).then((data)=>{console.log(data)})
        this.account.subscribeMessages("boc", async (msg) => {
            const decoded:DecodedMessage = await this.account.decodeMessage(msg.boc);
            this.subMessagesProcessor(decoded);
        });

    }
    //
    // Subscriptions
    //
    subMessagesProcessor(decoded:DecodedMessage): void {
        switch (decoded.body_type) {
            case MessageBodyType.Event:
                break;
            case MessageBodyType.Input:
                // Clear the cache after the incoming messages which change the state
                this.account.refresh();
                if (decoded.name === "addUser") {
                    this.addUserProcessor(decoded.value);
                }
                else if (decoded.name === "changeReqConfirmations") {
                    this.changeReqConfirmationsProcessor(decoded.value);
                }
                else if (decoded.name === "resolveTransaction") {
                    this.resolveTransactionProcessor(decoded.value);
                }
                this.vue.$store.commit('Confirmation/toggleVisible', false);
                break;
        }
    }

    _genMessgeContent(message, props, linkText) {
        const h = this.vue.$createElement;
        return h(
            'p',
            { class: ['pubkey-wrap'] },
            [
                `${message}`,
                h('br'),
                h('router-link', {props: props},
                [`${linkText}`]
                ),
            ]
        );
    }

    addUserProcessor(message: {pubkey: string, trId: number})  {
        let notification = {linkText: 'Go to Transactions', message: `Request: Add a user with the public key ${message.pubkey}`};
        this.vue.$store.dispatch('Safe/getUsers');
        this.vue.$store.dispatch('Safe/getTransactions');
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    changeReqConfirmationsProcessor(message: {newReqConfirmations: number, trId: number})  {
        this.vue.$store.dispatch('Safe/getTransactions');
        let notification = {linkText: 'Go to Transactions', message: `Request: Change # of confirmations to: ${message.newReqConfirmations}`};
        this.vue.$store.dispatch('Safe/getRequiredConfirmations');
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    resolveTransactionProcessor(message: {resolution: number, trId: number}) {
         message.trId = parseInt(message.trId);
         message.resolution = parseInt(message.resolution);
         this.vue.$store.dispatch('Safe/getTransactions');
         if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
         let res:string = (message.resolution === RESOLUTION_CONFIRM) ? "APPROVE" : "REJECT";
         let notification = {linkText: 'Go to Transactions', message: `Resolution ${res} to transaction: ${message.trId}`};
         let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});

    }

    //
    // External calls
    //

    async getUsers(): Promise<Array<FidoUser>> {
        let out = await this.account.runLocal("getUsers", {});
        return out.decoded.output.users;
    }

    async getTransactions(): Promise<Array<FidoTransaction>> {
        let out = await this.account.runLocal("getTransactions", {});
        return out.decoded.output.transactions;
    }

    async getRequiredConfirmations(): Promise<Number> {
        let out = await this.account.runLocal("getRequiredConfirmations", {});
        return parseInt(out.decoded.output.rc);
    }

    async getNumberOfUsers(): Promise<Number> {
        let out = await this.account.runLocal("getNumberOfUsers", {});
        return parseInt(out.decoded.output.numberOfUsers);
    }

    async getConfirmations(trId: number): Promise<Array<FidoConfirmation>> {
        let out = await this.account.runLocal("getConfirmations", {trId: trId});
        return out.decoded.output.confirmations;
    }

    async getNumConfirmations(trId: number): Promise<NumConfirmations> {
        let out = await this.account.runLocal("getNumConfirmations", {trId: trId});
        return out.decoded.output;
    }
}