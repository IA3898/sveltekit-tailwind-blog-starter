<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer class="mt-16  py-8 w-full flex justify-center">
	<div class="max-w-7xl w-full px-4 flex flex-col items-center border-t border-gray-700 dark:border-gray-200 pt-6 gap-6">
		<div class="mb-3 ml-20 flex space-x-4">
			<SocialIcon icon="mail" url={config.email ? `mailto:${config.email}` : ''} />
			<SocialIcon icon="instagram" url={config.instagram} />
			<SocialIcon icon="facebook" url={config.facebook} />
			<SocialIcon icon="youtube" url={config.youtube} />
			<SocialIcon icon="linkedin" url={config.linkedin} />
			<SocialIcon icon="twitter" url={config.twitter} />
		</div>
		{#if config.newsletter}
			<Newsletter />
		{/if}
		<div class="mb-4 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
			<a href="/" class="hover:text-primary-500 dark:hover:text-primary-300">{config.title}</a> 
			<span class="hidden sm:inline">&nbsp;•&nbsp;</span> 
			<span class="block sm:inline">© {year} {config.author}</span> 
			<span class="hidden sm:inline">&nbsp;•&nbsp;</span> 
			<a href="/contact" class="hover:text-primary-500 dark:hover:text-primary-300">Contact Us</a> 
			<span class="hidden sm:inline">&nbsp;•&nbsp;</span> 
			<a href="/privacy" class="hover:text-primary-500 dark:hover:text-primary-300">Privacy Policy</a> 
			<span class="hidden sm:inline">&nbsp;•&nbsp;</span> 
			<a href="/terms" class="hover:text-primary-500 dark:hover:text-primary-300">Terms of Service</a>
		</div>
	</div>
</footer>
