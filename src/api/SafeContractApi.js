import type { FidoTransaction, FidoUser } from "../data/AppTypes";
import { FidosafeContract } from "../../contract_wrappers/FidosafeContract";
import { Account } from "@tonclient/appkit";
import { signerNone, MessageBodyType } from "@tonclient/core";

type DecodedMessage = {
    body_type: string,
    name: string,
    value: Object
}

export class SafeContractApi {

    constructor(address, client, vue) {

        this.account = new Account(FidosafeContract, {
            address: address,
            client,
            signer: signerNone(),
        });

        this.vue = vue;

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
        let notification = {linkText: 'Go to Users', message: `Request: Add a user with the public key ${message.pubkey}`};
        this.vue.$store.dispatch('Safe/getUsers');
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Users', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    changeReqConfirmationsProcessor(message: {newReqConfirmations: number, trId: number})  {
        let notification = {linkText: 'Go to Users', message: `Request: Change # of confirmations to: ${message.newReqConfirmations}`};
        this.vue.$store.dispatch('Safe/getRequiredConfirmations');
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Users', params: { safeAddress: this.account.address }}},
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
}