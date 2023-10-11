<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <LanguageSwitcher />

        <ul class="links">
            <li>
                <RouterLink to="/" exact-active-class="active">{{ $t("me") }}</RouterLink>
            </li>
            <li>
                <a href="#/about">{{ $t("about_me") }}</a>
            </li>
            <li>
                <a href="#/skills">{{ $t("my_skills") }}</a>
            </li>
            <li>
                <a href="#/services">{{ $t("my_services") }}</a>
            </li>
            <li>
                <a href="#/portfolio">{{ $t("my_portfolios") }}</a>
            </li>
            <li>
                <a href="#/contact">{{ $t("contact_me") }}</a>
            </li>
        </ul>

        <ThemeSwitcher />
    </nav>
</template>

<style scoped lang="scss">
nav {
    @apply bg-white shadow-light p-4 w-full rounded-xl;
    @apply flex justify-between items-center;
    @apply dark:bg-slate-800 dark:shadow-dark;
}

.links-container {
    @apply relative;
}

.indicator {
    @apply bg-blue-500 h-1 rounded;
}

.links {
    @apply flex gap-4 dark:text-slate-100 font-medium;

    a {
        @apply duration-300;
        &.active {
            @apply flex flex-col justify-center items-center text-blue-500;
            &::after {
                content: "";
                @apply bg-blue-500 w-4 h-1 rounded;
            }
        }
    }

    a:hover {
        @apply text-blue-400;
    }
}
</style>