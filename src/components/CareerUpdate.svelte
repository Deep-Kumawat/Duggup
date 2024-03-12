<script lang="ts">
	import CareerInfoCard from "./cards/CareerInfoCard.svelte";
    export let location;
    export let status;
    export let date;
    export let companyName;


</script>
<div class="flex mt-0.5">
        <!-- <div class="absoulte -left-4 text-right debug items-center flex justify-center text-xs text-gray-400"> -->
    <div class="absoulte -ml-[6.75rem] mr-10 text-right text-xs text-gray-400 flex items-center">
        <!-- Date should be a prop -->
        <div class="items-right">
            <div class="flex justify-end py-2">
                <div class="rounded-full w-16 h-16 overflow-hidden flex items-center">
                    <div>
                        <slot  name="logo">{companyName} Logo</slot>
                    </div>
                </div>
            </div>
            <span class="text-xl font-semibold text-gray-800">{companyName}</span>
            <br>
            {location}
            <br>
            {status}
            <br>
            {date}
        </div>
    </div>

    <!-- THE DOT -->
    <div class="flex items-center relative">

        <div class="absolute -ml-4 my-16 bg-white border border-blue-500 border-8 rounded-full w-8 h-8" />
    </div>
    
    <div class="border border-gray-400 border-dashed mr-14">
        <!-- THE LINE -->
    </div>
    <div class="w-full">
        <CareerInfoCard designation="Co-Founder and CEO" workHours="Full-time Remote"/>        
    </div>
</div>