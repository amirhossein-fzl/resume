<script lang="ts">
    export let post: string = "";
    export let time_range: string;
    export let title: string;
</script>

<article class="timeline-item">
    <div class="flex flex-col">
        <span class="title">{title}</span>
        <span class="t_range">{time_range}</span>
        {#if post != ""}
            <span class="post">{post}</span>
        {/if}
    </div>

    <p class="desc">
        <slot></slot>
    </p>
</article>

<style lang="scss">
    @use "sass:math";

    $timeline_rl_badge: math.div(0.75rem + 0.125rem, -2);

    .title {
        @apply font-bold text-lg;
    }

    .t_range {
        @apply mt-2 text-sm text-orange-600;
    }

    .post {
        @apply mt-1 text-base font-semibold;
    }

    .desc {
        @apply my-3 text-sm;
    }

    .timeline-item {
        @apply flex flex-col border-r-2 border-slate-200 pr-10 relative;

        &:not(:last-child) {
            @apply pb-3;
        }

        &::before {
            content: '';
            right: $timeline_rl_badge;
            @apply absolute rounded-full w-3 h-3 bg-blue-500;
            box-shadow: 0 0 0 0.25rem rgb(59 130 246 / 0.25);
            // center y badge
            // @apply top-0 bottom-0 my-auto;
            top: math.div(1.75rem + 0.75rem, 4);
        }

    }

    :global(.dark) {
        .timeline-item {
            @apply border-slate-700;
        }
    }

    :global(html[dir="ltr"]) {
        .timeline-item {
            border-right: unset;
            padding-right: unset;
            @apply border-l-2 pl-10;

            &::before {
                right: unset;
                left: $timeline_rl_badge;
            }
        }
    }
</style>
