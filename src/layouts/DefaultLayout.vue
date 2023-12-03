<script setup lang="ts">
import Navigation from "@sections/Navigation.vue";
import { RouterView } from "vue-router";

const current_year = new Date().getFullYear()
</script>

<template>
    <div class="container cty">
        <Navigation />

        <div class="content">
            <RouterView v-slot="{ Component }">
                <Transition name="page">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </div>

        <footer>
            <p>{{ $t("footer", { year: current_year }).replace("-", "|") }}</p>
            <a href="https://github.com/amirhossein-fzl/resume">{{ $t("source") }}</a>
        </footer>
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

.page {
    &-enter-active,
    &-leave-active {
        @apply duration-300;
    }

    &-enter-to {
        @apply scale-100;
    }

    &-enter-from,
    &-leave-to {
        @apply scale-75 opacity-0 h-0;
    }
}

footer {
    @apply flex gap-2 mt-10 mb-5 justify-center;
    a {
        @apply text-blue-500 underline;
    }
}
</style>