<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { config } from '$lib/config';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const authors = data.authors;
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="About" />
	</div>
	<div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
		<div class="flex flex-col items-center py-6">
			<img src={config.siteLogo} alt="logo" class="h-64 w-64" />
			<div class="flex space-x-2 pt-4">
				<SocialIcon icon="mail" url={`mailto:${config.email}`} />
				<SocialIcon icon="github" url={config.github} />
				<SocialIcon icon="linkedin" url={config.linkedin} />
				<SocialIcon icon="twitter" url={config.twitter} />
			</div>
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
			Coinbai is a dynamic platform in the cryptocurrency sector, renowned for blending finance with the engaging world of memes. Established as a unique content hub for crypto enthusiasts, Coinbai offers a fresh perspective on the complex and ever-evolving landscape of digital currencies. It serves as a vital resource for both informative and entertaining content, making it a go-to destination for those looking to stay updated with the latest trends and insights in the world of cryptocurrency.
		</div>
	</div>
	<div class="space-y-2 py-8 md:space-y-5">
		<!-- <Title h2 title="Contributors" />
		<div class="grid xl:grid-cols-3 grid-cols-2 gap-4"> -->
			<!-- {#each authors as author}
				<div class="lg:flex flex-row space-x-3">
					<div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3">
						<img src={author.avatar} alt={author.name} class="w-full rounded-xl mb-4 lg:mb-0" />
					</div>
					<div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3">
						<h5 class="text-lg font-bold">{author.name}</h5>
						<p class="text-gray-500 mb-2">{author.occupation}</p>
						<div class="flex">
							<SocialIcon small icon="mail" url={`mailto:${author.email}`} />
							<SocialIcon small icon="twitter" url={author.twitter} />
							<SocialIcon small icon="linkedin" url={author.linkedin} />
							<SocialIcon small icon="github" url={author.github} />
						</div>
					</div>
				</div>
			{/each} -->
		<!-- </div> -->
	</div>
</div>
