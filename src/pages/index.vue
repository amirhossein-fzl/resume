<script setup lang="ts">
import Profile from '@/components/sections/Profile.vue';
import Info from '@/components/sections/Info.vue';
import { useHead } from "@unhead/vue";
import config from "@config";

useHead({
    title: "Amirhossein Fazli - Full-stack developer",
    link: [
        {
            rel: "canonical",
            href: config.url,
        }
    ],
    meta: [
        {
            name: "title",
            content: "Amirhossein Fazli - Full-stack developer"
        },
        {
            name: "description",
            content: "A Full-stack programmer and ready to implement your business idea!"
        },
        {
            name: "keywords",
            content: "Amirhossein,Fazli,امیرحسین,فضلی"
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: "Amirhossein Fazli - Full-stack developer",
        },
        {
            property: "og:site_name",
            content: "Amirhossein fazli personal site",
        },
        {
            property: "og:url",
            content: "https://amirhossein-fzl-dev.ir/",
        },
        {
            property: "og:description",
            content: "A Full-stack programmer and ready to implement your business idea!",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:image",
            content: "https://amirhossein-fzl-dev.ir/img/amir-developer.jpg",
        },

        // Twitter card meta tags
        {
            property: "twitter:card",
            content: "summary_large_image",
        },
        {
            property: "twitter:site",
            content: config.twitter_username,
        },
        {
            property: "twitter:title",
            content: "Amirhossein Fazli - Full-stack developer",
        },
        {
            property: "twitter:description",
            content: "A Full-stack programmer and ready to implement your business idea!",
        },
        {
            property: "twitter:image",
            content: "https://amirhossein-fzl-dev.ir/img/amir-developer.jpg",
        },
    ]
});
</script>

<template>
    <div class="flex-container">
        <div class="item">
            <Transition name="back-in-up" appear>
                <Profile />
            </Transition>
        </div>

        <div class="item">
            <Info />
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes backInUp {
    0% {
        opacity: 0.7;
        transform: translateY(-1200px) scale(0.7);
    }

    80% {
        opacity: 0.7;
        transform: translateY(0) scale(0.7);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.flex-container {
    @apply gap-12 lg:gap-3 items-center flex flex-col md:flex-row px-4;
}

.item {
    @apply w-full md:w-6/12;
}

.back-in-up {

    &-enter-active,
    &-leave-active {
        animation: backInUp 0.5s ease;
    }

    &-enter-to {
        animation: backInUp 0.5s ease;
    }
}</style>
