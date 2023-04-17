<script lang="ts">
    import clsx from "clsx";
    export let title: string;
    let className: string = '';
    export { className as class };
</script>

<div class={clsx("sv-card", className)}>
    <h2 class="sv-title">{title}</h2>

    <p class="sv-desc">
        <slot />
    </p>
</div>

<style lang="scss">
    .sv {
        &-card {
            @apply bg-slate-100 rounded-xl px-4 py-4 w-full;
        }

        &-title {
            @apply text-lg font-semibold text-center;
        }

        &-desc {
            @apply text-sm mt-3;
        }
    }

    :global(.dark) {
        .sv-card {
            @apply bg-slate-800 shadow-dark;
        }
    }
</style>
