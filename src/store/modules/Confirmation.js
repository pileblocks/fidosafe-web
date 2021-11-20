export const Confirmation: {
    state: {
        confirmationTimestamp: number,
        confirmationUrl: string,
        confirmationTitle: string,
        confirmationDescription: string,
        isVisible: boolean
    }
    } = {
    namespaced: true,
    state: {
        confirmationTimestamp: 0,
        confirmationUrl: '',
        confirmationTitle: '',
        confirmationDescription: '',
        isVisible: false
    },
    mutations: {
        sendConfrimation(state: Object, confirmObj: {url: string, title: string, description: string}) {
            state.confirmationTimestamp = new Date().getTime();
            state.confirmationTitle = confirmObj.title;
            state.confirmationDescription = confirmObj.description;
            state.confirmationUrl = confirmObj.url;
        },
        toggleVisible(state: Object, isVisible: boolean) {
            state.isVisible = isVisible;
        }

    },
    actions: {

    },

    getters: {
    }
};