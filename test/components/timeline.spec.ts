import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Timeline from '@/components/Timeline.vue';
import i18n from '@/plugins/i18n';
import StudentCapIcon from '@/assets/svg/icons/student-cap.svg?raw';
import Icon from '@/components/Icon.vue';

test('Timeline component test', () => {
    const wrapper = mount(Timeline, {
        props: {
            icon: StudentCapIcon,
            title: 'Test Title',
        },
        global: {
            plugins: [i18n],
        },
    });

    const icon = mount(Icon, {
        props: {
            icon: StudentCapIcon,
        },
    }).element.innerHTML;

    expect(wrapper.find('.title .icon').exists()).toBe(true);
    expect(wrapper.findComponent(Icon).exists()).toBe(true);
    expect(wrapper.findComponent(Icon).element.innerHTML).toBe(icon);
    expect(wrapper.find('.title span').text()).toBe('Test Title');
});
