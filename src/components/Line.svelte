<script>
    export let rowSpan = 1;
    // let tempClassName = `row-span-${rowSpan}`;
    // const possible = ["row-span-3", "row-span-2", "row-span-1"]
    // let className = `mt-1 border border-dashed border-gray-600 row-span-${rowSpan}`
    let style = `grid-row: span ${rowSpan}`
</script>

<div class="mt-1 border border-dashed border-gray-600" style={style}></div>
