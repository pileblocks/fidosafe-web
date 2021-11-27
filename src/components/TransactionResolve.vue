<template>
    <div class="d-flex">
        <b-button class="btn-reject" v-on:click="rejectTransaction()"><i class="bi bi-x-lg"></i>
        </b-button>
        <b-button class="btn-confirm ml-2" v-on:click="confirmTransaction()"><i class="bi bi-check-lg"></i>
        </b-button>
        <b-button class="ml-2"><i class="bi bi-file-earmark-play" v-on:click="runOperation()"></i>
        </b-button>
    </div>
</template>

<script>
    import {
        RESOLUTION_CONFIRM,
        RESOLUTION_REJECT,
        TR_ADD_USER_PARAMS,
        TR_CHANGE_CONFIRMS_PARAMS,
        TR_TYPE_ADD_USER,
        TR_TYPE_CHANGE_CONFIRMS
    } from "../data/AppTypes";
    import { DebotContractApi } from "../api/DebotContractApi";

    export default {
        name: "TransactionResolve",
        props: ['transaction'],
        methods: {
            async confirmTransaction() {
                let confirmObj = await DebotContractApi.getResolveTransactionData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, RESOLUTION_CONFIRM);
                this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            },
            async rejectTransaction() {
                let confirmObj = await DebotContractApi.getResolveTransactionData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, RESOLUTION_REJECT);
                this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            },
            async addUser(address: string) {
                let confirmObj = await DebotContractApi.getAddUserData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, address);
                this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            },
            async changeConfirmations(confirmations: number) {
                let confirmObj = await DebotContractApi.getChangeReqConfirmationsData(this.debotAccount, this.$route.params.safeAddress, this.transaction.id, confirmations);
                this.$store.commit('Confirmation/sendConfrimation', confirmObj);
            },

            async runOperation(){
                let trParams = {};
                switch (this.transaction.trType) {
                    case TR_TYPE_ADD_USER:
                        trParams = await this.everscale.abi.decode_boc(
                                        {
                                        params: [TR_ADD_USER_PARAMS],
                                        boc: this.transaction.params,
                                        allow_partial: false
                                        });
                        this.addUser(trParams.data.pubkey);
                        break;
                    case TR_TYPE_CHANGE_CONFIRMS:
                        trParams = await this.everscale.abi.decode_boc(
                                        {
                                        params: [TR_CHANGE_CONFIRMS_PARAMS],
                                        boc: this.transaction.params,
                                        allow_partial: false
                                        });
                        this.changeConfirmations(parseInt(trParams.data.confirmations));
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>