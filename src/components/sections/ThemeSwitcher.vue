<script setup lang="ts">
import Icon from "../Icon.vue";
import { useTheme } from "@/stores/theme";
import SunIcon from "@/assets/svg/icons/brightness.svg?raw";
import MoonIcon from "@/assets/svg/icons/moon-stars.svg?raw";
import { computed } from "vue";

const theme = useTheme();
const theme_icon = computed(() => theme.isDark ? SunIcon : MoonIcon);

</script>

<template>
    <Icon role="button" :class="['icon', { mc: !theme.isDark, sc: theme.isDark }]" :icon="theme_icon" :size="28"
        @click="theme.toggleTheme" />
</template>

<style scoped lang="scss">
.icon {
    @apply cursor-pointer;
}

// Moon Color
.mc {
    @apply text-slate-700;
}

// Sun color
.sc {
    @apply text-yellow-500;
}
</style>