<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView } from "vue-router";
import { useI18n } from "vue-i18n";
import { loadLanguage } from "@/core/language";
import { loadTheme } from "@/core/theme";

onBeforeMount(() => {
    // Load language ...
    const i18n = useI18n();
    let lang = loadLanguage();
    i18n.locale.value = lang;

    // Load Theme ...
    loadTheme();
});
</script>

<template>
    <RouterView></RouterView>
</template>
