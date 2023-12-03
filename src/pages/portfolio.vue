<script setup lang="ts">
import WithProfileLayout from "@/layouts/WithProfileLayout.vue";
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import StudentCapIcon from "@/assets/svg/icons/student-cap.svg?raw";
import { useHead } from "@unhead/vue";
import config from "@config";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

useHead({
    title: i18n.t("seo.portfolios.title"),
    link: [
        {
            rel: "canonical",
            href: `${config.url}/${i18n.locale.value}/portfolio`,
        }
    ],
    meta: [
        {
            name: "title",
            content: i18n.t("seo.portfolios.title")
        },
        {
            name: "description",
            content: i18n.t("seo.portfolios.description")
        },
        {
            name: "keywords",
            content: i18n.t("seo.portfolios.keywords")
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: i18n.t("seo.portfolios.title"),
        },
        {
            property: "og:site_name",
            content: i18n.t("seo.site_name"),
        },
        {
            property: "og:url",
            content: `${config.url}/${i18n.locale.value}/portfolio`,
        },
        {
            property: "og:description",
            content: i18n.t("seo.portfolios.description"),
        },
        {
            property: "og:type",
            content: "profile",
        },
        {
            property: "og:image",
            content: "https://amirhossein-fzl-dev.ir/img/amir-developer.jpg",
        },

        // Twitter card meta tags
        {
            property: "twitter:card",
            content: "summary_large_image",
        },
        {
            property: "twitter:site",
            content: config.twitter_username,
        },
        {
            property: "twitter:title",
            content: i18n.t("seo.portfolios.title"),
        },
        {
            property: "twitter:description",
            content: i18n.t("seo.portfolios.description"),
        },
        {
            property: "twitter:image",
            content: "https://amirhossein-fzl-dev.ir/img/amir-developer.jpg",
        },
    ]
});
</script>

<template>
    <WithProfileLayout>
        <h1 class="page-title">{{ $t("my_portfolios") }}</h1>

        <Timeline :icon="StudentCapIcon" :title="$t('education')">
            <TimelineItem :title="$t('diploma.label')" :time_range="$t('2023')">
                {{ $t("diploma.description") }}
            </TimelineItem>
        </Timeline>
    </WithProfileLayout>
</template>
