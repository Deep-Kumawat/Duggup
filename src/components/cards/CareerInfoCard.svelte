<script lang="ts">
    export let designation: string;
    export let workHours: string;
</script>

<div class="bg-white rounded-xl p-4 space-y-2 col-span-2">
    <div class="font-semibold text-xl">
        {designation}
    </div>

    <div class="font-light text-gray-600 text-sm">
        {workHours}
    </div>
</div>