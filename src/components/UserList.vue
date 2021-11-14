<template>

<b-container class="section-panel" fluid="lg">
    <h1 class="pt-5 pb-4">Users</h1>
    <b-row v-for="user in userList" :key="user.pubkey" class="mb-2">
        <b-col sm="7" class="pubkey-col">{{ user.pubkey }}</b-col>
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
        this.$store.dispatch('Safe/changeAddress', this.$route.params.safeName);
    },
    computed: {
        userList: function () {
            return this.$store.state.Safe.users;
        }
    }
}
</script>

<style lang="less" scoped>
.pubkey-col {
    overflow-wrap: break-word;
}
</style>