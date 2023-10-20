import { test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useLanguage } from '@/stores/language';
import { mount } from '@vue/test-utils';
import { createHead } from '@unhead/vue';
import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import router from '@/routes';

test('useLanguage store test', () => {
    const pinia = createPinia();
    const head = createHead();
    mount(App, {
        global: {
            plugins: [i18n, pinia, head, router],
        },
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    localStorage.setItem('lang', 'en');

    const language = useLanguage();

    expect(language.current).toBe('en');
    expect(language.getLanguage).toBe('en');

    language.changeTo('fa');

    expect(language.current).toBe('fa');
    expect(language.getLanguage).toBe('fa');
    expect(localStorage.getItem('lang')).toBe('fa');
});
