<template>
  <header class="header" id="header">
    <div class="header__inner">
      <h1 class="logo">
        <a href="#" class="logo__link" title="Company Logo">
          <font-awesome-icon icon="atom" aria-hidden="true" />
        </a>
      </h1>
      <div class="header__navigation">
        <ul class="page-guide h-group">
          <li
            class="page-guide__item"
            v-for="(item, index) in guideList"
            :key="index"
          >
            <a href="#" class="page-guide__link button button--link">
              {{ item }}
            </a>
          </li>
        </ul>
        <global-navigation></global-navigation>
      </div>
    </div>
  </header>
</template>

<script>
import GlobalNavigation from "@/modules/app/components/global-navigation/global-navigation";
export default {
  name: "TheHeader",
  components: {
    GlobalNavigation
  },
  data() {
    return {
      guideList: ["로그인", "회원가입", "이용안내", "사이트맵"]
    };
  }
};
</script>

<style lang="scss">
@import "the-header.scss";
</style>
