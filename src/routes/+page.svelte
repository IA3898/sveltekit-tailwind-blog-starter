<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Coinbai!
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		This is Coinbai's dedicated platform for exploring the fascinating world of cryptocurrencies. Coinbai stands out in the digital finance landscape by offering a unique blend of insightful financial analysis and captivating crypto memes. To stay informed and entertained with the latest in cryptocurrency trends and insights, make sure to visit our site regularly, or subscribe to our RSS feed.
	</p>
</div>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />
