<script lang="ts">
    import { fly } from 'svelte/transition';
    import USIcon from '@/svg/flags/us.svg?raw';
    import IRIcon from '@/svg/flags/ir.svg?raw';
    import Icon from './Icon.svelte';
    import ChevronDownIcon from '@/svg/icons/chevron-down.svg?raw';
    import { _ } from 'svelte-i18n';
    import { changeLanguage } from '@/core/lang';

    // @ts-ignore
    let selected: 'persian' | 'english' = localStorage.getItem('lang');
    let flags = {
        persian: IRIcon,
        english: USIcon,
    };

    let items_is_open = false;

    let selectItem = (item: 'persian' | 'english') =>
        (selected = changeLanguage(item));

    let toggle_open = () => (items_is_open = !items_is_open);
</script>

<div class="box">
    <div
        tabindex="0"
        role="button"
        class="lang"
        on:focus={toggle_open}
        on:blur={toggle_open}
    >
        <Icon icon={flags[selected]} size={24} />
        <span>{$_(selected)}</span>
        <Icon icon={ChevronDownIcon} size={14} />
    </div>

    {#if items_is_open}
        <div class="items" transition:fly={{ y: 10, duration: 300 }}>
            <button on:click={() => selectItem('english')}>
                <Icon icon={USIcon} size={20} />
                <span>{$_('english')}</span>
            </button>

            <button on:click={() => selectItem('persian')}>
                <Icon icon={IRIcon} size={20} />
                <span>{$_('persian')}</span>
            </button>
        </div>
    {/if}
</div>

<style lang="scss">
    .box {
        @apply w-fit select-none relative;
        .lang {
            @apply outline-none w-full flex items-center gap-2;
            @apply cursor-pointer bg-white rounded-full;
            @apply px-4 py-1.5;
        }

        .items {
            @apply bg-white absolute shadow-lg px-2 py-1 rounded-lg;
            @apply left-0 right-0 w-fit mx-auto;
            button {
                @apply list-none cursor-pointer px-2 py-1 duration-300;
                @apply rounded-md flex gap-2 items-center w-full;

                &:hover {
                    @apply bg-blue-500 text-white;
                }
            }
        }
    }

    :global(.dark) {
        .box {
            .lang {
                @apply bg-slate-700 text-white;
            }
            .items {
                @apply bg-slate-700 text-white shadow-dark;
            }
        }
    }
</style>
