import type { FidoTransaction, FidoUser } from "../../data/AppTypes";
import { SafeContractApi } from "../../api/SafeContractApi";

export const Safe: {
                state: {
                    address: string,
                    api: SafeContractApi,
                    users: Array<FidoUser>,
                    users: Array<FidoTransaction>,
                    requiredConfirmations: Number,
                    numberOfUsers: Number
                }
                } = {
    namespaced: true,
    state: {
        api: null,
        users: [],
        transactions: [],
        requiredConfirmations: 1,
        numberOfUsers: 1
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
        }
    },
    actions: {
        initSafe({commit, dispatch, state}, {address, client, vue}) {
            if (state.api == null)
                commit('changeApi', new SafeContractApi(address, client, vue));
        },

        async getUsers({ commit, state }): void {
            let users = await state.api.getUsers();
            commit('getUsers', users);
        },
        async getTransactions({ commit, state }): void {
            let transactions = await state.api.getTransactions();
            commit('getTransactions', transactions);
        },
        async getRequiredConfirmations({ commit, state }): void {
            let reqConfirmations = await state.api.getRequiredConfirmations();
            commit('getRequiredConfirmations', reqConfirmations);
        },
        async getNumberOfUsers({ commit, state }): void {
            let numberOfUsers = await state.api.getNumberOfUsers();
            commit('getNumberOfUsers', numberOfUsers);
        }
    },

    getters: {
    }
};