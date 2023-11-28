import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
    createMemoryHistory,
} from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import config from "@config";
import { useLocale } from './stores/locale';
import type Locales from './types/locales';

const routes: RouteRecordRaw[] = [
    {
        path: '/:locale(en|fa)',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: async () => await import('@/pages/index.vue'),
            },
            {
                path: 'about',
                component: async () => await import('@/pages/about.vue'),
            },
            {
                path: 'skills',
                component: async () => await import('@/pages/skills.vue'),
            },
            {
                path: 'portfolio',
                component: async () => await import('@/pages/portfolio.vue'),
            },
            {
                path: 'contact',
                component: async () => await import('@/pages/contact.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
});

router.beforeEach(async (route) => {
    const locale = useLocale();
    locale.current = import.meta.env.SSR
        ? route.params.locale as Locales || config.default_language as Locales
        : route.params.locale as Locales || localStorage?.getItem('lang') || config.default_language as Locales;

    if (route.fullPath.split('/')[1] !== locale.current) {
        await router.replace(`/${locale.current + route.path}`);
    }
});

export default router;
