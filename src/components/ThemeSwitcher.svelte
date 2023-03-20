<script lang="ts">
    import MoonStarsIcon from '@/svg/icons/moon-stars.svg?raw';
    import SunIcon from '@/svg/icons/brightness.svg?raw';
    import Icon from '@/components/Icon.svelte';
    import { onMount } from 'svelte';
    import clsx from 'clsx';

    let isDarkMode: boolean;

    onMount(() => {
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }

        isDarkMode = localStorage.getItem('theme') === 'dark';
        isDarkMode && document.documentElement.classList.add('dark');
    });

    const handleToggleTheme = () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        isDarkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    };

</script>

<button on:click={handleToggleTheme}>
    <Icon icon={isDarkMode ? SunIcon : MoonStarsIcon} size={25} class={clsx('cursor-pointer', isDarkMode ? 'text-yellow-500' : 'text-slate-700')} />
</button>
