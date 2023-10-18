import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TimelineItem from '@/components/TimelineItem.vue';
import i18n from '@/plugins/i18n';

test('TimelineItem component test', async () => {
    const wrapper = mount(TimelineItem, {
        props: {
            title: 'Test timeline_item title',
            time_range: '2023',
        },
        global: {
            plugins: [i18n],
        },
    });

    expect(wrapper.find('article.timeline-item').exists()).toBe(true);
    expect(wrapper.find('.title').text()).toBe('Test timeline_item title');
    expect(wrapper.find('.t_range').text()).toBe('2023');
    expect(wrapper.find('.post').exists()).toBe(false);

    await wrapper.setProps({
        post: 'Developer',
    });

    expect(wrapper.find('.post').exists()).toBe(true);
});
