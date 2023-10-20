import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createHead } from "@unhead/vue";
import Portfolio from '@/pages/portfolio.vue';
import i18n from '@/plugins/i18n';
import Timeline from '@/components/Timeline.vue';
import TimelineItem from '@/components/TimelineItem.vue';
import WithProfileLayout from '@/layouts/WithProfileLayout.vue';

test('portfolio page test', async () => {
    const head = createHead();
    const wrapper = mount(Portfolio, {
        global: {
            plugins: [i18n, head],
        },
    });

    expect(wrapper.findComponent(WithProfileLayout).exists()).toBe(true);
    expect(wrapper.find('.page-title').text()).toBe(
        i18n.global.t('my_portfolios')
    );
    expect(wrapper.getComponent(Timeline).props('title')).toBe(
        i18n.global.t('education')
    );
    expect(
        wrapper.getComponent(Timeline).getComponent(TimelineItem).props('title')
    ).toBe(i18n.global.t('diploma.label'));
});
