import { test, expect, describe, beforeEach } from 'vitest';
import { changeLanguage, loadLanguage } from '@/core/language';
import { createPinia, setActivePinia } from 'pinia';
import { useLocale } from '@/stores/locale';

describe('core language test', async () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('loadLanguage test', () => {
        const locale = useLocale();
        locale.current = "en";
        loadLanguage();

        expect(document.documentElement.dir).equals("ltr");

        locale.current = "fa";
        loadLanguage();

        expect(document.documentElement.dir).equals("rtl");
    });

    test('changeLanguage test', async () => {
        let lang = await changeLanguage('en');

        // localStorage language
        const ls_lang = localStorage.getItem('lang');

        // to english
        expect(lang).toBe(ls_lang);
        expect(document.documentElement.dir == 'ltr').toBe(lang == 'en');

        // to persian
        lang = await changeLanguage('fa');
        expect(document.documentElement.dir == 'rtl').toBe(lang == 'fa');
    });
});
