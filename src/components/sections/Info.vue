<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import config from "@config";

const i18n = useI18n();
const my_status = i18n.getLocaleMessage("en")["my_status"].toLowerCase();

const age = Math.floor(
    // @ts-ignore
    (new Date() - new Date(config.bithday).getTime()) / 3.15576e10
);
</script>

<template>
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
            <li :class="{ 'ready-status': my_status == 'ready', 'no-ready-status': my_status != 'ready' }">
                <span>{{ $t("status") }}</span>
                <span>{{ $t("my_status") }}</span>
            </li>
        </Transition>
    </ul>
</template>

<style scoped lang="scss">
.about-me {
    li {
        @apply ring-1 ring-slate-900/5 dark:ring-0 shadow-light;
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

.ready-status {
    @apply bg-green-500 text-white #{!important};
}

.no-ready-status {
    @apply bg-red-500 text-white #{!important};
}

.list {

    &-enter-active,
    &-leave-active {
        transition: all 0.5s ease 0.5s;
    }

    &-enter-from {
        transform: translateY(30px) scale(0.8);
        opacity: 0;
    }

    &-leave-to {
        opacity: 1;
        transform: translateY(30px) scale(1);
    }
}
</style>