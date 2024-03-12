<script>
	import { stringify } from "querystring";

    export let size;
    const possible = [10, 12, 28]
    let className = `w-${size} h-${size} border-4 border-slate-200 rounded-full overflow-hidden flex items-center justify-center`;
    className = className.toString();
</script>
<div class={className}>
    <!-- <div class="w-full h-full"></div> -->
    <slot name="image"></slot>
</div>