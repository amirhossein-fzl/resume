<script lang="ts">
    import { _ } from "svelte-i18n";
    import Header from "@/components/sections/Header.svelte";
    import Navbar from "@/components/sections/Navbar.svelte";
    import Navigation from "@/components/sections/Navigation.svelte";

    let year: string = (new Date).getFullYear().toString();
</script>

<div class="container">
    <Navbar />
    <Header />
    <Navigation />

    <div class="page-container">
        <slot />
    </div>

    <footer>
        <p>
            {$_("footer", { values: {year} })}
            <a href="https://github.com/amirhossein-fzl/resume" target="_blank">{$_("source")}</a>
        </p>
    </footer>
</div>

<style lang="scss">
    .container {
        @apply px-5 py-5 max-w-full;
    }

    .page-container {
        @apply mt-10 md:container;
    }
    
    footer {
        @apply text-center mt-10 text-sm;

        a {
            @apply text-blue-500;
            &:hover {
                @apply underline;
            }
        }
    }
</style>
