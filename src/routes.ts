import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/index.vue";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Index,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
