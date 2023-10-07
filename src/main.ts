import { createApp } from "vue";
import "@/assets/styles/app.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes";

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.mount("#app");
