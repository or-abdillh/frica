import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        meta: {
            title: 'Explore'
        },
        component: () => import('@page/index.vue')
    },
    {
        name: 'Vacation',
        path: '/vacation/:slug',
        component: () => import('@page/vacation/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router