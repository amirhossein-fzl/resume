import { defineStore } from 'pinia';
import { changeLanguage } from '@/core/language';
import i18n from '@/plugins/i18n';

export const useLanguage = defineStore('language', {
    state: () => ({
        current: import.meta.env.SSR
            ? i18n.global.locale
            : localStorage.getItem('lang'),
    }),
    getters: {
        getLanguage(state) {
            return state.current;
        },
    },
    actions: {
        async changeTo(lang: string) {
            this.current = lang;
            // @ts-ignore
            await changeLanguage(lang);
        },
    },
});
