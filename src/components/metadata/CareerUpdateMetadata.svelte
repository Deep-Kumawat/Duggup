<script>
	import IconamoonArrowUp2 from '~icons/iconamoon/arrow-up-2';
	export let companyName;
	export let location;
	export let status;
	export let month;
	export let year;
</script>



<div class="relative -ml-[6.75rem] mr-10 flex items-center justify-end text-right text-xs text-gray-400">
	<!-- Date should be a prop -->
	<div class="flex flex-col">
		<div class="flex justify-end py-2">
			<div class="flex h-16 w-16 items-center overflow-hidden rounded-full">
				<div>
					<slot name="logo">{companyName} Logo</slot>
				</div>
			</div>
		</div>
		<span class="text-xl font-semibold text-gray-800">{companyName}</span>
		<br />
		{location}
		<br />
		{status}
		<br />
		{`${month} ${year}`}
	</div>
	<div class="absolute scale-150 text-gray-400 -mr-[3.05rem] flex justify-center top-0 object-cover w-4 h-4 ">
		<!-- THE ARROW -->
		<div class="scale-150">
			<IconamoonArrowUp2 />
		</div>
	</div>	
	<div
		class="absolute -mr-[3.05rem] flex h-4 w-4 items-center rounded-full bg-white outline outline-8 outline-blue-500"
	/>
</div>

<!-- THE DOT -->
