<script lang="ts">
    import LanguageSwitcher from "../LanguageSwitcher.svelte";
    import ThemeSwitcher from "../ThemeSwitcher.svelte";
</script>

<nav>
    <LanguageSwitcher />
    <ThemeSwitcher />
</nav>

<style lang="scss">
    nav {
        @apply flex justify-between items-center px-4 py-2 rounded-2xl;
        @apply bg-slate-100;
    }

    :global(.dark) {
        nav {
            @apply bg-slate-800 shadow-dark;
        }
    }
</style>