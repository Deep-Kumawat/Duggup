<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    export let text: string;

  
</script>
   
<Button class="px-4 text-gray-600 font-normal space-x-2 border-b-4 rounded border-x-1 border-t-1 border-gray-600 shadow-none">
    <span class="">{text}</span>
</Button>