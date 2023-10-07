import { createI18n } from "vue-i18n";
import en from "@/assets/langs/en.json";
import fa from "@/assets/langs/fa.json";

export default createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en,
        fa,
    },
});