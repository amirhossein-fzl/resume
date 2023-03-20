<script lang="ts">
    export let icon:string = '';
    export let viewBox: string = extractViewBox(icon);

    export let size: number = 20;
    export let width: number = size;
    export let height: number = size;

    export let color: string = 'currentColor';
    export let stroke: string = color;
    export let fill: string = color;

    let className: string = '';
    export {className as class};

    $: elements = icon.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');

    function extractViewBox(svg: string): string {
        const regex: RegExp = /viewBox="([\d\- \.]+)"/;
        const res = regex.exec(svg);
        if (!res) return '0 0 20 20'; // default value
        return res[1];
    }
</script>

<svg xmlns="http://www.w3.org/2000/svg" class={className} width={width + 'px'} height={height + 'px'} {viewBox} {stroke} {fill} on:click {...$$restProps}>
    {@html elements}
</svg>