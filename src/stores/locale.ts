import { defineStore } from 'pinia';
import i18n from '@/plugins/i18n';

export const useLocale = defineStore('locale', {
    state: () => ({
        current: i18n.global.locale,
    }),
    getters: {
        getLocale(state) {
            return state.current;
        },
    },
});
