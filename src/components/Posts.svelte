<script lang="ts">
    import PostCard from "./cards/PostCard.svelte";
</script>
<div class="flex relative mt-0.5">
    <div class="ml-14 border border-gray-400 border-dashed mr-14">
        <!-- THE LINE -->
    </div>
    <!-- THE DOT -->
    <div class="absolute ml-13 my-32 bg-white border border-blue-500 border-2 rounded-full w-4 h-4" />
    <div class="absolute text-xs text-gray-400 my-32 -ml-8">
        <!-- Date should be a prop -->
        Dec 2023
    </div>
    <div class="my-8 grid grid-cols-2 gap-12">
        <PostCard text="No amount of technology can convert a bad story into a good story.">
            <img slot="img" src="https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg?=1709924520" alt="alt">
        </PostCard>
        <PostCard text="Most people don't have original ideas. Here is how Sam Altman pushes himself to have...">
            <img slot="img" src="https://cdn.vox-cdn.com/thumbor/j_RKqO2l5n6mhbJJpjgfHP0imlk=/0x0:639x480/920x613/filters:focal(268x189:370x291):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63704460/sam_altman.0.1546423352.0.png" alt="alt">
        </PostCard>
    </div>
</div>