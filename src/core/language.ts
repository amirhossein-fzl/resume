import config from "@config";

export function changeLanguage(lang: "en" | "fa") {
    if (lang == "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    localStorage.setItem("lang", lang);

    return lang;
}

export function loadLanguage() {
    let lang = localStorage.getItem("lang");

    if (lang == null) {
        localStorage.setItem("lang", config.lang_in_ssr);
        lang = config.lang_in_ssr;
    }

    if (lang == "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    return lang;
}
