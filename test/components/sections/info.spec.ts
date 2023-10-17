import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Info from '@/components/sections/Info.vue';
import i18n from '@/plugins/i18n';

test('Info component', async () => {
    const wrapper = mount(Info, {
        global: {
            plugins: [i18n],
        },
    });

    const status = i18n.global
        .getLocaleMessage('en')
        ['my_status'].toLowerCase();
    const age = Math.floor(
        // @ts-ignore
        (new Date() - new Date('2005-06-15').getTime()) / 3.15576e10
    );

    expect(wrapper.find('ul.about-me').exists()).toBe(true);
    expect(wrapper.find('ul.about-me li.ready-status').exists()).toBe(
        status == 'ready'
    );
    expect(wrapper.find('ul.about-me li.no-ready-status').exists()).toBe(
        status != 'ready'
    );
    expect(wrapper.findAll('ul.about-me li')[1].findAll('span')[1].text()).toBe(
        age.toString()
    );
});
