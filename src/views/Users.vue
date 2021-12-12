<template>

<b-container class="section-panel" fluid="lg">

    <div class="d-flex justify-content-between">
      <h2 class="pt-4 pb-4 mb-0">Users</h2>
      <div class="d-flex align-items-center">
          <b-button variant="primary" type="submit" :to="{ name: 'AddUser', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-plus-lg"></i> Add</b-button>
      </div>
    </div>

    <b-overlay class="mb-5" :show="userList.length === 0">
        <b-row class="mb-2 transaction-border pt-2 d-sm-flex d-none">
            <b-col sm="7">Public Key</b-col>
            <b-col sm="1">Operations</b-col>
        </b-row>
        <b-row v-for="user in userList" :key="user.pubkey" class="pt-2 pb-2 transaction-border">
                <b-col sm="7" class="pubkey-wrap mb-1"><span class="d-sm-none d-inline font-weight-bold">Key: </span>{{ user.pubkey }}</b-col>
                <b-col sm="1">
                    <b-button class="btn-reject" v-on:click="removeUser(user.pubkey)"><i class="bi bi-x-lg"></i>
                    </b-button>
                </b-col>
        </b-row>
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
import { DebotContractApi } from "../api/DebotContractApi";

export default {
    name: "TransactionList",
    components: {  },
    data: function () {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('Safe/initSafe', {address: this.$route.params.safeAddress, client: this.everscale, vue: this});
        this.$store.dispatch('Safe/getUsers');
    },
    computed: {
        userList: function () {
            return this.$store.state.Safe.users;
        }
    },
    methods: {
      async removeUser(removeUserPubkey:string) {
        let confirmObj = await DebotContractApi.getRemoveUserData(this.debotAccount, this.$route.params.safeAddress, 0, removeUserPubkey);
        this.$store.commit('Confirmation/sendConfrimation', confirmObj);
      },
    }
}
</script>

<style lang="less" scoped>
</style>