import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Skill from '@/components/Skill.vue';
import i18n from '@/plugins/i18n';
import Icon from '@/components/Icon.vue';
import TypeScriptIcon from '@/assets/svg/icons/typescript.svg?raw';

test('Skill component test', async () => {
    const wrapper = mount(Skill, {
        global: {
            plugins: [i18n],
        },
        props: {
            icon: TypeScriptIcon,
            experience: 4,
            name: 'Typescript',
        },
    });

    expect(wrapper.find('article.skill').exists()).toBe(true);
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(wrapper.getComponent(Icon).props('size')).toEqual(70);
    expect(wrapper.find('.info .name').text()).toEqual('Typescript');
    expect(wrapper.find('.info .hist').text()).toEqual(
        i18n.global.t('experience', { year: 4 })
    );
});
