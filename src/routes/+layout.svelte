<script lang="ts">
	import '../app.css';
	import * as Avatar from "$lib/components/ui/avatar";
	import Navbar from '../components/Navbar.svelte';
	import PostCard from '../components/cards/Postcard.svelte';
	import CareerInfoCard from '../components/cards/CareerInfoCard.svelte';
	import DuggupLogoIcon from '../components/logos/DuggupLogoIcon.svelte';
	import response from './response.json';
	import CircumShare1 from '~icons/circum/share-1';
	import TablerDots from '~icons/tabler/dots';
	import BorderedButton from '../components/buttons/BorderedButton.svelte';
	import PostcardMetadata from '../components/metadata/PostMetadata.svelte';
	import CareerUpdateMetadata from '../components/metadata/CareerUpdateMetadata.svelte';
	import Line from '../components/Line.svelte';

</script>

<div class="max-w-[96rem] ml-auto mr-auto">
	<Navbar />
	<div id="main-container" class="max-w-[76rem] mt-16 ml-auto mr-auto">
		<div class="flex items-center">
			<div class="w-28">
				<Avatar.Root class="w-28 h-28 border-4 border-slate-200">
					<Avatar.Image src="https://media.licdn.com/dms/image/D4E03AQF-fLP5TtdtOQ/profile-displayphoto-shrink_800_800/0/1677089436637?e=1715212800&v=beta&t=_Cl8W3911M3gcbPqwFIeVFaLkZvzisuU5YK_BaUECSQ" alt="@shadcn" />
					<Avatar.Fallback>{response.username.split(' ')[0][0] + response.username.split(' ')[1][0]}</Avatar.Fallback>
				</Avatar.Root>
				<div class="text-center text-2xl font-semibold text-gray-600">
					{response.username}
				</div>
			</div>

			<div class="ml-12 grid h-36 grid-cols-5 justify-between text-gray-600">
				<div class="relative col-span-4">
					{response.bio}
				</div>

				<div class="relative text-right">
					<div class="flex justify-end">
						<div class="h-8 w-8">
							<DuggupLogoIcon />
						</div>
					</div>

					<div class="font-semibold">
						{response.companyName}
					</div>

					<div class="text-sm text-gray-400">
						{response.designation}
					</div>
				</div>

				<div class="col-span-5 flex items-center justify-between">
					<div class="">
						<BorderedButton text={'Follow'} />
					</div>
					<div class="flex items-center font-normal">
						<a href={response.websiteURL} class="flex items-center"
							>My website<CircumShare1 class="ml-1 mr-4" /></a
						>
						<TablerDots class="ml-auto scale-150" />
					</div>
				</div>
			</div>
		</div>
		<div class="-ml-[10.55rem]">
			<!-- <Timeline /> -->
			<div class="mt-4 grid max-w-[68rem] grid-cols-[14rem_1px_1fr_1fr]">
				{#each response.timeline as timelineItem}
					{#if timelineItem.type === 'posts'}
						<PostcardMetadata
							month={timelineItem.month}
							year={timelineItem.year}
							rowSpan={Math.ceil(timelineItem.posts.length / 2)}
						/>
						<Line rowSpan={Math.ceil(timelineItem.posts.length / 2)} />
						{#each timelineItem.posts as post, postIndex}
							<div class="my-10 ml-12">
								<PostCard text={post.text}>
									<img
										slot="image"
										src={timelineItem.posts[postIndex].postImageURL}
										alt="postcard image alt"
									/>
								</PostCard>
							</div>
						{/each}
					{:else if timelineItem.type === 'careerUpdate'}
						<CareerUpdateMetadata
							companyName={timelineItem.careerUpdate.companyName}
							location={timelineItem.careerUpdate.location}
							status={timelineItem.careerUpdate.status}
							month={timelineItem.month}
							year={timelineItem.year}
						>
							<img slot="logo" src={timelineItem.careerUpdate?.companyLogoURL} alt="" />
						</CareerUpdateMetadata>
						<Line />

						<div class="col-span-2 ml-12 self-center">
							<CareerInfoCard
								designation={timelineItem.careerUpdate.designation}
								workHours={timelineItem.careerUpdate.workHours}
							/>
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
