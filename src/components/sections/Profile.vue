<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import GithubIcon from "@/assets/svg/icons/github.svg?raw";
import InstagramIcon from "@/assets/svg/icons/instagram.svg?raw";
import LinkedinIcon from "@/assets/svg/icons/linkedin.svg?raw";
import TelegramIcon from "@/assets/svg/icons/telegram.svg?raw";
import TwitterIcon from "@/assets/svg/icons/twitter.svg?raw";
import { type Ref, ref } from "vue";

const is_fullview: Ref<boolean> = ref(false);

const open_fullview_photo = () => is_fullview.value = true;
const close_fullview_photo = () => is_fullview.value = false;
</script>

<template>
    <div class="prof-container">
        <img src="/img/amir-developer.jpg" role="button" @click="open_fullview_photo" alt="Amirhossein Fzli photo"
            class="avatar" />
        <div class="prof-info">
            <h1 class="name">{{ $t("my_name") }}</h1>
            <h2 class="job">{{ $t("job") }}</h2>
            <p class="intro">{{ $t("short_description") }}</p>

            <div class="social-networks">
                <a href="https://instagram.com/amirhossein_fzl/" target="_blank">
                    <Icon :icon="InstagramIcon" :size="28" stroke="" />
                </a>

                <a href="https://www.linkedin.com/in/amirhossein-fazli-b7249026a/" target="_blank">
                    <Icon :icon="LinkedinIcon" :size="28" stroke="" />
                </a>

                <a href="https://t.me/amirhossein_fzl/" target="_blank">
                    <Icon :icon="TelegramIcon" :size="28" stroke="" />
                </a>

                <a href="https://twitter.com/amirhossein_fzl/" target="_blank">
                    <Icon :icon="TwitterIcon" :size="28" stroke="" />
                </a>

                <a href="https://github.com/amirhossein-fzl/" target="_blank">
                    <Icon :icon="GithubIcon" :size="28" stroke="" />
                </a>
            </div>
        </div>

        <!-- Fullview profile photo -->
        <Transition name="fade">
            <div class="backdrop" v-if="is_fullview" @click="close_fullview_photo"></div>
        </Transition>

        <Transition name="scale">
            <img src="/img/amir-developer.jpg" v-if="is_fullview" alt="Amirhossein Fzli photo" class="fw-img" />
        </Transition>
        <!-- End fullview profile photo -->
    </div>
</template>

<style scoped lang="scss">
// Profile Container
.prof-container {
    @apply flex flex-col xl:flex-row items-center gap-6;
}

// Profile Info
.prof-info {
    @apply flex flex-col gap-2 justify-center xl:items-start items-center;
}

.avatar {
    @apply rounded-full w-60 h-auto;
}

.name {
    @apply dark:text-white text-4xl font-black text-center lg:text-start w-fit;
}

.job {
    @apply text-lg;
}

.intro {
    @apply text-center xl:text-start;
}

.social-networks {
    @apply flex gap-3 mt-5;
}

.scale {

    &-enter-active,
    &-leave-active {
        @apply duration-300;
    }

    &-enter-to {
        @apply scale-100;
    }

    &-enter-from,
    &-leave-to {
        @apply scale-0;
    }
}

.backdrop {
    @apply w-full h-full fixed bg-black opacity-50 z-10 top-0 left-0;
}

.fw-img {
    @apply m-auto z-20 fixed w-96 h-auto inset-0;
}
</style>