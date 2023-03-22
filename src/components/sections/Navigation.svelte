<script lang="ts">
    import clsx from 'clsx';
    import { isActive } from "@roxi/routify";
    import { _ } from 'svelte-i18n';
</script>

<section>
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

</section>

<style lang="scss">
    section {
        @apply w-fit px-4 py-2 rounded-2xl flex mx-auto mt-28 gap-2;
        @apply bg-slate-100;
    }

    .link {
        @apply px-2 py-1 rounded-xl duration-300;

        &.active {
            @apply bg-blue-500 text-white;
        }
    }

    :global(.dark) {
        section {
            @apply shadow-dark bg-slate-800;
        }
    }
</style>