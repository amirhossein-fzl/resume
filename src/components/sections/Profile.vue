<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import GithubIcon from "@/assets/svg/icons/github.svg?raw";
import InstagramIcon from "@/assets/svg/icons/instagram.svg?raw";
import LinkedinIcon from "@/assets/svg/icons/linkedin.svg?raw";
import TelegramIcon from "@/assets/svg/icons/telegram.svg?raw";
import XIcon from "@/assets/svg/socials/x.svg?raw";
import { type Ref, ref } from "vue";
import config from "@config";
import DownloadIcon from "@/assets/svg/icons/download.svg?raw"

const is_fullview: Ref<boolean> = ref(false);

const open_fullview_photo = () => is_fullview.value = true;
const close_fullview_photo = () => is_fullview.value = false;
</script>

<template>
    <div class="prof-container">
        <img src="/img/amir-developer.jpg" role="button" @click="open_fullview_photo" alt="Amirhossein Fzli photo"
            class="avatar" />
        <div class="prof-info">
            <span class="name">{{ $t("my_name") }}</span>
            <span class="job">{{ $t("job") }}</span>
            <p class="intro">{{ $t("short_description") }}</p>

            <div class="social-networks">
                <a :href="config.social_networks.instagram" target="_blank">
                    <Icon :icon="InstagramIcon" :size="28" stroke="" />
                </a>

                <a :href="config.social_networks.linkedin" target="_blank">
                    <Icon :icon="LinkedinIcon" :size="28" stroke="" />
                </a>

                <a :href="config.social_networks.telegram" target="_blank">
                    <Icon :icon="TelegramIcon" :size="28" stroke="" />
                </a>

                <a :href="config.social_networks.x" target="_blank">
                    <Icon :icon="XIcon" class="tw" :size="28" stroke="" />
                </a>

                <a :href="config.social_networks.github" target="_blank">
                    <Icon :icon="GithubIcon" class="tw" :size="28" stroke="" />
                </a>
            </div>

            <a class="download-btn" :href="config.resume_download_link">
                <Icon :icon="DownloadIcon" :size="22" />
                <span>{{ $t("download_resume") }}</span>
            </a>
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
    @apply dark:text-white text-4xl font-bold text-center lg:text-start w-fit;
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

.fw-img {
    @apply m-auto z-[1000] fixed w-96 h-auto inset-0 rounded-md;
}

.tw {
    @apply dark:text-white;
}

.download-btn {
    @apply inline-flex items-center bg-blue-500 text-white px-6 py-2 rounded-2xl;
    @apply font-semibold gap-2 mt-4 leading-[22px];
}
</style>