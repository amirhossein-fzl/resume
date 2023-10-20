<script setup lang="ts">
import WithProfileLayout from "@/layouts/WithProfileLayout.vue";
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import StudentCapIcon from "@/assets/svg/icons/student-cap.svg?raw";
import { useHead } from "@unhead/vue";
import config from "@config";

useHead({
    title: "Portfolios - Amirhossein Fazli",
    link: [
        {
            rel: "canonical",
            href: `${config.url}/portfolio`,
        }
    ],
    meta: [
        {
            name: "title",
            content: "Portfolios - Amirhossein Fazli"
        },
        {
            name: "description",
            content: "See the portfolio and activities of Amirhossein Fazli on the portfolio page."
        },
        {
            name: "keywords",
            content: "Amirhossein,Fazli,Portfolio,امیرحسین,فضلی,نمونه کار"
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: "Portfolios - Amirhossein Fazli",
        },
        {
            property: "og:site_name",
            content: "Amirhossein fazli personal site",
        },
        {
            property: "og:url",
            content: `${config.url}/portfolio`,
        },
        {
            property: "og:description",
            content: "See the portfolio and activities of Amirhossein Fazli on the portfolio page.",
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
            content: "Portfolios - Amirhossein Fazli",
        },
        {
            property: "twitter:description",
            content: "See the portfolio and activities of Amirhossein Fazli on the portfolio page.",
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
