<script>
    import Head from '$lib/components/layout/Head.svelte';
    import Blogs from '$lib/components/Blogs.svelte';

    export let data;
    let posts = data.posts;

    const promotions = [
        {
            id: 1,
            provider: 'BINANCE',
            title: 'CLAIM $600 REWARD',
            description: 'Exclusive Binance Referral Code',
            details: "Don't miss this limited-time deal that's only available for our readers. Use the Binance referral code 13732272 & receive up to $600 in rewards and bonuses!",
            expiration: '20/05/2024',
            used: 7847,
            remaining: 49,
            rating: "5.0",
            link: 'https://accounts.binance.com/register?ref=13732272',
            reviewLink: '#',
            imgUrl: 'img/binance.png'
        },
        {
            id: 2,
            provider: 'CRYPTO',
            title: 'Get $25 Bonus',
            description: 'Sign Up with Crypto.com',
            details: 'Sign up to Crypto.com app using our referral link and get a $25 bonus. Start trading and investing in cryptocurrencies today!',
            expiration: '21/05/2024',
            used: 2918,
            remaining: 34,
            rating: 4.8,
            link: 'https://crypto.com/app/nbzfay494y',
            reviewLink: '#',
            imgUrl: 'img/unnamed.png'
        },
        {
            id: 3,
            provider: 'KUCOIN',
            title: 'UP TO $500 BONUS',
            description: 'Get KuCoin Referral Code Reward',
            details: 'Join KuCoin today using our referral link and earn up to $500 in bonuses. Enjoy trading with one of the top cryptocurrency exchanges.',
            expiration: '22/05/2024',
            used: 1827,
            remaining: 50,
            rating: 4.9,
            link: 'https://www.kucoin.com/r/rf/QBAMNB9A',
            reviewLink: '#',
            imgUrl: 'img/c1d.png'
        }
    ];
</script>


    <Head />



<div class="pt-12">
    <h1
        class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
    >
        Best Crypto Deals 2024
    </h1>
    <p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
        Welcome to Coinbai! Discover the best affiliate promos for top cryptocurrency exchanges. Stay informed and maximize your crypto rewards with our exclusive offers.
    </p>
</div>

<section>
    <h2 class="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9">
        Exceptional Crypto Deals
    </h2>
    <p class="text-gray-700 dark:text-gray-300">
        It's not always easy to find actually working crypto deals, especially when it comes to free Bitcoin promo codes. However, to make sure that you find everything you're looking for in one place, our dedicated team is regularly searching the Internet and manually selects the most attractive offers that you can instantly find on our site.
    </p>
    {#each promotions as promo}
        <div class="promo-card">
            <div class="promo-header">
                <img src={promo.imgUrl} alt={promo.provider} class="promo-image" />
                <div class="promo-info">
                    <span class="promo-provider">{promo.provider}</span>
                    <span class="promo-verified">Verified</span>
                    <span class="promo-staff-pick">STAFF PICK</span>
                    <a href={promo.reviewLink} class="promo-review-link">Read review</a>
                </div>
            </div>
            <div class="promo-body">
                <h3 class="promo-title">{promo.title}</h3>
                <p class="promo-description">{promo.description}</p>
                <p class="promo-details">{promo.details}</p>
                <div class="promo-footer">
                    <span class="promo-expiration">Expiration date: {promo.expiration}</span>
                    <span class="promo-used">{promo.used} People Used</span>
                    <span class="promo-remaining">Only {promo.remaining} Left</span>
                </div>
            </div>
            <div class="promo-rating">
                <span class="ating-colo">Rating</span>
                <span class="rating-value">{promo.rating}</span>
                <a href={promo.link} class="get-deal-btn" target="_blank">GET DEAL</a>
                <a href={promo.reviewLink} class="provider-coupons-link">See all Provider Coupons</a>
            </div>
        </div>
    {/each}
</section>

<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />

<style>



  .ating-colo {

    color: var(--text-primary);
    opacity: 44;
    
       
  }
    section {
        margin-top: 2em;
        padding: 2em;
        background-color: var(--bg-color);
        background: linear-gradient(to bottom, var(--gradient-start), var(--gradient-end));
    }

    h2 {
        text-align: center;
        margin-bottom: 1em;
        color: var(--text-primary);
    }

    p {
        text-align: center;

    }

    h1 {
        text-align: center;

    }

    .promo-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--card-bg);
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 1em;
        margin-top: 2em;
        padding: 1em;
    }

    .promo-header {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .promo-image {
        width: 100px;
        height: 100px;
        border-radius: 8px;
    }

    .promo-info {
        display: flex;
        flex-direction: column;
        gap: 1.0em;
    }

    .promo-provider {
        font-weight: bold;
        color: var(--text-primary);
    }

    .promo-verified, .promo-staff-pick {
        background: var(--verified-bg);
        color: var(--verified-text);
        text-align: center;
        padding: 0.2em 0.5em;
        border-radius: 4px;
    }

    .promo-staff-pick {
        background: var(--staff-pick-bg);
    }

    .promo-body {
        flex: 1;
        text-align: center;
    }

    .promo-title {
        font-size: 1.5em;
        margin: 0.5em 0;
        color: var(--text-primary);
    }

    .promo-description {
        font-weight: bold;
        color: var(--text-secondary);
    }

    .promo-details {
        margin: 1em 0;
        margin-left: 2em;
        color: var(--text-secondary);
    }

    .promo-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9em;
        color: var(--text-muted);
    }

    .promo-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 1em;
    }

    .rating-value {
        font-size: 2em;
        font-weight: bold;
        color: var(--rating-color);
        margin-bottom: 0.5em;
    }

    .get-deal-btn {
        background: var(--btn-bg);
        color: var(--btn-text);
        padding: 0.5em 1em;
        border-radius: 4px;
        text-decoration: none;
        margin-bottom: 0.5em;
    }

    .provider-coupons-link {
        color: var(--link-color);
        text-decoration: none;
        font-size: 0.9em;
    }

    .promo-review-link {
        color: var(--link-color);
        text-decoration: none;
        font-size: 0.9em;
    }
</style>