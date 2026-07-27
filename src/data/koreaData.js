export const documents = [
  { iconId: "passport", title: "Valid Passport", desc: "Original passport with at least 6 months validity remaining from date of entry." },
  { iconId: "photo", title: "Passport Photos", desc: "2 recent colour photos (3.5cm × 4.5cm, white background, taken within 6 months)." },
  { iconId: "form", title: "Visa Application Form", desc: "Completed Korean visa application form (available from the Korean Embassy)." },
  { iconId: "university", title: "University Admission Letter", desc: "Official Letter of Admission from your Korean university (issued directly by the institution)." },
  { iconId: "academic", title: "Academic Transcripts", desc: "Certified copies of A/L or Degree results. Must be notarized and translated if not in English." },
  { iconId: "bank", title: "Bank Statement", desc: "Minimum LKR 1,000,000 balance (or equivalent). 3-month statement with bank letterhead." },
  { iconId: "sponsor", title: "Financial Sponsorship Letter", desc: "Signed letter from sponsor (parent/guardian) confirming financial support for your studies." },
  { iconId: "accommodation", title: "Accommodation Proof", desc: "Dormitory booking confirmation or rental agreement from your accommodation in Korea." },
  { iconId: "flight", title: "Flight Itinerary", desc: "Confirmed round-trip flight booking (need not be purchased — itinerary is sufficient)." },
  { iconId: "medical", title: "Medical Certificate", desc: "Health certificate from a registered medical officer confirming fitness for travel." },
  { iconId: "income", title: "Income Proof", desc: "Employment letter, business registration, or land/property documents proving income source." },
  { iconId: "plan", title: "Study Plan / Purpose Letter", desc: "Personal statement explaining your reason for studying Korean and your goals in Korea." },
];

export const requirements = [
  { iconId: "academic", title: "Minimum Education", desc: "Completed G.C.E. Advanced Level (A/L) or equivalent qualification." },
  { iconId: "age", title: "Age Requirement", desc: "Must be 18 years or older at time of visa application." },
  { iconId: "bank", title: "Financial Capacity", desc: "Minimum LKR 1,000,000 in bank savings (you or your sponsor)." },
  { iconId: "university", title: "University Admission", desc: "Must hold a valid admission letter from a registered Korean university." },
  { iconId: "medical", title: "Health Status", desc: "Must pass a basic medical examination — no serious communicable diseases." },
  { iconId: "clean", title: "No Criminal Record", desc: "Clean criminal background check from Sri Lanka Police required." },
];

export const processSteps = [
  { num: "01", iconId: "consultation", title: "Free Consultation", desc: "Meet our visa experts — online or in person. We evaluate your profile, recommend a university, and create your personalised application roadmap.", duration: "1–2 days", tag: "No commitment" },
  { num: "02", iconId: "university", title: "University Application", desc: "We apply directly to your chosen Korean university on your behalf. Once accepted, you'll receive an official Letter of Admission.", duration: "1–3 weeks", tag: "We handle it" },
  { num: "03", iconId: "document", title: "Document Preparation", desc: "We review, prepare, and verify all required visa documents — bank statements, transcripts, sponsorship letters, accommodation proof, and more.", duration: "1–2 weeks", tag: "Expert reviewed" },
  { num: "04", iconId: "embassy", title: "Embassy Submission", desc: "Your complete visa file is submitted to the Korean Embassy in Colombo. We track your application and keep you updated at every stage.", duration: "2–4 weeks", tag: "98% approval" },
  { num: "05", iconId: "coaching", title: "Interview Coaching", desc: "If an embassy interview is required, we conduct mock interviews and brief you on exactly what to expect — so you walk in confident.", duration: "1–2 sessions", tag: "Expert coaching" },
  { num: "06", iconId: "flight", title: "Pre-Departure & Fly", desc: "Visa approved! We arrange accommodation, airport pickup, SIM card, and a full pre-departure briefing so you land in Korea stress-free.", duration: "Departure day", tag: "Full support" },
];

