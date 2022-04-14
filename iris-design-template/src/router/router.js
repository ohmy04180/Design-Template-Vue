import { createWebHistory, createRouter } from 'vue-router';
import Index from "@/modules/main-page/main-page"
const routes = [
    {
        path: "/",
        redirect: "./app"
    },
    {
        path: "/app",
        component: Index
    }
]

const router = createRouter(({
    history: createWebHistory(),
    routes
}))

export default router;

// https://velog.io/@cindy-choi/Vue3-%EC%97%90-vue-route-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0
// https://mmong-mong.tistory.com/4
// https://kamang-it.tistory.com/543