<template>
  <section class="page-section main-board">
    <div class="page-section__inner">
      <div class="main-board__group main-board__group--data">
        <div class="main-board__top-bar">
          <div class="toggle-button" role="radiogroup">
            <button class="toggle-button__item toggle-button__item--selected" type="button" role="radio" aria-checked="false" aria-labelledby="radio1">
              <span class="toggle-button__text">인기 데이터</span>
            </button>
            <button class="toggle-button__item" type="button" role="radio" aria-checked="false" aria-labelledby="radio1">
              <span class="toggle-button__text">최신 데이터</span>
            </button>
          </div>
          <a href="#" class="button button--sm button--link main-board__view-more">
            <span class="button__text">
              더보기
            </span>
            <font-awesome-icon icon="angle-right" class="button__icon svg-icon" aria-hidden="true" />
          </a>
        </div>
        <ul class="data-list">
          <li class="data-list__item" v-for="(item, index) in dataList" :key="index">
            <a href="#" class="data-list__link">
              <span class="data-list__visual">
                {{ item.visual }}
              </span>
              <span class="data-list__information">
                <strong class="data-list__title">
                  {{item.title}}
                </strong>
                <p class="data-list__text">
                  {{item.text}}
                </p>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-board__group main-board__group--notice">
        <div class="main-board__top-bar">
        <h4 class="page-section__title">
          공지 사항
        </h4>
          <a href="#" class="button button--sm button--link main-board__view-more">
            <span class="button__text">
              더보기
            </span>
            <font-awesome-icon icon="angle-right" class="button__icon svg-icon" aria-hidden="true" />
          </a>
        </div>
        <ul class="notice-list">
          <li class="notice-list__item" v-for="(item, index) in noticeList" :key="index">
            <a href="#" class="notice-list__link">
              <span class="notice-list__badge">
                <div class="badge" :class="item.badgeTheme">
                  <span class="badge__label">{{ item.badge }}</span>
                </div>
              </span>
              <span class="notice-list__information">
                <strong class="notice-list__title">
                  {{item.title}}
                </strong>
                <p class="notice-list__text">
                  {{item.text}}
                </p>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-board__group main-board__group--deal">
        <div class="main-board__top-bar">
          <h4 class="page-section__title">
            알림마당
          </h4>
          <a href="#" class="button button--sm button--link main-board__view-more">
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
      noticeList: [
        {
          badge: '이벤트',
          badgeTheme: 'badge--cyan',
          title: '귀촌 후 거주주택 점유형태',
          text: '2021-06-23',
        },
        {
          badge: '안내',
          badgeTheme: 'badge--green',
          title: '시스템 점검',
          text: '2022-04-18',
        },
        {
          badge: '이벤트',
          badgeTheme: 'badge--teal-deep',
          title: '고양이가 어디 갔을까요?고양이가 어디 갔을까요?고양이가 어디 갔을까요?고양이가 어디 갔을까요?',
          text: '2021-06-23',
        },
        {
          badge: '안내',
          badgeTheme: 'badge--purple',
          title: 'Lorem ipsum dolor.',
          text: '2022-04-18',
        },
        {
          badge: '이벤트',
          badgeTheme: 'badge--red',
          title: '사람을 잘 따르는 소를 찾습니다.',
          text: '2021-06-23',
        },

      ],
      dataList: [
          {
            visual: '1',
            title: '귀촌 후 거주주택 점유형태',
            text: '축산물(소·돼지·닭·계란·오리)에 대한 실시간 경락가격, 유통 단계별 가격, 소비자가격, 축산물 가격지도에 관한 전반적인 국가가축방역통합정보시스템의 운영에 필요한 관리',
          },
        {
          visual: '2',
          title: 'Lorem ipsum dolor.',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, expedita!',
        },
        {
          visual: '3',
          title: '귀촌 후 거주주택 점유형태',
          text: '축산물(소·돼지·닭·계란·오리)에 대한 실시간 경락가격, 유통 단계별 가격, 소비자가격, 축산물 가격지도에 관한 전반적인 국가가축방역통합정보시스템의 운영에 필요한 관리',
        },
      ],
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
