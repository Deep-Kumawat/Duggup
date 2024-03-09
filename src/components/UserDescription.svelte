<script lang=ts>
    import ProfilePhoto from "./ProfilePhoto.svelte";
    import DuggupLogoIcon from "./logos/DuggupLogoIcon.svelte";
    import CircumShare1 from '~icons/circum/share-1';
    import TablerDots from '~icons/tabler/dots';
    import BorderedButton from "./buttons/BorderedButton.svelte";
</script>

<!-- <div class="flex mt-16 mx-52 items-center"> -->
<div class="flex items-center">
    <div class="w-28">
        <ProfilePhoto size={28}>
            <!-- <img slot="image" src="https://media.licdn.com/dms/image/D4E03AQF-fLP5TtdtOQ/profile-displayphoto-shrink_800_800/0/1677089436637?e=1715212800&v=beta&t=_Cl8W3911M3gcbPqwFIeVFaLkZvzisuU5YK_BaUECSQ" alt="KK Image"> -->
        </ProfilePhoto>
        <div class="text-gray-600 font-semibold text-2xl text-center">
            Krishna Kiran
        </div>
    </div>
    
    <div class="text-gray-600 h-36 grid grid-cols-5 justify-between ml-12">
        <!-- Desciption and Follow Button -->
        <div class="relative col-span-4">
            Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.
        </div>
        
        <!-- CompanyInfo & Website -->
        <div class="text-right relative">
            <div class="flex justify-end">
                <div class="w-8 h-8">
                    <DuggupLogoIcon />
                </div>
            </div>
            
            <div class="font-semibold">
                Duggup
            </div>
            
            <div class="text-gray-400 text-sm">
                Co-Founder and CEO
            </div>
        </div>
        
        <div class="col-span-5 flex justify-between items-center">
            
            <div class="">
                <BorderedButton text={"Follow"}/>
            </div>
            <div class="flex font-normal items-center">
                My website <CircumShare1 class="mr-4"/> <TablerDots class="ml-auto"/>
            </div>
        </div>
    </div>
</div>