<script lang="ts">
    // @ts-ignore
    import RiArrowDropDownLine from '~icons/ri/arrow-drop-down-line';
    import ProfilePhoto from './ProfilePhoto.svelte';

    export let text: string;
</script>
<div class="pl-4 flex items-center">
    <ProfilePhoto size={10}>
        <img slot="image" src="https://media.licdn.com/dms/image/D4E03AQF-fLP5TtdtOQ/profile-displayphoto-shrink_800_800/0/1677089436637?e=1715212800&v=beta&t=_Cl8W3911M3gcbPqwFIeVFaLkZvzisuU5YK_BaUECSQ" />
    </ProfilePhoto>
    <span class="px-4">
        <!-- Krishna Kiran -->
        {text}
    </span>
    <RiArrowDropDownLine />
</div>