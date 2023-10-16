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
import DockerIcon from "@/assets/svg/icons/docker.svg?raw";
</script>

<template>
    <WithProfileLayout>

        <div class="cty">
            <h1 class="page-title">{{ $t("my_skills") }}</h1>

            <h2 class="sub-title">{{ $t("key_skills") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PhpIcon" :name="$t('php.title')" :experience="5" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JavascriptIcon" :name="$t('javascript.title')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TypescriptIcon" :name="$t('typescript.title')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="LaravelIcon" :name="$t('laravel.title')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="VueIcon" :name="$t('vue.title')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="SvelteIcon" :name="$t('svelte.title')" :experience="2" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("languages") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PhpIcon" :name="$t('php.title')" :experience="5" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JavascriptIcon" :name="$t('javascript.title')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TypescriptIcon" :name="$t('typescript.title')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="DartIcon" :name="$t('dart.title')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="RustIcon" :name="$t('rust.title')" :experience="1" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("javascript.title") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="VueIcon" :name="$t('vue.title')" :experience="3" />
                </div>
                <div class="sk-item">
                    <Skill :icon="SvelteIcon" :name="$t('svelte.title')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="ReactIcon" :name="$t('react.title')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="JqueryIcon" :name="$t('jquery.title')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="WasmIcon" :name="$t('wasm.title')" :experience="1" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("backend_freamworks") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="LaravelIcon" :name="$t('laravel.title')" :experience="3" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("databases") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="PostgresqlIcon" :name="$t('postgresql.title')" :experience="1" />
                </div>
                <div class="sk-item">
                    <Skill :icon="MysqlIcon" :name="$t('mysql.title')" :experience="3" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("css") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="SassIcon" :name="$t('sass.title')" :experience="4" />
                </div>
                <div class="sk-item">
                    <Skill :icon="TailwindIcon" :name="$t('tailwind.title')" :experience="2" />
                </div>
                <div class="sk-item">
                    <Skill :icon="BootstrapIcon" :name="$t('bootstrap.title')" :experience="4" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("mobile") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="FlutterIcon" :name="$t('flutter.title')" :experience="2" />
                </div>
            </div>

            <h2 class="sub-title">{{ $t("os") }}</h2>
            <div class="skills">
                <div class="sk-item">
                    <Skill :icon="LinuxIcon" :name="$t('linux.title')" :experience="3" />
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
    @apply w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4;
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