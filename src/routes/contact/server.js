// src/routes/api/contact/+server.js
import { error } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

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
                user: env.EMAIL_PASS,
                pass: env.EMAIL_USER
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
        throw error(500, "Internal Server Error");
    }
};
