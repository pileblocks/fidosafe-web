<template>
    <b-overlay class="d-flex mr-2" v-if="![TR_STATUS_CONFIRMED, TR_STATUS_DECLINED].includes(transaction.status)" :show="opInProgress">
        <b-button class="btn-reject" v-on:click="rejectTransaction()"><i class="bi bi-x-lg"></i>
        </b-button>
        <b-button class="btn-confirm ml-2" v-on:click="confirmTransaction()"><i class="bi bi-check-lg"></i>
        </b-button>
        <b-button class="ml-2" v-on:click="runOperation()"><i class="bi bi-file-earmark-play"></i>
        </b-button>
    </b-overlay>
</template>

<script>
    import {
        RESOLUTION_CONFIRM,
        RESOLUTION_REJECT,
        TR_ADD_USER_PARAMS,
        TR_CHANGE_CONFIRMS_PARAMS, TR_REMOVE_USER_PARAMS,
        TR_TYPE_ADD_USER,
        TR_TYPE_CHANGE_CONFIRMS, TR_TYPE_REMOVE_USER,
        TR_STATUS_CONFIRMED, TR_STATUS_INPROGRESS, TR_STATUS_DECLINED, TR_TYPE_SEND, EVER_UNITS_IN_ONE
    } from "../data/AppTypes";
import { DebotContractApi } from "../api/DebotContractApi";
import {SafeContractApi} from "../api/SafeContractApi";
    import BigNumber from "bignumber.js";

export default {
    name: "TransactionResolve",
    props: ['transaction'],
    data: function() {
      return {
          TR_STATUS_CONFIRMED: TR_STATUS_CONFIRMED,
          TR_STATUS_INPROGRESS: TR_STATUS_INPROGRESS,
          TR_STATUS_DECLINED: TR_STATUS_DECLINED,
          opInProgress: false,
      }
    },
    methods: {
        async confirmTransaction() {
            this.opInProgress = true;
            let confirmObj = await DebotContractApi.getResolveTransactionData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, RESOLUTION_CONFIRM);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            this.opInProgress = false;
        },

        async rejectTransaction() {
            this.opInProgress = true;
            let confirmObj = await DebotContractApi.getResolveTransactionData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, RESOLUTION_REJECT);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            this.opInProgress = false;
        },

        async addUser(address: string) {
            let confirmObj = await DebotContractApi.getAddUserData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, address);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
        },

        async changeConfirmations(confirmations: number) {
            let confirmObj = await DebotContractApi.getChangeReqConfirmationsData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, confirmations);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
        },

        async removeUser(address: string) {
            let confirmObj = await DebotContractApi.getRemoveUserData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, address);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
        },

        async addTransaction(recipient: string, value: number) {
        let confirmObj = await DebotContractApi.getSendTransferData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, recipient, value);
        this.$store.commit('Confirmation/sendConfrimation', confirmObj);
        },

        async runOperation(){
            this.opInProgress = true;
            let trParams = {};
            switch (this.transaction.trType) {
                case TR_TYPE_ADD_USER:
                    trParams = await this.$store.state.Safe.api.getAddUserParams(this.transaction);
                    this.addUser(trParams.data.pubkey);
                    break;
                case TR_TYPE_CHANGE_CONFIRMS:
                    trParams = await this.$store.state.Safe.api.getChangeConfirmsParams(this.transaction);
                    this.changeConfirmations(parseInt(trParams.data.confirmations));
                    break;
                case TR_TYPE_REMOVE_USER:
                    trParams = await this.$store.state.Safe.api.getRemoveUserParams(this.transaction);
                    this.removeUser(trParams.data.pubkey);
                    break;
                case TR_TYPE_SEND:
                    trParams = await this.$store.state.Safe.api.getSendParams(this.transaction);
                    this.addTransaction(trParams.data.recipient, new BigNumber(trParams.data.value).dividedBy(EVER_UNITS_IN_ONE).toNumber());
            }
            this.opInProgress = false;
        }
    }
}
</script>

<style scoped>

</style>