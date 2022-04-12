<template>
  <nav class="gnb" :class="isLnbOpen ? 'gnb--lnb-open' : ''">
    <ul class="gnb__list">
      <li class="gnb__item" v-for="(item, index) in gnbList" :key="index">
<!--        @blur="isLnbOpen = false"-->
        <button type="button" class="gnb__button" @focus.self="isLnbOpen = true" >
          <span class="gnb__text">
            {{ item.title }}
          </span>
        </button>
        <ul class="lnb">
          <li class="lnb__item" v-for="(lnbItem, index) in item.lnbList" :key="index">
            <a :href="lnbItem.link" class="lnb__link button button--link" target="_blank">
              <span class="lnb__text">
                {{ lnbItem.title }}
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "GlobalNavigationBar",
  components: {},
  data() {
    return {
      isLnbOpen: false,
      gnbList: [
        {
          title: "데이터 검색",
          lnbList: [
            {
              title: "통합 검색",
              link: "https://www.naver.com/"
            },
            {
              title: "시각화 검색",
              link: "https://www.naver.com/"
            },
            {
              title: "데이터 표준 검색",
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: "데이터 활용",
          lnbList: [
            {
              title: "데이터 활용사례",
              link: "https://www.naver.com/"
            },
            {
              title: "데이터 시각화",
              link: "https://www.naver.com/"
            },
            {
              title: "주요 공공데이터",
              link: "https://www.naver.com/"
            },
            {
              title: "창업 경진 대회",
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: "데이터 신청",
          lnbList: [
            {
              title: "데이터 분석신청",
              link: "https://www.naver.com/"
            },
            {
              title: "오픈 API 신청",
              link: "https://www.naver.com/"
            },
            {
              title: "공공데이터 제공신청",
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: "참여 & 소통",
          lnbList: [
            {
              title: "공지사항",
              link: "https://www.naver.com/"
            },
            {
              title: "FAQ",
              link: "https://www.naver.com/"
            },
            {
              title: "문의하기",
              link: "https://www.naver.com/"
            },
            {
              title: "포털소개",
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: "마이페이지",
          lnbList: [
            {
              title: "신청 현항",
              link: "https://www.naver.com/"
            },
            {
              title: "내 활용사례",
              link: "https://www.naver.com/"
            },
            {
              title: "문의내역",
              link: "https://www.naver.com/"
            },
            {
              title: "관심 공공데이터",
              link: "https://www.naver.com/"
            },
            {
              title: "내 정보관리",
              link: "https://www.naver.com/"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./global-navigation.scss";
</style>
