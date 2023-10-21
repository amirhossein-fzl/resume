import { createSSRApp } from 'vue';
import '@/assets/styles/app.scss';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './routes';
import i18n from './plugins/i18n';
import { createHead } from '@unhead/vue';

export const createApp = () => {
    const pinia = createPinia();
    const head = createHead();

    const app = createSSRApp(App);
    app.use(pinia);
    app.use(head);
    app.use(router);
    app.use(i18n);
    return {
        app,
        router,
        head,
    };
};
