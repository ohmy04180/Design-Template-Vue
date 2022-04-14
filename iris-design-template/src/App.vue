<template>
  <div class="page-container">
    <the-header></the-header>
    <main-page></main-page>
    <the-footer></the-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/the-header/the-header";
import TheFooter from "@/components/layout/the-footer/the-footer";
import MainPage from "@/modules/main-page/main-page"

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    MainPage
  }
};
</script>

<style lang="scss">
</style>
