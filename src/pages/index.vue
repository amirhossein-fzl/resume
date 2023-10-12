<script setup lang="ts">
import Profile from '@/components/sections/Profile.vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const my_status = i18n.getLocaleMessage("en")["my_status"].toLowerCase();

const age = Math.floor(
    // @ts-ignore
    (new Date() - new Date('2005-06-15').getTime()) / 3.15576e10
);
</script>

<template>
    <div class="flex-container">
        <div class="item">
            <Transition name="back-in-up" appear>
                <Profile />
            </Transition>
        </div>

        <div class="item">
            <ul class="about-me">
                <Transition name="list" appear>
                    <li>
                        <span>{{ $t("fullname") }}</span>
                        <span>{{ $t("my_name") }}</span>
                    </li>
                </Transition>
                <Transition name="list" appear>
                    <li>
                        <span>{{ $t("age") }}</span>
                        <span>{{ age }}</span>
                    </li>
                </Transition>
                <Transition name="list" appear>
                    <li>
                        <span>{{ $t("country") }}</span>
                        <span>{{ $t("my_country") }}</span>
                    </li>
                </Transition>
                <Transition name="list" appear>
                    <li>
                        <span>{{ $t("city") }}</span>
                        <span>{{ $t("my_city") }}</span>
                    </li>
                </Transition>
                <Transition name="list" appear>
                    <li>
                        <span>{{ $t("address") }}</span>
                        <span>{{ $t("my_address") }}</span>
                    </li>
                </Transition>
                <Transition name="list" appear>
                    <li
                        :class="['status', { 'ready-status': my_status == 'ready', 'no-ready-status': my_status != 'ready' }]">
                        <span>{{ $t("status") }}</span>
                        <span>{{ $t("my_status") }}</span>
                    </li>
                </Transition>
            </ul>
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
.about-me {
    li {
        @apply bg-slate-200 shadow-light;
        @apply dark:bg-slate-800 dark:shadow-dark px-4 py-2 rounded-xl;
        @apply flex items-center;

        &:not(:first-child) {
            @apply mt-4;
        }

        span {
            @apply inline-block;

            &:first-child {
                @apply min-w-[7.5rem] text-sm;
            }

            &:last-child {
                @apply font-medium;
            }
        }
    }
}

.status {
    @apply relative overflow-hidden;
}

.ready-status {
    @apply bg-green-500 text-white #{!important};
}

.no-ready-status {
    @apply bg-red-500 text-white #{!important};
}

.back-in-up-enter-active,
.back-in-up-leave-active {
    animation: backInUp 0.5s ease;
}

.back-in-up-leave-to {
    animation: backInUp 0.5s ease;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease 0.5s;
}

.list-enter-from {
    transform: translateY(30px) scale(0.8);
    opacity: 0;
}

.list-leave-to {
    opacity: 1;
    transform: translateY(30px) scale(1);
}
</style>
