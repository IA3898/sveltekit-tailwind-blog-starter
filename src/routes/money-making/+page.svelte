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
            { name: "Swagbucks", link: "https://www.swagbucks.com", favicon: "https://www.swagbucks.com/favicon.ico" },
            { name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: "https://www.surveyjunkie.com/favicon.ico" },
            { name: "Pinecone Research", link: "https://www.pineconeresearch.com", favicon: "https://www.pineconeresearch.com/favicon.ico" },
            { name: "Prolific", link: "https://www.prolific.co", favicon: "https://www.prolific.co/favicon.ico" },
            { name: "YouGov", link: "https://yougov.com", favicon: "https://yougov.com/favicon.ico" },
            { name: "Prime Opinion", link: "https://www.primeopinion.com", favicon: "https://www.primeopinion.com/favicon.ico" },
            { name: "Google Opinion Rewards", link: "https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks", favicon: "https://play.google.com/favicon.ico" }
        ]
    },
    {
        title: "Cashback Sites",
        icon: "/icons/cashback.png",
        description: "Get cashback on your online purchases.",
        sites: [
            { name: "Rakuten", link: "https://www.rakuten.com", favicon: "https://www.rakuten.com/favicon.ico" },
            { name: "TopCashback", link: "https://www.topcashback.com", favicon: "https://www.topcashback.com/favicon.ico" }
        ]
    },
    {
        title: "Microtask Sites",
        icon: "/icons/micro.png",
        description: "Earn money for completing small online tasks.",
        sites: [
            { name: "Amazon Mechanical Turk", link: "https://www.mturk.com", favicon: "https://www.mturk.com/favicon.ico" },
            { name: "Clickworker", link: "https://www.clickworker.com", favicon: "https://www.clickworker.com/favicon.ico" }
        ]
    },
    {
        title: "Testing Sites",
        icon: "/icons/test.png",
        description: "Earn money by testing sites.",
        sites: [
            { name: "Test IO", link: "https://test.io", favicon: "https://test.io/favicon.ico" },
            { name: "UserTesting", link: "https://www.usertesting.com", favicon: "https://www.usertesting.com/favicon.ico" },
            { name: "TestOnline", link: "https://www.testonline.com", favicon: "https://www.testonline.com/favicon.ico" },
            { name: "Userlytics", link: "https://www.userlytics.com", favicon: "https://www.userlytics.com/favicon.ico" },
            { name: "IntelliZoom", link: "https://www.intellizoom.com", favicon: "https://www.intellizoom.com/favicon.ico" }
        ]
    },
    {
        title: "Paid Projects",
        icon: "/icons/projects.png",
        description: "Projects/Microtasks sites.",
        sites: [
            { name: "CrowdGen", link: "https://crowdgen.com", favicon: "https://crowdgen.com/favicon.ico" },
            { name: "Swagbucks", link: "https://www.swagbucks.com", favicon: "https://www.swagbucks.com/favicon.ico" },
            { name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: "https://www.surveyjunkie.com/favicon.ico" },
            { name: "Pinecone Research", link: "https://www.pineconeresearch.com", favicon: "https://www.pineconeresearch.com/favicon.ico" }
        ]
    },
    {
        title: "Cryptocurrency Exchanges",
        icon: "/icons/crypto.png",
        description: "Buy, sell, and trade cryptocurrencies.",
        sites: [
            { name: "Coinbase", link: "https://www.coinbase.com", favicon: "https://www.coinbase.com/favicon.ico" },
            { name: "Binance", link: "https://www.binance.com", favicon: "https://www.binance.com/favicon.ico" },
            { name: "Kraken", link: "https://www.kraken.com", favicon: "https://www.kraken.com/favicon.ico" }
        ]
    },
];

</script>

<!-- Page Container -->
<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center mb-8">Beermoney Sites</h1>
    <h1 class="text font-bold text-center mb-8">Updated: 10/06/2024</h1>

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
                            <img src={site.favicon} alt="Site Favicon" class="h-4 w-4 mr-2" /> <!-- Favicon -->
                            <span class="font-semibold">{index + 1}. </span>
                            <a href={site.link} target="_blank" class="text-blue-500 hover:underline dark:text-blue-400">
                                {site.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>

<!-- Tailwind CSS for styling, modify as needed -->
<style>
    h1 {
        color: #2D3748;
    }
</style>
