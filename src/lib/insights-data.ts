export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  /** Optional list rendered after the paragraphs in this section. */
  bullets?: string[];
  /** Optional pull-quote callout rendered after the paragraphs. */
  callout?: { quote: string; attribution?: string };
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  author: string;
  /** Short author role/bio shown in the byline card. */
  authorRole?: string;
  /** Optional cover image (Unsplash URL). */
  cover?: string;
  /** Lede paragraph rendered between the title and the body. */
  lede?: string;
  /** Short bullet list of conclusions shown beneath the byline. */
  keyTakeaways?: string[];
  body: ArticleSection[];
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
    author: "Chiamaka Nwosu",
    authorRole: "Founder, Feja Global",
    cover:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=70",
    lede:
      "The 2026 intake brings the most material shift Nigerian applicants have seen since the GIC was introduced — and most of the noise online is wrong. Here's what is actually happening in the file room at IRCC, and what to do about it in the next sixty days.",
    keyTakeaways: [
      "The PAL letter is mandatory for undergraduates from 22 January 2026.",
      "Cost-of-living proof has more than doubled to CAD $20,635 / year.",
      "Generic SOPs are now refused on first review — write a real one.",
    ],
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
          "Provincial Attestation Letters (PALs) were optional guidance in 2024. As of 22 January 2026, every undergraduate and most college applicants must submit a valid PAL with their study permit application. Without it, the file is returned within 14 days — no refund, no review.",
          "Master's, PhD and most exchange students remain exempt. If your DLI hasn't issued your PAL within 10 business days of accepting your offer, escalate. Don't wait. We've seen the issuing offices in Ontario and BC quietly fall behind in March and April, and a student who waits politely loses their intake.",
        ],
        callout: {
          quote:
            "A PAL is not a formality. Treat it like an offer letter — chase it, file it, photocopy it.",
          attribution: "Chiamaka Nwosu, Founder",
        },
      },
      {
        heading: "Proof of funds: the new floor",
        paragraphs: [
          "The cost-of-living financial requirement is now CAD $20,635 per year (up from $10,000), plus first-year tuition. For a typical Ontario undergraduate that means showing roughly ₦42–48 million in liquid, traceable funds.",
          "GIC remains the cleanest path. Avoid 'sponsor letter' workarounds — refusal rates on those have crossed 70% at the Lagos visa office. The pattern we see again and again: a parent's account balance jumps three weeks before submission and the file is refused for 'unexplained funds'.",
        ],
        bullets: [
          "GIC of CAD $20,635 — the cleanest line on a file.",
          "First-year tuition paid (or a deposit + payment plan letter).",
          "Six months of statements showing the funds were not parachuted in.",
          "A consistent income source on record for the sponsor.",
        ],
      },
      {
        heading: "The new caps — what they really mean",
        paragraphs: [
          "IRCC capped total study permit issuance at 437,000 for 2026. That number sounds dramatic, but the cap is allocated per province and weighted toward graduate programs and public colleges with strong post-graduation outcomes.",
          "In practice: if you're applying to a public university masters program in Ontario, the cap does not affect you. If you're applying to a private career college in BC, your odds dropped by about a third. The myth that 'Canada is closed' is just that — a myth.",
        ],
      },
      {
        heading: "SOPs are being read again",
        paragraphs: [
          "For most of 2023–24, SOPs were a checkbox at the Lagos visa office. That has changed. Officers are now flagging templates, AI-generated essays and copy-pasted paragraphs within the first paragraph — and refusing on 'study plan does not align with stated goals'.",
          "What works in 2026: a 600-word SOP with one specific moment, three concrete pieces of evidence, two named professors, and a clear post-study return plan. Generic platitudes about 'pursuing my dreams' are an instant downgrade.",
        ],
      },
      {
        heading: "What this means for you",
        paragraphs: [
          "If your intake is September 2026, your application should already be in. If you're targeting January 2027, start the GIC process this month — most banks now take 4–6 weeks to issue the GIC certificate, and you do not want to be chasing it in November.",
          "If you're targeting May 2027, you have time to do this properly: build the funds trail, sit IELTS once, write the SOP slowly, and choose a school whose PAL allocation is healthy. That last point is the new lever — pick wisely.",
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
    author: "Adaeze Okeke",
    authorRole: "Senior Advisor, UK Team",
    cover:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=70",
    lede:
      "Every six months a UK government adviser threatens to abolish the Graduate Route. Every six months it survives. As of writing, the 2-year post-study work visa is intact and remains the single most valuable feature of a UK degree for African students — but 'intact' and 'worth it' are different questions.",
    keyTakeaways: [
      "Graduate Route survives in 2026 — confirmed by Home Office in March.",
      "Only ~38% of African graduates convert to a Skilled Worker visa.",
      "Course AND city matter — pick both to match the Shortage list.",
    ],
    body: [
      {
        paragraphs: [
          "We've now seen four full cohorts cycle through the Graduate Route, from the 2021 inaugural class to the 2025 graduates who are mid-conversion right now. The data is finally clear enough to give an honest answer rather than a hopeful one.",
          "Short version: the Graduate Route is worth it for a specific kind of student in a specific kind of programme. For everyone else, it's a 2-year holiday on a depreciating Naira.",
        ],
      },
      {
        heading: "Who actually converts to a long-term role",
        paragraphs: [
          "Conversion to a Skilled Worker visa requires a sponsoring employer and a salary above £38,700 (or £30,960 for new entrants in shortage occupations). The students we see clear that bar reliably are in: nursing, software engineering, data science, civil engineering and accounting at Big-4 firms.",
          "Marketing, business management and 'international business' graduates struggle. Not because the degree is bad — because the Skilled Worker list doesn't favour them and sponsoring licences for marketing roles are vanishingly rare in 2026.",
        ],
        bullets: [
          "Nursing — 91% conversion in our 2024 cohort.",
          "Software / data engineering — 74%.",
          "Civil / structural engineering — 68%.",
          "Accounting (with ACA/ACCA pathway) — 61%.",
          "Marketing, comms, international business — under 18%.",
        ],
      },
      {
        heading: "City matters more than university",
        paragraphs: [
          "London salaries clear the threshold easily. Manchester, Birmingham and Leeds work for tech and engineering. Smaller cities (Sunderland, Plymouth, Hull) rarely produce sponsoring employers — your Graduate visa expires and you go home.",
          "Pick a course AND a city that match the Skilled Worker shortage list. Don't pick a 'nice campus.' We've watched too many bright students go to Bangor or Aberystwyth because the tuition was £4,000 cheaper, and lose all of it back in moving costs when they couldn't find a sponsor.",
        ],
        callout: {
          quote:
            "Pick the city you can convert in. The campus you study on is six months. The city you build a career in is six years.",
          attribution: "Adaeze Okeke, Senior Advisor",
        },
      },
      {
        heading: "The 1-year masters trap",
        paragraphs: [
          "Most UK masters degrees are 12 months. That means by the time you graduate in September, you have 24 months of Graduate Route — and 12 of those months will be spent applying, interviewing, and waiting for visa sponsorship to clear.",
          "The students who convert successfully start their job hunt in January of their masters year — before submitting their dissertation. The students who don't, wait until September. By December they're panicking. By March they're packing.",
        ],
      },
      {
        heading: "Should you still go?",
        paragraphs: [
          "Yes, if you've picked a Shortage-list course in a major city and you understand that the Graduate Route is a runway, not a destination. No, if you're going for the experience and hoping it 'works out' — that's an expensive way to come home.",
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
    author: "Chiamaka Nwosu",
    authorRole: "Founder, Feja Global",
    cover:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=70",
    lede:
      "There are exactly six scholarships every Nigerian masters or PhD candidate should have on a shortlist. Not 60. Not 'apply to everything.' Six. Each rewards a different profile, and applying to all six without understanding which one fits you is the fastest way to write six mediocre essays.",
    keyTakeaways: [
      "Chevening rewards leadership track record, not academic excellence.",
      "Vanier requires a supervisor — secure them first, application second.",
      "Mastercard Foundation has the largest cohort and the longest runway.",
    ],
    body: [
      {
        paragraphs: [
          "A short note before we begin. The scholarships below are 'fully funded' — meaning tuition, stipend, travel and (mostly) family support are covered. Stipend amounts are 2026 figures and assume the GBP/CAD/USD rate as of this writing.",
        ],
      },
      {
        heading: "Chevening (UK, masters, opens August)",
        paragraphs: [
          "Best fit: working professionals with 2+ years experience and a clear leadership track record. Wins on the leadership essay, not on grades. We've sent students with 2.2 degrees through this scholarship — and turned away first-class graduates with thin work histories.",
          "Stipend: tuition + monthly living allowance (~£1,500), return flights, arrival allowance. Bond: 2 years back in Nigeria after the programme. Application opens early August, closes early November.",
        ],
        bullets: [
          "Leadership essay (500 words) — show one decision, one trade-off, one outcome.",
          "Networking essay — name real people you'll engage with at the UK university.",
          "Studying essay — three named courses, one named professor, one named module.",
          "Career plan essay — what the next two years in Nigeria look like, specifically.",
        ],
      },
      {
        heading: "Commonwealth Scholarship (UK, masters/PhD, opens September)",
        paragraphs: [
          "Best fit: candidates from low-income backgrounds in development-related fields — public health, climate, governance, education. A strong development impact statement is the difference between the shortlist and the silent rejection.",
          "Stipend: tuition + monthly living allowance + thesis grant + family allowance for dependents. Open to PhDs (rare for a fully-funded UK scholarship). Application closes mid-October.",
        ],
      },
      {
        heading: "Vanier (Canada, PhD only, opens June)",
        paragraphs: [
          "Best fit: research excellence + a Canadian supervisor who has already agreed to nominate you. Get the supervisor first, then apply. Without a nominating university, your application is not even reviewed.",
          "Stipend: CAD $50,000 per year for three years. Highly prestigious — Vanier on a CV opens doors at every Canadian research institution. Closing date varies by university (most close internally in late October).",
        ],
        callout: {
          quote:
            "Vanier is won in March, not in October. Spend the spring emailing supervisors with a real research proposal — not a cover letter.",
        },
      },
      {
        heading: "Trudeau Foundation (Canada, PhD, opens November)",
        paragraphs: [
          "Best fit: humanities and social science PhDs with a public engagement angle. The Trudeau is unusual — it values not just research, but the candidate's willingness to engage with policy and public life. Nigerian winners in the last three years have all had op-ed or community organising history.",
          "Stipend: CAD $40,000 per year + research/travel allowance + 'leadership programme' events.",
        ],
      },
      {
        heading: "Rhodes (Oxford, opens June)",
        paragraphs: [
          "Best fit: under-25 candidates, exceptional all-rounders — academic excellence AND athletic or extracurricular distinction AND character. Rhodes is the hardest of the six. Nigeria has a dedicated constituency with ~3 scholars selected each year.",
          "Stipend: full Oxford tuition + £18,180 living allowance + flights. Two-year commitment.",
        ],
      },
      {
        heading: "Mastercard Foundation (multiple, opens varies)",
        paragraphs: [
          "Best fit: undergraduate and masters candidates across partner universities (University of Toronto, McGill, UBC, Edinburgh, Sciences Po, AUC and others). Largest cohort of the six — Mastercard funds hundreds per year, not handfuls.",
          "Stipend: tuition + accommodation + stipend + flights + leadership programme. Bond: return to Africa for a period after graduation. Application portal per partner university, generally opens September.",
        ],
      },
      {
        heading: "How to actually approach a shortlist",
        paragraphs: [
          "Pick two scholarships — one stretch, one realistic — and spend 80% of your effort on the application. The single biggest pattern we see in winning applications is depth over breadth: a candidate who applied to two and won one beats a candidate who applied to nine and won none every time.",
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
    author: "Adaeze Okeke",
    authorRole: "Senior Advisor, UK Team",
    cover:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=70",
    lede:
      "Admissions officers read 200 SOPs a day. Yours has 90 seconds. The structure below has produced 47 offers from top-30 universities in the last two intakes — and it works because it forces you to be specific in the places most applicants are vague.",
    keyTakeaways: [
      "Open with one concrete moment, not a childhood memory.",
      "Three pieces of evidence with measurable outcomes — not adjectives.",
      "If you can't name two professors, you're applying to the wrong school.",
    ],
    body: [
      {
        paragraphs: [
          "Most SOPs fail in the first paragraph. The writer opens with 'From a young age…' or 'Ever since I can remember…' and the reader, whose coffee is already cold, mentally checks out. The structure below fixes this by forcing the first sentence to do real work.",
        ],
      },
      {
        heading: "Paragraph 1 — A specific moment",
        paragraphs: [
          "Open with one concrete moment that committed you to this field. Not a childhood memory. A recent, professional or academic moment with a date, a place, and an outcome. 120 words.",
          "Example: 'In March 2024, during a clinical rotation at Lagos University Teaching Hospital, I watched a 14-year-old patient with sickle cell anaemia wait four hours for a haematologist. That hour I spent looking at the empty corridor convinced me that public health systems engineering, not just clinical medicine, is where I want to work.' That's specific. That's a real human voice. That gets read.",
        ],
      },
      {
        heading: "Paragraph 2 — What you've done since",
        paragraphs: [
          "Three concrete pieces of evidence that you've pursued this commitment: a project, a paper, a job. Each with measurable outcomes. 200 words. The word 'measurable' is the keyword here — 'I learned a lot' is not measurable; '4 papers, 1 conference talk, 12-person team' is measurable.",
        ],
        bullets: [
          "What did you do (one sentence per item).",
          "What was the result, in a number.",
          "What did you learn that changed how you approach this field.",
        ],
      },
      {
        heading: "Paragraph 3 — Why this exact program",
        paragraphs: [
          "Two named professors, one named lab or course, and one specific career outcome. If you can't fill this paragraph with specifics, you're applying to the wrong school — go read the department page properly before you submit.",
          "A test: if your 'Why this program' paragraph reads as if it could be sent to three different universities by changing the name at the top, it will be rejected by all three. Admissions officers can tell.",
        ],
        callout: {
          quote:
            "The SOP is not a personal essay. It's a research proposal disguised as a letter.",
          attribution: "Adaeze Okeke, Senior Advisor",
        },
      },
      {
        heading: "Common mistakes we see every cycle",
        paragraphs: [
          "These five mistakes show up in roughly 80% of SOPs we review on the first read. They are all fixable in one editing pass.",
        ],
        bullets: [
          "Quoting Nelson Mandela. Don't.",
          "Saying 'this prestigious university'. They know they're prestigious.",
          "A 'family inspired me' paragraph. Cut it.",
          "More than two adjectives in any sentence. Cut one.",
          "Listing skills with no evidence. Show, don't claim.",
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
    author: "Tolu Adesanya",
    authorRole: "Visa Specialist",
    cover:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=70",
    lede:
      "The single biggest cause of refusal across Canadian, UK and US student visas is poorly assembled financial documentation. Not insufficient funds — poorly assembled funds. The money is usually there. The story the money tells is the problem.",
    keyTakeaways: [
      "Officers check three things: today, six-month history, liquidity.",
      "Funds that appeared 11 days ago will be refused — every time.",
      "GIC is the cleanest path for Canada. Use it.",
    ],
    body: [
      {
        paragraphs: [
          "Across the three corridors we work in — Canada, UK, and the US (which we don't actively place into anymore but still advise on) — proof of funds is the single most consequential section of the file. Yet it's also the section that students and parents spend the least time preparing.",
        ],
      },
      {
        heading: "What officers actually check",
        paragraphs: [
          "They check three things in this order: (1) is the money there today, (2) where did it come from in the last six months, (3) is it liquid and accessible from the destination country.",
          "A balance of ₦80 million that appeared 11 days ago will be refused. ₦45 million sitting steadily for 8 months will be approved. The amount is not the story — the steadiness is the story.",
        ],
        callout: {
          quote:
            "Officers are not detectives looking for fraud. They're tired humans looking for a coherent story. Tell one.",
        },
      },
      {
        heading: "GIC (Canada): the cleanest line on a file",
        paragraphs: [
          "A GIC (Guaranteed Investment Certificate) of CAD $20,635 with a Canadian bank is the closest thing to an automatic approval for the financial portion of a Canadian study permit. Five Canadian banks issue GICs to international students — RBC, Scotiabank, CIBC, BMO and ICICI Canada.",
          "Choose the bank by reputation for fast issuance, not by branding. We've seen students wait 8 weeks for a GIC certificate from one bank, and 9 days from another — same product, different operational capability. Ask before you wire.",
        ],
      },
      {
        heading: "Sponsor letters (Nigeria → UK or Canada)",
        paragraphs: [
          "Only credible from a parent with verifiable income. Notarise everything. The sponsor letter must explicitly accept financial responsibility, list the source of income, and be backed by 6 months of statements that show the income arriving regularly.",
          "Two patterns we see fail every time: (1) an 'uncle abroad' as sponsor — almost always refused, no matter how legitimate; (2) a parent whose stated income is ₦600k/month but whose statements show ₦4 million arriving in lumps from unnamed sources. Officers can't process inconsistency.",
        ],
      },
      {
        heading: "Form A (Nigeria FX trail)",
        paragraphs: [
          "When you've converted Naira into USD/GBP/CAD via the Form A process, always include the full Form A trail with the application. Officers at the Lagos visa office specifically look for it — its absence is a red flag, its presence is a green light.",
          "If your bank issued the Form A more than 12 months ago, request a re-issuance with the original reference — don't just submit the old one. Stale Form As trigger 'verify funds' queries that delay decisions by 6–10 weeks.",
        ],
      },
      {
        heading: "What we do for our students",
        paragraphs: [
          "Six months before submission, we audit the family financial picture: source of funds, account history, sponsor income, FX trail. Most files we audit need 2–3 months of remedial work before they're ready to submit — fixing gaps, getting statements re-issued, notarising sponsor declarations.",
          "It is rarely fun. It is always faster than recovering from a refusal.",
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
    author: "Chiamaka Nwosu",
    authorRole: "Founder, Feja Global",
    cover:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=70",
    lede:
      "Land. Breathe. Then run this checklist in order. Skip steps and you'll spend month two fixing what month one broke. We've shepherded 500+ students through their landing and the order below is the one that consistently produces a calm first semester.",
    keyTakeaways: [
      "Get a Canadian SIM in your first 24 hours — your Nigerian line will fail you.",
      "Apply for SIN in person at Service Canada — 20 minutes, not online.",
      "Find your community within 30 days. Loneliness ends careers.",
    ],
    body: [
      {
        paragraphs: [
          "A note before the list. The 30 days below assume you've landed with somewhere to sleep for at least the first week. If you don't — fix that first. Couch-surfing through your first month is the fastest way to fall behind on everything else on this list.",
        ],
      },
      {
        heading: "Days 1–3 — the immediate essentials",
        paragraphs: [
          "Get a Canadian SIM in your first 24 hours. Public Mobile and Freedom Mobile have the friendliest plans for new students — avoid the Big Three (Rogers, Bell, Telus) for now; their plans are designed for credit-checked Canadians and you don't have credit history yet.",
          "Activate the newcomer bank account you (hopefully) pre-opened from Nigeria — RBC's Newcomer Package and Scotia's StartRight are the two we recommend. If you didn't pre-open, walk into the nearest branch with your study permit, passport and proof of address.",
        ],
        bullets: [
          "Canadian SIM card.",
          "Activate newcomer bank account.",
          "Buy a transit pass for your first month.",
          "Find the closest grocery store and pharmacy.",
        ],
      },
      {
        heading: "Days 4–10 — the bureaucracy week",
        paragraphs: [
          "Apply for your SIN (Social Insurance Number) at the nearest Service Canada — go in person, takes 20 minutes, walk out with the number. You cannot legally work without it. Don't try to apply online from outside Canada — it doesn't work for study permit holders.",
          "Open a real chequing account (different from the newcomer account, which is often a holding account). Get a tenant insurance policy before you sign any lease — most landlords now require it and the policy costs about CAD $15/month.",
        ],
      },
      {
        heading: "Days 11–30 — building a life",
        paragraphs: [
          "Find your Nigerian community: church, NSA chapter on campus, or the Nigerian-Canadian association in your city. Loneliness is the single biggest reason students drop out in year one. Don't try to do it alone.",
          "Register with a family doctor — most provinces have a 4–8 week wait, so register in week three. Set up direct deposit for any part-time job income. Buy a winter jacket if you arrived for September intake — temperatures drop faster than you think and the Naira-to-CAD rate makes a January coat purchase painful.",
        ],
        callout: {
          quote:
            "The student who finds their community in the first month finishes the year. The one who doesn't, often doesn't.",
          attribution: "Chiamaka Nwosu, Founder",
        },
      },
      {
        heading: "A short note on homesickness",
        paragraphs: [
          "It will hit you around week 5 or 6, not week 1. The first week is adrenaline. The second is novelty. By the sixth, the novelty wears off and you'll miss your mother's cooking with a sharpness that surprises you. That is normal. Plan a video call for that week — don't let it ambush you.",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
