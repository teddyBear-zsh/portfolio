import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        const result = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mariana.eli.corona@gmail.com",
        subject: `New message from ${name ?? "unknown"}`,
        replyTo: email,
        text: message,
        });

        return new Response(JSON.stringify({ ok: true, result }), {
        status: 200,
        });
    } catch (err) {

        return new Response(
        JSON.stringify({
            error: "Failed",
            details: err instanceof Error ? err.message : String(err),
        }),
        { status: 500 }
        );
    }
};