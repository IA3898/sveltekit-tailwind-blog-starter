<script>
    let name = '';
    let email = '';
    let message = '';
    let error = false;
    let submitted = false;

    async function handleSubmit() {
        // Check for empty fields
        if (!name || !email || !message) {
            error = true;
            return;
        }
        error = false;

        // Define the body object
        const body = { name, email, message };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            // Check if the response is OK
            if (response.ok) {
                submitted = true;
                error = false; // Reset error if submission is successful
                // Reset input fields
                name = '';
                email = '';
                message = '';
            } else {
                // Handle server error
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const errorData = await response.json();
                    console.error("Error sending message:", errorData.error);
                    error = true; // Set error state to true
                } else {
                    console.error("Server returned a non-JSON error response");
                    error = true; // Set error state to true
                }
            }
        } catch (err) {
            console.error("Error during submission:", err);
            error = true; // Set error state to true
        }
    }
</script>

<div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
                bind:value={name}
                type="text"
                id="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Your name"
                required
            />
        </div>

        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
                bind:value={email}
                type="email"
                id="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Your email"
                required
            />
        </div>

        <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
                bind:value={message}
                id="message"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Your message"
                rows="5"
                required
            ></textarea>
        </div>

        <div class="mb-4">
            <button
                type="submit"
                class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                disabled={submitted}
            >
                {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
        </div>

        {#if error}
            <p class="text-red-500">All fields are required, or an error occurred during submission!</p>
        {/if}
    </form>
</div>
