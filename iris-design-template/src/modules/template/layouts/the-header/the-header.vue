<template>
  <header class="header" id="header">
    <div class="header__tool-bar">
      <h1 class="logo">
        <font-awesome-icon icon="user-secret" />
      </h1>
      <ul class="page-guide">
        <li class="page-guide__item">
          <button type="button" class="page-guide__button button button--link" aria-hidden="true">
            로그인
          </button>
        </li>
        <li class="page-guide__item">
          <button type="button" class="page-guide__button button button--link" aria-hidden="true">
            회원가입
          </button>
        </li>
        <li class="page-guide__item">
          <button type="button" class="page-guide__button button button--link" aria-hidden="true">
            이용안내
          </button>
        </li>
        <li class="page-guide__item">
          <button type="button" class="page-guide__button button button--link" aria-hidden="true">
            사이트맵
          </button>
        </li>
      </ul>
    </div>
    <div class="header__navigation">
    <global-navigation></global-navigation>
      <button class="header__navigation-button button--link button--lg" type="button">
        <font-awesome-icon icon="burger-soda" />
      </button>
    </div>
  </header>
</template>

<script>
import GlobalNavigation from "@/modules/template/components/global-navigation/global-navigation"
export default {
  name: 'TheHeader',
  components: {
    GlobalNavigation
  }
}
</script>

<style>
@import "the-header.scss";
</style>
