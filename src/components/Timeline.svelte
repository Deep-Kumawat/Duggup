<script>
    import PostCard from "./cards/Postcard.svelte";
    import CareerInfoCard from "./cards/CareerInfoCard.svelte";
    import DuggupLogoIcon from "./logos/DuggupLogoIcon.svelte";
</script>
<!-- <div class="grid grid-cols-[3px_repeat(2, minmax(0, 1fr))"> -->
<!-- <div class="debug grid grid-cols-[1fr, 1px, 1fr, 1fr] mt-4 w-9/12"> -->
<div class="debug grid grid-cols-[0.5fr_1px_1fr_1fr] mt-4 w-10/12">
<!-- <div class=" grid grid-cols-4 mt-4 w-9/12"> -->
    <div class="">
        1
    </div>
    <div class="border border-dashed border-gray-400"></div>
    <div class="">
        <div class="ml-12 my-10">
            <PostCard text="Steve bhai jobswala"/>
        </div>
    </div>
    <div class="ml-12 my-10">
        <PostCard text="Steve bhai jobswala"/>
    </div>
    <div class="flex items-right justify-end mr-12">
        <!-- 5 -->
        <div class="text-right text-xs text-gray-400 flex items-center">
            <!-- Date should be a prop -->
            <div class="items-right">
                <div class="flex justify-end py-2">
                    <div class="rounded-full w-16 h-16 overflow-hidden flex items-center">
                        <div>
                            <DuggupLogoIcon />
                            <!-- <slot name="logo">LOGO</slot> -->
                        </div>
                    </div>
                </div>
                <span class="text-xl font-semibold text-gray-800">Duggup</span>
                <br>
                San Francisco Bay Area
                <br>
                status
                <br>
                Nov 2023
            </div>
        </div>
    </div>
    <div class="border border-dashed border-gray-400 mt-0.5"></div>
    <div class="ml-12 col-span-2 self-center">
        <CareerInfoCard designation="Co-Founder & CEO" workHours="Full-time Remote"/>
    </div>
    <div class="">
        9
    </div>
    <div class="border border-dashed border-gray-400 mt-0.5">   </div>
    <div class="ml-12 my-10">
        <PostCard text="Steve bhai jobswala"/>
    </div>
    <!-- <PostCards />
        <CareerUpdate companyName="Duggup" location="San Francisco Bay Area" status="Joined" date="Nov 2023"> 
            <DuggupLogoIcon slot="logo"/>
        </CareerUpdate> -->

</div>

