import { test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import i18n from '@/plugins/i18n';
import { createPinia, setActivePinia } from 'pinia';
import { createHead } from "@unhead/vue";
import Contact from '@/pages/contact.vue';
import WithProfileLayout from '@/layouts/WithProfileLayout.vue';

test('Contact page test ...', async () => {
    const pinia = createPinia();
    const head = createHead();
    const wrapper = mount(Contact, {
        global: {
            plugins: [i18n, head, pinia],
        },
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    expect(wrapper.findComponent(WithProfileLayout).exists()).toBe(true);
    expect(wrapper.find('h1.page-title').text()).toBe(
        i18n.global.t('contact_me')
    );
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('form').element.getAttribute('method')).toBe('post');
    expect(wrapper.find('form button[type="submit"]').exists()).toBe(true);

    await wrapper.find('form').trigger('submit');

    wrapper.findAll('form input').forEach((input) => {
        expect(input.element.classList.contains('invalid')).toBe(true);
    });
    expect(
        wrapper.find('form textarea').element.classList.contains('invalid')
    ).toBe(true);
});
