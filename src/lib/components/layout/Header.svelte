<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';

	let isDropdownOpen = false; // Track the state of the dropdown

function toggleDropdown() {
  isDropdownOpen = !isDropdownOpen; // Toggle the dropdown state
}
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
	<div class="relative">
		<button
		  class="flex items-center font-medium font-bold text-gray-900 dark:text-gray-100 sm:p-4"
		  on:click={toggleDropdown}
		>
		  Must reads
		  <svg class="w-4 h-4 ml-2 dark:invert" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
		  </svg>
		</button>
		{#if isDropdownOpen}
		<div class="absolute left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 z-10">
			<ul class="text-gray-900 dark:text-gray-100">
			  <li><a href="/blog/how-to-earn-20" class="block px-4 py-2 text-sm">How to earn 20$ daily</a></li>
			  <li><a href="/blog/best-gpt-stack" class="block px-4 py-2 text-sm"> GPT-stack to earn a monthly income</a></li>
			  <li><a href="/blog/freecash" class="block px-4 py-2 text-sm">Freecash review </a></li>
			  <li><a href="/blog/swagbucks" class="block px-4 py-2 text-sm">Swagbucks review</a></li>
			</ul>
		  </div>
		{/if}
	  </div>

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
