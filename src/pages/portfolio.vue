<script setup lang="ts">
import WithProfileLayout from "@/layouts/WithProfileLayout.vue";
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem.vue";
import StudentCapIcon from "@/assets/svg/icons/student-cap.svg?raw";
</script>

<template>
    <WithProfileLayout>
        <Timeline :icon="StudentCapIcon" :title="$t('education')">
            <TimelineItem :title="$t('diploma.label')" :time_range="$t('2023')">
                {{ $t("diploma.description") }}
            </TimelineItem>
        </Timeline>
    </WithProfileLayout>
</template>
