<script setup lang="ts">
    import { toRef, computed } from "vue";

    export interface Props {
        icon: string;
        viewBox: string;
        size: number;
        width: number;
        height: number;
        color: string;
        fill: string;
        stroke: string;
    }

    const props = defineProps({
        icon: {
            type: String,
            required: true,
        },
        viewBox: {
            type: String,
            default(props: Props) {
                const regex: RegExp = /viewBox="([\d\- \.]+)"/;
                const res = regex.exec(props.icon);
                if (!res) return '0 0 20 20'; // default value
                return res[1];
            }
        },
        size: {
            type: Number,
            default: 20,
        },
        width: {
            type: Number,
            default(props: Props) {
                return props.size;
            }
        },
        height: {
            type: Number,
            default(props: Props) {
                return props.size;
            }
        },
        color: {
            type: String,
            default: "currentColor",
        },
        fill: {
            type: String,
            default(props: Props) {
                return props.color;
            }
        },
        stroke: {
            type: String,
            default(props: Props) {
                return props.color;
            }
        },
    });

    const icon = toRef(props, "icon");
    const elements = computed(() => icon.value.replace(/<svg ([^>]*)>/, '').replace('</svg>', ''));

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width + 'px'" :height="height + 'px'" :viewBox="viewBox"
        :stroke="stroke" :fill="fill" v-html="elements"></svg>
</template>