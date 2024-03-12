<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import PostCard from '../components/cards/Postcard.svelte';
	import CareerInfoCard from '../components/cards/CareerInfoCard.svelte';
	import DuggupLogoIcon from '../components/logos/DuggupLogoIcon.svelte';
	import response from './response.json';
	import ProfilePhoto from '../components/ProfilePhoto.svelte';
	import CircumShare1 from '~icons/circum/share-1';
	import TablerDots from '~icons/tabler/dots';
	import BorderedButton from '../components/buttons/BorderedButton.svelte';
	import PostcardMetadata from '../components/metadata/PostMetadata.svelte';
	import CareerUpdateMetadata from '../components/metadata/CareerUpdateMetadata.svelte';
</script>

<div class="mx-0 lg:mx-32">
	<Navbar />
	<div id="main-container" class="mt-16 md:mx-18 2xl:mx-52">
		<!-- <UserDescription /> -->
		<div class="flex items-center">
			<div class="w-28">
				<ProfilePhoto size={28}>
					<img
						slot="image"
						src="https://media.licdn.com/dms/image/D4E03AQF-fLP5TtdtOQ/profile-displayphoto-shrink_800_800/0/1677089436637?e=1715212800&v=beta&t=_Cl8W3911M3gcbPqwFIeVFaLkZvzisuU5YK_BaUECSQ"
					/>
				</ProfilePhoto>
				<div class="text-center text-2xl font-semibold text-gray-600">
					{response.username}
				</div>
			</div>

			<div class="ml-12 grid h-36 grid-cols-5 justify-between text-gray-600">
				<!-- Desciption and Follow Button -->
				<div class="relative col-span-4">
					{response.bio}
				</div>

				<!-- CompanyInfo & Website -->
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
						<a href={response.websiteURL} class="flex items-center">My website<CircumShare1 class="ml-1 mr-4" /></a>
						<TablerDots class="ml-auto scale-150" />
					</div>
				</div>
			</div>
		</div>
		<div class="-ml-42">
			<!-- <Timeline /> -->
			<div class="mt-4 grid w-10/12 grid-cols-[14rem_1px_1fr_1fr]">
				{#each response.timeline as timelineItem}
					<!-- <div class="pr-12 flex justify-end items-center">
                        <div class="text-xs text-gray-400 ">
                            <div>
                                {timelineItem.year + " " + timelineItem.month}
                            </div>
                        </div>
                    </div> -->
					{#if timelineItem.type === 'posts'}
						<PostcardMetadata month={timelineItem.month} year={timelineItem.year} />
					{:else}
						<CareerUpdateMetadata
							companyName={timelineItem.careerUpdate.companyName}
							location={timelineItem.careerUpdate.location}
							status={timelineItem.careerUpdate.status}
							month={timelineItem.month}
							year={timelineItem.year}
						>
							<img slot="logo" src={timelineItem.careerUpdate?.companyLogoURL} alt="" />
						</CareerUpdateMetadata>
					{/if}
					<div class="mt-1 border border-dashed border-gray-600"></div>
					<!-- {console.log(timelineItem.posts)} -->
					{#if timelineItem.type === 'posts'}
						{#each timelineItem.posts as post, postIndex}
							<div class="my-10 ml-12">
								<!-- {console.log("postcard"+post.text)} -->
								<PostCard text={post.text}>
									<img
										slot="image"
										src={timelineItem.posts[postIndex].postImageURL}
										alt="postcard image alt"
									/>
								</PostCard>
							</div>
						{/each}
					{/if}
					{#if timelineItem.type === 'careerUpdate'}
						<!-- {console.log("careerInfoCard"+timelineItem.careerUpdate?.designation+timelineItem.careerUpdate?.workHours)} -->
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
