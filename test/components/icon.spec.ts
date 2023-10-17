import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Icon from '@/components/Icon.vue';
import TypeScriptIcon from '@/assets/svg/icons/typescript.svg?raw';
import JavaScriptIcon from '@/assets/svg/icons/javascript.svg?raw';

test('icon component', async () => {
    const wrapper = mount(Icon, {
        props: {
            icon: TypeScriptIcon,
        },
    });

    expect(
        wrapper.get(
            '[d="m9.77,0h80.47c5.39,0,9.77,4.37,9.77,9.77v80.47c0,5.39-4.37,9.77-9.77,9.77H9.77c-5.39,0-9.77-4.37-9.77-9.77V9.77C0,4.37,4.37,0,9.77,0Z"]'
        )
    );
    expect(wrapper.element.getAttribute('width')).toEqual('20px');
    expect(wrapper.element.getAttribute('height')).toEqual('20px');
    expect(wrapper.element.getAttribute('fill')).toEqual('currentColor');

    await wrapper.setProps({
        icon: JavaScriptIcon,
    });

    expect(wrapper.get('[d="m0,0h100v100H0V0Z"]'));
});
