<template>
  <footer>
    <div class="footer">
      <div class="footer__top-bar">
          <ul class="policy-list">
            <li class="policy-list__item">
              <a href="#" class="policy-list__link button button--link button--sm">
                이용약관
              </a>
            </li>
            <li class="policy-list__item">
              <a href="#" class="policy-list__link button button--link button--sm">
                개인정보처리방침
              </a>
            </li>
            <li class="policy-list__item">
              <a href="#" class="policy-list__link button button--link button--sm">
                저작권정책
              </a>
            </li>
            <li class="policy-list__item">
              <a href="#" class="policy-list__link button button--link button--sm">
                개인정보침해 신고센터
              </a>
            </li>
          </ul>
        <!-- select--open 클래스 추가시 open -->
        <div class="select select-company" role="select">
          <div class="select-selector" aria-expanded="false" aria-controls="select-01">
            <button class="select-selector__button" type="button">
              <span class="select-selector__title">텍스트 유형</span>
              <font-awesome-icon icon="angle-down" class="svg-icon select-selector__icon" aria-hidden="true" />
            </button>
          </div>
          <div class="select-container" id="select-01" aria-haspopup="true">
            <ul class="select-container__list">
              <li class="select-container__item">
                <button class="select-container__button" type="button" role="option">
                  <span class="select-container__text">URL 관리</span>
                </button>
              </li>
              <!-- 선택 된 객체에 select-container__item--selected 클래스 추가 -->
              <li class="select-container__item select-container__item--selected">
                <button class="select-container__button" type="button" role="option">
                  <span class="select-container__text">권한 설정</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__company-information">
      <div class="footer__logo">
        <font-awesome-icon icon="atom" class="svg-icon" aria-hidden="true" />
      </div>
      <div class="company-information">
        <address class="company-information__address">
          세종특별자치시 국책연구원 5로(반곡동 722-3) (우 30148)
          <br/>
          농식품 지식정보서비스(공공데이터) 오아시스 운영센터 (평일 09:00~18:00, 점심시간 12:00~13:00) 대표번호 : 1661-5159 /Fax : 044-861-8749/E-mail : opendata@epis.or.k
        </address>
        <p class="company-information__copyright">
          Copyright &copy; by MAFRA. ALL Rights Reserved.
        </p>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  components: {}
};
</script>

<style lang="scss">
@import "the-footer.scss";
</style>
