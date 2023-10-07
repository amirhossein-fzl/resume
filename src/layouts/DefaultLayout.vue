<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
    <div class="container cty">
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
// Container Y padding (cty)
.cty {
    @apply py-3;
}
</style>