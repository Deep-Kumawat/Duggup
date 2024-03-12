<script>
    export let month;
    export let year;
</script>
<div class="relative pr-12 flex justify-end items-center">
    <div class="absolute -mr-[3.3rem] bg-white outline outline-blue-500 rounded-full w-2 h-2" />
    <div class="flex items-center text-xs text-gray-400 ">
        {year + " " + month}
            <!-- Dec 2023 -->
    </div>
</div>