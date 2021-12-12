import type { FidoConfirmation, FidoTransaction, FidoUser, NumConfirmations } from "../data/AppTypes";
import { FidosafeContract } from "../../contract_wrappers/FidosafeContract";
import { Account } from "@tonclient/appkit";
import { signerNone, MessageBodyType } from "@tonclient/core";
import {
    EVER_UNITS_IN_ONE,
    RESOLUTION_CONFIRM,
    TR_ADD_USER_PARAMS,
    TR_CHANGE_CONFIRMS_PARAMS,
    TR_REMOVE_USER_PARAMS, TR_SEND_PARAMS,
    TR_TYPE_ADD_USER,
    TR_TYPE_CHANGE_CONFIRMS, TR_TYPE_RECEIVE, TR_TYPE_REMOVE_USER, TR_TYPE_SEND
} from "../data/AppTypes";
import BigNumber from "bignumber.js";
import { Utils as Util } from "./Utils";

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

        this.account.subscribeAccount("balance", (acc) => {
            this.account.refresh();
            this.vue.$store.commit('Confirmation/toggleVisible', false);
            this.vue.$store.commit('Safe/setBalance', acc.balance);
            this.vue.$store.dispatch('Safe/getLastTransactionId');
        });

        this.account.subscribeMessages("boc", async (msg) => {
            try {
            const decoded:DecodedMessage = await this.account.decodeMessage(msg.boc);
            this.subMessagesProcessor(decoded);
            } catch (e) {
                console.log(e)
            }
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
                else if (decoded.name === "removeUser") {
                    this.removeUserProcessor(decoded.value);
                }
                else if (decoded.name === "sendTransfer") {
                    this.sendTransferProcessor(decoded.value);
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

    addUserProcessor(message: {pubkey: string, trId: string})  {

        let notification = {linkText: 'Go to Transactions', message: `Request: Add a user with the public key ${message.pubkey}`};
        this.vue.$store.dispatch('Safe/getUsers');
        this.vue.$store.dispatch('Safe/getLastTransactionId');
        message.trId = parseInt(message.trId);
        if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    changeReqConfirmationsProcessor(message: {newReqConfirmations: number, trId: string})  {
        this.vue.$store.dispatch('Safe/getLastTransactionId');
        let notification = {linkText: 'Go to Transactions', message: `Request: Change # of confirmations to: ${message.newReqConfirmations}`};
        this.vue.$store.dispatch('Safe/getRequiredConfirmations');
        message.trId = parseInt(message.trId);
        if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    resolveTransactionProcessor(message: {resolution: number, trId: string}) {
         message.trId = parseInt(message.trId);
         message.resolution = parseInt(message.resolution);
         this.vue.$store.dispatch('Safe/getLastTransactionId');
         message.trId = parseInt(message.trId);
         if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
         let res:string = (message.resolution === RESOLUTION_CONFIRM) ? "APPROVE" : "REJECT";
         let notification = {linkText: 'Go to Transactions', message: `Resolution ${res} to transaction: ${message.trId}`};
         let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});

    }

    removeUserProcessor(message: {pubkey: string, trId: string})  {
        let notification = {linkText: 'Go to Transactions', message: `Request: Remove a user with the public key ${message.pubkey}`};
        this.vue.$store.dispatch('Safe/getUsers');
        this.vue.$store.dispatch('Safe/getLastTransactionId');
        message.trId = parseInt(message.trId);
        if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    sendTransferProcessor(message: {trId: number, value: string, recipient: string}) {
        let notification = {linkText: 'Go to Transactions', message: `Request: Send ${new BigNumber(message.value).dividedBy(EVER_UNITS_IN_ONE).toFormat(4)} tokens to the address ${message.recipient}`};
        message.trId = parseInt(message.trId);
        if (message.trId > 0)
            this.vue.$store.dispatch('Safe/getNumConfirmations', message.trId);
        let msg = this._genMessgeContent(notification.message,
                                 { to: { name: 'Transactions', params: { safeAddress: this.account.address }}},
                                        notification.linkText);
        this.vue.$root.$bvToast.toast([msg], { appendToast: true, noCloseButton: false, autoHideDelay: 10000, solid: true});
    }

    async getAddUserParams(transaction: FidoTransaction): {data: {pubkey: string}} {
        return await this.vue.everscale.abi.decode_boc(
            {
                params: [TR_ADD_USER_PARAMS],
                boc: transaction.params,
                allow_partial: false
            });
    }

    async getChangeConfirmsParams(transaction: FidoTransaction): {data: {confirmations: string}} {
        return await this.vue.everscale.abi.decode_boc(
            {
                params: [TR_CHANGE_CONFIRMS_PARAMS],
                boc: transaction.params,
                allow_partial: false
            });
    }

    async getRemoveUserParams(transaction: FidoTransaction): {data: {pubkey: string}} {
        return await this.vue.everscale.abi.decode_boc(
            {
                params: [TR_REMOVE_USER_PARAMS],
                boc: transaction.params,
                allow_partial: false
            });
    }

    async getSendParams(transaction: FidoTransaction): {data: {recipient: string, value: string}} {
        return await this.vue.everscale.abi.decode_boc(
            {
                params: TR_SEND_PARAMS,
                boc: transaction.params,
                allow_partial: false
            });
    }

    async getTransactionParams(transaction: FidoTransaction): string {
        let trParams = null;
        switch (transaction.trType) {
            case TR_TYPE_ADD_USER:
                trParams = await this.getAddUserParams(transaction);
                return `Add a user: ${Util.short(trParams.data.pubkey)}`;
            case TR_TYPE_CHANGE_CONFIRMS:
                trParams = await this.getChangeConfirmsParams(transaction);
                return `New number of confirmations: ${trParams.data.confirmations}`;
            case TR_TYPE_REMOVE_USER:
                trParams = await this.getRemoveUserParams(transaction);
                return `Remove a user: ${Util.short(trParams.data.pubkey)}`;
            case TR_TYPE_SEND:
                trParams = await this.getSendParams(transaction);
                return `Send ${new BigNumber(trParams.data.value).dividedBy(EVER_UNITS_IN_ONE).toFixed(4)} tokens to a receiver: ${Util.short(trParams.data.recipient)}`;
            case TR_TYPE_RECEIVE:
                let sender, value;
                [sender, value] = transaction.paramsStr.split('|')
                trParams = new BigNumber(value).dividedBy(EVER_UNITS_IN_ONE).toFixed(4);
                return `Receive ${trParams} tokens from ${Util.short(sender)}`;
        }
    }



    //
    // External calls
    //

    async getUsers(): Promise<Array<FidoUser>> {
        let out = await this.account.runLocal("getUsers", {});
        return out.decoded.output.users;
    }


    async getLastTransactionId(): number {
        let out = await this.account.runLocal("currentTransactionId", {});
        return parseInt(out.decoded.output.currentTransactionId);
    }

    async getTransactions(lastTrid: number, number: number): Promise<Array<FidoTransaction>> {
        let out = await this.account.runLocal("getTransactions", {start: lastTrid, number: number});
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