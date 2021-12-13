import { Account } from "@tonclient/appkit";
import { EVER_UNITS_IN_ONE, RESOLUTION_CONFIRM } from "../data/AppTypes";
import BigNumber from "bignumber.js";

type ConfirmationMsg = {
    url: string,
    title: string,
    description: string
}

export class DebotContractApi {

    constructor() {
    }

    static shrinkPubkey(pubkey: string) {
        return pubkey.substr(0,8) + "..." + pubkey.substr(-8);
    }

    static getCreateSafeData(debotAddress: string): ConfirmationMsg {
        let encodedAddress = encodeURIComponent(debotAddress);
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${encodedAddress}`,
           title: 'Create a Safe',
           description: 'Scan the QR code or follow the link to create a Fidosafe'
        };
    }

    static async getAddUserData(debotAccount: Account, safeAddress: string, trId: number, newUserAddress: string): ConfirmationMsg {
        let out = await debotAccount.runLocal("getAddUserData", {fsAddress: safeAddress, trId: trId, uPubkey: newUserAddress});
        let pk = DebotContractApi.shrinkPubkey(newUserAddress);
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: 'Add a User',
           description: `Scan the QR code or follow the link to add a user with the public key: ${pk}`
        };

    }

    static async getChangeReqConfirmationsData(debotAccount: Account, safeAddress: string, trId: number, newReqConfirmations: number): ConfirmationMsg {
        let out = await debotAccount.runLocal("getChangeReqConfirmationsData", {fsAddress: safeAddress, trId: trId, newReqConfirmations: newReqConfirmations});
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: "Number of Confirmations",
           description: `Change the number of confirmations to: ${newReqConfirmations}`
        };

    }

    static async getResolveTransactionData(debotAccount: Account, safeAddress: string, trId: number, resolution: number): ConfirmationMsg {
        let out = await debotAccount.runLocal("getResolveTransactionData", {fsAddress: safeAddress, trId: trId, resolution: resolution});
        let title = resolution === RESOLUTION_CONFIRM ? "Confirm the transaction" : "Reject the transaction";
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: title,
           description: `Scan the QR code to either confirm or decline the transaction`
        };

    }

    static async getRemoveUserData(debotAccount: Account, safeAddress: string, trId: number, removeUserAddress: string): ConfirmationMsg {
        let out = await debotAccount.runLocal("getRemoveUserData", {fsAddress: safeAddress, trId: trId, uPubkey: removeUserAddress});
        let pk = DebotContractApi.shrinkPubkey(removeUserAddress);
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: 'Remove a User',
           description: `Scan the QR code or follow the link to remove a user with the public key: ${pk}`
        };

    }

    static getDepositData(safeAddress: string): ConfirmationMsg {
        return {
           url: `https://uri.ton.surf/transfer?net=${process.env.VUE_APP_NWK}&address=${safeAddress}`,
           title: 'Deposit Funds',
           description: `Scan the QR code to get the deposit dialog.`
        };

    }

    static async getSendTransferData(debotAccount: Account, safeAddress: string, trId: number, recipient: string, value: number) {
        let valueEvers = new BigNumber(value).multipliedBy(EVER_UNITS_IN_ONE).toNumber();
        let out = await debotAccount.runLocal("getSendTransferData", {fsAddress: safeAddress, trId: trId, recipient: recipient, value: valueEvers});
        let pk = DebotContractApi.shrinkPubkey(recipient);
        return {
           url: `https://uri.ton.surf/debot?net=${process.env.VUE_APP_NWK}&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: 'Send Tokens',
           description: `Scan the QR code or follow the link to send ${value} tokens to address: ${pk}`
        };
    }

}