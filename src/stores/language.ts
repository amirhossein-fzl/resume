import { defineStore } from 'pinia';
import { changeLanguage } from '@/core/language';
import config from '@config';

export const useLanguage = defineStore('language', {
    state: () => ({
        current: import.meta.env.SSR
            ? config.lang_in_ssr
            : localStorage.getItem('lang'),
    }),
    getters: {
        getLanguage(state) {
            return state.current;
        },
    },
    actions: {
        changeTo(lang: string) {
            this.current = lang;
            // @ts-ignore
            changeLanguage(lang);
        },
    },
});
