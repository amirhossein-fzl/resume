import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavigationVue from '@/components/sections/Navigation.vue';
import LanguageSwitcher from '@/components/sections/LanguageSwitcher.vue';
import ThemeSwitcher from '@/components/sections/ThemeSwitcher.vue';
import i18n from '@/plugins/i18n';
import { createPinia } from 'pinia';
import router from '@/routes';

test('Navigation component', async () => {
    const pinia = createPinia();
    const wrapper = mount(NavigationVue, {
        global: {
            plugins: [i18n, pinia, router],
        },
    });

    const nav_el = wrapper.find({ ref: 'nav_el' });
    await router.push('/');

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
        router.currentRoute.value.fullPath
    );

    if (wrapper.find('.m-active').exists()) {
        expect(wrapper.find('.m-active').element.getAttribute('href')).toBe(
            router.currentRoute.value.fullPath
        );
    }
});
