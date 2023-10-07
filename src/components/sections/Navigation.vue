<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<template>
    <nav>
        <LanguageSwitcher />

        <ul class="links">
            <li>
                <a href="/">{{ $t("about_me") }}</a>
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

.links {
    @apply flex gap-4 dark:text-slate-100 font-medium;

    a {
        @apply duration-300;
    }

    a:hover {
        @apply text-blue-400;
    }
}
</style>