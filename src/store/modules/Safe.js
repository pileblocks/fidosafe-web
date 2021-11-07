import type { FidoTransaction, FidoUser } from "../../data/AppTypes";
import { SafeContractApi } from "../../api/SafeContractApi";

export const Safe: {
                state: {
                    address: string,
                    api: SafeContractApi,
                    users: Array<FidoUser>
                }
                } = {
    namespaced: true,
    state: {
        address: "",
        api: null,
        users: []
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
        }
    },
    actions: {
        changeAddress({commit, dispatch}, address) {
            commit('changeApi', new SafeContractApi(address));
            dispatch('getUsers');
            dispatch('getTransactions');
        },

        async getUsers({ commit, state }): void {
            let users = await state.api.getUsers();
            commit('getUsers', users);
        },
        async getTransactions({ commit, state }): void {
            let transactions = await state.api.getTransactions();
            commit('getTransactions', transactions);
        }
    },

    getters: {
    }
};