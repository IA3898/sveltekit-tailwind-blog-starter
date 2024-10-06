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

			<!-- Navigation and Theme Switcher -->
			<div class="flex items-center text-base leading-5">
				<div class="hidden sm:block">
					{#each navLinks as link}
						<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
							>{link.title}</a>
					{/each}
				</div>
				<ThemeSwitch />
				<MobileMenu />
			</div>
		</div>
	</header>
</div>
