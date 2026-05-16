export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  author: string;
  body: { heading?: string; paragraphs: string[] }[];
}

export const articles: Article[] = [
  {
    slug: "canada-study-permit-2026",
    category: "Canada",
    title: "The 2026 Canadian Study Permit: what actually changed",
    excerpt:
      "PAL letters, financial proof updates and what IRCC's new caps mean for Nigerian applicants this intake.",
    date: "May 12, 2026",
    read: "8 min read",
    author: "Chiamaka Nwosu, Founder",
    body: [
      {
        paragraphs: [
          "Every January, IRCC quietly adjusts the rules of the Canadian study permit and every January, half the agents in Lagos pretend nothing happened. This year is different. The 2026 intake brings the most material shift Nigerian applicants have seen since the GIC was introduced — and most of the noise online is wrong.",
          "Below is what we're actually seeing in approvals and refusals across our Q1 cohort, written for the parent or student trying to make a real decision in the next sixty days.",
        ],
      },
      {
        heading: "The PAL letter is now non-negotiable",
        paragraphs: [
          "Provincial Attestation Letters (PALs) were optional guidance in 2024. As of January 22, 2026, every undergraduate and most college applicants must submit a valid PAL with their study permit application. Without it, the file is returned within 14 days — no refund, no review.",
          "Master's, PhD and most exchange students remain exempt. If your DLI hasn't issued your PAL within 10 business days of accepting your offer, escalate. Don't wait.",
        ],
      },
      {
        heading: "Proof of funds: the new floor",
        paragraphs: [
          "The cost-of-living financial requirement is now CAD $20,635 per year (up from $10,000), plus first-year tuition. For a typical Ontario undergraduate that means showing roughly ₦42–48 million in liquid, traceable funds.",
          "GIC remains the cleanest path. Avoid 'sponsor letter' workarounds — refusal rates on those have crossed 70% at the Lagos visa office.",
        ],
      },
      {
        heading: "What this means for you",
        paragraphs: [
          "If your intake is September 2026, your application should already be in. If you're targeting January 2027, start the GIC process this month. Visa officers are now reading SOPs more carefully than at any point in the last five years — generic essays are being refused on first review.",
        ],
      },
    ],
  },
  {
    slug: "uk-graduate-route-2026",
    category: "United Kingdom",
    title: "UK Graduate Route in 2026 — still worth it?",
    excerpt:
      "A clear-eyed look at the 2-year post-study visa, salary realities and which courses still convert to long-term roles.",
    date: "May 5, 2026",
    read: "6 min read",
    author: "Adaeze Okeke, Senior Advisor",
    body: [
      {
        paragraphs: [
          "Every six months a UK government adviser threatens to abolish the Graduate Route. Every six months it survives. As of this writing, the 2-year post-study work visa is intact and remains the single most valuable feature of a UK degree for African students.",
          "But 'intact' and 'worth it' are different questions. Here's the honest answer.",
        ],
      },
      {
        heading: "Who actually converts to a long-term role",
        paragraphs: [
          "Conversion to a Skilled Worker visa requires a sponsoring employer and a salary above £38,700 (or £30,960 for new entrants in shortage occupations). The students we see clear that bar reliably are in: nursing, software engineering, data science, civil engineering and accounting at Big-4 firms.",
          "Marketing, business management and 'international business' graduates struggle. Not because the degree is bad — because the Skilled Worker list doesn't favour them.",
        ],
      },
      {
        heading: "City matters more than university",
        paragraphs: [
          "London salaries clear the threshold easily. Manchester, Birmingham and Leeds work for tech and engineering. Smaller cities (Sunderland, Plymouth, Hull) rarely produce sponsoring employers — your Graduate visa expires and you go home.",
          "Pick a course AND a city that match the Skilled Worker shortage list. Don't pick a 'nice campus.'",
        ],
      },
    ],
  },
  {
    slug: "fully-funded-scholarships-2026",
    category: "Scholarships",
    title: "Six fully-funded scholarships open to Nigerian students this year",
    excerpt:
      "Chevening, Commonwealth, Vanier, Trudeau, Rhodes and Mastercard Foundation — eligibility, deadlines and what wins.",
    date: "April 28, 2026",
    read: "10 min read",
    author: "Chiamaka Nwosu, Founder",
    body: [
      {
        paragraphs: [
          "There are exactly six scholarships every Nigerian masters or PhD candidate should have on a shortlist. Not 60. Not 'apply to everything.' Six. Each rewards a different profile.",
        ],
      },
      {
        heading: "Chevening (UK, masters, opens August)",
        paragraphs: [
          "Best fit: working professionals with 2+ years experience and a clear leadership track record. Wins on the leadership essay, not on grades.",
        ],
      },
      {
        heading: "Commonwealth Scholarship (UK, masters/PhD, opens September)",
        paragraphs: [
          "Best fit: candidates from low-income backgrounds in development-related fields. Strong development impact statement is the difference.",
        ],
      },
      {
        heading: "Vanier (Canada, PhD only, opens June)",
        paragraphs: [
          "Best fit: research excellence + a Canadian supervisor who has already agreed to nominate you. Get the supervisor first, then apply.",
        ],
      },
      {
        heading: "Trudeau, Rhodes and Mastercard Foundation",
        paragraphs: [
          "Trudeau: humanities/social science PhDs with public engagement. Rhodes: under-25, Oxford-bound, exceptional all-rounders. Mastercard Foundation: undergraduate and masters across multiple universities — large cohort, less prestige but excellent funding.",
        ],
      },
    ],
  },
  {
    slug: "sop-that-gets-read",
    category: "Applications",
    title: "How to write an SOP that actually gets read",
    excerpt:
      "The three-paragraph structure our consultants use to turn average essays into offers from top-30 universities.",
    date: "April 14, 2026",
    read: "7 min read",
    author: "Adaeze Okeke, Senior Advisor",
    body: [
      {
        paragraphs: [
          "Admissions officers read 200 SOPs a day. Yours has 90 seconds. The structure below has produced 47 offers from top-30 universities in the last two intakes.",
        ],
      },
      {
        heading: "Paragraph 1 — A specific moment",
        paragraphs: [
          "Open with one concrete moment that committed you to this field. Not a childhood memory. A recent, professional or academic moment with a date, a place, and an outcome. 120 words.",
        ],
      },
      {
        heading: "Paragraph 2 — What you've done since",
        paragraphs: [
          "Three concrete pieces of evidence that you've pursued this commitment: a project, a paper, a job. Each with measurable outcomes. 200 words.",
        ],
      },
      {
        heading: "Paragraph 3 — Why this exact program",
        paragraphs: [
          "Two named professors, one named lab or course, and one specific career outcome. If you can't fill this paragraph with specifics, you're applying to the wrong school.",
        ],
      },
    ],
  },
  {
    slug: "proof-of-funds",
    category: "Visa",
    title: "Proof of funds, demystified",
    excerpt:
      "GIC, sponsor letters, Form A and bank statements — what each visa officer is actually looking for.",
    date: "April 2, 2026",
    read: "9 min read",
    author: "Tolu Adesanya, Visa Specialist",
    body: [
      {
        paragraphs: [
          "The single biggest cause of refusal across Canadian, UK and US student visas is poorly assembled financial documentation. Not insufficient funds — poorly assembled funds.",
        ],
      },
      {
        heading: "What officers actually check",
        paragraphs: [
          "They check three things in this order: (1) is the money there today, (2) where did it come from in the last six months, (3) is it liquid and accessible from the destination country.",
          "A balance of ₦80 million that appeared 11 days ago will be refused. ₦45 million sitting steadily for 8 months will be approved.",
        ],
      },
      {
        heading: "GIC, sponsor letters and Form A",
        paragraphs: [
          "GIC (Canada): cleanest, fastest, lowest refusal rate. Use it.",
          "Sponsor letters: only credible from a parent with verifiable income. Notarise everything.",
          "Form A (Nigeria FX): always include the full Form A trail when funds were converted. Officers know to look for it.",
        ],
      },
    ],
  },
  {
    slug: "first-30-days-canada",
    category: "Life Abroad",
    title: "Your first 30 days in Canada: a survival checklist",
    excerpt:
      "SIN number, banking, transit cards, SIM, accommodation and where to find Nigerian community.",
    date: "March 21, 2026",
    read: "5 min read",
    author: "Chiamaka Nwosu, Founder",
    body: [
      {
        paragraphs: [
          "Land. Breathe. Then run this checklist in order. Skip steps and you'll spend month two fixing what month one broke.",
        ],
      },
      {
        heading: "Days 1–3",
        paragraphs: [
          "Get a Canadian SIM (Public Mobile or Freedom — avoid the Big Three for now). Activate your Wise/RBC newcomer account. Buy a transit pass.",
        ],
      },
      {
        heading: "Days 4–10",
        paragraphs: [
          "Apply for your SIN at the nearest Service Canada — go in person, takes 20 minutes. Open a real bank account (RBC and Scotia have the best newcomer packages). Get a tenant insurance policy before you sign any lease.",
        ],
      },
      {
        heading: "Days 11–30",
        paragraphs: [
          "Find your Nigerian community: church, NSA chapter on campus, or the Nigerian-Canadian association in your city. Loneliness is the single biggest reason students drop out in year one. Don't try to do it alone.",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
