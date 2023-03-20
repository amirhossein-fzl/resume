import { register, init, locale } from 'svelte-i18n';

export function initialLanguage() {
    register('english', () => import('@/langs/en.json'));
    register('persian', () => import('@/langs/fa.json'));

    let language: 'english' | 'persian';
    if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', 'english');
        language = 'english';
    } else {
        // @ts-ignore
        language = localStorage.getItem('lang');
    }

    if (language == 'persian') {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    init({
        fallbackLocale: language,
        initialLocale: language,
    });
}

export function changeLanguage(lang: 'english' | 'persian') {
    localStorage.setItem('lang', lang);
    locale.set(lang);

    if (lang == 'persian') {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    return lang;
}