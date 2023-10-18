<script setup lang="ts">
import { defineProps } from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
    icon: {
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
    <div class="c">
        <div class="title">
            <div class="icon">
                <Icon :icon="props.icon" />
            </div>

            <span>{{ props.title }}</span>
        </div>

        <div class="timeline">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "sass:math";

$timeline_prl: math.div(2.75rem, 2);

// Continer
.c {
    @apply px-2 sm:px-0;
}

.title {
    @apply flex items-center gap-3;

    span {
        @apply font-bold text-2xl dark:text-white;
    }
}

.icon {
    @apply w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-50;
    @apply text-center dark:bg-slate-800 dark:shadow-dark shadow-light dark:text-white;
}

.timeline {
    @apply relative mt-5;
    @apply rtl:pr-[#{$timeline_prl}] ltr:pl-[#{$timeline_prl}];

    &::before {
        content: '';
        @apply border-r-2 rounded-full absolute border-slate-200;
        @apply w-0.5 h-6 -top-5 dark:border-slate-700;
        @apply rtl:right-[#{$timeline_prl}] ltr:left-[#{$timeline_prl}];
    }
}
</style>
