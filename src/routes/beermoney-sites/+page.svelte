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
                { name: "Swagbucks", link: "https://www.swagbucks.com/p/register?rb=151254487&rp=1", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks", estimatedEarnings: "💲Up to $50 per month" },
                { name: "Prolific", link: "https://www.prolific.co", favicon: "https://www.prolific.co/favicon.ico", reviewLink: "https://coinbai.com/blog/prolific-review", estimatedEarnings: "💲Up to 25-300$ <br> 📈 avg. 70$" },
                { name: "dscout", link: "https://dscout.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$" },
                { name: "YouGov", link: "https://yougov.com", favicon: "https://yougov.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 20$" },
                { name: "Prime Opinion", link: "https://www.primeopinion.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 30$" },
                { name: "Google Opinion Rewards", link: "https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks", favicon: "https://play.google.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. N/A" },
                { name: "Ysense", link: "https://www.ysense.com/?rb=197145215", favicon: "https://www.ysense.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 20$" },
                { name: "Pinecone Research", link: "https://rewards.pineconeresearch.com/", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 per month <br> 📈 avg. 20$" },
                { name: "Gamermine", link: "https://gamermine.com/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. N/A" },
                { name: "Gain.gg", link: "https://gain.gg/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. N/A" },
               
            ]
    },
    {
        title: "Cashback Sites",
        icon: "/icons/cashback.png",
        description: "Get cashback on your online purchases.",
        sites: [
            { name: "Rakuten", link: "https://www.rakuten.com", favicon: null, reviewLink: null, estimatedEarnings: "Varies based on tasks" },
            { name: "TopCashback", link: "https://www.topcashback.com", favicon: "https://www.topcashback.com/favicon.ico", reviewLink: null, estimatedEarnings: "Varies based on tasks" }
        ]
    },
    {
        title: "Microtask Sites",
        icon: "/icons/micro.png",
        description: "Earn money for completing small online tasks.",
        sites: [
                { name: "Amazon Mechanical Turk", link: "https://www.mturk.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 20-100$ <br> 📈 avg. 30$"  },
                { name: "Clickworker", link: "https://www.clickworker.com", favicon: "https://www.clickworker.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to 20-50$ <br> 📈 avg. N/A" },
                { name: "Gamermine", link: "https://gamermine.com/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. N/A" },
                { name: "Gain.gg", link: "https://gain.gg/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. N/A" }
            ]
    },
    {
        title: "Testing Sites",
        icon: "/icons/test.png",
        description: "Earn money by testing sites.",
        sites: [
            { name: "Test IO", link: "https://test.io", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 10-300$ <br> 📈 avg. 40$" },
            { name: "UserTesting", link: "https://www.usertesting.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 10-200$ <br> 📈 avg. 60$" },
            { name: "Userlytics", link: "https://www.userlytics.com", favicon: "https://www.userlytics.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$" },
            { name: "IntelliZoom", link: "https://www.intellizoom.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$" }
        ]
    },
    {
        title: "Paid Projects",
        icon: "/icons/projects.png",
        description: "Projects/Microtasks sites.",
        sites: [
                { name: "CrowdGen", link: "https://crowdgen.com", favicon: null, reviewLink: null, estimatedEarnings: "Varies based on tasks" },
                { name: "Swagbucks", link: "https://www.swagbucks.com/p/register?rb=151254487&rp=1", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks", estimatedEarnings: "Up to $50 per month" },
                { name: "dscout", link: "https://dscout.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $100 per project" },
                { name: "OneForma", link: "https://oneforma.com", favicon: null, reviewLink: null, estimatedEarnings: "💲$100-1000/month per project" },
                { name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $40 per month" },
                { name: "Pinecone Research", link: "https://rewards.pineconeresearch.com/", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $5 per survey" },
                // Uncommented links with tooltips

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

<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center mb-8 dark:text-gray-200">Beermoney Sites</h1>
    <div class="flex justify-center items-center mb-8">
        <h2 class="text font-bold dark:text-gray-200">Updated: 10/06/2024</h2>
        <!-- Bookmark Button -->
        <button 
            class="ml-4 p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
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
                    <h2 class="text-xl font-semibold dark:text-white">{category.title}</h2>
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
                            <a 
                                href={site.link} 
                                target="_blank" 
                                class="text-blue-500 hover:underline dark:text-blue-400 ml-2 relative group"
                                style="display: inline-block; position: relative;"
                            >
                                {site.name}

                                <!-- Tooltip for the Site Links -->
                                <span 
                                    class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-72 p-3 bg-gray-100  dark:bg-gray-700 dark:text-white text-sm rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10"
                                >
                                    <h3 class="font-bold mb-1">Estimated Earnings per Month</h3>
                                    <p>{@html site.estimatedEarnings}</p>
                                </span>
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




<!-- SEO-Friendly Conclusion Section with Headings -->
<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Engaging Title with Keywords -->
    <h2 class="text-4xl font-bold text-center mb-8 dark:text-gray-200">💸 Welcome to Your Ultimate Beermoney Resource! 💻</h2>

    <!-- About the Site -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">What This Site is All About 🎯</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        Welcome to the go-to platform for discovering the best and most reliable ways to earn money online in a simple and user friendly way! This site is built to provide you with the latest and most effective apps, sites and methods to boost your income from the comfort of your home 🏡. Whether you're new to the world of earning online or an experienced user looking for more ways to grow your side income, you’ll find everything you need right here 🌟.
    </p>

    <!-- Our Mission -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Helping You Earn More Online 💼</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        This site aims to bring you the best resources, tips, and insights for making real money online 💰. Genuine recommendations on the best sites to earn money from remotely, we aim to guide you through each opportunity, ensuring you get the most out of your online endeavors. This site is designed with you in mind—easy to navigate, packed with valuable information, and constantly updated with new ways to earn 🛠️.
    </p>


    <!-- Focus on User Experience -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Designed for You: User-Friendly and Informative 💡</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        Our platform is not just about providing information—it’s about giving you actual resources and not wasting your time. You who wants to make the most out of their time online. Whether you're looking for a full-time remote work option or just want to make some extra cash in your free time, our site offers a wealth of knowledge and tools to get you started right away 🔑. You’ll find reviews, step-by-step guides, and even exclusive insights into how to maximize your earnings 📈.
    </p>

    <!-- Affiliate and Referral Benefits -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Maximize Your Earnings with Affiliate Bonuses 🎁</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        What’s more, many of the opportunities featured on this site come with bonuses and referral programs. By signing up through our recommendations, you may gain access to special offers that you wouldn’t find otherwise. Our goal is to ensure you not only earn but maximize the potential for additional benefits through affiliate programs, which can help you build a long-term, sustainable side income 💼.
    </p>

    <!-- Call to Action -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Start Earning Today! 🚀</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        So why wait? 🚀 Start exploring our site today and take the first step toward building a reliable online income stream. Whether you’re interested in making a few extra dollars on the side or are aiming to grow a full-fledged beermoney strategy, our site has the tools and knowledge to help you succeed 💪. Welcome to the best place to find real ways to make money online—your journey starts here!
    </p>

    <!-- End Section -->
</div>



<!-- Tailwind CSS for styling, modify as needed -->
<style>
    h1, h2 {
        color: #2D3748;
    }
</style>

<!-- Tailwind CSS for styling, modify as needed -->

