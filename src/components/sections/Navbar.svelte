<script lang="ts">
    import LanguageSwitcher from "../LanguageSwitcher.svelte";
    import ThemeSwitcher from "../ThemeSwitcher.svelte";
    import Card from "../Card.svelte";
</script>

<Card class="nav" tag="nav">
    <LanguageSwitcher />
    <ThemeSwitcher />
</Card>

<style lang="scss">
    :global(.nav) {
        @apply flex justify-between items-center px-4 py-2 rounded-2xl;
    }
</style>