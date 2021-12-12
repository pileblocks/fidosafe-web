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
    declined: number,
    completed: number,
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
export const TR_TYPE_RECEIVE = 4;
export const TR_TYPE_SEND = 5;

export const TR_STATUS_CONFIRMED = 100;
export const TR_STATUS_INPROGRESS = 0;
export const TR_STATUS_DECLINED = 103;

export const TR_ADD_USER_PARAMS = {name:"pubkey", type:"uint256"};
export const TR_CHANGE_CONFIRMS_PARAMS = {name:"confirmations", type:"uint8"};
export const TR_REMOVE_USER_PARAMS = {name:"pubkey", type:"uint256"};
export const TR_SEND_PARAMS = [{name:"recipient", type:"address"}, {name: "value", type:"uint128"}];
export const EVER_UNITS_IN_ONE = 1e+9;

export const SAFE_MINIMUM_TRANSFER = 0.3;
export const SAFE_TRANSFER_FEES = 0.2;

export const MAX_NUM_TRANS_PER_PAGE = 20;