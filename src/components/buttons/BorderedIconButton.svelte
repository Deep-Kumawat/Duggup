<script lang="ts">
    import { Button } from "$lib/components/ui/button";

    export let text: string;

</script>
   
<Button class="px-4 space-x-2 text-gray-600 font-normal border-b-4 rounded border-x-1 border-t-1 border-gray-600 shadow-none">
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