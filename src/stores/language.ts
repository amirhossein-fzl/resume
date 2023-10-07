import { defineStore } from "pinia";
import { changeLanguage } from "@/core/language";

export const useLanguage = defineStore("language", {
    state: () => ({
        current: localStorage.getItem("lang"),
    }),
    getters: {
        getLanguage(state) {
            return state.current;
        }
    },
    actions: {
        changeTo(lang: string) {
            this.current = lang;
            // @ts-ignore
            changeLanguage(lang);
        },
    }
});
