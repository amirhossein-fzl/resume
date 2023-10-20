import { test, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import i18n from "@/plugins/i18n";
import router from "@/routes";
import { createPinia, setActivePinia } from "pinia";
import { createHead } from "@unhead/vue";
import Index from "@/pages/index.vue";
import Info from "@/components/sections/Info.vue";
import Profile from "@/components/sections/Profile.vue";

test("Me page test", async () => {
    const pinia = createPinia();
    const head = createHead();
    const wrapper = mount(Index, {
        global: {
            plugins: [i18n, head, pinia, router]
        }
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    expect(wrapper.findComponent(Index).exists()).toBe(true);
    expect(wrapper.find(".flex-container").exists()).toBe(true);
    expect(wrapper.findComponent(Profile).exists()).toBe(true);
    expect(wrapper.findComponent(Info).exists()).toBe(true);
});
