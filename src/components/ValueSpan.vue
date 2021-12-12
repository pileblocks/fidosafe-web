<template>
    <div class="d-inline"><span>{{ valueInt }}</span>.<span class="small">{{ valueFloat }}</span>
    </div>
</template>

<script>
import BigNumber from "bignumber.js";
import { EVER_UNITS_IN_ONE } from "../data/AppTypes";

export default {
    name: "ValueSpan",
    props: {
        value: String
    },
    computed: {
        valueInt: function () {
            return new BigNumber(new BigNumber(parseInt(this.value)).dividedBy(EVER_UNITS_IN_ONE).toFixed(4).split('.')[0]).toFormat(0)
        },
        valueFloat: function () {
            return new BigNumber(parseInt(this.value)).dividedBy(EVER_UNITS_IN_ONE).toFixed(4).split('.')[1]
        }
    }
}
</script>

<style scoped>
</style>