import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  destination: z.enum(["Canada", "United Kingdom", "Both"]),
  study_level: z
    .enum(["Undergraduate", "Postgraduate", "PhD", "Foundation / Diploma"])
    .optional(),
  // Honeypot — real users never fill this field. Bots usually do.
  company: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
