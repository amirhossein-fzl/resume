import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
    createMemoryHistory,
} from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: async () => await import('@/pages/index.vue'),
            },
            {
                path: '/about',
                component: async () => await import('@/pages/about.vue'),
            },
            {
                path: '/skills',
                component: async () => await import('@/pages/skills.vue'),
            },
            {
                path: '/portfolio',
                component: async () => await import('@/pages/portfolio.vue'),
            },
            {
                path: '/contact',
                component: async () => await import('@/pages/contact.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
});

export default router;
