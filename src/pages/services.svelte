<script lang="ts">
    import { _ } from "svelte-i18n";
    import ServiceCard from "@/components/ServiceCard.svelte";
</script>

<div class="row">
    <div class="item">
        <ServiceCard title={$_("front-end.label")}>
            {$_("front-end.description")}
        </ServiceCard>
    </div>

    <div class="item">
        <ServiceCard title={$_("back-end.label")}>
            {$_("back-end.description")}
        </ServiceCard>
    </div>

    <div class="item">
        <ServiceCard title={$_("telegram-bot.label")}>
            {$_("telegram-bot.description")}
        </ServiceCard>
    </div>
</div>

<style lang="scss">
    .row {
        // @apply grid grid-cols-2 gap-6;
        @apply flex flex-wrap w-full gap-6;
        .item {
            @apply max-w-full w-full flex-auto h-fit;
            @apply flex flex-col gap-10 sm:w-4/12 md:w-3/12;
        }
    }
</style>
