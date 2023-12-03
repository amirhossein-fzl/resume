<script setup lang="ts">
import WithProfileLayout from '@/layouts/WithProfileLayout.vue';
import Info from '@/components/sections/Info.vue';
import { useHead } from "@unhead/vue";
import config from "@config";
import { useI18n } from 'vue-i18n';
const i18n = useI18n();

useHead({
    title: i18n.t("seo.about.title"),
    link: [
        {
            rel: "canonical",
            href: `${config.url}/${i18n.locale.value}/about`,
        }
    ],
    meta: [
        {
            name: "title",
            content: i18n.t("seo.about.title")
        },
        {
            name: "description",
            content: i18n.t("seo.about.description")
        },
        {
            name: "keywords",
            content: i18n.t("seo.about.keywords")
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: i18n.t("seo.about.title"),
        },
        {
            property: "og:site_name",
            content: i18n.t("seo.site_name"),
        },
        {
            property: "og:url",
            content: `${config.url}/${i18n.locale.value}/about`,
        },
        {
            property: "og:description",
            content: i18n.t("seo.about.description"),
        },
        {
            property: "og:type",
            content: "webpage",
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
            content: i18n.t("seo.about.title"),
        },
        {
            property: "twitter:description",
            content: i18n.t("seo.about.description"),
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
        <h1 class="page-title">{{ $t("about_me") }}</h1>

        <div class="ctr">
            <div class="item center">
                <img class="photo" src="/img/amir-developer.jpg" alt="Amirhossein Fazli image" />
            </div>

            <div class="item">
                <Info />
            </div>
        </div>
        <section class="content">
            <h2>{{ $t("interview.inspire.ask") }}</h2>
            <p>{{ $t("interview.inspire.answer[0]") }}</p>

            <h2>{{ $t("interview.enjoy_in_programming.ask") }}</h2>
            <p>{{ $t("interview.enjoy_in_programming.answer[0]") }}</p>

            <h2>{{ $t("interview.most_proficient.ask") }}</h2>
            <p>{{ $t("interview.most_proficient.answer[0]") }}</p>
            <p>{{ $t("interview.most_proficient.answer[1]") }}</p>
            <p>{{ $t("interview.most_proficient.answer[2]") }}</p>

            <h2>{{ $t("interview.up_to_date.ask") }}</h2>
            <p>{{ $t("interview.up_to_date.answer[0]") }}</p>

            <h2>{{ $t("interview.goals.ask") }}</h2>
            <p>{{ $t("interview.goals.answer[0]") }}</p>

            <h2>{{ $t("interview.advice.ask") }}</h2>
            <p>{{ $t("interview.advice.answer[0]") }}</p>
            <p>{{ $t("interview.advice.answer[1]") }}</p>

            <h2>{{ $t("interview.impact.ask") }}</h2>
            <p>{{ $t("interview.impact.answer[0]") }}</p>
            <p>{{ $t("interview.impact.answer[1]") }}</p>

            <h2>{{ $t("interview.programming_future.ask") }}</h2>
            <p>{{ $t("interview.programming_future.answer[0]") }}</p>

            <h2>{{ $t("interview.other_interests.ask") }}</h2>
            <p>{{ $t("interview.other_interests.answer[0]") }}</p>
            <p>{{ $t("interview.other_interests.answer[1]") }}</p>

            <h2>{{ $t("interview.good_programmer.ask") }}</h2>
            <p>{{ $t("interview.good_programmer.answer[0]") }}</p>

            <h2>{{ $t("interview.debugging.ask") }}</h2>
            <p>{{ $t("interview.debugging.answer[0]") }}</p>

            <h2>{{ $t("interview.resources_community.ask") }}</h2>
            <p>{{ $t("interview.resources_community.answer[0]") }}</p>
            <p>{{ $t("interview.resources_community.answer[1]") }}</p>
        </section>
    </WithProfileLayout>
</template>

<style scoped lang="scss">
// Continer
.ctr {
    @apply flex flex-col-reverse md:flex-row px-4 gap-8 items-center;
    @apply sm:px-0;
}

.center {
    @apply flex justify-center flex-grow;
}

.photo {
    width: min(100%, 400px);
    @apply h-auto rounded-2xl;
}
.content {
    @apply dark:bg-slate-800 p-8 rounded-2xl mt-10 mx-4 sm:mx-0;
    @apply dark:shadow-dark ring-1 ring-slate-900/5 dark:ring-0 shadow-light;
}
</style>