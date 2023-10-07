import { createApp } from "vue";
import "@/assets/styles/app.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes";
import i18n from "./plugins/i18n";

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.use(i18n)
.mount("#app");
