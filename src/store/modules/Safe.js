import type { FidoConfirmation, FidoTransaction, FidoUser, NumConfirmations } from "../../data/AppTypes";
import { SafeContractApi } from "../../api/SafeContractApi";
import  { BigNumber } from "bignumber.js";
import { EVER_UNITS_IN_ONE, MAX_NUM_TRANS_PER_PAGE } from "../../data/AppTypes";

export const Safe: {
                state: {
                    address: string,
                    api: SafeContractApi,
                    users: Array<FidoUser>,
                    transactions: Array<FidoTransaction>,
                    requiredConfirmations: Number,
                    numberOfUsers: Number,
                    confirmations: Array<FidoConfirmation>,
                    balance: number,
                    lastTrid: number
                }
                } = {
    namespaced: true,
    state: {
        api: null,
        users: [],
        transactions: [],
        requiredConfirmations: 1,
        numberOfUsers: 1,
        confirmations: [],
        balance: 0,
        lastTrid: 0,
    },
    mutations: {
        changeApi(state: Object, api: SafeContractApi) {
            state.api = api;
        },
        getUsers(state: Object, users: Array<FidoUser>) {
            state.users = users;
        },
        getTransactions(state: Object, transactions: Array<FidoTransaction>) {
            state.transactions = transactions;
        },
        getRequiredConfirmations(state: Object, requiredConfirmations: Number) {
            state.requiredConfirmations = requiredConfirmations;
        },
        getNumberOfUsers(state: Object, numberOfUsers: Number) {
            state.numberOfUsers = numberOfUsers;
        },
        getConfirmations(state: Object, {conf, trId}) {
            for (let item of conf) {
                if (state.confirmations.findIndex(c=>c.id === item.id) === -1)
                    state.confirmations.push(item)
            }
        },
        getNumConfirmations(state: Object, {numConfirmations, trId}) {
            let {accepted, declined}:NumConfirmations = numConfirmations;
            let tr = state.transactions.find((tr) => tr.id === trId);
            tr.accepted = parseInt(accepted);
            tr.declined = parseInt(declined);
        },

        setBalance(state: Object, balance: string) {
            return state.balance = new BigNumber(parseInt(balance)).dividedBy(EVER_UNITS_IN_ONE).toNumber();
        },

        setLastTransactionId(state: Object, trId: number) {
            state.lastTrid = trId;
        }

    },
    actions: {
        initSafe({commit, dispatch, state}, {address, client, vue}) {
            if (state.api == null)
                commit('changeApi', new SafeContractApi(address, client, vue));
        },

        async getUsers({ commit, state }): void {
            let users = await state.api.getUsers();
            let processedUsers = users.map((user) => {
                user.role = parseInt(user.role);
                return user;
            });
            commit('getUsers', processedUsers);
        },

        async getLastTransactionId({commit, dispatch, state}): void {
            let trId = await state.api.getLastTransactionId();
            commit('setLastTransactionId', trId);
            dispatch('getTransactions', {lastTrid: trId, number: MAX_NUM_TRANS_PER_PAGE});
        },

        async getTransactions({ commit, state }, {lastTrid, number}): void {
            let transactions = await state.api.getTransactions(lastTrid, number);
            let processedTransactions = transactions.map((tr) => {
                tr.created = parseInt(tr.created);
                tr.completed = parseInt(tr.completed);
                tr.initiator.role = parseInt(tr.initiator.role);
                tr.status = parseInt(tr.status);
                tr.id = parseInt(tr.id);
                // We either reuse the confirmations from the existing tr
                // or set them directly in the confirmations
                // or init with 0
                let existTr = state.transactions.find((t)=>t.id === tr.id);
                tr.paramsStr = SafeContractApi._hexToString(tr.paramsStr);
                tr.trType = parseInt(tr.trType);
                tr.accepted = existTr ? existTr.accepted : 0;
                tr.declined = existTr ? existTr.declined : 0;
                return tr;
            });
            processedTransactions.sort((a,b) => b.created - a.created);
            commit('getTransactions', processedTransactions);
        },
        async getRequiredConfirmations({ commit, state }): void {
            let reqConfirmations = await state.api.getRequiredConfirmations();
            commit('getRequiredConfirmations', reqConfirmations);
        },
        async getNumberOfUsers({ commit, state }): void {
            let numberOfUsers = await state.api.getNumberOfUsers();
            commit('getNumberOfUsers', numberOfUsers);
        },
        async getConfirmations({ commit, state }, trId: number): void {
            let confirmations = await state.api.getConfirmations(trId);
            let processedConfs = confirmations.map((conf:FidoConfirmation) => {
                conf.id = parseInt(conf.id);
                conf.resolution = parseInt(conf.resolution);
                conf.created = parseInt(conf.created);
                conf.trId = parseInt(conf.trId);
                return conf;
            });
            commit('getConfirmations', {conf: processedConfs, trId: trId});
        },
        async getNumConfirmations({ commit, state }, trId: number): void {
            let numConfirmations = await state.api.getNumConfirmations(trId);
            commit('getNumConfirmations', {numConfirmations: numConfirmations, trId: trId});
        },
        async getBalance({commit, state}):string {
            commit('setBalance', await state.api.account.getBalance());
        }
    },

    getters: {
        getConfirmations: (state) => (trId: number) => {
            return state.confirmations.filter(item=>item.trId === trId)
        }
    }
};