<script setup lang="ts">
import Profile from '@/components/sections/Profile.vue';
</script>

<template>
    <div class="ct">
        <div class="item">
            <Profile />
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
// Container
.ct {
    @apply flex flex-col gap-20;
}
.item {
    @apply w-6/12 mx-auto;
}
</style>