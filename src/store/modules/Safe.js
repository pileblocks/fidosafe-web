import type { FidoConfirmation, FidoTransaction, FidoUser, NumConfirmations } from "../../data/AppTypes";
import { SafeContractApi } from "../../api/SafeContractApi";
import Vue from 'vue';

export const Safe: {
                state: {
                    address: string,
                    api: SafeContractApi,
                    users: Array<FidoUser>,
                    transactions: Array<FidoTransaction>,
                    requiredConfirmations: Number,
                    numberOfUsers: Number,
                    confirmations: Array<FidoConfirmation>
                }
                } = {
    namespaced: true,
    state: {
        api: null,
        users: [],
        transactions: [],
        requiredConfirmations: 1,
        numberOfUsers: 1,
        confirmations: []
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
            let {accepted, declined} = numConfirmations;
            let tr = state.transactions.find((tr) => tr.id === trId);
            tr.accepted = parseInt(accepted);
            tr.declined = parseInt(declined);
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
        async getTransactions({ commit, state }): void {
            let transactions = await state.api.getTransactions();
            let processedTransactions = transactions.map((tr) => {
                tr.created = parseInt(tr.created);
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
        }
    },

    getters: {
        getConfirmations: (state) => (trId: number) => {
            return state.confirmations.filter(item=>item.trId === trId)
        }
    }
};