import { error } from '@sveltejs/kit';
import registerEmail from '$lib/newsletter';

export const prerender = true;

export const POST = async ({ request }) => {
	try {
		const { email } = await request.json();
		
		// Ensure email is provided
		if (!email) {
			throw error(400, 'Email is required');
		}

		// Call your newsletter registration function
		let result = await registerEmail(email);

		// Ensure result has a status
		if (!result || !result.status) {
			throw error(500, 'Invalid response from newsletter service');
		}

		// Return the response as JSON with the appropriate status
		return new Response(
			JSON.stringify(result),
			{
				status: result.status // Use the status from the result
			}
		);
	} catch (err) {
		console.error('Error in POST /api/newsletter:', err);
		throw error(500, "Couldn't add email to the newsletter");
	}
};
