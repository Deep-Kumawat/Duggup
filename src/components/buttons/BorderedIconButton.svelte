<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    export let text: string;

</script>
   
<Button variant="outline" class="px-4 space-x-2 text-gray-600 font-normal border-b-4 rounded border-gray-600">
    <div>
        <slot name="icon" id="icon">
            
        </slot>
    </div>
    <div>

        <slot>
            <span class="">{text}</span>
        </slot>
    </div>

</Button>