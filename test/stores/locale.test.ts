import { test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { createHead } from '@unhead/vue';
import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import router from '@/routes';
import { useLocale } from '@/stores/locale';


const pinia = createPinia();
beforeEach(() => {
    setActivePinia(pinia);
});

test('useLocale store test', async () => {
    const head = createHead();

    await router.push("/");
    await router.isReady();

    mount(App, {
        global: {
            plugins: [i18n, pinia, head, router],
        },
    });

    const locale = useLocale();

    expect(locale.current).equals("en");
    await router.replace("/fa");
    expect(locale.current).equals("fa");
    await router.replace("/en/about");
    expect(locale.current).equals("en");
});
