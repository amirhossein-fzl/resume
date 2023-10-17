import { test, expect, describe } from "vitest";
import { changeLanguage, loadLanguage } from "@/core/language";

describe("core language test", () => {
    test("loadLanguage test", () => {

        if (localStorage.getItem("lang") == null) {
            loadLanguage();
            expect(localStorage.getItem("lang")).toBe("en");
        }

        const lang = loadLanguage();
        expect(document.documentElement.dir == "rtl").toBe(lang == "fa");
        expect(document.documentElement.dir == "ltr").toBe(lang == "en");
    });

    test("changeLanguage test", () => {
        let lang = changeLanguage("en");

        // localStorage language
        const ls_lang = localStorage.getItem("lang");

        // to english
        expect(lang).toBe(ls_lang);
        expect(document.documentElement.dir == "ltr").toBe(lang == "en");

        // to persian
        lang = changeLanguage("fa");
        expect(document.documentElement.dir == "rtl").toBe(lang == "fa");
    });
});
