<script>
    import { onMount } from 'svelte';
    import { config } from '$lib/config';

    // Function to get the current theme from local storage or use default
    function getTheme() {
        return localStorage.getItem('theme') || config.theme;
    }

    // State to manage the current theme
    let theme;

    onMount(() => {
        theme = getTheme();
        document.documentElement.classList.add(theme); // Set the initial theme
    });

    // Function to toggle theme
    function toggleTheme() {
        theme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }
</script>

<!-- Page Container -->
<div class="max-w-7xl mx-auto py-10 px-4">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-center mb-8 dark:text-gray-400">Terms of Use</h1>

    <div class="prose">
        <h2 class="dark:text-gray-400">1. Introduction</h2>
        <p class="dark:text-gray-400">
            Welcome to Coinbai! These Terms of Use govern your access to and use of our services.
            By accessing our website and services, you agree to be bound by these Terms.
        </p>

        <h2 class="dark:text-gray-400">2. Eligibility</h2>
        <p class="dark:text-gray-400">
            You must be at least 18 years old to use our services. By using Coinbai, you represent that
            you are at least 18 years old and have the legal capacity to enter into these Terms.
        </p>

        <h2 class="dark:text-gray-400">3. User Accounts</h2>
        <p class="dark:text-gray-400">
            To access certain features of our services, you may be required to sign up for a newsletter or an account. You agree to
            provide accurate and complete information when creating your account and to update such information
            as needed.
        </p>

        <h2 class="dark:text-gray-400">4. User Conduct</h2>
        <p class="dark:text-gray-400">
            You agree to use the services only for lawful purposes and in a manner that does not infringe the
            rights of any third party. You must not engage in any activity that disrupts or interferes with the
            functioning of the services.
        </p>

        <h2 class="dark:text-gray-400">5. Intellectual Property</h2>
        <p class="dark:text-gray-400">
            All content on Coinbai, including text, graphics, logos, and software, is the property of Coinbai
            or its licensors and is protected by copyright, trademark, and other intellectual property laws.
        </p>

        <h2 class="dark:text-gray-400">6. Disclaimers</h2>
        <p class="dark:text-gray-400">
            The services are provided "as is" without warranties of any kind, either express or implied. Coinbai
            does not guarantee the accuracy or reliability of any information provided through the services.
        </p>

        <h2 class="dark:text-gray-400">7. Limitation of Liability</h2>
        <p class="dark:text-gray-400">
            To the fullest extent permitted by law, Coinbai shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of the services.
        </p>

        <h2 class="dark:text-gray-400">8. Changes to Terms</h2>
        <p class="dark:text-gray-400">
            We may revise these Terms from time to time. We will notify you of any changes by posting the new
            Terms on our website. Your continued use of the services after any changes constitutes your acceptance
            of the revised Terms.
        </p>

        <h2 class="dark:text-gray-400">9. Governing Law</h2>
        <p class="dark:text-gray-400">
            These Terms shall be governed by and construed in accordance with the laws of EU.
        </p>

        <h2 class="dark:text-gray-400">10. Contact Information</h2>
        <p class="dark:text-gray-400">
            If you have any questions about these Terms, please contact us at coinbaicontact@gmail.com.
        </p>
    </div>

    <button on:click={toggleTheme} class="mt-6 bg-blue-500 text-white rounded py-2 px-4">
        Toggle Theme
    </button>
</div>

<!-- Tailwind CSS for styling -->
<style>
    .prose {
        color: #2D3748; /* Text color for light mode */
    }

    /* Dark mode styles */
    .dark .prose {
        color: #E2E8F0; /* Text color for dark mode */
    }
</style>
