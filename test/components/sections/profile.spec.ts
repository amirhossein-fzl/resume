import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Profile from '@/components/sections/Profile.vue';
import i18n from '@/plugins/i18n';

test('Profile component test', async () => {
    const wrapper = mount(Profile, {
        global: {
            plugins: [i18n],
        },
    });

    expect(wrapper.find('.avatar').exists()).toBe(true);
    expect(wrapper.find('.name').text()).toEqual(i18n.global.t('my_name'));
    expect(wrapper.find('.job').text()).toEqual(i18n.global.t('job'));
    expect(wrapper.find('.intro').text()).toEqual(
        i18n.global.t('short_description')
    );
    expect(wrapper.find('.avatar').element.getAttribute('role')).toBe('button');
    expect(wrapper.find('.backdrop').exists()).toBe(false);
    expect(wrapper.find('.fw-img').exists()).toBe(false);

    await wrapper.find('.avatar').trigger('click');
    expect(wrapper.find('.backdrop').exists()).toBe(true);
    expect(wrapper.find('.fw-img').exists()).toBe(true);

    await wrapper.find('.backdrop').trigger('click');
    expect(wrapper.find('.backdrop').exists()).toBe(false);
    expect(wrapper.find('.fw-img').exists()).toBe(false);
});
