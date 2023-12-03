<script setup lang="ts">
import WithProfileLayout from "@/layouts/WithProfileLayout.vue";
import Skill from "@/components/Skill.vue";

// Technologies icons
import TypescriptIcon from "@/assets/svg/icons/typescript.svg?raw";
import JavascriptIcon from "@/assets/svg/icons/javascript.svg?raw";
import JqueryIcon from "@/assets/svg/icons/jquery.svg?raw";
import BootstrapIcon from "@/assets/svg/icons/bootstrap.svg?raw";
import LaravelIcon from "@/assets/svg/icons/laravel.svg?raw";
import LinuxIcon from "@/assets/svg/icons/linux.svg?raw";
import MysqlIcon from "@/assets/svg/icons/mysql.svg?raw";
import PhpIcon from "@/assets/svg/icons/php.svg?raw";
import PostgresqlIcon from "@/assets/svg/icons/postgresql.svg?raw";
import ReactIcon from "@/assets/svg/icons/react.svg?raw";
import RustIcon from "@/assets/svg/icons/rust.svg?raw";
import SassIcon from "@/assets/svg/icons/sass.svg?raw";
import SvelteIcon from "@/assets/svg/icons/svelte.svg?raw";
import TailwindIcon from "@/assets/svg/icons/tailwind.svg?raw";
import VueIcon from "@/assets/svg/icons/vue.svg?raw";
import WasmIcon from "@/assets/svg/icons/wasm.svg?raw";
import DartIcon from "@/assets/svg/icons/dart.svg?raw";
import FlutterIcon from "@/assets/svg/icons/flutter.svg?raw";

import { useHead } from "@unhead/vue";
import config from "@config";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

useHead({
    title: i18n.t("seo.skills.title"),
    link: [
        {
            rel: "canonical",
            href: `${config.url}/${i18n.locale.value}/skills`,
        }
    ],
    meta: [
        {
            name: "title",
            content: i18n.t("seo.skills.title")
        },
        {
            name: "description",
            content: i18n.t("seo.skills.description")
        },
        {
            name: "keywords",
            content: i18n.t("seo.skills.keywords")
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: i18n.t("seo.skills.title"),
        },
        {
            property: "og:site_name",
            content: i18n.t("seo.site_name"),
        },
        {
            property: "og:url",
            content: `${config.url}/${i18n.locale.value}/skills`,
        },
        {
            property: "og:description",
            content: i18n.t("seo.skills.description"),
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
            content: i18n.t("seo.skills.title"),
        },
        {
            property: "twitter:description",
            content: i18n.t("seo.skills.description"),
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

        <div class="cty">
            <h1 class="page-title">{{ $t("my_skills") }}</h1>

            <h2 class="sub-title">{{ $t("key_skills") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PhpIcon" :name="$t('skills.php')" :experience="5" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JavascriptIcon" :name="$t('skills.javascript')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TypescriptIcon" :name="$t('skills.typescript')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="LaravelIcon" :name="$t('skills.laravel')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="VueIcon" :name="$t('skills.vue')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="SvelteIcon" :name="$t('skills.svelte')" :experience="2" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("languages") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PhpIcon" :name="$t('skills.php')" :experience="5" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JavascriptIcon" :name="$t('skills.javascript')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TypescriptIcon" :name="$t('skills.typescript')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="DartIcon" :name="$t('skills.dart')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="RustIcon" :name="$t('skills.rust')" :experience="1" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("skills.javascript") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="VueIcon" :name="$t('skills.vue')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="SvelteIcon" :name="$t('skills.svelte')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="ReactIcon" :name="$t('skills.react')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JqueryIcon" :name="$t('skills.jquery')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="WasmIcon" :name="$t('skills.wasm')" :experience="1" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("backend_freamworks") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="LaravelIcon" :name="$t('skills.laravel')" :experience="3" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("databases") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PostgresqlIcon" :name="$t('skills.postgresql')" :experience="1" />
                </div>
                <div class="sk-item">
                    <Skill :icon="MysqlIcon" :name="$t('skills.mysql')" :experience="3" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("css") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="SassIcon" :name="$t('skills.sass')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TailwindIcon" :name="$t('skills.tailwind')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="BootstrapIcon" :name="$t('skills.bootstrap')" :experience="4" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("mobile") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="FlutterIcon" :name="$t('skills.flutter')" :experience="2" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("os") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="LinuxIcon" :name="$t('skills.linux')" :experience="3" />
                </div>
            </div>
        </div>
    </WithProfileLayout>
</template>

<style scoped lang="scss">
.cty {
    @apply px-6 sm:px-0;
}

.sub-title {
    &:not(:first-child) {
        @apply my-6;
    }
}

.skills {
    @apply flex flex-col sm:flex-row flex-wrap;
}

.sk-item {
    @apply w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-4 py-6;
}

// Fix logo colors conflicts ...
:global(.dark .php-logo) {
    @apply fill-white;
}

:global(.dark [class^="rsl-"]) {
    @apply stroke-white;
}

:global(.dark .rsl-4) {
    @apply fill-white;
}

:global(.php-logo) {
    @apply fill-[#231f20];
}
</style>