<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import GithubIcon from "@/assets/svg/icons/github.svg?raw";
import InstagramIcon from "@/assets/svg/icons/instagram.svg?raw";
import LinkedinIcon from "@/assets/svg/icons/linkedin.svg?raw";
import TelegramIcon from "@/assets/svg/icons/telegram.svg?raw";
import TwitterIcon from "@/assets/svg/icons/twitter.svg?raw";
</script>

<template>
    <div class="prof-container">
        <img src="/img/amir-developer.jpg" role="button" alt="Amirhossein Fzli photo" class="avatar" />
        <div class="prof-info">
            <h1 class="name">{{ $t("my_name") }}</h1>
            <h2 class="job">{{ $t("job") }}</h2>
            <p>{{ $t("short_description") }}</p>

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
    </div>
</template>

<style scoped lang="scss">
// Profile Container
.prof-container {
    @apply flex items-center gap-6;
}

// Profile Info
.prof-info {
    @apply flex flex-col gap-2;
}

.avatar {
    @apply rounded-full w-60 h-auto;
}

.name {
    @apply dark:text-white text-4xl font-black;
}

.job {
    @apply text-lg;
}

.social-networks {
    @apply flex gap-3 mt-5;
}
</style>