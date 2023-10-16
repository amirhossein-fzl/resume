<script setup lang="ts">
import { defineProps } from "vue";
import Icon from "@/components/Icon.vue";

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <article class="skill">
        <Icon :icon="props.icon" :size="70" color="" stroke="" />
        <div class="info">
            <span class="name">{{ props.name }}</span>
            <span class="hist">{{ $t("experience", { year: props.experience }) }}</span>
        </div>
    </article>
</template>

<style scoped lang="scss">
.skill {
    @apply flex items-center gap-4;
}

.info {
    @apply flex flex-col; 
}

.name {
    @apply font-semibold text-xl dark:text-white;
}

.hist {
    @apply text-sm mt-1;
}
</style>