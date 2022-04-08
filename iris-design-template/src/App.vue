<template>

  <template-pages></template-pages>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import TemplatePages from './modules/template/pages/template-pages'

export default {
  name: 'App',
  components: {
    TemplatePages
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>
