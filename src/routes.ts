import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                component: Index
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
