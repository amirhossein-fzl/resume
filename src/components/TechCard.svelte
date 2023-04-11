<script lang="ts">
    import Icon from "./Icon.svelte";
    export let icon: string; 
    export let title: string; 
</script>

<div class="box">
    <div class="icon">
        <Icon icon={icon} stroke="" color="" size={100} />
    </div>

    <div class="info">
        <span class="title">{title}</span>
        <p class="description">
            <slot />
        </p>
    </div>
</div>

<style lang="scss">
    .box {
        @apply px-4 py-2 bg-slate-100 rounded-2xl flex items-center gap-4;
    }

    .title {
        @apply font-semibold;
    }

    .description {
        @apply text-sm mt-2;
    }

    :global(.dark) {
        .box {
            @apply bg-slate-800 shadow-dark;
        }

        :global(.php-logo) {
            @apply fill-white;
        }

        :global(.rsl-1) {
            @apply stroke-white;
        }

        :global(.rsl-2) {
            @apply stroke-white;
        }

        :global(.rsl-3) {
            @apply stroke-white;
        }

        :global(.rsl-4) {
            @apply stroke-white fill-white;
        }
    }

    :global(.php-logo) {
        @apply fill-[#231f20];
    }
</style>
