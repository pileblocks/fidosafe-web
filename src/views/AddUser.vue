<template>
  <b-container class="section-panel" fluid="lg">
    <b-row>
      <b-col class="mt-5">
        <h2 class="pb-4"><b-button variant="secondary" :to="{ name: 'Users', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-arrow-left"></i></b-button> Add a User</h2>
        <p class="lead mb-4">
          Add a user by providing their public key. This user will be able to vote for all existing transactions and create the new ones.
        </p>
        <b-form @submit.stop.prevent="onSubmit">
          <b-form-group
            label="Public key"
            label-for="input-1"
            description="Enter the public key of a new custodian.">
            <b-form-input
              id="input-1"
              placeholder="Example: 0x9ae954...bfc8a27b"
              v-model="newUserAddress"
              type="text" :state="pubkeyValidation()"></b-form-input>
            <b-form-invalid-feedback :state="pubkeyValidation()">Use either 0x...XXX or a big integer.</b-form-invalid-feedback>
          </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button variant="primary" size="lg" type="submit" class="text-nowrap" :disabled="!pubkeyValidation()">Add</b-button>
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
      pubkeyValidation() {
        if (this.newUserAddress === null || this.newUserAddress === "")  {
          return null
        }
        else if (parseInt(this.newUserAddress) > 0) {

          if (!this.newUserAddress.match(/[a-fA-F]/g))
              // This is a very long int
              return true;

          if (this.newUserAddress.slice(0,2) !== "0x") {
              // To prevent situations like 080adef, we need to convert to int and back to make sure we've parsed the full value
              // but still to be able to filter out 080xyz
              this.newUserAddress = "0x" + this.newUserAddress;
              return true;
          }
          return true;
        }
        else if (parseInt("0x" + this.newUserAddress) > 0) {
          this.newUserAddress = "0x" + this.newUserAddress;
          return true
        }
        else {
          return false
        }
      },
      onSubmit() {
        if (this.pubkeyValidation())
          this.addUser()
      }
    }
}
</script>

<style scoped>

</style>