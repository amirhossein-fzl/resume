<script setup lang="ts">
    import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<template>
    <nav>
        <LanguageSwitcher />
    </nav>
</template>

<style scoped lang="scss">
    nav {
        @apply bg-white shadow-light p-4 w-full rounded-xl;
        @apply flex justify-between items-center;
    }
</style>