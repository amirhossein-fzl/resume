<script setup lang="ts">
import Profile from '@/components/sections/Profile.vue';
import Info from '@/components/sections/Info.vue';
</script>

<template>
    <div class="flex-container">
        <div class="item">
            <Transition name="back-in-up" appear>
                <Profile />
            </Transition>
        </div>

        <div class="item">
            <Info />
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes backInUp {
    0% {
        opacity: 0.7;
        transform: translateY(-1200px) scale(0.7);
    }

    80% {
        opacity: 0.7;
        transform: translateY(0) scale(0.7);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.flex-container {
    @apply gap-12 lg:gap-3 items-center flex flex-col md:flex-row px-4;
}

.item {
    @apply w-full md:w-6/12;
}

.back-in-up {

    &-enter-active,
    &-leave-active {
        animation: backInUp 0.5s ease;
    }

    &-enter-to {
        animation: backInUp 0.5s ease;
    }
}</style>
