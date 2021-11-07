export type FidoUser = {
    pubkey: string,
    role: number
}

export type FidoTransaction = {
    id: number,
    created: number,
    initiator: FidoUser,
    paramsStr: string,
    status: number,
    trType: number
}