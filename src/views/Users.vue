<template>

<b-container class="section-panel" fluid="lg">

    <div class="d-flex justify-content-between">
      <h1 class="pt-5 pb-4">Users</h1>
      <div class="d-flex align-items-center">
          <b-button variant="primary" size="lg" type="submit" :to="{ name: 'AddUser', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-plus-lg"></i> Add</b-button>
      </div>
    </div>

    <b-row v-for="user in userList" :key="user.pubkey" class="mb-2">
        <b-col sm="7" class="pubkey-wrap">{{ user.pubkey }}</b-col>
        <b-col sm="1">{{ user.role }}</b-col>
        <b-col sm="4">
            <b-button class="btn-reject"><i class="bi bi-x-lg"></i>
            </b-button>
            <b-button class="btn-confirm ml-2"><i class="bi bi-check-lg"></i>
            </b-button>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import {
    BContainer,
    BRow,
    BCol,
    BButton,
} from 'bootstrap-vue';

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
    }
}
</script>

<style lang="less" scoped>
</style>