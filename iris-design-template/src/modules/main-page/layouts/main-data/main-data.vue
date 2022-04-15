<template>
  <section class="page-section main-data">
    <div class="page-section__inner">
      <div class="main-data__lists">
        <h4 class="page-section__title">
          데이터 분석 및 활용 사례
        </h4>
        <div class="data-application">
          <ul class="data-application__list">
            <li class="data-application__item" v-for="(item, index) in dataApplicationList" :key="index">
              <a href="#" class="data-application__link">
                <span class="data-application__badge">
                  <div class="badge" :class="item.badgeTheme">
                    <span class="badge__label">{{ item.badgeLabel }}</span>
                  </div>
                </span>
                <span class="data-application__thumbnail">
                  <img :src="item.imgUrl" alt="data분석사례">
                </span>
                <span class="data-application__information">
                  <span class="data-application__title">
                    {{ item.title }}
                  </span>
                  <p class="data-application__text">
                    {{ item.text }}
                  </p>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "MainData",
  components: {},
  data() {
    return {
      dataApplicationList: [
        {
          badgeLabel: '고양이 데이터 분석',
          badgeTheme: 'badge--teal',
          imgUrl: 'https://images.unsplash.com/photo-1649794962024-d08223b1a861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80',
          title: '2022년 고양이 개체 수 데이터 분석',
          text: '길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플\n'
        } ,
        {
          badgeLabel: '소 종류 데이터 분석',
          badgeTheme: 'badge--purple-deep',
          imgUrl: 'https://images.unsplash.com/photo-1649794962024-d08223b1a861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80',
          title: '소 종류 데이터 분석',
          text: '길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플\n'
        },
        {
          badgeLabel: '강아지 주 산책로 데이터 분석',
          badgeTheme: 'badge--red-deep',
          imgUrl: 'https://images.unsplash.com/photo-1649794962024-d08223b1a861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80',
          title: '강아지가 주로 산책하는 공원 데이터 분석합니다.',
          text: '길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플\n'
        },
        {
          badgeLabel: '강아지 주 산책로 데이터 분석',
          badgeTheme: 'badge--cyan-deep',
          imgUrl: 'https://images.unsplash.com/photo-1649794962024-d08223b1a861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80',
          title: '강아지가 주로 산책하는 공원 데이터 분석합니다.',
          text: '길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플길을 잃은 동물이나 유기 된 동물을 보호하고 있는 보호소의 정보를 조회 하는 어플\n'
        }
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
@import "main-data";
</style>
