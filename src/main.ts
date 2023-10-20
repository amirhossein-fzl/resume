import { createApp } from "vue";
import "@/assets/styles/app.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes";
import i18n from "./plugins/i18n";
import { createHead } from "@unhead/vue";

const pinia = createPinia();
const head = createHead();

createApp(App)
.use(pinia)
.use(head)
.use(router)
.use(i18n)
.mount("#app");
