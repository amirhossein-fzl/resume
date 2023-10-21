import { defineStore } from 'pinia';
import config from '@config';

export const useTheme = defineStore('theme', {
    state: () => ({
        value: import.meta.env.SSR
            ? config.theme_in_ssr
            : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light',
    }),
    getters: {
        getTheme(state) {
            return state.value;
        },
        isDark(state) {
            return state.value == 'dark';
        },
    },
    actions: {
        toggleTheme() {
            this.value = this.value == 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', this.value);

            if (this.value == 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
    },
});
