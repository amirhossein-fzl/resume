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
        localStorage.setItem("lang", "en");
        lang = "en";
    } else if (lang == "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    return lang;
}
