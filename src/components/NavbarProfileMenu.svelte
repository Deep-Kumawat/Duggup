<script lang="ts">
    // @ts-ignore
    import RiArrowDropDownLine from '~icons/ri/arrow-drop-down-line';
	import Button from '$lib/components/ui/button/button.svelte';
    import * as Avatar from "$lib/components/ui/avatar";
    export let text: string;
</script>
<Button variant="ghost">
    <div class="pl-4 flex items-center">

        <Avatar.Root class="outline outline-1">
            <Avatar.Image src="https://media.licdn.com/dms/image/D4E03AQF-fLP5TtdtOQ/profile-displayphoto-shrink_800_800/0/1677089436637?e=1715212800&v=beta&t=_Cl8W3911M3gcbPqwFIeVFaLkZvzisuU5YK_BaUECSQ" alt="@shadcn" />
            <Avatar.Fallback>KK</Avatar.Fallback>
        </Avatar.Root>
        <span class="px-2">
            {text}
        </span>
        <RiArrowDropDownLine />
    </div>
</Button>