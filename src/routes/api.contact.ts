import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { leadSchema } from "@/lib/lead-schema";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid request body" }, 400);
        }

        // Honeypot: a real user never fills `company`. Check the raw field before
        // schema validation (the schema rejects a non-empty company), then fake
        // success and send nothing — so a bot can't tell it was caught.
        const honeypot = (payload as { company?: unknown })?.company;
        if (typeof honeypot === "string" && honeypot.length > 0) {
          return json({ ok: true });
        }

        const parsed = leadSchema.safeParse(payload);
        if (!parsed.success) {
          return json({ ok: false, error: "Validation failed" }, 400);
        }

        const lead = parsed.data;

        const host = process.env.SMTP_HOST;
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;
        const from = process.env.SMTP_FROM || user;
        const to = process.env.CONTACT_TO_EMAIL || "info@fejaglobal.com";
        const port = Number(process.env.SMTP_PORT) || 587;

        if (!host || !user || !pass) {
          console.error("[api/contact] missing SMTP env vars (SMTP_HOST/USER/PASS)");
          return json({ ok: false, error: "Email is not configured" }, 500);
        }

        const transport = nodemailer.createTransport({
          host,
          port,
          secure: port === 465, // implicit TLS on 465, STARTTLS on 587
          auth: { user, pass },
        });

        const submittedAt = new Date().toISOString();
        const rows: [string, string][] = [
          ["Name", lead.name],
          ["Email", lead.email],
          ["Phone", lead.phone],
          ["Destination", lead.destination],
          ["Study level", lead.study_level ?? "—"],
          ["Submitted", submittedAt],
        ];

        const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
        const html = `
          <h2 style="margin:0 0 12px;font-family:sans-serif">New consultation request</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:4px 12px 4px 0;color:#555;font-weight:600">${k}</td><td style="padding:4px 0">${v}</td></tr>`,
              )
              .join("")}
          </table>`;

        try {
          await transport.sendMail({
            from,
            to,
            replyTo: `${lead.name} <${lead.email}>`,
            subject: `New consultation request — ${lead.name} (${lead.destination})`,
            text,
            html,
          });
        } catch (err) {
          console.error("[api/contact] sendMail failed:", err);
          return json({ ok: false, error: "Could not send email" }, 502);
        }

        return json({ ok: true });
      },
    },
  },
});
