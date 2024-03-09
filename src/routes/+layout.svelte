<script lang="ts">
    import "../app.css";
    import Navbar from '../components/Navbar.svelte'
    import UserDescription from "../components/UserDescription.svelte";
    import Timeline from "../components/Timeline.svelte";
</script>

<slot />
<div class="mx-0 lg:mx-32">
    <Navbar />
    <div id="main-container" class="mt-16 mx-52 items-center">
        <UserDescription />
        <Timeline />
    </div>
</div>
