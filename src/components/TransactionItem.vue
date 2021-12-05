<template>
    <div>
        <b-row class="mb-2 transaction-border pt-2" >
            <b-col sm="2" class="pubkey-wrap d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold">ID: </span>{{ transaction.id }}</b-col>
            <b-col sm="2" class="d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold pr-1">Type: </span>
                <span v-if="transaction.trType === TR_TYPE_ADD_USER">Add User</span>
                <span v-if="transaction.trType === TR_TYPE_REMOVE_USER">Remove User</span>
                <span v-if="transaction.trType === TR_TYPE_CHANGE_CONFIRMS">Change Confirmations</span>
            </b-col>
            <b-col sm="2"><span class="d-sm-none d-inline font-weight-bold">Status: </span>
                <span v-if="transaction.status === TR_STATUS_COMPLETED"> Completed</span>
                <span v-if="transaction.status === TR_STATUS_INPROGRESS"> In progress</span>
                <br/>
                <span class="d-sm-none d-inline font-weight-bold">Votes: </span><small><i class="bi bi-check-lg color-approve"/>: {{ transaction.accepted }}, <i class="bi bi-x-lg color-reject"/>: {{ transaction.declined }}</small>
            </b-col>
            <b-col sm="2" class="d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold">Created: </span><small class="text-muted pl-1 pl-sm-0">{{ transCreated }}</small></b-col>
            <b-col sm="3" class="d-flex mt-2 mt-sm-0">
                <transaction-resolve :transaction="transaction"/>
                <b-button v-on:click="toggleDetails()"><i class="bi bi-card-text"></i>
                </b-button>
            </b-col>
        </b-row>
        <transaction-confirmations :trId="transaction.id" v-show="showDetails"/>
    </div>
</template>

<script>
import type { FidoTransaction } from "../data/AppTypes";
import { TR_STATUS_COMPLETED, TR_STATUS_INPROGRESS, TR_TYPE_ADD_USER, TR_TYPE_CHANGE_CONFIRMS, TR_TYPE_REMOVE_USER } from "../data/AppTypes";
import TransactionConfirmations from "./TransactionConfirmations";
import { Utils } from "../api/Utils";
import TransactionResolve from "./TransactionResolve";

export default {
    name: "TransactionItem",
    data: function() {
        return {
            showDetails: false,
            TR_STATUS_COMPLETED: TR_STATUS_COMPLETED,
            TR_STATUS_INPROGRESS: TR_STATUS_INPROGRESS,
            TR_TYPE_ADD_USER: TR_TYPE_ADD_USER,
            TR_TYPE_REMOVE_USER: TR_TYPE_REMOVE_USER,
            TR_TYPE_CHANGE_CONFIRMS: TR_TYPE_CHANGE_CONFIRMS
        }
    },
    props: {
        transaction: Object
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
            if (this.showDetails === true) {
                this.$store.dispatch('Safe/getConfirmations', this.transaction.id);
            }
        }

    },
    computed: {
        transCreated: function() {
            return Utils.showDate(this.transaction.created);
        }
    },
    mounted: function() {
        this.$store.dispatch('Safe/getNumConfirmations', this.transaction.id);
    },
    components: { TransactionResolve, TransactionConfirmations },
}
</script>

<style scoped>
.transaction-border {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #ddd;
}
.color-reject {
    color: var(--danger)
}
.color-approve {
    color: var(--success)
}
</style>