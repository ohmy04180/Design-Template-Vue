import {createApp} from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


// Vue3에서 FontAwsome 사용 - https://kkiuk.tistory.com/344
// Vue3 - https://velog.io/@katanazero86/vue3-%EB%AF%B8%EB%A6%AC-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0