export const faqs = [
  { q: "What is a D-4 visa and who is it for?", a: "The D-4 visa (General Training Visa) is issued to foreign students enrolling in Korean language programs at universities and language institutes. It is the most common visa for Sri Lankan students studying in Korea for the first time." },
  { q: "How long does the D-4 visa process take?", a: "The full process typically takes 6–8 weeks from the initial consultation to visa approval. The Korean Embassy processing time alone is 2–4 weeks. Checkmate manages the entire process to avoid delays." },
  { q: "How much money do I need to show in my bank account?", a: "The Korean Embassy generally requires a minimum of LKR 1,000,000 (approximately USD 3,000) in your or your sponsor's bank account. The funds must be maintained for at least 3 months prior to application." },
  { q: "Can my parents sponsor my visa application?", a: "Yes. If you are financially dependent, your parents or guardians can act as your sponsor. You will need a signed financial sponsorship letter along with their bank statements and proof of income." },
  { q: "Do I need to know Korean before applying?", a: "No. The D-4 Language Program visa is specifically designed for students who want to learn Korean. You do not need prior Korean language knowledge — that's exactly what you'll be studying." },
  { q: "What is Checkmate's visa approval rate?", a: "Checkmate maintains a 98% visa approval rate. Our high success rate is a direct result of meticulous document preparation, profile matching, and our experienced team's thorough application review process." },
  { q: "What happens if my visa is rejected?", a: "In the unlikely event of a rejection, our team immediately identifies the reason and assists you in reapplying with the corrected documentation. We do not abandon our students." },
  { q: "Are there any hidden fees?", a: "Absolutely not. Checkmate operates on a 100% transparent pricing model. Every fee — consultancy, university application, visa handling — is quoted upfront before you sign anything." },
];

