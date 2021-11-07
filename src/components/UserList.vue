<template>
<b-container>
    <h1>Users</h1>
    <b-row v-for="user in userList" :key="user.pubkey">
        <b-col class="col-sm-8">{{ user.pubkey }}</b-col>
        <b-col class="col-sm-4">{{ user.role }}</b-col>
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
    mounted() {
        this.$store.dispatch('Safe/changeAddress', this.$route.params.safeName)
    },
    computed: {
        userList: function () {
            return this.$store.state.Safe.users;
        }
    }
}
</script>

<style scoped>

</style>