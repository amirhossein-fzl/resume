<script setup lang="ts">
import Profile from '@/components/sections/Profile.vue';
</script>

<template>
    <div class="ct">
        <div class="item">
            <Transition name="scale" appear>
                <Profile />
            </Transition>
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
    @apply w-10/12 sm:w-8/12 mx-auto;
}

.scale {
    &-enter-active, &-leave-active {
        @apply duration-300 delay-300;
    }

    &-enter-to {
        @apply scale-100;
    }

    &-enter-from, &-leave-to {
        @apply opacity-0 scale-90;
    }
}
</style>