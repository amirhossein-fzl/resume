import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LanguageSwitcher from '@/components/sections/LanguageSwitcher.vue';
import { createPinia } from 'pinia';
import i18n from '@/plugins/i18n';
import Icon from '@/components/Icon.vue';
import { useLanguage } from '@/stores/language';
import USIcon from '@/assets/svg/flags/us.svg?raw';
import IRIcon from '@/assets/svg/flags/ir.svg?raw';

test('LanguageSwitcher component test', async () => {
    const pinia = createPinia();
    const wrapper = mount(LanguageSwitcher, {
        global: {
            plugins: [pinia, i18n],
        },
    });
    const language = useLanguage();

    const fa_icon = mount(Icon, {
        props: {
            icon: IRIcon,
        },
    }).element.innerHTML;

    const en_icon = mount(Icon, {
        props: {
            icon: USIcon,
        },
    }).element.innerHTML;

    expect(wrapper.find('.lang').exists()).toBe(true);
    expect(wrapper.find('.lang').element.getAttribute('role')).toBe('button');
    expect(wrapper.find('.lang').findComponent(Icon).element.innerHTML).toEqual(
        fa_icon
    );
    expect(
        wrapper.find('.lang').findAllComponents(Icon)[1].props('size')
    ).toEqual(14);
    expect(wrapper.find('.items').exists()).toBe(false);

    await wrapper.find('.lang').trigger('focus');
    expect(wrapper.find('.items').exists()).toBe(true);

    await wrapper.find('.items button').trigger('click');
    expect(wrapper.findAllComponents(Icon)[0].element.innerHTML).toEqual(
        en_icon
    );
    expect(language.current).toEqual('en');

    await wrapper.findAll('.items button')[1].trigger('click');
    expect(wrapper.findAllComponents(Icon)[0].element.innerHTML).toEqual(
        fa_icon
    );
    expect(language.current).toEqual('fa');

    await wrapper.find('.lang').trigger('blur');
    expect(wrapper.find('.items').exists()).toBe(false);
});
