<script lang="ts">
    import clsx from "clsx";
    import Icon from "./Icon.svelte";
    export let title: string;
    export let icon: string;
    let className: string = '';
    export {className as class};
</script>

<div class={clsx('title', className)}>
    <div class="icon">
        <Icon {icon} />
    </div>

    <span>{title}</span>
</div>

<div class="timeline">
    <slot />
</div>

<style lang="scss">
    @use "sass:math";

    $timeline_prl: math.div(2.75rem, 2);

    .title {
        @apply flex items-center gap-3;

        span {
            @apply font-bold text-2xl;
        }
    }

    .icon {
        @apply w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-100;
        @apply text-center;
    }

    .timeline {
        @apply relative mt-5;
        padding-right: $timeline_prl;
        &::before {
            content: '';
            @apply border-r-2 rounded-full absolute border-slate-200;
            @apply w-0.5 h-6 -top-5;
            right: $timeline_prl;
        }
    }

    :global(.dark) {
        .icon {
            @apply bg-slate-800 shadow-dark;
        }

        .timeline {
            &::before {
                @apply border-slate-700
            }
        }
    }

    :global(html[dir="ltr"]) {
        .timeline {
            padding-right: unset;
            padding-left: $timeline_prl;

            &::before {
                right: unset;
                left: $timeline_prl;
            }
        }
    }
</style>
