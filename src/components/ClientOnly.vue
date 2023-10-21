
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const show = ref(false);

onMounted(() => {
    show.value = true;
});

</script>

<template>
    <slot v-if="show" />
</template>

<style scoped lang="scss">
    
</style>