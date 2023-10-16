import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Index from "@/pages/index.vue";
import About from "@/pages/about.vue";
import Skills from "@/pages/skills.vue";

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
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
