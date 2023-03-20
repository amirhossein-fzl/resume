<script lang="ts">
    import Header from "@/components/sections/Header.svelte";
    import Navbar from "@/components/sections/Navbar.svelte";
</script>

<div class="container">
    <Navbar />
    <Header />
    <slot></slot>
</div>

<style lang="scss">
    .container {
        @apply px-5 py-5 max-w-full;
    }
</style>
