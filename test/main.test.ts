import { test, expect, beforeEach, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import { createPinia, setActivePinia } from 'pinia';
import router from '../src/routes';
import i18n from '../src/plugins/i18n';
import Index from '../src/pages/index.vue';
import About from '../src/pages/about.vue';
import Skills from '../src/pages/skills.vue';

const pinia = createPinia();
const wrapper = mount(App, {
    global: {
        plugins: [pinia, i18n, router],
    },
});

describe('plugins test', () => {
    test('router test', async () => {
        await router.push('/');
        expect(wrapper.getComponent(Index));

        await router.replace('/about');
        expect(wrapper.getComponent(About));

        await router.replace('/skills');
        expect(wrapper.getComponent(Skills));
    });

    test('pinia stores test', async () => {
        beforeEach(() => {
            setActivePinia(pinia);
        });

        await router.replace('/');

        expect(pinia.state.value).haveOwnProperty('theme');
        expect(pinia.state.value).haveOwnProperty('language');
    });

    test('i18n test', async () => {
        expect(i18n.global.getLocaleMessage('en')['about_me']).toEqual(
            'About me'
        );
        expect(i18n.global.getLocaleMessage('fa')['about_me']).toEqual(
            'درباره من'
        );
        expect(i18n.global.t('experience', { year: 5 })).toEqual(
            '5 years experience'
        );

        expect(i18n.global.availableLocales).toContain('en');
        expect(i18n.global.availableLocales).toContain('fa');
    });
});
