<script lang="ts">
    import clsx from 'clsx';
    export let tag: string = 'div';
    let className: string = '';
    export { className as class };
</script>

<svelte:element this={tag} class={clsx('card', className)}>
    <slot />
</svelte:element>

<style lang="scss">
    .card {
        @apply ring-1 ring-slate-900/5 rounded-xl shadow-light;
    }

    :global(.dark) {
        .card {
            @apply bg-slate-800 shadow-dark ring-0;
        }
    }
</style>
