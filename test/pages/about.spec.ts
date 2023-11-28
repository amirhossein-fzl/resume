import { test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import i18n from '@/plugins/i18n';
import router from '@/routes';
import { createPinia, setActivePinia } from 'pinia';
import { createHead } from "@unhead/vue";
import About from '@/pages/about.vue';
import Profile from '@/components/sections/Profile.vue';
import WithProfileLayout from '@/layouts/WithProfileLayout.vue';
import Info from '@/components/sections/Info.vue';

test('About page test', async () => {
    const pinia = createPinia();
    const head = createHead();
    i18n.global.locale.value = "en";
    const wrapper = mount(About, {
        global: {
            plugins: [i18n, head, pinia, router],
        },
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    expect(wrapper.findComponent(About).exists()).toBe(true);
    expect(wrapper.findComponent(WithProfileLayout).exists()).toBe(true);
    expect(wrapper.find("h1.page-title").text()).toBe(i18n.global.t("about_me"));
    expect(wrapper.findComponent(Profile).exists()).toBe(true);
    expect(wrapper.findComponent(Info).exists()).toBe(true);
    expect(wrapper.find('h1.page-title').text()).toBe(
        i18n.global.t('about_me')
    );
    expect(wrapper.find('section.content').exists()).toBe(true);
});
