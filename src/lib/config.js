export const config = {
	title: 'Coinbai: Crypto Memes & Finance Hub',
	author: 'Coinbai',
	headerTitle: 'Coinbai',
	description: 'Coinbai is your go-to source for cryptocurrency memes and financial insights, powered by Sveltekit and Tailwind.css',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'http://www.coinbai.com/', // Replace with Coinbai's actual domain
	siteUrl: 'https://www.coinbai.com/', // Replace with Coinbai's actual site URL
//	siteRepo: 'https://github.com/coinbai/sveltekit-tailwind-blog-starter', // Replace with Coinbai's actual repository URL
	siteLogo: 'img/newlogo.png', // Update if Coinbai has a different logo
	email: '', // Replace with Coinbai's contact email
	instagram: 'https://instagram.com/coinbai1', // Replace with Coinbai's GitHub, if available
	twitter: 'https://twitter.com/Coinbai_com',
	facebook: '', // Remove if Coinbai doesn't have a, Facebook page
	youtube: '', // Add Coinbai's YouTube link if available
	linkedin: '', // Add Coinbai's LinkedIn link if available
	locale: 'en-US',
	primaryColor: '#0d6efd', // Blue color for technology and trust
	

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: 'mailchimp',

	multiuser: true
};

export const user = {
	name: 'admin',
	// avatar value can be removed for image
	avatar: 'img/newlogo.png',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/Coinbai_com'
};

export const navLinks = [
	{ href: '/money-making/', title: 'Beer Money Sites' },
	{ href: '/about/', title: 'About' },
	{ href: '/blog/', title: 'Blog' },
	
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	provider: '',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		reposId: 'R_kgDOIen4kw',
		category: 'Sample Site Comments',
		categoryId: 'DIC_kwDOIen4k84CS9tX',
		mapping: 'pathname', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'light',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		issueTerm: 'pathname', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'github-light',
		// theme when dark mode
		darkTheme: 'github-dark'
	}
};
