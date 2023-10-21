import { createI18n } from "vue-i18n";
import en from "@/assets/langs/en.json";
import fa from "@/assets/langs/fa.json";
import config from "@config";

export default createI18n({
    legacy: false,
    locale: config.lang_in_ssr,
    messages: {
        en,
        fa,
    },
});