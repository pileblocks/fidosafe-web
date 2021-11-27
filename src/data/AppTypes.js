export type FidoUser = {
    pubkey: string,
    role: number
}

export type FidoTransaction = {
    id: number,
    created: number,
    initiator: FidoUser,
    paramsStr: string,
    params: string,
    status: number,
    trType: number,
    accepted: number,
    declined: number
}

export type FidoConfirmation = {
    id: number,
    created: number,
    resolution: number,
    trId: number,
    user: FidoUser
}

export type NumConfirmations = {
    accepted: number,
    declined: number
}

export const RESOLUTION_CONFIRM = 1;
export const RESOLUTION_REJECT = 2;

export const TR_TYPE_ADD_USER = 1;
export const TR_TYPE_REMOVE_USER = 2;
export const TR_TYPE_CHANGE_CONFIRMS = 3;

export const TR_ADD_USER_PARAMS = {name:"pubkey", type:"uint256"}
export const TR_CHANGE_CONFIRMS_PARAMS = {name:"confirmations", type:"uint8"}