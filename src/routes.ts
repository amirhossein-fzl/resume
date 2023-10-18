import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Index from "@/pages/index.vue";
import About from "@/pages/about.vue";
import Skills from "@/pages/skills.vue";
import Portfolio from "@/pages/portfolio.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                component: Index
            },
            {
                path: "/about",
                component: About
            },
            {
                path: "/skills",
                component: Skills
            },
            {
                path: "/portfolio",
                component: Portfolio
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
