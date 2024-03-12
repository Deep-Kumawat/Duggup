<!-- <nav class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-dashed px-4 backdrop-blur svelte-z4bsls"><a href="/" class="inline-flex flex-row gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12C0 6.34315 0 3.51472 1.75736 1.75736C3.51472 0 6.34315 0 12 0C17.6569 0 20.4853 0 22.2426 1.75736C24 3.51472 24 6.34315 24 12C24 17.6569 24 20.4853 22.2426 22.2426C20.4853 24 17.6569 24 12 24C6.34315 24 3.51472 24 1.75736 22.2426C0 20.4853 0 17.6569 0 12Z" fill="#0066FF"></path><g filter="url(#filter0_d_14879_8201)"><path d="M11.9043 6.03861L6.04069 11.724C6.01466 11.7493 6 11.7837 6 11.8197V16.3655C6 16.4846 6.14584 16.5447 6.23207 16.4611L11.9043 10.9612C11.9574 10.9098 12.0426 10.9098 12.0957 10.9612L17.7679 16.4611C17.8541 16.5447 18 16.4846 18 16.3655V11.8197C18 11.7837 17.9853 11.7493 17.9593 11.724L12.0957 6.03861C12.0426 5.98713 11.9574 5.98713 11.9043 6.03861Z" stroke="white" stroke-width="1.5"></path></g><defs><filter id="filter0_d_14879_8201" x="3.75" y="5.25" width="16.5" height="14.999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1.5"></feOffset><feGaussianBlur stdDeviation="0.75"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14879_8201"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14879_8201" result="shape"></feBlend></filter></defs></svg> <span data-svelte-h="svelte-1oh8tq">Duggup</span></a> <div class="flex flex-row items-center gap-4"><div class="flex items-center gap-[40px]"> <a href="/learn/enrollments" tabindex="0" class="inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" data-button-root=""><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-book-open mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
				Learn</a> </div>  <button type="button" tabindex="0" aria-controls="_s1_b5koSz" aria-expanded="false" data-state="closed" id="-qixjF7e31" data-melt-dropdown-menu-trigger="" data-menu-trigger="" class="inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" data-button-root=""><div class="flex items-center space-x-2 px-4"><div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" data-avatar-root=""><img src="https://p1.assets.duggup.com/156354449358925935/avatar.jpg?v=1709809005" style="display:none;" data-melt-avatar-image="" data-bits-avatar-image="" alt="156354449358925935" class="aspect-square h-full w-full rounded-sm" sizes="48px"> <span data-melt-avatar-fallback="" data-avatar-fallback="" class="flex h-full w-full items-center justify-center rounded-full bg-muted uppercase">DK</span></div> <div><p>Deep Kumawat</p></div> <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-chevron-down ml-2"><path d="m6 9 6 6 6-6"></path></svg></div></button> </div> </nav> <main class="relative ml-0 flex min-h-screen w-full flex-grow flex-col items-center p-8"><div class="relative flex w-full flex-1 flex-shrink-0 flex-grow flex-col items-center py-8 compact:w-[1440px]"><div class="relative flex w-full max-w-7xl flex-shrink-0 flex-grow flex-col py-8 compact:w-[712px]"><h1 class="mb-10 text-[40px] svelte-u5up8d" data-svelte-h="svelte-1gfpywj">Your workshops</h1> <div data-svelte-h="svelte-1ipw1do"><p>No workshops enrolled</p></div> <div class="w-full"></div></div> </div> </main> -->

<script>
    import HomeLogo from "./logos/HomeLogo.svelte";
    import { Button } from "$lib/components/ui/button";
    // @ts-ignore
    import TablerHome2 from '~icons/tabler/home-2';
    // @ts-ignore
    import PhBookOpenThin from '~icons/ph/book-open-thin';
    import PhPlusSquareThin from '~icons/ph/plus-square-thin';
	import ExploreIcon from "./logos/ExploreIcon.svelte";
    import BorderedIconButton from "./buttons/BorderedIconButton.svelte";
    import NavbarButton from "./buttons/NavbarButton.svelte";
	import NavbarProfileMenu from "./NavbarProfileMenu.svelte";
</script>
<nav class="top-0 flex justify-around items-center h-16 w-full border-dashed border-b border-slate-400">
    <HomeLogo />
    <div class="ml-auto flex items-center">
        <!-- <Button class = "nav_button hover:bg-slate-100" ><TablerHome2 class="mr-2"/> Home</Button> -->
        <NavbarButton text="Home">
            <TablerHome2 slot= "icon"/>
        </NavbarButton>
        <NavbarButton text="Explore">
            <ExploreIcon slot= "icon"/>
        </NavbarButton>
        <NavbarButton text="Learn">
            <PhBookOpenThin slot= "icon"/>
        </NavbarButton>
        <div class="mx-10 flex item-center">
            <BorderedIconButton text={"Post"}>
                <PhPlusSquareThin slot = "icon" />
            </BorderedIconButton>
        </div>
        <!-- <div>
            deep
        </div> -->
        <NavbarProfileMenu text="Krishna Kiran" />

    </div>
</nav>