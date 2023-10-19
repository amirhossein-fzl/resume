import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Index from "@/pages/index.vue";
import About from "@/pages/about.vue";
import Skills from "@/pages/skills.vue";
import Portfolio from "@/pages/portfolio.vue";
import Contact from "@/pages/contact.vue";

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
            {
                path: "/contact",
                component: Contact
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