export const universities = [
  {
    id: "inu",
    name: "Incheon National University (INU)",
    shortName: "INU",
    location: "Incheon (Songdo International City)",
    overview: "Incheon National University is a state-run research university located in Songdo, offering a globally connected campus minutes from Incheon International Airport.",
    categories: [
      {
        type: "Language Program",
        programs: [
          {
            title: "Korean Language Program",
            duration: "6 months – 1 year",
            intake: "March, June, September, December",
            fees: "USD 1,800 / term",
            requirements: [
              "Completed A/L or equivalent",
              "Valid passport (6+ months)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Bachelor",
        programs: [
          {
            title: "International Business & Economy",
            duration: "4 years",
            intake: "March, September",
            fees: "USD 3,200 / semester",
            requirements: [
              "TOPIK Level 3 or Korean Language Program completion",
              "A/L results (3 passes)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
    ],
    features: [
      "State-of-the-art international campus",
      "Strategic location near Incheon Airport",
      "Ultra-modern learning & sports facilities",
    ],
    students: "18,000+ Students from 80+ countries",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "skku",
    name: "Sungkyunkwan University (SKKU)",
    shortName: "SKKU",
    location: "Seoul (Jongno-gu) + Suwon Campus",
    overview: "Founded in 1398, Sungkyunkwan University is one of Korea's oldest and most prestigious institutions, closely affiliated with Samsung Group and consistently ranked among the top 100 universities globally.",
    categories: [
      {
        type: "Language Program",
        programs: [
          {
            title: "Korean Language Program",
            duration: "10 weeks per term",
            intake: "March, June, September, December",
            fees: "USD 1,900 / term",
            requirements: [
              "Completed A/L or equivalent",
              "Valid passport (6+ months)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Bachelor's",
        programs: [
          {
            title: "Bachelor's Degree Programs",
            duration: "4 years",
            intake: "March, September",
            fees: "USD 4,500 / semester",
            requirements: [
              "TOPIK Level 3+ or English proficiency (for English-taught tracks)",
              "A/L results (3 passes)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Master's",
        programs: [
          {
            title: "Master's Degree Programs",
            duration: "2 years",
            intake: "March, September",
            fees: "USD 5,200 / semester",
            requirements: [
              "Bachelor's degree in a related field",
              "TOPIK Level 4+ or English proficiency",
              "Statement of purpose & recommendation letters",
            ],
          },
        ],
      },
      {
        type: "PhD Programs",
        programs: [
          {
            title: "Doctoral Degree Programs",
            duration: "3+ years",
            intake: "March, September",
            fees: "USD 5,800 / semester",
            requirements: [
              "Master's degree in a related field",
              "TOPIK Level 4+ or English proficiency",
              "Research proposal & recommendation letters",
            ],
          },
        ],
      },
    ],
    features: [
      "Historically founded in 1398",
      "Deeply affiliated with Samsung Group",
      "Ranked in the Top 100 Global Universities",
    ],
    students: "33,000+ Active Students",
    image: "https://images.unsplash.com/photo-1607237138185-eedd996259d9?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-emerald-600 to-teal-500",
  },
  {
    id: "woosong",
    name: "Woosong University",
    shortName: "Woosong",
    location: "Daejeon",
    overview: "Woosong University is known for its highly international-friendly ecosystem, home to the prestigious SolBridge International School of Business and a consistently high visa approval rate for international students.",
    categories: [
      {
        type: "Language Program",
        programs: [
          {
            title: "Korean Language Program",
            duration: "6 months – 1 year",
            intake: "March, June, September, December",
            fees: "USD 1,600 / term",
            requirements: [
              "Completed A/L or equivalent",
              "Valid passport (6+ months)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Bachelor",
        programs: [
          {
            title: "Bachelor's Degree Programs",
            duration: "4 years",
            intake: "March, September",
            fees: "USD 3,000 / semester",
            requirements: [
              "TOPIK Level 3 or Korean Language Program completion",
              "A/L results (3 passes)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Vocational Training",
        programs: [
          {
            title: "Vocational Training Programs",
            duration: "2 years",
            intake: "March, September",
            fees: "USD 2,500 / semester",
            requirements: [
              "Completed A/L or equivalent",
              "Basic Korean or English proficiency",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
    ],
    features: [
      "Highly international-friendly ecosystem",
      "Consistently high visa approval rate",
      "Houses the prestigious SolBridge International School",
    ],
    students: "10,000+ Total Students",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-indigo-600 to-purple-500",
  },
  {
    id: "konkuk",
    name: "Konkuk University",
    shortName: "Konkuk",
    location: "Seoul (Gwangjin-gu)",
    overview: "Konkuk University offers a beautiful lake-centric campus in the heart of Seoul, combined with a strong global research reputation and a vibrant, energetic student neighborhood.",
    categories: [
      {
        type: "Language Program",
        programs: [
          {
            title: "Korean Language Program",
            duration: "10 weeks per term",
            intake: "March, June, September, December",
            fees: "USD 1,700 / term",
            requirements: [
              "Completed A/L or equivalent",
              "Valid passport (6+ months)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Bachelor",
        programs: [
          {
            title: "Bachelor's Degree Programs",
            duration: "4 years",
            intake: "March, September",
            fees: "USD 3,800 / semester",
            requirements: [
              "TOPIK Level 3 or Korean Language Program completion",
              "A/L results (3 passes)",
              "Bank statement (LKR 1,000,000+)",
            ],
          },
        ],
      },
      {
        type: "Master's",
        programs: [
          {
            title: "Master's Degree Programs",
            duration: "2 years",
            intake: "March, September",
            fees: "USD 4,600 / semester",
            requirements: [
              "Bachelor's degree in a related field",
              "TOPIK Level 4+ or English proficiency",
              "Statement of purpose & recommendation letters",
            ],
          },
        ],
      },
    ],
    features: [
      "Beautiful large lake-centric campus",
      "Strong global research reputation",
      "Vibrant and energetic student neighborhood life",
    ],
    students: "28,000+ Active Students",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&q=80",
    bgGradient: "from-rose-600 to-orange-500",
  },
];