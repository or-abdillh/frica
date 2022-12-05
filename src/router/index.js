import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@page/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router