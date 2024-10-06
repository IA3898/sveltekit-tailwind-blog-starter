<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="mb-3 flex space-x-2">
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
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			<a href="/">{config.title}</a> &nbsp; • &nbsp; © {year} {config.author} &nbsp; • &nbsp;
			<a href="/contact">Contact Us</a> &nbsp; • &nbsp;
			<a href="/privacy">Privacy Policy</a> &nbsp; • &nbsp;
			<a href="/terms">Terms of Service</a>
		</div>
	</div>
</footer>
