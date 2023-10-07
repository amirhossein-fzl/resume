<script setup lang="ts">
import Navigation from "@sections/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="container cty">
        <Navigation />
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
// Container Y padding (cty)
.cty {
    @apply py-3;
}
</style>