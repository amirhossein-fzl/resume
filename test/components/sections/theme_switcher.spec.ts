import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import ThemeSwitcher from '@/components/sections/ThemeSwitcher.vue';
import Icon from '@/components/Icon.vue';
import SunIcon from '@/assets/svg/icons/brightness.svg?raw';
import MoonIcon from '@/assets/svg/icons/moon-stars.svg?raw';
import { useTheme } from '@/stores/theme';

test('icon component', async () => {
    const pinia = createPinia();

    const wrapper = mount(ThemeSwitcher, {
        global: {
            plugins: [pinia],
        },
    });

    const theme = useTheme();

    const light_icon = mount(Icon, {
        props: {
            icon: SunIcon,
            size: 28,
        },
    }).element.innerHTML;

    const dark_icon = mount(Icon, {
        props: {
            icon: MoonIcon,
            size: 28,
        },
    }).element.innerHTML;

    expect(wrapper.findComponent(Icon).exists());
    expect(wrapper.findComponent(Icon).props('size')).toEqual(28);
    expect(wrapper.findComponent(Icon).element.classList.contains('icon'));

    await wrapper.findComponent(ThemeSwitcher).trigger('click');

    if (theme.isDark) {
        expect(wrapper.findComponent(Icon).element.innerHTML).toEqual(
            light_icon
        );
        expect(wrapper.findComponent(Icon).element.classList.contains('sc'));
    } else {
        expect(wrapper.findComponent(Icon).element.innerHTML).toEqual(
            dark_icon
        );
        expect(wrapper.findComponent(Icon).element.classList.contains('mc'));
    }
});
