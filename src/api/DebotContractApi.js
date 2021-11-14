import { Account } from "@tonclient/appkit";
import { signerNone, TonClient } from "@tonclient/core";
import { FidosafeDebotContract } from "../../contract_wrappers/FidosafeDebotContract";

export class DebotContractApi {

    constructor(address) {

        const client = new TonClient({
            network: {
                endpoints: [process.env.VUE_APP_EVERSCALE_URL]
            }
        });
        this.address = address;
        this.account = new Account(FidosafeDebotContract, {
            address: address,
            client,
            signer: signerNone(),
        });

    }

    getCreateSafeData(): {url: string, title: string, description: string} {
        let encodedAddress = encodeURIComponent(this.address);
        return {
           url: `https://uri.ton.surf/debot?net=devnet&address=${encodedAddress}`,
           title: 'Create a Safe',
           description: 'Scan the QR code or follow the link to create a FidoSafe'
        };
    }
}