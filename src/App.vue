<template>
  <div>
  <section id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="/#/">Fidosafe <i class="safe-version-label">1.0.1</i></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" v-bind:disabled="true"><i class="bi bi-arrow-left-right"></i>Transactions</b-nav-item>
            <b-nav-item :to="{ name: 'Users', params: { safeAddress: safeAddress } }" v-bind:disabled="!safeAddress" active-class="nav-item-active"><i class="bi bi-people-fill"></i> Users</b-nav-item>
            <b-nav-item :to="{ name: 'Settings', params: { safeAddress: safeAddress } }" v-bind:disabled="!safeAddress"><i class="bi bi-sliders"></i> Settings</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <div class="after-navbar">
      <router-view/>
    </div>
  </section>
  <footer class="mt-2">
    <footer class="app__footer mt-1 pb-5">
      <b-container fluid="md">
        <b-row>
          <b-col class="d-flex mt-3 justify-content-around"
                 offset-sm="1"
                 sm="10">
            <router-link to="/">Pools</router-link>
            <router-link to="/about">About</router-link>
            <a href="#">Medium</a>
            <a href="#">Twitter</a>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </footer>
 <confirm-operation/>
</div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.after-navbar {
  margin-top: 56px;
  min-height: 78vh;
}

.section-panel {
    box-shadow: -1px 1px 10px 3px #eee;
    min-height: 70vh;
    padding-left: 2em !important;
    padding-bottom: 1em;
}

.safe-version-label {
  font-style: normal;
  font-size: 0.5em;
  opacity: 0.5;
}
.nav-item > .router-link-exact-active {
    color: var(--yellow) !important;
    font-weight: bold;
}

path {
    fill: var(--primary);
}
.pubkey-wrap {
    overflow-wrap: break-word;
}
</style>
<script>
  import ConfirmOperation from "./components/ConfirmOperation";
  export default {
    components: { ConfirmOperation },
    computed: {
      safeAddress: function() {
        return this.$store.state.Safe.api?.account?.address || null;
      }
    }
  }
</script>