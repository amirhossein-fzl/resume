<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { RouterLink } from 'vue-router';
import Icon from "../Icon.vue";
import BarsIcon from "@/assets/svg/icons/bars.svg?raw";
import { ref } from "vue";

const side_is_open = ref(false);

const open_side = () => {
    side_is_open.value = true;
}

const close_side = () => {
    side_is_open.value = false;
}

</script>

<template>
    <nav>
        <button @click="open_side" class="menu-bars">
            <Icon :icon="BarsIcon" :size="26" />
        </button>

        <!-- Menu Sidebar -->
        <Transition name="fade">
            <div class="backdrop" v-if="side_is_open" @click="close_side"></div>
        </Transition>
        <Transition name="slide">
            <div class="menu-side" v-if="side_is_open">
                <button @click="close_side">Close</button>
            </div>
        </Transition>
        <!-- End Menu Siderbar -->

        <LanguageSwitcher class="lang-sw" />

        <ul class="links">
            <li>
                <RouterLink to="/" exact-active-class="active">{{ $t("me") }}</RouterLink>
            </li>
            <li>
                <a href="#/about">{{ $t("about_me") }}</a>
            </li>
            <li>
                <a href="#/skills">{{ $t("my_skills") }}</a>
            </li>
            <li>
                <a href="#/services">{{ $t("my_services") }}</a>
            </li>
            <li>
                <a href="#/portfolio">{{ $t("my_portfolios") }}</a>
            </li>
            <li>
                <a href="#/contact">{{ $t("contact_me") }}</a>
            </li>
        </ul>

        <ThemeSwitcher />
    </nav>
</template>

<style scoped lang="scss">
nav {
    @apply bg-white shadow-light p-4 w-full rounded-xl;
    @apply flex justify-between items-center;
    @apply dark:bg-slate-800 dark:shadow-dark;
}

.backdrop {
    @apply absolute z-10 inset-0 w-full h-full bg-slate-900 opacity-30;
}

.menu-side {
    @apply ltr:left-0 rtl:right-0 z-20;
    @apply ltr:top-0 absolute bg-slate-800 h-full w-10/12;
}

.menu-bars {
    @apply md:hidden;
}

.fade {
    &-enter-active, &-leave-active {
        @apply duration-300;
    }

    &-enter-from, &-leave-to {
        @apply opacity-0;
    }
}

.slide {
    &-enter-active, &-leave-active {
        @apply duration-300;
    }

    &-enter-from, &-leave-to {
        // 83.333333% = 10/12
        @apply ltr:-left-[83.333333%] rtl:-right-[83.333333%];
    }
    
    &-enter-to {
        @apply ltr:left-0 rtl:right-0;
    }
}

// Lang switcher 
.lang-sw {
    @apply sm:ltr:mr-auto sm:ltr:ml-4 sm:rtl:ml-auto sm:rtl:mr-4;
    @apply md:m-0 #{!important};
}

.indicator {
    @apply bg-blue-500 h-1 rounded;
}

.links {
    @apply hidden;
    @apply md:flex gap-4 dark:text-slate-100 font-medium;

    a {
        @apply duration-300;

        &.active {
            @apply flex flex-col justify-center items-center text-blue-500;

            &::after {
                content: "";
                @apply bg-blue-500 w-4 h-1 rounded;
            }
        }
    }

    a:hover {
        @apply text-blue-400;
    }
}
</style>