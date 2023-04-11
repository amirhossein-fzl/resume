<script lang="ts">
    import clsx from "clsx";
    export let title: string;
    let className: string = '';
    export {className as class};
</script>

<span class={clsx('title', className)}>{title}</span>

<style lang="scss">
    .title {
        @apply font-bold w-fit block cursor-pointer text-lg mb-5;

        &::after {
            content: "";
            @apply block w-3 h-1 bg-blue-500 rounded-full mt-1.5 duration-300;
        }

        &:hover {
            &::after {
                @apply w-5;
            }
        }
    }
</style>
