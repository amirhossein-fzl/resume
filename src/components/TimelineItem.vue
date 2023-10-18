<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    post: {
        type: String,
        required: false,
    },
    time_range: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

</script>

<template>
    <article class="timeline-item">
        <div class="t-content">
            <span class="title">{{ props.title }}</span>
            <span class="t_range">{{ props.time_range }}</span>
            <span class="post" v-if="props.post != undefined && props.post != ''">{{ props.post }}</span>
        </div>

        <p class="desc">
            <slot />
        </p>
    </article>
</template>

<style scoped lang="scss">
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
    @apply flex flex-col rtl:border-r-2 border-slate-200 rtl:pr-10 relative;
    @apply dark:border-slate-700 ltr:border-l-2 ltr:pl-10;

    &:not(:last-child) {
        @apply pb-3;
    }

    &::before {
        content: '';
        @apply rtl:right-[#{$timeline_rl_badge}] ltr:left-[#{$timeline_rl_badge}];
        @apply absolute rounded-full w-3 h-3 bg-blue-500;
        box-shadow: 0 0 0 0.25rem rgb(59 130 246 / 0.25);
        // center y badge
        // @apply top-0 bottom-0 my-auto;
        top: math.div(1.75rem + 0.75rem, 4);
    }

}

// Timeline Content
.t-content {
    @apply flex flex-col;
}
</style>