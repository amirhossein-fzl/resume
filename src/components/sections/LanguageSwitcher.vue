<script setup lang="ts">
import type { Ref } from "vue";
import { ref, computed } from "vue";
import Icon from "../Icon.vue";
import { useI18n } from "vue-i18n";
import ChevronDownIcon from "@/assets/svg/icons/chevron-down.svg?raw";
import USIcon from "@/assets/svg/flags/us.svg?raw";
import IRIcon from "@/assets/svg/flags/ir.svg?raw";
import { useLanguage } from "@/stores/language";
import { useLocale } from "@/stores/locale";

const items_is_open: Ref<boolean> = ref(false);
const locale = useLocale();

const language = useLanguage();
const current_lang = computed(() => locale.current || language.current);
const current_lang_label = computed(() => current_lang.value == "en" ? "english" : "persian");
const current_lang_icon = computed(() => current_lang.value == "en" ? USIcon : IRIcon);
const i18n = useI18n();

let selectLanguage = (lang: "fa" | "en") => {
    language.changeTo(lang);
    i18n.locale.value = lang;
};

let toggle_items = () => {
    items_is_open.value = !items_is_open.value;
};
</script>

<template>
    <div class="box">
        <div class="lang" tabindex="0" role="button" @focus="toggle_items" @blur="toggle_items">
            <Icon :icon="current_lang_icon" />
            <span>{{ $t(current_lang_label) }}</span>
            <Icon :icon="ChevronDownIcon" :size="14" />
        </div>

        <Transition name="fly">
            <div class="items" v-if="items_is_open">
                <button @click="selectLanguage('en')">
                    <Icon :icon="USIcon" />
                    <span>{{ $t('english') }}</span>
                </button>

                <button @click="selectLanguage('fa')">
                    <Icon :icon="IRIcon" />
                    <span>{{ $t('persian') }}</span>
                </button>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.box {
    @apply w-fit select-none relative;
}

.lang {
    @apply outline-none w-full flex items-center gap-2;
    @apply cursor-pointer ring-1 ring-slate-900/10 rounded-full;
    @apply font-medium px-4 py-1.5;
    @apply dark:bg-slate-700 dark:shadow-dark dark:text-slate-200;
}

.items {
    @apply bg-white ring-1 ring-slate-900/10 absolute shadow-lg px-2 py-1 rounded-lg;
    @apply left-0 right-0 w-fit mx-auto;
    @apply dark:bg-slate-700 dark:shadow-dark dark:text-slate-200;

    button {
        @apply list-none cursor-pointer px-2 py-1 duration-300;
        @apply rounded-md flex gap-2 items-center w-full;

        &:hover {
            @apply bg-blue-500 text-white;
        }
    }
}


.fly-enter-active,
.fly-leave-active {
    transition: 0.3s;
}

.fly-enter-from {
    transform: translateY(10px);
    opacity: 0;
}

.fly-enter-to {
    transform: translateY(0px);
    opacity: 1;
}

.fly-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>