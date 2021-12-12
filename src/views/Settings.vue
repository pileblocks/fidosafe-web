<template>
  <b-container class="section-panel" fluid="lg">
    <b-row>
      <b-col>
        <h2 class="pb-4 pt-4 mb-0">Settings</h2>
        <b-form>
          <b-form-group
            label="Required number of confirmations:"
            label-for="input-1"
            description="The number of confirmations required to perform a transaction.">
            <b-form-input
              id="input-1"
              type="range" min="1" :max="numberOfUsers" v-model="requiredConfirmations"></b-form-input>
            <div>Current value: {{ confirmationsNum }}</div>
          </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button variant="primary" type="button" v-on:click="save()">Save</b-button>
            </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { DebotContractApi } from "../api/DebotContractApi";

export default {
    name: "Settings",
    data: function() {
        return {
            confirmationsNum: 0
        }
    },
    mounted() {
        this.$store.dispatch('Safe/initSafe', {address: this.$route.params.safeAddress, client: this.everscale, vue: this});
        this.$store.dispatch('Safe/getRequiredConfirmations');
        this.$store.dispatch('Safe/getNumberOfUsers');
    },
    computed: {
        requiredConfirmations: {
            get: function () {
                this.confirmationsNum = this.$store.state.Safe.requiredConfirmations;
                return this.$store.state.Safe.requiredConfirmations;
            },
            set: function(newValue){
              this.confirmationsNum = newValue;
            }
        }
        ,
        numberOfUsers: function() {
          return this.$store.state.Safe.numberOfUsers;
        }
    },
    methods: {
        async save() {
          if (this.confirmationsNum !== this.requiredConfirmations) {
            let confirmObj = await DebotContractApi.getChangeReqConfirmationsData(this.debotAccount, this.$route.params.safeAddress, 0, this.confirmationsNum);
            this.$store.commit('Confirmation/sendConfrimation', confirmObj);
          }
        }
    }
}
</script>

<style scoped>

</style>