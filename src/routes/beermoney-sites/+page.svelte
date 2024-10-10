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

<!-- SEO-Friendly Conclusion Section with Headings -->
<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Engaging Title with Keywords -->
    <h2 class="text-4xl font-bold text-center mb-8 dark:text-gray-200">💸 Welcome to Your Ultimate Beermoney Resource! 💻</h2>

    <!-- About the Site -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">What This Site is All About 🎯</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        Welcome to the go-to platform for discovering the best and most reliable ways to earn money online 🤑! This site is built to provide you with the latest and most effective methods to boost your income from the comfort of your home 🏡. Whether you're new to the world of earning online or an experienced user looking for more ways to grow your side income, you’ll find everything you need right here 🌟.
    </p>

    <!-- Our Mission -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Our Mission: Helping You Earn More Online 💼</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        Our mission is simple: to bring you the best resources, tips, and insights for making real money online 💰. From expert advice to genuine recommendations, we aim to guide you through each opportunity, ensuring you get the most out of your online endeavors. This site is designed with you in mind—easy to navigate, packed with valuable information, and constantly updated with new ways to earn 🛠️.
    </p>

    <!-- Key Features of Our Platform -->
    <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">Why Choose Us? 🔍</h3>
    <p class="text-lg text-center mb-6 dark:text-gray-300">
        What sets our platform apart is the comprehensive research and hands-on testing we do to make sure the opportunities we present are profitable 🚀, and if they are not then there other options easily available. With detailed overviews and practical advice, we help you choose the best earning methods based on your goals and preferences. Plus, we frequently update our content so you never miss out on the latest sites, apps, trends and techniques in the world of online income 🌐.
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

