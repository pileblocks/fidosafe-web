<template>

<b-container class="section-panel" fluid="lg">

    <div class="d-flex justify-content-between">
      <h2 class="pt-4 pb-4 mb-0">Balance</h2>
      <div class="d-flex align-items-center">
          <b-button variant="primary" type="submit" href="#" v-bind:disabled="!this.$route.params.safeAddress" v-on:click="deposit()"> Deposit</b-button>
      </div>
    </div>

    <b-row>
        <b-col sm="2" class="pubkey-wrap"><i class="bi bi-gem"></i> {{ this.$store.state.Safe.balance }}</b-col>
    </b-row>

    <b-row class="mt-2">
        <b-col class="pubkey-wrap small" v-if="this.$store.state.Safe.api">Account: {{ this.$store.state.Safe.api.account.address }}</b-col>
    </b-row>

    <div class="d-flex justify-content-between">
      <h2 class="pt-4 pb-4 mb-0">Transactions</h2>
      <div class="d-flex align-items-center">
          <b-button variant="primary" type="submit" :to="{ name: 'AddTransaction', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress">Send</b-button>
      </div>
    </div>

    <b-overlay class="mb-5" :show="transactionList.length === 0">
        <b-row class="mb-2 transaction-border pt-2 d-sm-flex d-none">
            <b-col sm="2" class="pubkey-wrap">ID</b-col>
            <b-col sm="2">Info</b-col>
            <b-col sm="2">Status</b-col>
            <b-col sm="2">Created</b-col>
            <b-col sm="2">Operations</b-col>
        </b-row>
        <transaction-item v-for="transaction in transactionList" :key="transaction.id" :transaction="transaction"></transaction-item>
    </b-overlay>
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
import { DebotContractApi } from "../api/DebotContractApi";

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
        this.$store.dispatch('Safe/getBalance');
        this.$store.dispatch('Safe/getLastTransactionId');
    },
    computed: {
        transactionList: function ():Array<FidoTransaction> {
            return this.$store.state.Safe.transactions;
        }
    },
    methods: {
        deposit() {
            let confirmObj = DebotContractApi.getDepositData(this.$route.params.safeAddress);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
        },
    }
}
</script>

<style lang="less" scoped>
</style>