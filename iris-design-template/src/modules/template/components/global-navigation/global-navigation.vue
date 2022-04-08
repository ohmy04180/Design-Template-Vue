<template>
  <nav class="navigation">
    <ul class="gnb">
      <li class="gnb__item" v-for="(item, key) in gnbList" :key="key">
        <a :href="item.link" class="gnb__link" target="_blank">
          {{ item.title }}
        </a>
        <ul class="lnb">
          <li class="lnb__item" v-for="(item, key) in item.lnbList" :key="key">
            <a :href="item.link" class="lnb__link" target="_blank">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'GlobalNavigationBar',
  components: {},
  data() {
    return {
      gnbList: [
        {
          title: '데이터 검색',
          link: "https://www.naver.com/",
          lnbList: [
            {
              title: '통합 검색',
              link: "https://www.naver.com/"
            },
            {
              title: '시각화 검색',
              link: "https://www.naver.com/"
            },
            {
              title: '데이터 표준 검색',
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: '데이터 활용',
          link: "https://www.naver.com/",
          lnbList: [
            {
              title: '데이터 활용사례',
              link: "https://www.naver.com/"
            },
            {
              title: '데이터 시각화',
              link: "https://www.naver.com/"
            },
            {
              title: '주요 공공데이터',
              link: "https://www.naver.com/"
            },
            {
              title: '창업 경진 대회',
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: '데이터 신청',
          link: "https://www.naver.com/",
          lnbList: [
            {
              title: '데이터 분석신청',
              link: "https://www.naver.com/"
            },
            {
              title: '오픈 API 신청',
              link: "https://www.naver.com/"
            },
            {
              title: '공공데이터 제공신청',
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: '참여 & 소통',
          link: "https://www.naver.com/",
          lnbList: [
            {
              title: '공지사항',
              link: "https://www.naver.com/"
            },
            {
              title: 'FAQ',
              link: "https://www.naver.com/"
            },
            {
              title: '문의하기',
              link: "https://www.naver.com/"
            },
            {
              title: '포털소개',
              link: "https://www.naver.com/"
            }
          ]
        },
        {
          title: '마이페이지',
          link: "https://www.naver.com/",
          lnbList: [
            {
              title: '신청 현항',
              link: "https://www.naver.com/"
            },
            {
              title: '내 활용사례',
              link: "https://www.naver.com/"
            },
            {
              title: '문의내역',
              link: "https://www.naver.com/"
            },
            {
              title: '관심 공공데이터',
              link: "https://www.naver.com/"
            },
            {
              title: '내 정보관리',
              link: "https://www.naver.com/"
            }
          ]
        },
      ],
    }
  }
}
</script>

<style>
</style>
