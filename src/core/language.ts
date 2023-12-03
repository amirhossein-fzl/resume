import router from "@/routes";
import { useLocale } from "@/stores/locale";

export async function changeLanguage(lang: "en" | "fa") {
    if (lang == "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    localStorage.setItem("lang", lang);
    const route = router.currentRoute.value;

    await router.replace(`/${lang}/${route.path.split("/").slice(2).join("/")}`);

    return lang;
}

export function loadLanguage() {
    const locale = useLocale();

    let lang = locale.current;

    if (lang == "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }
    document.documentElement.lang = lang;

    return lang;
}
