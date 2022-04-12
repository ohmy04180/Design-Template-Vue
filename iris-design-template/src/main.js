import {createApp} from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


// Vue3에서 FontAwsome 사용 - https://bangj.tistory.com/37
// Vue3 - https://velog.io/@katanazero86/vue3-%EB%AF%B8%EB%A6%AC-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0