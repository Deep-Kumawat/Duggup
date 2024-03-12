<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    export let text: string;

  
</script>
   
<Button variant="outline" class="px-4 text-gray-600 font-normal space-x-2 border-b-4 rounded border-gray-600">
    <span class="">{text}</span>
</Button>