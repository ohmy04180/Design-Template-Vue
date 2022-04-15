<template>
  <body>
  <main-banner></main-banner>
  <main-data></main-data>
  <main-board></main-board>
  </body>
</template>

<script>
import MainBanner from "./layouts/main-banner/main-banner"
import MainData from "./layouts/main-data/main-data"
import MainBoard from "./layouts/main-board/main-board"
export default {
  name: "MainPage",
  components: {
    MainBanner,
    MainData,
    MainBoard
  }
};
</script>

<style lang="scss">
</style>
