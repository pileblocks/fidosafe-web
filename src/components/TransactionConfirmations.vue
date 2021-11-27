<template>
    <b-overlay class="mb-5" :show="confirmations.length === 0">
        <b-row class="row-header">
           <b-col>
               <b>Details</b>
           </b-col>
        </b-row>
        <b-row class="mb-2 transaction-border pt-2" v-for="confirmation in confirmations" :key="confirmation.created">
            <b-col sm="2" class="pubkey-wrap"><small class="text-muted">{{ confirmation.created | formatDate }}</small></b-col>
            <b-col sm="2"><span class="d-sm-none d-inline font-weight-bold">Resolution: </span>
                <i class="bi bi-check-lg color-approve" v-if="confirmation.resolution === 1"></i>
                <i class="bi bi-x-lg color-reject" v-if="confirmation.resolution === 2"></i>
            </b-col>
            <b-col sm="4"><span class="font-weight-bold">User: </span>{{ confirmation.user.pubkey | prettifyPubkey}}</b-col>
        </b-row>
    </b-overlay>
</template>


<script>
    import type { FidoConfirmation } from "../data/AppTypes";
    import { Utils } from "../api/Utils";

    export default {
        name: "TransactionConfirmations",
        props: {
            trId: Number
        },
        methods: {
        },
        computed: {
            confirmations: function():Array<FidoConfirmation> {
                return this.$store.getters['Safe/getConfirmations'](this.trId);
            }
        },
        filters: {
            prettifyPubkey: function (value) {
                return value.slice(0, 8) + '...' + value.slice(-8)
            },
            formatDate: function (value:number) {
                return Utils.showDate(value);
            }
        }
    }
</script>

<style scoped>
.row-header {
    background-color: var(--yellow) !important;
}
</style>