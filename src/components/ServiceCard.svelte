<script lang="ts">
    import Card from "./Card.svelte";
    import clsx from "clsx";
    export let title: string;
    let className: string = '';
    export { className as class };
</script>

<Card class={clsx("sv-card", className)}>
    <h2 class="sv-title">{title}</h2>

    <p class="sv-desc">
        <slot />
    </p>
</Card>

<style lang="scss">
    .sv {

        &-title {
            @apply text-lg font-semibold text-center;
        }

        &-desc {
            @apply text-sm mt-3;
        }
    }

    :global(.sv-card) {
        @apply rounded-xl px-4 py-4 w-full;
    }
</style>
