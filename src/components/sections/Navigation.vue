<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
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
    </nav>
</template>

<style scoped lang="scss">
nav {
    @apply bg-white shadow-light p-4 w-full rounded-xl;
    @apply flex justify-between items-center;
}

.links {
    @apply flex gap-4
}
</style>