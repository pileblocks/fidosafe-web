<template>
  <b-container class="section-panel" fluid="lg">
    <b-row>
      <b-col class="mt-5">
        <h1 class="pb-4"><b-button variant="secondary" :to="{ name: 'Users', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-arrow-left"></i></b-button> Add a User</h1>
        <p class="lead mb-4">
          We'll transfer you to our DeBot to create a safe. Once the safe is complete, you will navigate back to the website to further manage your safe.
        </p>
        <b-form>
          <b-form-group
            label="Public key"
            label-for="input-1"
            description="Enter the public key of a new custodian.">
            <b-form-input
              id="input-1"
              placeholder="Example: 9ae954...bfc8a27b"
              v-model="newUserAddress"
              type="text"></b-form-input>
          </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button variant="primary" size="lg" type="button" v-on:click="addUser()" class="text-nowrap">Add</b-button>
            </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { DebotContractApi } from "../api/DebotContractApi";

export default {
    name: "AddUser",
    data: function() {
      return {
        newUserAddress: null
      }
    },
    mounted() {
        this.$store.dispatch('Safe/initSafe', {address: this.$route.params.safeAddress, client: this.everscale, vue: this});
    },
    methods: {
      async addUser() {
        let confirmObj = await DebotContractApi.getAddUserData(this.debotAccount, this.$route.params.safeAddress, 0, this.newUserAddress);
        this.$store.commit('Confirmation/sendConfrimation', confirmObj);
      },
    }
}
</script>

<style scoped>

</style>