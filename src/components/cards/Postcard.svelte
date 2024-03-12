<script lang="ts">
	export let text: string;
</script>

<div class="h-64 overflow-hidden rounded-lg bg-white font-normal text-gray-600">
	<div class="flex h-3/5 items-center justify-center overflow-hidden">
		<div class="object-cover">
			<slot name="image" />
		</div>
	</div>
	<div class="flex h-2/5 items-center justify-center p-5">
		<p class="text-md line-clamp-2 w-96 overflow-hidden">
			{text}
		</p>
	</div>
</div>
