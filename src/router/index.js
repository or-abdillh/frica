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
        meta: {
            title: 'Explore'
        },
        component: () => import('@page/vacation/index.vue')
    },
    {
        name: 'Channel',
        path: '/channel',
        meta: {
            title: 'Channel'
        },
        component: () => import('@page/channel/index.vue')
    },
    {
        name: 'ChannelDetail',
        path: '/channel/detail/:slug',
        meta: {
            title: 'Channel'
        },
        component: () => import('@page/channel/detail/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router