<script lang="ts">
    import Icon from '../Icon.svelte';
    import { _ } from 'svelte-i18n';
    import { fade, scale } from 'svelte/transition';
    import InstagramIcon from '@/svg/icons/instagram.svg?raw';
    import LinkedinIcon from '@/svg/icons/linkedin.svg?raw';
    import TelegramIcon from '@/svg/icons/telegram.svg?raw';
    import TwitterIcon from '@/svg/icons/twitter.svg?raw';

    let profile_full: boolean = false;

    let fullview_profile = () => {
        profile_full = true;
    };

    let close_fullview_profile = () => {
        profile_full = false;
    };
</script>

<header>
    <div class="my">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img src="/img/amir-developer.jpg" on:click={fullview_profile} alt="Amirhossein fazli profiles" class="profile">

        <div class="info-container">
            <h1 class="name">{$_('name')}</h1>
            <h2 class="job">{$_('job')}</h2>
            <p class="mt-3">{$_('short_description')}</p>
            <div class="social_networks">
                <a href="https://instagram.com/amirhossein_fzl/" target="_blank">
                    <Icon icon={InstagramIcon} size={28} stroke="" />
                </a>

                <a href="https://www.linkedin.com/in/amirhossein-fazli-b7249026a/" target="_blank">
                    <Icon icon={LinkedinIcon} size={28} stroke="" />
                </a>

                <a href="https://t.me/amirhossein_fzl/" target="_blank">
                    <Icon icon={TelegramIcon} size={28} stroke="" />
                </a>

                <a href="https://twitter.com/amirhossein_fzl/" target="_blank">
                    <Icon icon={TwitterIcon} size={28} stroke="" />
                </a>
            </div>
        </div>
    </div>
</header>

{#if profile_full}  
<div class="profile-full">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click={close_fullview_profile} transition:fade={{ duration: 300, }}></div>
    <img src="/img/amir-developer.jpg" transition:scale={{ duration: 300 }} class="fullview-profile" alt="Amirhossein fazli profiles" />
</div>
{/if}

<style lang="scss">
    header {
        @apply flex justify-center;
    }

    .my {
        @apply flex justify-center mt-20 gap-8 items-center w-6/12;
    }

    .profile {
        @apply w-40 h-40 rounded-full cursor-pointer;
    }

    .info-container {
        @apply flex flex-col w-full;
    }

    .name {
        @apply font-bold text-lg;
    }

    .job {
        @apply text-sm text-slate-800 mt-0.5;
    }

    .social_networks {
        @apply flex gap-3 mt-5;
    }

    .backdrop {
        @apply w-full h-full absolute bg-black opacity-50 z-10 top-0 left-0;
    }

    .fullview-profile {
        @apply m-auto z-20 absolute w-96 h-auto inset-0;
    }

    :global(.dark) {
        .job {
            @apply text-slate-400;
        }
    }
</style>
