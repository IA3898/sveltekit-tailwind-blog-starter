<script context="module">
    export async function load({ url }) {
        // Extract query parameter from the URL
        const filter = url.searchParams.get('query');
        return { props: { initialFilter: filter } };
    }
</script>

<script>
    import Tag from '$lib/components/Tag.svelte';
    import Title from '$lib/components/Title.svelte';
    import Author from '$lib/components/Author.svelte';
    import SearchBox from '$lib/components/SearchBox.svelte';
    import fuzzySearch from '$utils/search.js';

    export let title = '';
    export let subtitle = '';
    export let posts = [];
    export let tags = [];
    export let more = true;
    export let search = true;
    export let h2 = false;
    export let count = 0;
    export let initialFilter = '';

    if (count) {
        posts = posts.slice(0, count);
    }

    let filter = initialFilter;
    let currentPosts;

    $: filter = initialFilter;
    $: currentPosts = filter ? fuzzySearch(posts, filter) : posts;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
	  <div class="grid lg:grid-cols-2 gap-4">
		<div>
		  <Title {title} {subtitle} {h2} />
		</div>
		<div class="pl-4" class:border-l-2={search}>
		  {#if search}
			<SearchBox />
		  {/if}
		  {#if tags.length}
			<div class="flex flex-wrap">
			  {#each tags as tag}
				<div class="mr-5">
				  <Tag text={tag.text} size="text-xs" />
				  <a href={`/tags/${tag.slug}`} class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
					{` (${tag.count})`}
				  </a>
				</div>
			  {/each}
			</div>
		  {/if}
		</div>
	  </div>
	</div>
	
	<!-- Post Content -->
	{#if !currentPosts.length}
	  No post found.
	{:else}
	  <ul>
		{#each currentPosts as post}
		  <li class="py-12">
			<article>
			  <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
				<!-- Author and Date -->
				<Author author={post.author} postDate={post.date} image={post.image} />
				
				<!-- Add image below date -->
				
  
				<div class="space-y-5 xl:col-span-3 self-start">
					
					
				  <div class="space-y-6">
					<div>
					  <h2 class="text-2xl font-bold leading-8 tracking-tight">
						<a href={`/blog/${post.slug}`} class="text-gray-900 dark:text-gray-100">
						  {post.title}
						</a>
					  </h2>
					  <div class="flex flex-wrap">
						{#each post.tags as tag}
						  <Tag text={tag} />
						{/each}
					  </div>
					</div>
					<div class="prose max-w-none text-gray-500 dark:text-gray-400">
					  {post.summary}
					</div>
				  </div>
				  {#if more}
					<div class="text-base font-medium leading-6">
					  <a href={`/blog/${post.slug}`} class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label={`Read "${post.title}"`}>
						Read more &rarr;
					  </a>
					</div>
				  {/if}
				</div>
			  </div>
			</article>
		  </li>
		{/each}
	  </ul>
	{/if}
  </div>
  
