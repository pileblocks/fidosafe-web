<template>
  <b-container class="section-panel" fluid="lg">
    <b-row>
      <b-col class="mt-5">
        <h2 class="pb-4"><b-button variant="secondary" :to="{ name: 'Transactions', params: { safeAddress: this.$route.params.safeAddress } }" v-bind:disabled="!this.$route.params.safeAddress"><i class="bi bi-arrow-left"></i></b-button> Send Tokens</h2>
        <p class="lead mb-4">
          Send tokens to a particular address. The transaction should receive the necessary amount of confirmations to be performed.<br/>
        </p>

          <p>
            Current balance: <b-overlay :show="this.$store.state.Safe.balance === 0" class="d-inline-block"><i class="bi bi-gem"></i> {{ this.$store.state.Safe.balance }}</b-overlay>
          </p>

        <b-form @submit.stop.prevent="onSubmit" :novalidate="true">
          <b-form-group
            label="Address"
            label-for="input-1"
            description="Enter a receiver's address.">
            <b-form-input
              id="input-recipient"
              placeholder="Example: 0:9ae954...bfc8a27b"
              v-model="recipient"
              :state="addressValidation()"
              type="text"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Value"
            label-for="input-2">
            <b-form-input
              id="input-value"
              placeholder="Example: 1.15"
              v-model="value"
              :state="valueValidation()"
              type="number"></b-form-input>
            <b-form-invalid-feedback :state="valueValidation()">{{ valueMsg }}</b-form-invalid-feedback>
          </b-form-group>
            <div class="d-flex justify-content-end">
                <b-button variant="primary" size="lg" type="submit" class="text-nowrap" :disabled="!valueValidation() || !addressValidation()">Send</b-button>
            </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { DebotContractApi } from "../api/DebotContractApi";
import { SAFE_MINIMUM_TRANSFER, SAFE_TRANSFER_FEES } from "../data/AppTypes";

const ERR_LESS_THAN_MIN_TRANSFER = "Your amount is less than minimum available transfer. Please set the value to more than 0.3 EVER.";
const ERR_MORE_THAN_BALANCE = "Amount exceeds the balance. Please check that more than 0.2 EVER remains on your balance for the fees.";

export default {
    name: "AddTransaction",
    data: function() {
      return {
        recipient: null,
        value: null,
        valueMsg: '',
        SAFE_TRANSFER_FEES: SAFE_TRANSFER_FEES,
        SAFE_MINIMUM_TRANSFER: SAFE_MINIMUM_TRANSFER
      }
    },
    mounted() {
        this.$store.dispatch('Safe/initSafe', {address: this.$route.params.safeAddress, client: this.everscale, vue: this});
        this.$store.dispatch('Safe/getBalance');
    },
    methods: {
      async addTransaction() {
        let confirmObj = await DebotContractApi.getSendTransferData(this.debotAccount, this.$route.params.safeAddress, 0, this.recipient, this.value);
        this.$store.commit('Confirmation/sendConfrimation', confirmObj);
      },
      addressValidation() {
        if (this.recipient === null || this.recipient === "")
            return null;
        else if ((parseInt(this.recipient.replace(":", "x")) > 0) && (this.recipient.length === 66)) {
          return true;
        }
        else {
          return false;
        }
      },
      valueValidation() {
        if (this.value === null || this.value === "")
            return null;
        this.value = parseFloat(this.value);
        if (this.value >= this.$store.state.Safe.balance - this.SAFE_TRANSFER_FEES) {
          this.valueMsg = ERR_MORE_THAN_BALANCE;
          return false;
        }

        else if (this.value < this.SAFE_MINIMUM_TRANSFER) {
            this.valueMsg = ERR_LESS_THAN_MIN_TRANSFER;
            return false;
        }
        return true;
      },
      onSubmit() {
         this.addTransaction();
      }
    }
}
</script>

<style scoped>

</style>