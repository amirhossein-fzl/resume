import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Navigation from '@/components/sections/Navigation.vue';
import LanguageSwitcher from '@/components/sections/LanguageSwitcher.vue';
import ThemeSwitcher from '@/components/sections/ThemeSwitcher.vue';
import i18n from '@/plugins/i18n';
import { createPinia } from 'pinia';
import router from '@/routes';

test('Navigation component test', async () => {
    const pinia = createPinia();
    i18n.global.locale.value = "en";
    const wrapper = mount(Navigation, {
        global: {
            plugins: [i18n, pinia, router],
        },
    });

    const nav_el = wrapper.find({ ref: 'nav_el' });
    await router.push('/en');

    expect(nav_el.exists()).toBe(true);
    expect(nav_el.findComponent(LanguageSwitcher).exists()).toBe(true);
    expect(nav_el.findComponent(ThemeSwitcher).exists()).toBe(true);
    expect(wrapper.find('.backdrop').exists()).toBe(false);
    expect(wrapper.find('.menu-side').exists()).toBe(false);

    await wrapper.find('.menu-bars').trigger('click');
    expect(wrapper.find('.backdrop').exists()).toBe(true);
    expect(wrapper.find('.menu-side').exists()).toBe(true);

    await wrapper.find('.close-menu-btn').trigger('click');
    expect(wrapper.find('.backdrop').exists()).toBe(false);
    expect(wrapper.find('.menu-side').exists()).toBe(false);

    await wrapper.find('.menu-bars').trigger('click');
    await wrapper.find('.backdrop').trigger('click');
    expect(wrapper.find('.backdrop').exists()).toBe(false);
    expect(wrapper.find('.menu-side').exists()).toBe(false);

    expect(wrapper.find('.active').element.getAttribute('href')).toBe(
        `${router.currentRoute.value.path}/`
    );

    if (wrapper.find('.m-active').exists()) {
        expect(wrapper.find('.m-active').element.getAttribute('href')).toBe(
            `${router.currentRoute.value.path}/`
        );
    }
});
