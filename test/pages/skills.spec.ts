import { test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import i18n from '@/plugins/i18n';
import router from '@/routes';
import { createPinia, setActivePinia } from 'pinia';
import Skills from '@/pages/skills.vue';
import WithProfileLayout from '@/layouts/WithProfileLayout.vue';
import Skill from '@/components/Skill.vue';

test('skills page test', async () => {
    const pinia = createPinia();
    const wrapper = mount(Skills, {
        global: {
            plugins: [i18n, pinia, router],
        },
    });

    beforeEach(() => {
        setActivePinia(pinia);
    });

    expect(wrapper.findComponent(Skills).exists()).toBe(true);
    expect(wrapper.findComponent(WithProfileLayout).exists()).toBe(true);
    expect(wrapper.find('h1.page-title').text()).toBe(
        i18n.global.t('my_skills')
    );
    expect(wrapper.findComponent(Skill).exists()).toBe(true);

    const all_subtitles_els = wrapper.findAll('h2.sub-title');
    let all_subtitles: string[] = [];

    all_subtitles_els.forEach((item) => {
        all_subtitles.push(item.text());
    });

    expect(all_subtitles).toContain(i18n.global.t('languages'));
    expect(all_subtitles).toContain(i18n.global.t('javascript.title'));
    expect(all_subtitles).toContain(i18n.global.t('backend_freamworks'));
    expect(all_subtitles).toContain(i18n.global.t('databases'));
    expect(all_subtitles).toContain(i18n.global.t('css'));
    expect(all_subtitles).toContain(i18n.global.t('mobile'));
    expect(all_subtitles).toContain(i18n.global.t('os'));
});
