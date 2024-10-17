<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<!-- Container acting as a border with rounded corners and no gradient on top -->
<div class="relative w-full">
	<!-- Gradient only on sides and bottom -->
	<div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 via-white-200 to-orange-600 rounded-b-lg"></div>

	<!-- Header without a top gradient and rounded bottom corners -->
	<header class="w-full  py-10 rounded-b-lg border-x border-b border-transparent">
		<!-- Inner container for content (Logo, Navigation, etc.) -->
		<div class="w-full flex items-center justify-between px-4">
			<!-- Logo and Title -->
			<div>
				<a href="/" aria-label={config.headerTitle}>
					<div class="flex items-center justify-between">
						<div class="mr-3">
							<img src="img/newlogo.png" alt="Logo" class="h-10 w-auto" />
						</div>
						<div class="hidden text-4xl font-semibold sm:block font-title">
							{config.headerTitle}
						</div>
					</div>
				</a>
			</div>
			

			<!-- Navigation and Theme Switcher  export const navLinks = [
	{ href: '/money-sites/', title: 'Beer Money Sites' }, money.png
	{ href: '/blog/', title: 'Blog' }, blog.png
	{ href: '/about/', title: 'About' }, money.png

	
	
];-->
<div class="flex items-center space-x-4">
	{#each navLinks as link}
	  <a href={link.href} class="flex items-center  font-medium text-gray-900 dark:text-gray-100 sm:p-4">
		<img src={link.icon} alt="{link.title} icon" class="w-6 h-6 mr-2 dark:invert" />
		{link.title}
	  </a>
	{/each}
  
  
				<ThemeSwitch />
				<MobileMenu />
			</div>
		</div>
	</header>
</div>
