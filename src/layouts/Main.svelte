<script lang="ts">
    import Header from "@/components/sections/Header.svelte";
    import Navbar from "@/components/sections/Navbar.svelte";
    import Navigation from "@/components/sections/Navigation.svelte";
</script>

<div class="container">
    <Navbar />
    <Header />
    <Navigation />

    <div class="page-container">
        <slot />
    </div>
</div>

<style lang="scss">
    .container {
        @apply px-5 py-5 max-w-full;
    }

    .page-container {
        @apply mt-10 md:container;
    }
</style>
