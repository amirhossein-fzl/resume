import { test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import i18n from '@/plugins/i18n';
import router from '@/routes';
import { useTheme } from '@/stores/theme';

test('useLanguage store test', () => {
    const pinia = createPinia();
    mount(App, {
        global: {
            plugins: [i18n, pinia, router],
        },
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    localStorage.setItem('lang', 'en');

    const theme = useTheme();

    expect(theme.value).toBe('light');
    expect(theme.getTheme).toBe('light');
    expect(theme.isDark).toBe(false);

    theme.toggleTheme();

    expect(localStorage.getItem('theme')).toBe('dark');
    expect(theme.value).toBe('dark');
    expect(theme.getTheme).toBe('dark');
    expect(theme.isDark).toBe(true);
});
