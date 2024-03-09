<script lang="ts">
    export let text: string;
</script>

<div class="h-56 rounded-lg text-gray-600 font-normal bg-white overflow-hidden">
    <div id="post-card-image" class="h-3/5 overflow-hidden items-center flex justify-center">
        <slot name="img"></slot>
    </div>
    <div class="p-5 h-2/5 flex justify-center items-center overflow-hidden">
        {text}
    </div>
</div>