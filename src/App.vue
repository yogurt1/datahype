<template>
  <div id="app">
    <div class="header">
      <div class="wrapper">
        <a href="/" class="logo">
          <img src="./assets/logo.png">
        </a>

        <Menu></Menu>
      </div>
    </div>

    <div class="content">
      <div class="wrapper">
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
import Menu from "./Menu.vue"
import Footer from "./Footer.vue"

export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style lang="scss">
@import "./settings.scss";
@import "./App.scss";
</style>
