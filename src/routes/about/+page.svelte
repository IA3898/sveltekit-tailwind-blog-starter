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
			Coinbai is a dynamic platform in the beermoney and small finance space, offering a blend of financial tips and engaging content. It serves as a resource for individuals looking to earn money through side gigs, cashback offers, and small online tasks. With a focus on practical finance, Coinbai keeps its audience informed on how to make extra income in a fun and accessible way.
		</div>
	</div>
	<div class="space-y-2 py-8 md:space-y-5">
	</div>
</div>
