<script>
    import Head from '$lib/components/layout/Head.svelte';
    import SocialIcon from '$lib/components/SocialIcon.svelte';
    import { config } from '$lib/config';
    import Title from '$lib/components/Title.svelte';

    // Placeholder data - You can replace this with your actual beermoney site data
    let beermoneyCategories = [
    {
        title: "Survey Sites",
        icon: "/icons/survey.png",
        description: "Earn money by taking online surveys.",
        sites: [
            { name: "Swagbucks", link: "https://coinbai.com/money-making", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks" },
            { name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: null, reviewLink: null },
            { name: "Pinecone Research", link: "https://www.pineconeresearch.com", favicon: null, reviewLink: null },
            { name: "Prolific", link: "https://www.prolific.co", favicon: "https://www.prolific.co/favicon.ico", reviewLink: null },
            { name: "YouGov", link: "https://yougov.com", favicon: "https://yougov.com/favicon.ico", reviewLink: null },
            { name: "Prime Opinion", link: "https://www.primeopinion.com", favicon: null, reviewLink: null },
            { name: "Google Opinion Rewards", link: "https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks", favicon: "https://play.google.com/favicon.ico", reviewLink: null }
        ]
    },
    {
        title: "Cashback Sites",
        icon: "/icons/cashback.png",
        description: "Get cashback on your online purchases.",
        sites: [
            { name: "Rakuten", link: "https://www.rakuten.com", favicon: null, reviewLink: null },
            { name: "TopCashback", link: "https://www.topcashback.com", favicon: "https://www.topcashback.com/favicon.ico", reviewLink: null }
        ]
    },
    {
        title: "Microtask Sites",
        icon: "/icons/micro.png",
        description: "Earn money for completing small online tasks.",
        sites: [
            { name: "Amazon Mechanical Turk", link: "https://www.mturk.com", favicon: null, reviewLink: null },
            { name: "Clickworker", link: "https://www.clickworker.com", favicon: "https://www.clickworker.com/favicon.ico", reviewLink: null }
        ]
    },
    {
        title: "Testing Sites",
        icon: "/icons/test.png",
        description: "Earn money by testing sites.",
        sites: [
            { name: "Test IO", link: "https://test.io", favicon: null, reviewLink: null },
            { name: "UserTesting", link: "https://www.usertesting.com", favicon: null, reviewLink: null },
            { name: "TestOnline", link: "https://www.testonline.com", favicon: "https://www.testonline.com/favicon.ico", reviewLink: null },
            { name: "Userlytics", link: "https://www.userlytics.com", favicon: "https://www.userlytics.com/favicon.ico", reviewLink: null },
            { name: "IntelliZoom", link: "https://www.intellizoom.com", favicon: null, reviewLink: null }
        ]
    },
    {
        title: "Paid Projects",
        icon: "/icons/projects.png",
        description: "Projects/Microtasks sites.",
        sites: [
            { name: "CrowdGen", link: "https://crowdgen.com", favicon: null, reviewLink: null },
            { name: "Swagbucks", link: "https://coinbai.com/money-making", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks" },
            { name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: null, reviewLink: null },
            { name: "Pinecone Research", link: "https://www.pineconeresearch.com", favicon: null, reviewLink: null }
        ]
    },
    {
        title: "Cryptocurrency Exchanges",
        icon: "/icons/crypto.png",
        description: "Buy, sell, and trade cryptocurrencies.",
        sites: [
            { name: "Coinbase", link: "https://www.coinbase.com", favicon: "https://www.coinbase.com/favicon.ico", reviewLink: null },
            { name: "Binance", link: "https://www.binance.com", favicon: null, reviewLink: null },
            { name: "Kraken", link: "https://www.kraken.com", favicon: "https://www.kraken.com/favicon.ico", reviewLink: null }
        ]
    },
    {
        title: "Subreddits",
        icon: "/icons/reddit.png",
        description: "Find discussions on beermoney opportunities on Reddit.",
        sites: [
            { name: "r/beermoney", link: "https://www.reddit.com/r/beermoney", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/beermoneyGlobal", link: "https://www.reddit.com/r/beermoneyGlobal", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/BeerMoneyEU", link: "https://www.reddit.com/r/beermoneyEU", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/beermoneyindia", link: "https://www.reddit.com/r/beermoneyIndia", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/WorkOnline", link: "https://www.reddit.com/r/WorkOnline", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/signupsforpay", link: "https://www.reddit.com/r/signupsforpay", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/GPTsites", link: "https://www.reddit.com/r/GPTsites", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null },
            { name: "r/SlaveLabour", link: "https://www.reddit.com/r/slavelabour", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null }
        ]
    }
];



    // Function to display bookmark instructions
    function showBookmarkInstructions() {
        alert('To bookmark this page, press Ctrl+D (Windows) or Cmd+D (Mac).');
    }

</script>





<!-- Page Container -->
<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center mb-8 dark:text-gray-200">Beermoney Sites</h1>
    <div class="flex justify-center items-center mb-8">
        <h2 class="text font-bold dark:text-gray-200">Updated: 10/06/2024</h2>
        <!-- Bookmark Button -->
        <button 
            class="ml-4 bg-gray-200 dark:bg-gray-600 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
            on:click={showBookmarkInstructions}
            aria-label="Bookmark this page"
        >
            <img src="/icons/mark.png" alt="Bookmark" class="h-6 w-6">
        </button>
    </div>

    <!-- Category Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each beermoneyCategories as category}
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <!-- Category Icon and Title -->
                <div class="flex items-center mb-4">
                    <img src={category.icon} alt="Category Icon" class="h-6 w-6 mr-2" />
                    <h2 class="text-xl font-semibold">{category.title}</h2>
                </div>
                <!-- Category Description -->
                <p class="text-gray-500 dark:text-gray-300 mb-4">{category.description}</p>
                <!-- Site List -->
                <ul class="space-y-2">
                    {#each category.sites as site, index}
                        <li class="flex items-center">
                            <img 
                                src={site.favicon ? site.favicon : "/icons/missingFav.png"} 
                                alt="/icons/missingFav.png" 
                                class="h-4 w-4 mr-2" 
                                onError={(e) => { e.target.src = "/icons/missingFav.png"; e.target.onerror = null; }} 
                            />

                            <span class="font-semibold">{index + 1}.</span>
                            <a href={site.link} target="_blank" class="text-blue-500 hover:underline dark:text-blue-400 ml-2">
                                {site.name}
                            </a>

                            <!-- Review Icon -->
                            {#if site.reviewLink}
                                <a href={site.reviewLink} target="_blank" class="ml-2">
                                    <img src="/icons/letter-r.png" alt="Review" class="h-3 w-3">
                                </a>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>

<!-- Tailwind CSS for styling, modify as needed -->
<style>
    h1, h2 {
        color: #2D3748;
    }
</style>

<!-- Tailwind CSS for styling, modify as needed -->

