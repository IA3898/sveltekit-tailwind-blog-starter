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
            { id: 1, name: "Swagbucks", link: "https://www.swagbucks.com/p/register?rb=151254487&rp=1", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks", estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 30$", average: 30 },
            { id: 2, name: "Prolific", link: "https://www.prolific.co", favicon: "https://www.prolific.co/favicon.ico", reviewLink: "https://coinbai.com/blog/prolific-review", estimatedEarnings: "💲Up to 25-300$ <br> 📈 avg. 70$", average: 70 },
            { id: 3, name: "dscout", link: "https://dscout.com", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEVMaXFAQEBAQEBAQEBAQEBAQEBAQECnEBY3AAAAB3RSTlMAIKDw/zAQ2OB0JQAAAF5JREFUeAHd0cEJgDAQRNFPQAvQBhTSgJAKkinA/qsRJMouK3jPO372tAMsRV3bAaaiVzuBVcYBZBkVKDIazHKIgc/AbYhg/If4wvDkMEMYKkzZZaliJWnDyRUvPQcXE9lT28QB6/UAAAAASUVORK5CYII=", reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$", average: 50 },
            { id: 4, name: "YouGov", link: "https://yougov.com", favicon: "https://yougov.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 20$", average: 20 },
            { id: 4, name: "Freecash", link: "https://freecash.com/r/8c4ed484b1e02b55f082", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEkElEQVRYhc2XXWgcVRTHf2c+NlmyzWZtTBOr0RYjdShSTf0oEfx4qe2DFUkVFEQsCEFsEWpKQQxaK7JUMX3xQfogaFUsllaE5kEptCZWora0xpZoWk2/6DZNs4kmm52914fZZHdmd7NZLer/aebeuef/P+feOedcoQLIQOc6YDWwElgKxLJTo8AQ0A/0aCe+b94250G6ENgJPFWJWGA3sFE78ZG/LUAGOruBjRUSB7FTO/FNFQmQgc4oMAhc/w/JZ5AAWrQTHysrQAY6bwJ+v0bEQTRrJz5cUkDW86tzWdAAWpXhERAptb91+ZGwApODJYmVgvQkZFwcu4EQhifGLw1BmNAuv7gJdFUEMYMUDAINeVKzD3McOJ1xaXJtPrv5GdpiTimNPmS04omfu/ncPYPY1cHp2YMpWfKFwOWi5EpxS9rm9Io3fePKVZj7ngPAXbcL0zKLCnn0xA6+UMPFRNRrJz4yE5+dJV1JT/JJ84bZ19SfU+w9eZBT0xehJQrA9v4PiUgVruvyrPMIDbH62e/3L9/MmhNxDrgXECvkiwLw9EwE/NuZH4HxK+i73weB5Pg40cMvQmMETAMMG9CQcUEpSE+xybyHd1ufL7DTdvwNeo0xxDBytp24WNn0Wpxca8hUzZ6U7qH90BQFNE9W3UoNITQabG9+2nXpaF5b1NYLdffTO7oXjNxWyEDnOgsvt5dGXmwG9CVAsS36AK8saZ9zWRCT6SmKpJ3VBl5hmRdMwwQRxpPJisgB3rtwCEw7OLzSwqtq88KFVBLCIeLpoxw6sIXrzLC3TfkQQENaK2wxMMTgKCOcbbIRoyAnLLXIldTiMLywHTt9kq8ZRsw6MMP0NSvQExA8vlpDKkl7ZDl7UkOe10Y1IkXzYqxAUs6O9lJulcH6r7azJ/wrLIihVabQYxFEvNOtp5L8eNtWVtQuRb7bCBGjFDngpeJRYKGPPOOyWIW401pEJqS42qhYw+0lAiRc0VP0uQkwbR40bmRFbXZX3XI1g1ELr5OZFaCVolXX0n9HV7nFPmwd+oi3xo+wWCKVLBsy8NqoHDJpOqKrKiIHiKa8pJQpWyl96LeAHqAjN6YJ64LfBYDBi7/x+vGPsS0LyR53EWFCTfNp7VmwLJyaG8i3VQY9BalYK0Xb1WoO37cNAvVl87FdvJ3qg1A1SDYVC6DSoDSkXMbu2kGtXQMK5NsNSF5dCEI7cZn5C3aTbTrFMPimdoLVB7voeeg1yKVutixrp+F8DNM0+UNN05U8DBpeXdDGsuomHl+0iirDi96RcycgHJ7L+91QohyLBuWmWJuI8eXDXUU7x4ybwfr+JQDSre9gWXl/9LRiSd/LnKk3fMUngHrtxEdKNiQzIh67XM+eezsxa0JFrfigoPfUD6w/9wHnG61i3dAM/A1JnohL5HXCokEpFy5dpmUySsSw0Tq4ynud1oqfSEBTHYTCc3me0E58tiULSmwhrynVAmJa6KZGBrX20mwpiAGyuPxNx+Pwiffb+Zfb8oI4ZT+ow7tMXCsk8Nrx4eDE//NqFhDx311Oi4i55tfzvwAH36xBKOaa7AAAAABJRU5ErkJggg==", reviewLink: null, estimatedEarnings: "💲Up to $85 per month <br> 📈 avg. 35$", average: 35 },
            { id: 27, name: "gg2u", link: "https://premium.gg2u.org?referrer=coinbai", favicon: "https://th.bing.com/th?id=ODLS.854bc112-4f3f-4658-b87b-c6e7b5dda377&w=32&h=32&qlt=90&pcl=fffffa&r=0&o=6&pid=1.2", reviewLink: "https://coinbai.com/blog/gg2u", estimatedEarnings: "💲Up to $50 <br> 📈 avg. 30$", average: 30 },
            { id: 5, name: "Prime Opinion", link: "https://www.primeopinion.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 30$", average: 30 },
            { id: 29, name: "PollPay", link: "https://www.pollpay.app?rb=197513791", favicon: "https://www.pollpay.app/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $30 per month <br> 📈 avg. 20$", average: 20 },
            { id: 6, name: "Google Opinion Rewards", link: "https://play.google.com/store/apps/details?id=com.google.android.apps.paidtasks", favicon: "https://play.google.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to 5-25$ <br> 📈 avg. 💲20", average: 20 },
            { id: 7, name: "Ysense", link: "https://www.ysense.com/?rb=197145215", favicon: "https://www.ysense.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 20$", average: 20 },
            { id: 8, name: "Pinecone Research", link: "https://rewards.pineconeresearch.com/", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 per month <br> 📈 avg. 20$", average: 20 },
            { id: 9, name: "Gamermine", link: "https://gamermine.com/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 },
            { id: 10, name: "Gain.gg", link: "https://gain.gg/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 }
            

        ]
    },
    {
        title: "Microtask Sites",
        icon: "/icons/micro.png",
        description: "Earn money for completing small online tasks.",
        sites: [
            { id: 13, name: "Amazon Mechanical Turk", link: "https://www.mturk.com", favicon: "https://th.bing.com/th?id=ODLS.4c401f31-db5d-4d94-9be6-68f077d18b10&w=32&h=32&qlt=92&pcl=fffffa&r=0&o=6&pid=1.2", reviewLink: null, estimatedEarnings: "💲Up to 20-100$ <br> 📈 avg. 30$", average: 30 },
            { id: 30, name: "faucetcrypto", link: "https://faucetcrypto.com/r/4211947", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEURGCcADSAAABoAGCYJEiMAABVXWmGKjJAWHStqEzNfFDEIGCcAGSUAAA9BRE2dn6NrbXMoLTikqq13ACpFFS1TFS+KEDmQDzsAAAB9f4SRkpZfACc8FiwAGSOgDT4tFyosMTuys7Y6QEEGFRkkExxvDimYDjxLT1VHLopWPZsPIUIcFSGCETgADBViRLAOFyMAEABbQKMoJE92EjUkIUZkEzIAFRcAFBMUGSwbFERQOZE3JHIzKV9MN4glFymPkpIlLDBCMXg9LnBMN4ocHTovIGNBEiFUEykkDyMAHDMZExZK+700AAABxklEQVR4AW3SZ5+aMACA8WDcxq0hUIODFo4rDUEssZx76/f/QE3M7bv/2+eXHfCOkQMAQvCNfKFQLJVhpVpDX3q90Wy22p1ur4/NKqp9HNYsEdK27B94QGnVGb4bbIzGZWI1SxPi/vzlYUjl4Ndx7TEZjX3yECiPv50qDasvY+tj4nfIHxZxJZ7SJKHmUK9bsNujDgEuC+7YLELJX+ogPalNxgVQLruuS1IRuQDMhVfrV9TEORsYRVsr/Yszhc1N6qmhhWahkKvfkc7Tggsh+HJqonAlY7lExvZa2/BtpuxEvzpMoJyy6LfIg5Zl+7tshjDFMlojaxIcQPQBE5iaKrZlFIv98tV+x4NUx5ZfbAUimx1ezeOXmG9bxvq4OGQpeBZNlyI4VVYhVBdEmiTmcfQSOePLGYbJoKYuoW75+6nLxD1HPFgIJjx9CfmRPChh0ZwthOuKA1twBvFqoGZVV2T4Vp0d+DaQMsHZ9Jzoi5dynY5/4XHmcmXLrmdMw74cqKuBE+f2GCjxguOEVhIEXkCPImye3TRNT9gb0vC1KSunSmkfSxVIB07/pWmo6oVDKs0TL/zycyFaJaYUDr4k3SFCENbAq/+zRkyEMcKm1QAAAABJRU5ErkJggg==", reviewLink: null,estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 },
            { id: 15, name: "Gamermine", link: "https://gamermine.com/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 },
            { id: 16, name: "Gain.gg", link: "https://gain.gg/r/coinbai", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 },
            { id: 28, name: "Mistplay", link: "https://mistplay.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $25 <br> 📈 avg. 10$", average: 10 },
            { id: 14, name: "Clickworker", link: "https://www.clickworker.com", favicon: "https://www.clickworker.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to 20-50$ <br> 📈 avg. 15$", average: 15 },

        
        ]
    },
    {
        title: "Testing Sites",
        icon: "/icons/test.png",
        description: "Earn money by testing sites.",
        sites: [
            { id: 17, name: "Test IO", link: "https://test.io", favicon: "https://th.bing.com/th?id=ODLS.d4838b5a-0fdb-4ef5-8971-b6a57cd5d712&w=32&h=32&qlt=90&pcl=fffffa&r=0&o=6&pid=1.2", reviewLink: null, estimatedEarnings: "💲Up to 10-300$ <br> 📈 avg. 40$", average: 40 },
            { id: 18, name: "UserTesting", link: "https://www.usertesting.com", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByElEQVR4Ae2XA4wdURSGp7YbN6htI65t27bdhrWi2g1qhHW7wdpmtLZ1ztlzV4+ze9/mzvpPvuDq/x5nRtPLyLXQnJnNXGSuVpHLzMKR66Cl5kh4Uy/GiyFFBDCDZMvbMiEMKSaK6SgjsJ0hgzgoI/DCQIE3MgIf7G1ecBRo+Smghcf0C2YdKFmz9CTQqHV213yoskBcMpJITCLqCviEIpVl+j7FAvGlArEVCPiGmQRmNAo0CjQKqBYQxSJxyfoC/uEmgWl7lQqYXl1+AdKUrbbzYzcApWaY1ozfqFjg8Reksjz5ijbzDz+Z5t2DxLxigdkHgLJzkUQQkb79Rzp2B+j4PaAfLkiIZXNE+6+DegHBUS7My0fSiyh/8BF5rUECgpVngP64I+WaiRQCklcI0oEbOvscFHjHUGWM3wQ0/wjQouNQ9qWU4Z2MwFWGDOKmjMAoptAggQmyN6aXDSi/PXo7aXIC60FIrGcCFBRHMLtHr8WmmqMZs56ESFemhxUjmD92ygqZMWbruo9ax8VGZBS/Ii7Yz2RaSWzXqjNc2If5N3JNucA3rbozai2Id+Mwk8lk6z8BGf9uDGCcmOVajcT0VD1MqyspAopbh1Y3QafTAAAAAElFTkSuQmCC", reviewLink: null, estimatedEarnings: "💲Up to 10-200$ <br> 📈 avg. 60$", average: 60 },
            { id: 19, name: "Userlytics", link: "https://www.userlytics.com", favicon: "https://www.userlytics.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$", average: 50 },
            { id: 20, name: "IntelliZoom", link: "https://www.intellizoom.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to 50-300$ <br> 📈 avg. 50$", average: 50 }
        ]
    },
    {
        title: "Paid Projects",
        icon: "/icons/projects.png",
        description: "Projects/Microtasks sites.",
        sites: [
            { id: 21, name: "CrowdGen", link: "https://crowdgen.com", favicon: null, reviewLink: null, estimatedEarnings: "Up to $10-$200 <br> 📈 avg. 20$ <br> Varies based on projects available", average: 20 },
            { id: 22, name: "Swagbucks", link: "https://www.swagbucks.com/p/register?rb=151254487&rp=1", favicon: "https://www.swagbucks.com/favicon.ico", reviewLink: "https://coinbai.com/blog/swagbucks", estimatedEarnings: "💲Up to $50 per month <br> 📈 avg. 30$", average: 30 },
            { id: 23, name: "dscout", link: "https://dscout.com", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEVMaXFAQEBAQEBAQEBAQEBAQEBAQECnEBY3AAAAB3RSTlMAIKDw/zAQ2OB0JQAAAF5JREFUeAHd0cEJgDAQRNFPQAvQBhTSgJAKkinA/qsRJMouK3jPO372tAMsRV3bAaaiVzuBVcYBZBkVKDIazHKIgc/AbYhg/If4wvDkMEMYKkzZZaliJWnDyRUvPQcXE9lT28QB6/UAAAAASUVORK5CYII=", reviewLink: null, estimatedEarnings: "💲Up to $10-$100 per project  <br> 📈 avg. 50$", average: 50 },
            { id: 24, name: "OneForma", link: "https://oneforma.com", favicon: "https://play-lh.googleusercontent.com/yhkZeYpVyx2N6kyTBsJI2YSKg-XVjWpZjL5Cf9FLdsfTlfiem4TwfWB_Vj0ygPWM6w=w240-h480-rw", reviewLink: null, estimatedEarnings: "💲Up to $50-$1000 per project  <br> 📈 avg. 60$", average: 60 },
            { id: 25, name: "Survey Junkie", link: "https://www.surveyjunkie.com", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $10-$40 per month  <br> 📈 avg. 15$", average: 15 },
            { id: 26, name: "Pinecone Research", link: "https://rewards.pineconeresearch.com/", favicon: null, reviewLink: null, estimatedEarnings: "💲Up to $5-$20 <br> 📈 avg. 10$", average: 10 }
        ]
    },

    {
        title: "Cashback Sites",
        icon: "/icons/cashback.png",
        description: "Get cashback on your online purchases.",
        sites: [
            { id: 11, name: "Rakuten", link: "https://www.rakuten.com", favicon: null, reviewLink: null, estimatedEarnings: "Varies based on tasks" },
            { id: 12, name: "TopCashback", link: "https://www.topcashback.com", favicon: "https://www.topcashback.com/favicon.ico", reviewLink: null, estimatedEarnings: "Varies based on tasks" }
        ]
    },



    {
        title: "Cryptocurrency Exchanges & GPT-sites",
        icon: "/icons/crypto.png",
        description: "Buy, sell, earn and trade cryptocurrencies!.",
        sites: [
            { name: "Crypto", link: "https://crypto.com/app/nbzfay494y", favicon: "https://crypto.com/favicon.ico", reviewLink: null, estimatedEarnings: "💲50$ if you sign up!" },
            { name: "Binance", link: "https://accounts.binance.com/register?ref=13732272", favicon: "https://th.bing.com/th?id=ODLS.911599c8-1878-403d-ab0f-2ed3bfd86b3f&w=32&h=32&qlt=90&pcl=fffffa&r=0&o=6&pid=1.2", reviewLink: null },
            { name: "Coinbase", link: "https://www.coinbase.com", favicon: "https://www.coinbase.com/favicon.ico", reviewLink: null },
            { name: "Kraken", link: "https://www.kraken.com", favicon: "https://www.kraken.com/favicon.ico", reviewLink: null },
            { name: "Kucoin", link: "https://www.kucoin.com/r/rf/r83B4JD", favicon: null, reviewLink: null },
            { name: "faucetcrypto", link: "https://faucetcrypto.com/r/4211947", favicon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEURGCcADSAAABoAGCYJEiMAABVXWmGKjJAWHStqEzNfFDEIGCcAGSUAAA9BRE2dn6NrbXMoLTikqq13ACpFFS1TFS+KEDmQDzsAAAB9f4SRkpZfACc8FiwAGSOgDT4tFyosMTuys7Y6QEEGFRkkExxvDimYDjxLT1VHLopWPZsPIUIcFSGCETgADBViRLAOFyMAEABbQKMoJE92EjUkIUZkEzIAFRcAFBMUGSwbFERQOZE3JHIzKV9MN4glFymPkpIlLDBCMXg9LnBMN4ocHTovIGNBEiFUEykkDyMAHDMZExZK+700AAABxklEQVR4AW3SZ5+aMACA8WDcxq0hUIODFo4rDUEssZx76/f/QE3M7bv/2+eXHfCOkQMAQvCNfKFQLJVhpVpDX3q90Wy22p1ur4/NKqp9HNYsEdK27B94QGnVGb4bbIzGZWI1SxPi/vzlYUjl4Ndx7TEZjX3yECiPv50qDasvY+tj4nfIHxZxJZ7SJKHmUK9bsNujDgEuC+7YLELJX+ogPalNxgVQLruuS1IRuQDMhVfrV9TEORsYRVsr/Yszhc1N6qmhhWahkKvfkc7Tggsh+HJqonAlY7lExvZa2/BtpuxEvzpMoJyy6LfIg5Zl+7tshjDFMlojaxIcQPQBE5iaKrZlFIv98tV+x4NUx5ZfbAUimx1ezeOXmG9bxvq4OGQpeBZNlyI4VVYhVBdEmiTmcfQSOePLGYbJoKYuoW75+6nLxD1HPFgIJjx9CfmRPChh0ZwthOuKA1twBvFqoGZVV2T4Vp0d+DaQMsHZ9Jzoi5dynY5/4XHmcmXLrmdMw74cqKuBE+f2GCjxguOEVhIEXkCPImye3TRNT9gb0vC1KSunSmkfSxVIB07/pWmo6oVDKs0TL/zycyFaJaYUDr4k3SFCENbAq/+zRkyEMcKm1QAAAABJRU5ErkJggg==", reviewLink: null }
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
            { name: "r/SlaveLabour", link: "https://www.reddit.com/r/slavelabour", favicon: "https://www.reddit.com/favicon.ico", reviewLink: null }
        ]
    }
];

import { onMount } from 'svelte';
    import { selectedSitesStore } from '../../stores/selectedSitesStore.js';


    let hoursSpentPerDay = 0; // Hours spent across all selected sites
    let totalEstimatedEarnings = 0; // Total calculated earnings for all selected sites
    let selectedSites = []; // Define this variable to hold selected site IDs

    // Function to calculate earnings for multiple selected sites
    function calculateTotalEarnings(selectedSites, categories) {
    // Ensure selectedSites is an array
    if (!Array.isArray(selectedSites)) {
        console.error("selectedSites is not an array");
        return;
    }

    let total = 0; // Reset total earnings before calculating

    if (selectedSites.length === 0) {
        console.error("No sites selected!");
        return;
    }

    // Iterate through each category to find the selected sites
    selectedSites.forEach(siteId => {
        let siteFound = false; // Flag to check if the site was found

        for (const category of categories) {
            const site = category.sites.find(s => s.id === siteId); // Find the site object by ID

            if (site) {
                const earningsPerHour = typeof site.average === 'number' ? site.average/4 : 0; // Validate average
                const siteEarnings = (hoursSpentPerDay * earningsPerHour); // Calculate total for this site
                total += siteEarnings; // Sum up the earnings across all sites
                siteFound = true; // Mark that we found the site
                break; // Break the loop if site is found
            }
        }

        if (!siteFound) {
            console.warn(`Site with ID ${siteId} not found in any category.`);
        }
    });

    totalEstimatedEarnings = total.toFixed(2); // Round to two decimals
    console.log(`Total Estimated Earnings: $${totalEstimatedEarnings}`);

    // Update the UI here (this may be optional since you are binding)
    document.getElementById('total-earnings-display').textContent = `Total Estimated Earnings: $${totalEstimatedEarnings}`;
}

    // Toggle site selection using ID
    function toggleSiteSelection(site) {
        const siteId = site.id; // Get the unique ID of the site
        selectedSitesStore.update(currentSites => {
            if (currentSites.includes(siteId)) {
                return currentSites.filter(selectedId => selectedId !== siteId); // Deselect
            } else {
                return [...currentSites, siteId]; // Select
            }
        });
    }

    // Function to display bookmark instructions
    function showBookmarkInstructions() {
        alert('To bookmark this page, press Ctrl+D (Windows) or Cmd+D (Mac).');
    }

    // Subscribe to the store
    const unsubscribe = selectedSitesStore.subscribe(value => {
        selectedSites = value; // Update the local variable with store value
    });

    onMount(() => {
        return () => {
            unsubscribe(); // Clean up the subscription when the component is destroyed
        };
    });
</script>

<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center mb-8 dark:text-gray-200">Beermoney Sites</h1>
    <div class="flex justify-center items-center mb-8">
        <h2 class="text font-bold dark:text-gray-200">Updated: 10/06/2024</h2>
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
                <div class="flex items-center mb-4">
                    <img src={category.icon} alt="Category Icon" class="h-6 w-6 mr-2" />
                    <h2 class="text-xl font-semibold dark:text-white">{category.title}</h2>
                </div>
                <p class="text-gray-500 dark:text-gray-300 mb-4">{category.description}</p>
                <ul class="space-y-2">
                    {#each category.sites as site, index}
                        <li class="flex items-center justify-between">
                            <div class="flex items-center">
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
                                    <span class="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 w-72 p-3 bg-gray-100 dark:bg-gray-700 dark:text-white text-sm rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10">
                                        <h3 class="font-bold mb-1">Estimated Earnings per Month</h3>
                                        <p>{@html site.estimatedEarnings}</p>
                                    </span>
                                </a>
                                {#if site.reviewLink}
                                    <a href={site.reviewLink} target="_blank" class="ml-2">
                                        <img src="/icons/letter-r.png" alt="Review" class="h-3 w-3">
                                    </a>
                                {/if}
                            </div>
                            {#if !['Subreddits', 'Cryptocurrency Exchanges', 'Cashback Sites'].includes(category.title)}
                            <div 
                            
                                on:click={() => toggleSiteSelection(site)} 
                                class="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer ml-auto"
                                aria-label="Select Site"
                                title={selectedSites.includes(site.id) ? "Deselect" : "Select"}
                                style:cursor={['Subreddits', 'Cryptocurrency Exchanges', 'Cashback Sites'].includes(category.title) ? 'not-allowed' : 'pointer'}
                                style:opacity={['Subreddits', 'Cryptocurrency Exchanges', 'Cashback Sites'].includes(category.title) ? '0.5' : '1'}
                            >
                                {#if selectedSites.includes(site.id)}
                                    <span class="text-xl text-blue-500">−</span>
                                {:else}
                                    <span class="text-xl text-blue-500">+</span>
                                {/if}
                            </div>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <!-- Earnings Calculator Section -->
    <div class="max-w-7xl mx-auto py-10 px-4 bg-gray-100 dark:bg-gray-800 mt-10 rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200">💲 Monthly Income Calculator</h2>
        <div class="text-center mb-4">
            <p class="text-lg dark:text-gray-300">
                Select or deselect sites from the tables above: 
                <span class="font-bold dark:text-gray-400">{selectedSites.length} site{selectedSites.length !== 1 ? 's' : ''} selected</span>
            </p>
            <p class="text-lg dark:text-gray-300 mb-4">
                Total estimated earnings per month based on the average income for the selected sites.
            </p>
            <!-- Input for hours spent per day -->
            <input 
                type="number" 
                bind:value={hoursSpentPerDay} 
                placeholder="Hours spent per day" 
                class="border border-gray-300 dark:border-gray-600 dark:text-gray-600 rounded-md p-2 text-lg w-1/3 mx-auto mb-4"
                min="0"
                max="8"
            />
            <button 
                on:click={() => calculateTotalEarnings(selectedSites, beermoneyCategories)} 
                class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
            >
                Calculate Earnings
            </button>
            <p id="total-earnings-display" class="mt-4 text-xl text-gray-800 dark:text-gray-200">
                Total Monthly Estimated Earnings: $<span class="font-bold text-blue-500"></span>
            </p>
        </div>
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


        <!-- Call to Action -->
        <h3 class="text-3xl font-semibold text-center mb-6 dark:text-gray-200 mt-10">Do you like the site? Feel free to donate!</h3>

        <div class="mr-4 -ml-6 mt-6 mr-80 ml-80 mt-6">
            <lightning-widget 
              name="Coinbai" 
              accent="#ea8100" 
              to="coinbaicontact@zbd.gg" 
              image="\blog\img\newlogo.png" 
            />
          </div>
          
          <script src="https://embed.twentyuno.net/js/app.js"></script>
    
        <!-- End Section -->
</div>



<!-- Tailwind CSS for styling, modify as needed -->
<style>
    h1, h2 {
        color: #2D3748;
    }
</style>

<!-- Tailwind CSS for styling, modify as needed -->

