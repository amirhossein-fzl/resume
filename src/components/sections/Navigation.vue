<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { RouterLink } from 'vue-router';
import Icon from "../Icon.vue";
import BarsIcon from "@/assets/svg/icons/bars.svg?raw";
import { ref, onMounted, type Ref } from "vue";
import CloseIcon from "@/assets/svg/icons/close.svg?raw";
import config from "@config";
import router from '@/routes';
import ClientOnly from "@/components/ClientOnly.vue";
import { useLocale } from '@/stores/locale';

const locale = useLocale();
const side_is_open: Ref<boolean> = ref(false);
const nav_is_fixed: Ref<boolean> = ref(false);
// @ts-ignore
const nav_el: Ref<HTMLElement> = ref(null);

const open_side = () => {
    side_is_open.value = true;
};

const close_side = () => {
    side_is_open.value = false;
};

router.afterEach(() => {
    side_is_open.value = false;
});

onMounted(() => {
    // @ts-ignore
    document.addEventListener("scroll", _ => {
        if (window.outerWidth < 768) {
            nav_is_fixed.value = window.pageYOffset > nav_el.value.offsetHeight;
        }
    });
});

</script>

<template>
    <nav :class="{ 'sticky-nav': nav_is_fixed }" ref="nav_el">
        <button @click="open_side" class="menu-bars">
            <Icon :icon="BarsIcon" :size="26" />
        </button>

        <!-- Menu Sidebar -->
        <Transition name="fade">
            <div class="backdrop" v-if="side_is_open" @click="close_side"></div>
        </Transition>
        <Transition name="slide">
            <div class="menu-side" v-if="side_is_open">
                <div class="m-content">
                    <button class="close-menu-btn" @click="close_side">
                        <Icon :icon="CloseIcon" :size="28" />
                    </button>

                    <ul class="menu-links">
                        <li v-for="link in config.navigation_links">
                            <RouterLink :to="`/${locale.current + link.link}`" exact-active-class="m-active">{{ $t(link.label) }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Transition>
        <!-- End Menu Siderbar -->

        <ClientOnly>
            <LanguageSwitcher class="lang-sw" />
        </ClientOnly>

        <ul class="links">
            <li v-for="link in config.navigation_links">
                <RouterLink :to="`/${locale.current + link.link}`" exact-active-class="active">{{ $t(link.label) }}</RouterLink>
            </li>
        </ul>

        <ClientOnly>
            <ThemeSwitcher />
        </ClientOnly>
    </nav>
</template>

<style scoped lang="scss">
@keyframes widthAnime {
    from {
        width: 0;
    }

    to {
        width: var(--width-to);
    }
}

nav {
    @apply ring-1 ring-slate-900/5 dark:ring-0 shadow-light;
    @apply bg-white shadow-light p-4 w-full rounded-xl;
    @apply flex justify-between items-center;
    @apply dark:bg-slate-800 dark:shadow-dark;
}

.sticky-nav {
    @apply top-0 sticky rounded-t-none z-[800];
}

.menu-side {
    @apply ltr:left-0 rtl:right-0 z-[1000];
    @apply dark:bg-slate-800 dark:shadow-dark bg-white shadow-light;
    @apply top-0 fixed h-full w-[16rem] overflow-scroll;
}

// Menu content
.m-content {
    @apply px-3 py-4 flex flex-col gap-10;
}

.close-menu-btn {
    @apply text-red-500 ltr:ml-auto rtl:mr-auto block;
}

.menu-links {
    li {
        @apply overflow-hidden;

        &:not(first-child) {
            @apply mt-2;
        }
    }

    a {
        @apply px-4 py-2 rounded-xl duration-300 font-semibold;
        @apply dark:bg-slate-700 bg-slate-200 shadow-light;
        @apply block w-full;

        // Menu active
        &.m-active {
            @apply bg-blue-500 text-white;
        }
    }
}

.menu-bars {
    @apply md:hidden;
}

.slide {

    &-enter-active,
    &-leave-active {
        @apply duration-300;
    }

    &-enter-from,
    &-leave-to {
        @apply ltr:-left-[16rem] rtl:-right-[16rem];
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

        &:hover {
            @apply text-blue-400;
        }

        &.active {
            @apply flex flex-col justify-center items-center text-blue-500;

            &::after {
                content: "";
                --width-to: theme("spacing.4");
                animation: widthAnime 0.3s ease;
                @apply bg-blue-500 w-4 h-1 rounded mt-1;
            }
        }
    }
}
</style>