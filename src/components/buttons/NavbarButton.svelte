<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    // export let icon;
    export let text: string;
</script>
<!-- <Button class = " hover:bg-slate-100" ><TablerHome2 class="mr-2"/> Home</Button> -->
<Button variant="ghost" class = "font-normal space-x-2 text-gray-600 hover:bg-slate-100">
    <slot name="icon"></slot>
    <div>
        {text}
    </div>
</Button>