<template>
    <div>
        <b-row class="mb-2 transaction-border pt-2" >
            <b-col sm="2" class="pubkey-wrap d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold pr-1">ID: </span>{{ formattedTransId }}</b-col>
            <b-col sm="2" class="d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold pr-1">Info: </span>
                <span v-if="transaction.trType === TR_TYPE_ADD_USER" class="small"><i class="bi bi-gear"></i> Add User</span>
                <span v-if="transaction.trType === TR_TYPE_REMOVE_USER" class="small"><i class="bi bi-gear"></i> Remove User</span>
                <span v-if="transaction.trType === TR_TYPE_CHANGE_CONFIRMS" class="small"><i class="bi bi-gear"></i> Change Confirmations</span>
                <span v-if="transaction.trType === TR_TYPE_RECEIVE">+<value-span :value="receivedValue"/></span>
                <span v-if="transaction.trType === TR_TYPE_SEND">-<value-span :value="this.transaction.paramsStr"/></span>
            </b-col>
            <b-col sm="2"><span class="d-sm-none d-inline font-weight-bold">Status: </span>
                <span v-if="transaction.status === TR_STATUS_CONFIRMED" class="color-approve"> Completed</span>
                <span v-if="transaction.status === TR_STATUS_INPROGRESS"> In progress</span>
                <span v-if="transaction.status === TR_STATUS_DECLINED" class="color-reject"> Declined</span>
                <br/>
                <span class="d-sm-none d-inline font-weight-bold">Votes: </span><small><i class="bi bi-check-lg color-approve"></i>: {{ transaction.accepted }}, <i class="bi bi-x-lg color-reject"></i>: {{ transaction.declined }}</small>
            </b-col>
            <b-col sm="2" class="d-flex align-items-center"><span class="d-sm-none d-inline font-weight-bold">Created: </span><small class="text-muted pl-1 pl-sm-0">{{ transCreated }}</small></b-col>
            <b-col sm="3" class="d-flex mt-2 mt-sm-0">
                <transaction-resolve :transaction="transaction"/>
                <b-button v-on:click="toggleDetails()"><i class="bi bi-card-text"></i>
                </b-button>
            </b-col>
        </b-row>
        <div v-show="showDetails">
            <b-row class="row-header">
                <b-col>
                    <b>Parameters</b>
                </b-col>
            </b-row>
            <b-row class="transaction-border">
                <b-col class="mt-3">
                    <p>{{ trParams }}</p>
                    <p class="mb-3 mt-2" v-if="[TR_STATUS_CONFIRMED, TR_STATUS_DECLINED].includes(transaction.status)">Completed on: {{ transaction.completed | formatDate }}</p>
                </b-col>
            </b-row>
            <transaction-confirmations :trId="transaction.id"/>
        </div>
    </div>
</template>

<script>
import type { FidoTransaction } from "../data/AppTypes";
import {
    EVER_UNITS_IN_ONE,
    TR_STATUS_CONFIRMED,
    TR_STATUS_DECLINED,
    TR_STATUS_INPROGRESS,
    TR_TYPE_ADD_USER,
    TR_TYPE_CHANGE_CONFIRMS, TR_TYPE_RECEIVE,
    TR_TYPE_REMOVE_USER, TR_TYPE_SEND
} from "../data/AppTypes";
import TransactionConfirmations from "./TransactionConfirmations";
import { Utils } from "../api/Utils";
import TransactionResolve from "./TransactionResolve";
import BigNumber from "bignumber.js";
import ValueSpan from "./ValueSpan";

export default {
    name: "TransactionItem",
    data: function() {
        return {
            showDetails: false,
            TR_STATUS_CONFIRMED: TR_STATUS_CONFIRMED,
            TR_STATUS_DECLINED: TR_STATUS_DECLINED,
            TR_STATUS_INPROGRESS: TR_STATUS_INPROGRESS,
            TR_TYPE_ADD_USER: TR_TYPE_ADD_USER,
            TR_TYPE_REMOVE_USER: TR_TYPE_REMOVE_USER,
            TR_TYPE_CHANGE_CONFIRMS: TR_TYPE_CHANGE_CONFIRMS,
            TR_TYPE_RECEIVE: TR_TYPE_RECEIVE,
            TR_TYPE_SEND: TR_TYPE_SEND,
            trParams: ''
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
        },
    },
    computed: {
        transCreated: function() {
            return Utils.showDate(this.transaction.created);
        },
        formattedTransId: function() {
            return this.transaction.id.toString().padStart(8, '0')
        },
        receivedValue: function() {
            return this.transaction.paramsStr.split("|")[1]
        }

    },
    mounted: function() {
        this.$store.dispatch('Safe/getNumConfirmations', this.transaction.id);
        this.$store.state.Safe.api.getTransactionParams(this.transaction).then((data) => {
            this.trParams = data;
        })
    },
    components: { ValueSpan, TransactionResolve, TransactionConfirmations },
}
</script>

<style scoped>
.color-reject {
    color: var(--danger)
}
.color-approve {
    color: var(--success)
}
</style>