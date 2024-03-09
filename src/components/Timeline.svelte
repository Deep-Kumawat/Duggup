<script>
    import PostCards from "./Posts.svelte";
    import CareerUpdate from "./CareerUpdate.svelte";
    import DuggupLogoIcon from "./logos/DuggupLogoIcon.svelte";
</script>
<!-- <div class="grid grid-cols-[3px_repeat(2, minmax(0, 1fr))"> -->
<div class="debug grid grid-cols-[0.fr, 1px, 1fr, 1fr] mt-4 w-9/12">
    <PostCards />
    <CareerUpdate companyName="Duggup" location="San Francisco Bay Area" status="Joined" date="Nov 2023"> 
        <DuggupLogoIcon slot="logo"/>
    </CareerUpdate>

</div>

