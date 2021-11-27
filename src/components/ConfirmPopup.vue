<template>
    <div class="overlay" v-show="$store.state.Confirmation.isVisible">
        <div class="d-flex vh-100 justify-content-center align-items-center flex-column">
            <h2>{{ title }}
            </h2>
            <p class="lead pl-4">{{ description }}
            </p>
            <div v-html="qrImage" class="qr-code"></div>
            <p>Alternatively, use this <a v-bind:href="url" target="_blank">LINK</a></p>
            <div v-on:click="hide()" class="confirmation-close"><i class="bi bi-x"></i>
            </div>
        </div>
    </div>
</template>

<script>
import qrcode from 'qrcode-generator';
export default {
    name: "ConfirmPopup",
    data: function () {
        return {
            url: '',
            title: '',
            description: '',
            isVisible: false,
            qrImage: ''
        }
    },
    computed: {
        confirmationTime() {
            return this.$store.state.Confirmation.confirmationTimestamp;
        }
    },
    watch: {
        confirmationTime: function () {
            this.url = this.$store.state.Confirmation.confirmationUrl;
            this.title = this.$store.state.Confirmation.confirmationTitle;
            this.description = this.$store.state.Confirmation.confirmationDescription;
            this.showConfirmation();
        }
    },
    methods: {
        showConfirmation() {
            let typeNumber = 14;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            qr.addData(this.url);
            qr.make();
            this.qrImage = qr.createSvgTag({scalable: true});
            this.$store.commit('Confirmation/toggleVisible', true);
        },
        hide() {
            this.$store.commit('Confirmation/toggleVisible', false);
        }
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.95);
}
.qr-code {
    width: 40vh;
}
.confirmation-close {
    position: absolute;
    top: 0px;
    right: 5%;
    font-size: 30pt;
    font-weight: bold;
    color: var(--danger);
}
</style>