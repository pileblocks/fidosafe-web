<template>

<b-container class="section-panel" fluid="lg">

    <div class="d-flex justify-content-between">
      <h1 class="pt-4 pb-4 mb-0">Transactions</h1>
      <div class="d-flex align-items-center">
          <b-button variant="primary" type="submit" href="#" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-plus-lg"></i> Add</b-button>
      </div>
    </div>

    <b-row class="mb-2 transaction-border pt-2 d-sm-flex d-none">
        <b-col sm="2" class="pubkey-wrap">ID</b-col>
        <b-col sm="2">Type</b-col>
        <b-col sm="2">Status</b-col>
        <b-col sm="2">Created</b-col>
        <b-col sm="2">Operations</b-col>
    </b-row>

    <transaction-item v-for="transaction in transactionList" :key="transaction.id" :transaction="transaction">
    </transaction-item>

</b-container>

</template>

<script>
import {
    BContainer,
    BRow,
    BCol,
    BButton,
} from 'bootstrap-vue';
import type { FidoTransaction } from "../data/AppTypes";
import TransactionItem from "../components/TransactionItem";

export default {
    name: "Transactions",
    components: { TransactionItem  },
    data: function () {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('Safe/initSafe', {address: this.$route.params.safeAddress, client: this.everscale, vue: this});
        this.$store.dispatch('Safe/getUsers');
        this.$store.dispatch('Safe/getTransactions');
    },
    computed: {
        transactionList: function ():Array<FidoTransaction> {
            return this.$store.state.Safe.transactions;
        }
    }
}
</script>

<style lang="less" scoped>
</style>