import { test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { loadTheme } from '@/core/theme';
import { createPinia, setActivePinia } from 'pinia';
import i18n from '@/plugins/i18n';
import router from '@/routes';
import { useTheme } from '@/stores/theme';
import { createHead } from '@unhead/vue';

test('loadTheme test', async () => {
    const pinia = createPinia();
    const head = createHead();
    mount(App, {
        global: {
            plugins: [pinia, head, i18n, router],
        },
    });

    const themeStore = useTheme();

    beforeEach(() => {
        setActivePinia(pinia);
    });

    if (localStorage.getItem('theme') == null) {
        loadTheme();
        expect(localStorage.getItem('theme')).toBe(themeStore.value);
    }

    loadTheme();

    expect(document.documentElement.classList.contains('dark')).toBe(
        localStorage.getItem('theme') == 'dark'
    );
    expect(!document.documentElement.classList.contains('dark')).toBe(
        localStorage.getItem('theme') == 'light'
    );
});
