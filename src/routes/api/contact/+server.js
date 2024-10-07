import { error } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '$env/static/private';  // Use dynamic import for runtime access

export const POST = async ({ request }) => {
    try {
        const { name, email, message } = await request.json();

        // Check if the fields are populated
        if (!name || !email || !message) {
            throw error(400, 'All fields are required');
        }

        // Setup your transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: EMAIL_USER,  // Use environment variable
                pass: EMAIL_PASS   // Use environment variable
            }
        });

        const mailOptions = {
            from: email,
            to: 'recipient_email@example.com',
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);

        // Handle specific error codes
        if (err.responseCode === 535) {
            throw error(500, "Authentication failed: Check your email credentials.");
        }

        throw error(500, "Internal Server Error");
    }
};
