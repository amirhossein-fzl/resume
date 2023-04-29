<script lang="ts">
    import Card from "./Card.svelte";
    import Icon from "./Icon.svelte";
    export let icon: string; 
    export let title: string; 
</script>

<Card class="tech-box">
    <div class="icon">
        <Icon icon={icon} stroke="" color="" size={100} />
    </div>

    <div class="info">
        <span class="title">{title}</span>
        <p class="description">
            <slot />
        </p>
    </div>
</Card>

<style lang="scss">
    :global(.tech-box) {
        @apply px-4 py-2 rounded-2xl flex flex-col items-center gap-4;
        @apply sm:flex-row;
    }

    .info {
        @apply text-center sm:text-start;
    }

    .title {
        @apply font-semibold;
    }

    .description {
        @apply text-sm mt-2;
    }

    :global(.dark) {

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
