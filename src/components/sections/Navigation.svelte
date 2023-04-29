<script lang="ts">
    import Card from '../Card.svelte';
    import clsx from 'clsx';
    import { isActive } from "@roxi/routify";
    import { _ } from 'svelte-i18n';
</script>

<Card class="navigation" tag="section">
    <a href="/" class={clsx('link', $isActive('/', {}, { recursive: false }) && 'active')}>
        {$_('about_me')}
    </a>

    <a href="/skills" class={clsx('link', $isActive('/skills', {}, { recursive: false }) && 'active')}>
        {$_('my_skills')}
    </a>

    <a href="/services" class={clsx('link', $isActive('/services', {}, { recursive: false }) && 'active')}>
        {$_('my_services')}
    </a>

    <a href="/portfolio" class={clsx('link', $isActive('/portfolio', {}, { recursive: false }) && 'active')}>
        {$_('my_portfolios')}
    </a>

    <a href="/contact" class={clsx('link', $isActive('/contact', {}, { recursive: false }) && 'active')}>
        {$_('contact_me')}
    </a>
</Card>

<style lang="scss">
    :global(.navigation) {
        @apply w-fit px-4 py-2 rounded-2xl flex max-[598px]:flex-col mx-auto mt-16 gap-2;
        @apply min-[599px]:mt-28;
    }

    .link {
        @apply px-2 py-1 rounded-xl duration-300;

        &.active {
            @apply bg-blue-500 text-white;
        }
    }
</style>