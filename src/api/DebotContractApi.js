import { Account } from "@tonclient/appkit";

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
           url: `https://uri.ton.surf/debot?net=devnet&address=${encodedAddress}`,
           title: 'Create a Safe',
           description: 'Scan the QR code or follow the link to create a Fidosafe'
        };
    }

    static async getAddUserData(debotAccount: Account, safeAddress: string, newUserAddress: string): ConfirmationMsg {
        let out = await debotAccount.runLocal("getAddUserData", {fsAddress: safeAddress, uPubkey: newUserAddress});
        let pk = DebotContractApi.shrinkPubkey(newUserAddress);
        return {
           url: `https://uri.ton.surf/debot?net=devnet&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: 'Add a User',
           description: `Scan the QR code or follow the link to add a user with the public key: ${pk}`
        };

    }

    static async getChangeReqConfirmationsData(debotAccount: Account, safeAddress: string, newReqConfirmations: number): ConfirmationMsg {
        let out = await debotAccount.runLocal("getChangeReqConfirmationsData", {fsAddress: safeAddress, newReqConfirmations: newReqConfirmations});
        return {
           url: `https://uri.ton.surf/debot?net=devnet&address=${debotAccount.address}&message=${out.decoded.output.data}`,
           title: "Change the Number of Confirmations",
           description: `Change the number of confirmations to: ${newReqConfirmations}`
        };

    }
}