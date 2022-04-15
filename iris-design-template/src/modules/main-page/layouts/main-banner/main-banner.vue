<template>
  <section class="page-section main-banner">
    <div class="page-section__inner">
      <div class="main-banner__left-content">
        <div class="page-subject">
          <h2 class="page-subject__title">
            귀여운 동물 데이터의 세계
          </h2>
          <p class="page-subject__text">
            궁금했던 동물의 이름을 검색해 보세요
          </p>
        </div>
        <div class="main-banner__search text-input-group text-input-group--lg">
          <label for="inp-group-lg-01" class="hidden">Label</label>
          <input type="text" id="input-group-lg-01" class="text-input" placeholder="placeholder text"/>
          <button type="button" class="text-input-group__search-button button button--icon button--lg button--tertiary">
            <font-awesome-icon icon="magnifying-glass" class="svg-icon button__icon" aria-hidden="true"/>
          </button>
        </div>
        <div class="tag-group">
          <button type="button" :class="item.tagTheme" class="tag tag--lg" v-for="(item, index) in tagList" :key="index">
            <span class="tag__label">{{ item.name }}</span>
          </button>
        </div>
        <div class="main-banner__lists">
          <h4 class="page-section__title">카테고리</h4>
          <div class="banner-category">
            <ul class="banner-category__list">
              <li class="banner-category__item" v-for="(item, index) in categoryList" :key="index">
                <a href="#" class="banner-category__link">
                  <font-awesome-icon :icon="item.icon" class="svg-icon banner-category__icon"/>
                  <span class="banner-category__text">
                    {{ item.text }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main-banner__right-content">
        RIGHT CONTENT
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "MainBanner",
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
      ],
      categoryList: [
        {
          icon: 'otter',
          text: '수달'
        },
        {
          icon: 'frog',
          text: '개구리'
        },
        {
          icon: 'horse',
          text: '말'
        },
        {
          icon: 'cat',
          text: '고양이'
        },
        {
          icon: 'dove',
          text: '도브'
        },
        {
          icon: 'kiwi-bird',
          text: '키위새'
        },
        {
          icon: 'hippo',
          text: '하마'
        },
        {
          icon: 'worm',
          text: '유통소비'
        },
        {
          icon: 'dog',
          text: '강아지'
        },
        {
          icon: 'cow',
          text: '소'
        },

      ]
    }
  }
};
</script>

<style lang="scss">
@import "main-banner";
</style>
