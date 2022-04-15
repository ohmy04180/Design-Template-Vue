<template>
  <section class="page-section main-board">
    <div class="page-section__inner">
      <div class="main-board__group">
        <div class="main-board__top-bar">
          <div class="toggle-button" role="radiogroup">
            <button class="toggle-button__item toggle-button__item--selected" type="button" role="radio" aria-checked="false" aria-labelledby="radio1">
              <span class="toggle-button__text">Toggle Button</span>
            </button>
            <button class="toggle-button__item" type="button" role="radio" aria-checked="false" aria-labelledby="radio1">
              <span class="toggle-button__text">Toggle Button</span>
            </button>
          </div>
          <a href="#" class="button button--sm button--link">
            <span class="button__text">
              더보기
            </span>
            <font-awesome-icon icon="angle-right" class="button__icon svg-icon" aria-hidden="true" />
          </a>
        </div>

      </div>
      <div class="main-board__group">
        <div class="main-board__top-bar">
        <h4 class="page-section__title">
          공지 사항
        </h4>
          <a href="#" class="button button--sm button--link">
            <span class="button__text">
              더보기
            </span>
            <font-awesome-icon icon="angle-right" class="button__icon svg-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div class="main-board__group">
        <div class="main-board__top-bar">
          <h4 class="page-section__title">
            알림마당
          </h4>
          <a href="#" class="button button--sm button--link">
            <span class="button__text">
              더보기
            </span>
            <font-awesome-icon icon="angle-right" class="button__icon svg-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "MainBoard",
  components: {},
  data() {
    return {
      tagList: [
        {
          name: '북극곰',
          tagTheme: 'tag--teal'
        },
        {
          name: '사막 여우',
          tagTheme: 'tag--red-deep'
        },
        {
          name: '캥거루',
          tagTheme: 'tag--green-deep'
        },
        {
          name: '청둥오리',
          tagTheme: 'tag--purple-deep'
        },
        {
          name: '삯',
          tagTheme: 'tag--cyan-deep'
        },
      ]
    }
  }
};
</script>

<style lang="scss">
@import "main-board";
</style>
