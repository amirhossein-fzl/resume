<script setup lang="ts">
import Navigation from "@sections/Navigation.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="container cty">
        <Navigation />
        
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<style scoped lang="scss">
// Container Y padding (cty)
.cty {
    @apply py-3;
}

.content {
    @apply mt-20;
}
</style>