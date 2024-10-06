<script>
	let email = '';
	let error = false;
	let submitted = false;
	async function handleSubmit() {
    let body = { email };

    try {
        let result = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Add this line
            },
            body: JSON.stringify(body)
        });

        if (!result.ok) { // Check if response status is not in the 200-299 range
            throw new Error('Network response was not ok');
        }

        const registerEmailResponse = await result.json();
        
        if (registerEmailResponse.status === 200) {
            email = '';
            error = false;
            submitted = true;
        } else {
            error = true;
        }
    } catch (error) {
        console.error('Error during fetch:', error); // Log error to console
        error = true; // Handle fetch errors
    }
}

</script>

<div class="w-full text-gray-500 dark:text-gray-400 mb-2">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col md:flex-row items-center justify-center gap-4">
			<div class="font-bold">Sign up for our newsletter</div>
			<div>
				<input
					bind:value={email}
					type="text"
					id="email"
					name="email"
					placeholder="Email address"
					class="form-control block w-full px-3 py-1 text-base bg-white dark:bg-gray-800 bg-clip-padding border rounded transition ease-in-out focus:text-gray-700 focus:outline-none focus:ring-0 {error
						? 'border-red-500 focus:border-red-600'
						: 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:dark:border-primary-500'}"
				/>
			</div>

			<div>
				<button
					type="submit"
					class="inline-block px-6 py-2 border-2 border-gray-300 dark:border-gray-600 font-medium text-xs leading-tight uppercase rounded focus:bg-primary-500 focus:border-primary-500 focus:dark:border-primary-500 focus:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
				>
					{submitted ? 'Thank you!' : 'Subscribe'}
				</button>
			</div>
		</div>
	</form>
</div>
