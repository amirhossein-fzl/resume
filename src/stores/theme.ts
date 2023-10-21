import { defineStore } from 'pinia';

export const useTheme = defineStore('theme', {
    state: () => ({
        value: import.meta.env.SSR
            ? 'light'
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
