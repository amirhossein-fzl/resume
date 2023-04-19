<script lang="ts">
    import { _ } from "svelte-i18n";
    import Timeline from "@/components/Timeline.svelte";
    import TimelineItem from "@/components/TimelineItem.svelte";
    import StudentCapIcon from "@/svg/icons/student-cap.svg?raw";
</script>

<Timeline title={$_('education')} icon={StudentCapIcon}>
    <TimelineItem title={$_("diploma.label")} time_range={$_("2023")}>
        {$_("diploma.description")}
    </TimelineItem>
</Timeline>

<style lang="scss"></style>
