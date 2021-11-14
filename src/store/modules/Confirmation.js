export const Confirmation: {
    state: {
        confirmationTimestamp: number,
        confirmationUrl: string,
        confirmationTitle: string,
        confirmationDescription: string
    }
    } = {
    namespaced: true,
    state: {
        confirmationTimestamp: 0,
        confirmationUrl: '',
        confirmationTitle: '',
        confirmationDescription: ''
    },
    mutations: {
        sendConfrimation(state: Object, confirmObj: {url: string, title: string, description: string}) {
            state.confirmationTimestamp = new Date().getTime();
            state.confirmationTitle = confirmObj.title;
            state.confirmationDescription = confirmObj.description;
            state.confirmationUrl = confirmObj.url;
        }

    },
    actions: {

    },

    getters: {
    }
};