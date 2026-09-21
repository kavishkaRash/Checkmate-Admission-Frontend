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


const LANGUAGE_REQS = [
  "Completed G.C.E. A/L or equivalent secondary education",
  "Valid passport (6+ months validity)",
  "Bank statement — min. LKR 1,000,000 (self or sponsor)",
];

const BACHELOR_REQS = [
  "Completed G.C.E. A/L (or equivalent) — min. 3 passes",
  "TOPIK Level 3+ (Korean-taught) or IELTS/TOEFL (English-taught)",
  "Bank statement — min. LKR 1,000,000 (self or sponsor)",
];

const MASTER_REQS = [
  "Bachelor's degree in a related field",
  "TOPIK Level 4+ (Korean-taught) or IELTS/TOEFL (English-taught)",
  "Statement of Purpose & 2 recommendation letters",
];

const PHD_REQS = [
  "Master's degree in a related field",
  "TOPIK Level 4+ (Korean-taught) or IELTS/TOEFL (English-taught)",
  "Research proposal & 2 recommendation letters",
];

const ASSOCIATE_REQS = [
  "Completed G.C.E. A/L (or equivalent)",
  "TOPIK Level 2+ or basic English proficiency",
  "Bank statement — min. LKR 1,000,000 (self or sponsor)",
];

// Helper builders so every program keeps a consistent shape
const langProgram = (title, overrides = {}) => ({
  title,
  duration: "10 weeks / term (min. 2 terms for D-4 visa)",
  intake: "March, June, September, December",
  fees: "KRW 1,600,000 – 1,900,000 / term",
  requirements: LANGUAGE_REQS,
  ...overrides,
});

const bachelorProgram = (title, overrides = {}) => ({
  title,
  duration: "4 years (8 semesters)",
  intake: "March, September",
  fees: "KRW 3,500,000 – 6,000,000 / semester",
  requirements: BACHELOR_REQS,
  ...overrides,
});

const masterProgram = (title, overrides = {}) => ({
  title,
  duration: "2 years (4 semesters)",
  intake: "March, September",
  fees: "KRW 4,000,000 – 7,000,000 / semester",
  requirements: MASTER_REQS,
  ...overrides,
});

const phdProgram = (title, overrides = {}) => ({
  title,
  duration: "3+ years",
  intake: "March, September",
  fees: "KRW 4,500,000 – 7,500,000 / semester",
  requirements: PHD_REQS,
  ...overrides,
});

const associateProgram = (title, overrides = {}) => ({
  title,
  duration: "2–3 years",
  intake: "March, September",
  fees: "KRW 2,500,000 – 4,000,000 / semester",
  requirements: ASSOCIATE_REQS,
  ...overrides,
});



export const universities = [
   {
    id: "ajou",
    name: "Ajou University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817391/Ajou_Uni_logo_jv8cp2.png",
    shortName: "Ajou",
    location: "Suwon",
    overview:
      "Ajou University is a research-focused national-affiliated university in Suwon, offering an unusually wide range of graduate specializations in international business, trade, and development studies.",
    categories: [
      { type: "Language Program", programs: [langProgram("Korean Language Program")] },
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("International Business"),
          bachelorProgram("International Trade Business"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("International Business"),
          masterProgram("International Trade"),
          masterProgram("AI & International Trade Business"),
          masterProgram("NGO Business Studies"),
          masterProgram("International Development & Cooperation"),
          masterProgram("International Civil Society Studies"),
        ],
      },
    ],
    features: [
      "Strong research-university reputation",
      "Wide range of international business & development Master's tracks",
      "Close to Seoul via Suwon transit links",
    ],
    students: "14,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Ajou_Uni_pw2pbo.jpg",
    bgGradient: "from-teal-600 to-cyan-500",
  },
  
  {
    id: "konkuk",
    name: "Konkuk University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817864/Konkuk_Logo_fzpfow-removebg-preview_gymw1c.png",
    shortName: "Konkuk",
    location: "Seoul (Gwangjin-gu)",
    overview:
      "Konkuk University is a top-10 private university in South Korea with a beautiful lake-centric Seoul campus. Its Korean Language Institute (est. 1998) is one of the most established in the country, and the university is known for strong English-taught undergraduate tracks and generous TOPIK-based scholarships.",
    categories: [
      {
        type: "Language Program",
        programs: [
          langProgram("Korean Language Program", {
            duration: "10 weeks / term (20–60 week tracks available)",
            fees: "KRW 1,700,000 – 1,800,000 / term",
          }),
          langProgram("English Academic Program (EAP)", {
            fees: "KRW 1,600,000 – 1,800,000 / term",
          }),
        ],
      },
    ],
    features: [
      "Beautiful large lake-centric campus",
      "Top 10 private university in South Korea",
      "TOPIK-based tuition waivers up to 60% for Korean Language Program graduates",
    ],
    students: "28,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789809036/KonKuk_Uni_smbr8u.jpg",
    bgGradient: "from-rose-600 to-orange-500",
  },

  {
    id: "inu",
    name: "Incheon National University (INU)",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817413/Incheo_logo_adrbwu.webp",
    shortName: "INU",
    location: "Incheon (Songdo International City)",
    overview:
      "Incheon National University is a state-run research university located in Songdo, offering a globally connected campus minutes from Incheon International Airport.",
    categories: [
      {
        type: "Language Program",
        programs: [langProgram("Korean Language Program", { fees: "KRW 1,800,000 / term" })],
      },
      {
        type: "Bachelor",
        programs: [bachelorProgram("International Business & Economy", { fees: "KRW 3,200,000 / semester" })],
      },
    ],
    features: [
      "State-of-the-art international campus",
      "Strategic location near Incheon Airport",
      "Ultra-modern learning & sports facilities",
    ],
    students: "18,000+ Students from 80+ countries",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Incheon_Uni_lmbew7.jpg",
    bgGradient: "from-blue-600 to-cyan-500",
  },

  {
    id: "skku",
    name: "Sungkyunkwan University (SKKU)",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817857/Sungkyunkwan_logo_wlrhzi-removebg-preview_bgaml3.png",
    shortName: "SKKU",
    location: "Seoul (Jongno-gu) + Suwon Campus",
    overview:
      "Founded in 1398, Sungkyunkwan University is one of Korea's oldest and most prestigious institutions, closely affiliated with Samsung Group and consistently ranked among the top 100 universities globally.",
    categories: [
      {
        type: "Language Program",
        programs: [langProgram("Korean Language Program", { fees: "KRW 1,900,000 / term" })],
      },
      {
        type: "Bachelor's",
        programs: [bachelorProgram("Bachelor's Degree Programs", { fees: "KRW 4,500,000 / semester" })],
      },
      {
        type: "Master's",
        programs: [masterProgram("Master's Degree Programs", { fees: "KRW 5,200,000 / semester" })],
      },
      {
        type: "PhD Programs",
        programs: [phdProgram("Doctoral Degree Programs", { fees: "KRW 5,800,000 / semester" })],
      },
    ],
    features: [
      "Historically founded in 1398",
      "Deeply affiliated with Samsung Group",
      "Ranked in the Top 100 Global Universities",
    ],
    students: "33,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Sungkyunkwan_Uni_oppzih.jpg",
    bgGradient: "from-emerald-600 to-teal-500",
  },

  {
    id: "woosong",
    name: "Woosong University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817406/woosong_University_zixysi.png",
    shortName: "Woosong",
    location: "Daejeon",
    overview:
      "Woosong University is known for its highly international-friendly ecosystem, home to the prestigious SolBridge International School of Business and a consistently high visa approval rate for international students.",
    categories: [
      {
        type: "Language Program",
        programs: [langProgram("Korean Language Program", { fees: "KRW 1,600,000 / term" })],
      },
      {
        type: "Bachelor",
        programs: [bachelorProgram("Bachelor's Degree Programs", { fees: "KRW 3,000,000 / semester" })],
      },
      {
        type: "Vocational Training",
        programs: [associateProgram("Vocational Training Programs", { fees: "KRW 2,500,000 / semester" })],
      },
    ],
    features: [
      "Highly international-friendly ecosystem",
      "Consistently high visa approval rate",
      "Houses the prestigious SolBridge International School",
    ],
    students: "10,000+ Total Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Woosong_Uni_uirzdl.jpg",
    bgGradient: "from-indigo-600 to-purple-500",
  },
  {
    id: "gachon",
    name: "Gachon University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817862/gachon_uni_logo_n1uzgj-removebg-preview_nn3z57.png",
    shortName: "Gachon",
    location: "Seongnam / Incheon",
    overview:
      "Gachon University is a large private university spread across Seongnam and Incheon, well known for its medical, health-science and business programs and an actively growing international student body.",
    categories: [
      { type: "Bachelor", programs: [bachelorProgram("Global Business")] },
    ],
    features: [
      "Strong medical & health-sciences reputation",
      "Modern dual-campus facilities (Seongnam & Incheon)",
      "Growing international student community",
    ],
    students: "25,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807202/Gachon_Uni_yt7jvi.png",
    bgGradient: "from-blue-600 to-indigo-500",
  },

  {
    id: "namseoul",
    name: "Namseoul University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817418/Nameseoul_Uni_Logo_m8rrlc.png",
    shortName: "Namseoul",
    location: "Cheonan",
    overview:
      "Namseoul University offers a distinctive mix of business, healthcare, and rehabilitation-focused graduate programs, with a strong regional reputation in Cheonan.",
    categories: [
      { type: "Bachelor", programs: [bachelorProgram("International Business")] },
      {
        type: "Master",
        programs: [
          masterProgram("Hospitality Management"),
          masterProgram("Rehabilitation Exercise"),
          masterProgram("Global Addiction Rehabilitation"),
          masterProgram("Global Techno Entrepreneurship"),
          masterProgram("International Business"),
          masterProgram("Global Physiotherapy"),
          masterProgram("International Education"),
          masterProgram("Financial Management"),
        ],
      },
    ],
    features: [
      "Unique rehabilitation & health-science Master's tracks",
      "Strong regional campus community in Cheonan",
      "Diverse business & entrepreneurship programs",
    ],
    students: "12,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807205/Nam_Seoul_Uni_vnt0zu.jpg",
    bgGradient: "from-purple-600 to-pink-500",
  },
  {
    id: "samhyook",
    name: "Sahmyook University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817411/sahmyook_uni_logo_luy7ce.svg",
    shortName: "Sahmyook",
    location: "Seoul (Nowon-gu)",
    overview:
      "Sahmyook University is a Seoul-based institution with particular strength in pharmacy, theology, and applied science graduate and doctoral research programs.",
    categories: [
      { type: "Language Program", programs: [langProgram("Korean Language Program")] },
      {
        type: "Masters",
        programs: [
          masterProgram("Theology"),
          masterProgram("Pharmacy"),
          masterProgram("Convergence Science"),
          masterProgram("Addiction Science"),
          masterProgram("Environmental Horticulture"),
          masterProgram("Business Administration"),
        ],
      },
      {
        type: "PhD",
        programs: [
          phdProgram("Theology"),
          phdProgram("Pharmacy"),
          phdProgram("Convergence Science"),
          phdProgram("Addiction Science"),
          phdProgram("Environmental Horticulture"),
          phdProgram("Business Administration"),
        ],
      },
    ],
    features: [
      "Strong pharmacy & applied-science research programs",
      "Full Master's-to-PhD pathway in multiple fields",
      "Seoul campus with a close-knit academic community",
    ],
    students: "8,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807202/Sahmyook_Uni_ushlhi.jpg",
    bgGradient: "from-green-600 to-emerald-500",
  },

  {
    id: "woosang",
    name: "Woosong University (Global Management Campus)",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817406/woosong_University_zixysi.png",
    shortName: "WooSang",
    location: "Daejeon",
    overview:
      "Offering a modern spread of technology, hospitality, and creative-industry Bachelor's and Master's programs, with growing PhD-level offerings in global management.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("AI & Big Data"),
          bachelorProgram("Global Management"),
          bachelorProgram("Hotel Management"),
          bachelorProgram("K-Pop Arts Management"),
          bachelorProgram("Self Design"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("Data Analytics"),
          masterProgram("Financial Technology"),
          masterProgram("Management and Technology"),
          masterProgram("Marketing Analytics"),
          masterProgram("Technology Entrepreneurship & Innovation"),
        ],
      },
      { type: "PhD", programs: [phdProgram("Global Management")] },
    ],
    features: [
      "Modern tech & data-focused Bachelor's tracks",
      "K-Pop Arts Management — unique creative-industry program",
      "Full Bachelor's–Master's–PhD pathway in Global Management",
    ],
    students: "9,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Woosong_Uni_uirzdl.jpg",
    bgGradient: "from-orange-600 to-red-500",
  },

  {
    id: "dong-a",
    name: "Dong-a University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817860/Dong-a_Uni_zrrsle-removebg-preview_sumnc9.png",
    shortName: "Dong-a",
    location: "Busan",
    overview:
      "Dong-a University is one of Busan's major comprehensive universities, offering a broad Master's portfolio spanning engineering, humanities and tourism.",
    categories: [
      { type: "Bachelor", programs: [bachelorProgram("Integrated Business Management")] },
      {
        type: "Master",
        programs: [
          masterProgram("English Language & Literature"),
          masterProgram("Public Administration"),
          masterProgram("Tourism Management"),
          masterProgram("Mathematics"),
          masterProgram("Fashion & Textiles"),
          masterProgram("Food Biotechnology"),
          masterProgram("Architectural Engineering"),
          masterProgram("Construction Engineering"),
          masterProgram("Electronic Engineering"),
          masterProgram("Computer Engineering"),
          masterProgram("Physical Education"),
        ],
      },
    ],
    features: [
      "One of Busan's largest comprehensive universities",
      "Broad engineering & humanities Master's portfolio",
      "Strong regional industry connections in Busan",
    ],
    students: "18,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Dong-a_Uni_w6jubi.jpg",
    bgGradient: "from-sky-600 to-blue-500",
  },

  {
    id: "dong-eui",
    name: "Dong-Eui University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817399/dong-eui_logo_iu9i6m.webp",
    shortName: "Dong-Eui",
    location: "Busan",
    overview:
      "Dong-Eui University in Busan combines strong hospitality & tourism programs with growing software and AI engineering tracks at both Bachelor's and Master's level.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Business Administration"),
          bachelorProgram("International Tourism Management"),
          bachelorProgram("Hotel and Convention Management"),
          bachelorProgram("Food Service Management"),
          bachelorProgram("Computer Software & Engineering"),
          bachelorProgram("Applied Software Engineering"),
          bachelorProgram("Artificial Intelligence"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("Global Hospitality Management"),
          masterProgram("Software Artificial Intelligence"),
        ],
      },
    ],
    features: [
      "Strong hospitality & tourism management programs",
      "Growing AI & software engineering tracks",
      "Busan coastal campus location",
    ],
    students: "13,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Dong-eui_Uni_lp9xjm.jpg",
    bgGradient: "from-cyan-600 to-blue-500",
  },

  {
    id: "hoseo",
    name: "Hoseo University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817401/Hoseo_Uni_Logo_pfjxmc.svg",
    shortName: "Hoseo",
    location: "Asan / Cheonan",
    overview:
      "Hoseo University offers a focused Master's portfolio in economics, environmental technology, theology, and venture management, with a strong entrepreneurship track record.",
    categories: [
      {
        type: "Master",
        programs: [
          masterProgram("Economics"),
          masterProgram("Climate and Environmental Technology"),
          masterProgram("Theology"),
          masterProgram("Venture Management"),
        ],
      },
    ],
    features: [
      "Strong venture & entrepreneurship management track",
      "Focused, research-intensive graduate programs",
      "Campus locations in Asan and Cheonan",
    ],
    students: "10,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807202/Hosea_Uni_fwjozp.jpg",
    bgGradient: "from-lime-600 to-green-500",
  },

  {
    id: "anyang",
    name: "Anyang University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817392/Anyang_Uni_wmg9ao.svg",
    shortName: "Anyang",
    location: "Anyang",
    overview:
      "Anyang University offers a focused Master's in Global Business Management, with a compact, close-knit campus community near Seoul.",
    categories: [
      { type: "Master", programs: [masterProgram("Global Business Management")] },
    ],
    features: [
      "Close proximity to Seoul",
      "Small, focused graduate cohort",
      "Personalized academic support",
    ],
    students: "4,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Anyang_Uni_hok406.jpg",
    bgGradient: "from-amber-600 to-orange-500",
  },

  {
    id: "kyungsung",
    name: "Kyungsung University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817859/kyungsung_University_logo_dzqpd7-removebg-preview_ebvfet.png",
    shortName: "Kyungsung",
    location: "Busan",
    overview:
      "Kyungsung University offers a full suite of globally-oriented Bachelor's and Master's programs in Busan, spanning business, hospitality, Korean studies and engineering.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Global Business Administration"),
          bachelorProgram("Global Hospitality Management"),
          bachelorProgram("Global Korean Studies"),
          bachelorProgram("Global Mechanical Design Engineering"),
          bachelorProgram("Global IT Engineering"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("Global Business Administration"),
          masterProgram("Global Hospitality Management"),
          masterProgram("Korean Culture Education"),
          masterProgram("Global Mechanical Design Engineering"),
          masterProgram("Global IT Engineering"),
        ],
      },
    ],
    features: [
      "Full Bachelor's-to-Master's pathway in Global tracks",
      "Strong hospitality & Korean studies programs",
      "Busan campus with active international office",
    ],
    students: "15,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807202/kyungsung_Uni_lthldt.jpg",
    bgGradient: "from-fuchsia-600 to-pink-500",
  },

  {
    id: "bufs",
    name: "Busan University of Foreign Studies (BUFS)",
    logo:"https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817394/Busan-Woman_uni_logo_z5rdwv.svg",
    shortName: "BUFS",
    location: "Busan",
    overview:
      "BUFS specializes in language, global studies, and increasingly in AI convergence and electronics — combining Korea's foreign-studies tradition with modern tech tracks.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Electronic and AI Convergence"),
          bachelorProgram("Global Studies — Global Business Administration"),
          bachelorProgram("Global Studies — Global Technology"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("English Language and Literature"),
          masterProgram("AI Convergence"),
          masterProgram("Natural Agricultural Forest Therapy"),
        ],
      },
    ],
    features: [
      "Korea's foreign-studies tradition combined with modern tech tracks",
      "Unique Natural Agricultural Forest Therapy Master's program",
      "Busan coastal campus location",
    ],
    students: "9,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Busan_Uni_fwxyho.jpg",
    bgGradient: "from-violet-600 to-purple-500",
  },

  {
    id: "silla",
    name: "Silla University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817403/Silla_Uni_Logo_iqvrga.svg",
    shortName: "Silla",
    location: "Busan",
    overview:
      "Silla University in Busan offers a mix of culture, tourism, and engineering Bachelor's programs, alongside an evening Master's track in Marketing for working professionals.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("K-Culture"),
          bachelorProgram("Tourism Management"),
          bachelorProgram("Automotive & Mechanical Engineering"),
          bachelorProgram("Electrical Engineering"),
          bachelorProgram("Semiconductor Engineering"),
        ],
      },
      {
        type: "Master",
        programs: [masterProgram("Marketing (Evening Class)", { intake: "March, September (evening classes)" })],
      },
    ],
    features: [
      "K-Culture program for globally-minded creative students",
      "Strong semiconductor & electrical engineering tracks",
      "Evening Master's option for working professionals",
    ],
    students: "8,500+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Silla_Uni_e0spts.jpg",
    bgGradient: "from-red-600 to-rose-500",
  },
  {
    id: "ysu",
    name: "Youngsan University (YSU)",
    logo:"https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817409/Youngsan_Uni_logo_hhijzd.svg",
    shortName: "YSU",
    location: "Busan / Yangsan",
    overview:
      "Youngsan University spans two specialized campuses — hospitality/logistics on one, and computing/engineering on the other — with matching Bachelor's and Master's tracks.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Hotel and Tourism"),
          bachelorProgram("Logistics Management"),
          bachelorProgram("Computer"),
          bachelorProgram("Mechanical and Automotive Engineering"),
          bachelorProgram("Electrical Engineering"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("Hotel and Tourism"),
          masterProgram("Logistics Management"),
          masterProgram("Computer"),
          masterProgram("Mechanical and Automotive Engineering"),
          masterProgram("Electrical Engineering"),
        ],
      },
    ],
    features: [
      "Specialized dual-campus structure (Hospitality + Engineering)",
      "Full Bachelor's-to-Master's pathway across all majors",
      "Strong logistics & hospitality industry links",
    ],
    students: "7,500+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807201/Youngson_uni_pnfaf4.jpg",
    bgGradient: "from-yellow-600 to-amber-500",
  },

  {
    id: "tongmyung",
    name: "Tongmyong University",
    logo:"https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817858/Tongmyong_Logo_kfq3co-removebg-preview_pzfwep.png",
    shortName: "Tongmyong",
    location: "Busan",
    overview:
      "Tongmyong University offers a creative and tech-forward Bachelor's portfolio in Busan, spanning Korean studies, design management, engineering and cybersecurity.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Global Korean Studies"),
          bachelorProgram("Global Business"),
          bachelorProgram("Tech Management and Innovation"),
          bachelorProgram("Culture and Design Management"),
          bachelorProgram("Mechanical and Automotive Engineering"),
          bachelorProgram("AI & Computer Engineering"),
          bachelorProgram("Information System and Security"),
        ],
      },
    ],
    features: [
      "Creative + tech-forward Bachelor's portfolio",
      "Strong design & culture management programs",
      "Busan campus with modern engineering facilities",
    ],
    students: "6,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807203/Tongmyong_Uni_stbxft.jpg",
    bgGradient: "from-stone-600 to-neutral-500",
  },
  {
    id: "sejong",
    name: "Sejong University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817408/Sejong_University_logo_ukf7nb.svg",
    shortName: "Sejong",
    location: "Seoul (Gwangjin-gu)",
    overview:
      "Sejong University is a well-established private university in Seoul with roughly 1,700 international students, offering a wide range of English-taught Bachelor's and MBA-style Master's programs across business, media, computing and engineering.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("Global Leadership (International Affairs)"),
          bachelorProgram("Public Administration"),
          bachelorProgram("Media and Communication"),
          bachelorProgram("Business Administration"),
          bachelorProgram("Economics"),
          bachelorProgram("Hospitality and Tourism Management"),
          bachelorProgram("Computer Science and Engineering"),
          bachelorProgram("Creative Studies (Comics & Animation Technology)"),
          bachelorProgram("Music (Professional Music)"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("Big Data AI (BA MBA)"),
          masterProgram("Global Business (GB MBA)"),
          masterProgram("AI Finance (AI MBA)"),
          masterProgram("Sejong-Arizona State (SAS MBA)"),
          masterProgram("Public Administration (Public Policy)"),
          masterProgram("Hospitality and Tourism Management"),
          masterProgram("Computer Science and Engineering"),
          masterProgram("Architectural Engineering"),
          masterProgram("Architecture"),
          masterProgram("Environment and Energy"),
          masterProgram("Software"),
          masterProgram("Artificial Intelligence and Data Science"),
        ],
      },
    ],
    features: [
      "1,700+ international students on a central Seoul campus",
      "Wide range of specialized MBA tracks (AI Finance, Big Data, Global Business)",
      "TOPIK & English-proficiency based scholarships up to 100%",
    ],
    students: "16,000+ Undergraduate Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808629/Sejong_Uni_amqj62.jpg",
    bgGradient: "from-blue-700 to-indigo-600",
  },

  {
    id: "hufs",
    name: "Hankuk University of Foreign Studies",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817402/Hankuk_Uni_Logo_ru0u8k.png",
    shortName: "HUFS",
    location: "Seoul (Dongdaemun-gu) + Global Campus (Yongin)",
    overview:
      "HUFS is Korea's leading foreign-language and international-studies institution, with campuses in Seoul and Yongin. International Studies majors must reach TOPIK Level 3, and the university runs a dedicated one-year Intensive Korean Language Program for incoming students who need it.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("International Studies", {
            requirements: [
              "Completed G.C.E. A/L (or equivalent) — min. 3 passes",
              "TOPIK Level 3 required by graduation (Intensive Korean Program available)",
              "TOEFL iBT 80+ / IELTS 5.5+ if applicable",
            ],
          }),
          bachelorProgram("International Economics and Law"),
          bachelorProgram("English Linguistics and Language Technology"),
        ],
      },
    ],
    features: [
      "Korea's top foreign-language & international-studies university",
      "Dedicated 1-year Intensive Korean Language Program (300 hours) for new students",
      "Campuses in both Seoul and Yongin (Global Campus)",
    ],
    students: "20,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789807202/Hangkuk_uNI_ascvfq.jpg",
    bgGradient: "from-slate-600 to-gray-500",
  },
  
  {
    id: "chungbuk",
    name: "Chungbuk National University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817396/Chungbuk_University_logo_tvovti.png",
    shortName: "Chungbuk",
    location: "Cheongju",
    overview:
      "Chungbuk National University is a national university offering International Studies tracks focused on global education and convergence software, at both Bachelor's and Master's level.",
    categories: [
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("School of International Studies (Global Education)"),
          bachelorProgram("School of International Studies (Convergence Software)"),
        ],
      },
      {
        type: "Master",
        programs: [
          masterProgram("School of International Studies (Global Education)"),
          masterProgram("School of International Studies (Convergence Software)"),
        ],
      },
    ],
    features: [
      "National university — lower relative tuition",
      "Focused Global Education & Convergence Software tracks",
      "Full Bachelor's-to-Master's pathway",
    ],
    students: "22,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808630/Chungbuk_Uni_snxqoe.jpg",
    bgGradient: "from-red-700 to-orange-600",
  },

  {
    id: "ulsan-college",
    name: "University College of Ulsan",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817863/Ulsan_Logo_rzixi3-removebg-preview_oz0xbe.png",
    shortName: "Ulsan College",
    location: "Ulsan",
    overview:
      "University College of Ulsan offers practical, career-focused Associate Degree tracks in tourism/hospitality and computer science/IT, ideal for students seeking a faster pathway into the workforce.",
    categories: [
      {
        type: "Associate Degree",
        programs: [
          associateProgram("School of International Studies (Tourism & Hospitality)"),
          associateProgram("School of International Studies (Computer Science and IT)"),
        ],
      },
    ],
    features: [
      "Fast-track 2–3 year Associate Degree pathway",
      "Practical, career-focused curriculum",
      "Lower overall tuition compared to 4-year universities",
    ],
    students: "5,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808628/Ulsan_Uni_zpuxfl.webp",
    bgGradient: "from-teal-700 to-cyan-600",
  },

  {
    id: "busan-womens",
    name: "Busan Women's College",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817394/Busan-Woman_uni_logo_z5rdwv.svg",
    shortName: "Busan Women's",
    location: "Busan",
    overview:
      "Busan Women's College offers a focused Associate Degree in Convergence Studies, combining practical skills training with a supportive, close-knit campus environment.",
    categories: [
      { type: "Associate Degree", programs: [associateProgram("Convergence Studies")] },
    ],
    features: [
      "Fast-track 2–3 year Associate Degree pathway",
      "Small, supportive campus community",
      "Practical, skills-based curriculum",
    ],
    students: "3,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808629/Busan_Woman_Uni_rkubtx.jpg",
    bgGradient: "from-pink-700 to-rose-600",
  },

  {
    id: "seojeong",
    name: "Seojeong University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817407/seojeong_logo_xtci9h.webp",
    shortName: "Seojeong",
    location: "Yangju, Gyeonggi-do",
    overview:
      "Seojeong University offers career-focused Associate Degree programs in tourism, smart mobility, and medical coordination, preparing students for fast entry into specialized industries.",
    categories: [
      {
        type: "Associate Degree",
        programs: [
          associateProgram("Tourism Management"),
          associateProgram("Smart Mobility"),
          associateProgram("Medical Coordination"),
        ],
      },
    ],
    features: [
      "Fast-track 2–3 year Associate Degree pathway",
      "Unique Smart Mobility & Medical Coordination tracks",
      "Strong industry-placement focus",
    ],
    students: "4,500+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789811052/seojeong_uni_rus2fz.jpg",
    bgGradient: "from-emerald-700 to-green-600",
  },

  {
    id: "daekyeung",
    name: "Daekyeung University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817856/daekyung_uni_logo_r5fafs-removebg-preview_lqcrbu.png",
    shortName: "Daekyeung",
    location: "Gyeongsan, Gyeongsangbuk-do",
    overview:
      "Daekyeung University offers a specialized Associate Degree in Global Hotel Cruise studies, preparing students for careers in the international hospitality and cruise industries.",
    categories: [
      { type: "Associate Degree", programs: [associateProgram("Global Hotel Cruise")] },
    ],
    features: [
      "Specialized cruise & hospitality industry training",
      "Fast-track 2–3 year Associate Degree pathway",
      "Strong industry placement partnerships",
    ],
    students: "3,500+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808630/daekyeung_Uni_qz22aj.jpg",
    bgGradient: "from-indigo-700 to-blue-600",
  },

  {
    id: "sunmoon",
    name: "Sun Moon University",
    logo: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789817405/Sunmoon_Logo_yjirz1.svg",
    shortName: "Sun Moon",
    location: "Asan",
    overview:
      "Sun Moon University offers one of the widest graduate research portfolios in this list, spanning engineering, biomedical science, AI, and public policy, alongside a solid Korean Language Program and Bachelor's tracks.",
    categories: [
      { type: "Language Program", programs: [langProgram("Korean Language Program")] },
      {
        type: "Bachelor",
        programs: [
          bachelorProgram("International Business and Trade"),
          bachelorProgram("Computer Science and Engineering"),
        ],
      },
      {
        type: "Masters",
        programs: [
          masterProgram("Mechanical Engineering"),
          masterProgram("Mobility Semiconductor Engineering"),
          masterProgram("Life Science and Biochemical Engineering"),
          masterProgram("Advanced Material Engineering"),
          masterProgram("Electronics Engineering"),
          masterProgram("Environmental and Bio-Chemical Engineering"),
          masterProgram("Artificial Intelligence and Mobility Engineering"),
          masterProgram("AI Biomedical Engineering"),
          masterProgram("Culture and Tourism"),
          masterProgram("Global Economics"),
          masterProgram("Public Administration"),
          masterProgram("TESOL"),
          masterProgram("Physics and Nano Science"),
          masterProgram("Applied Biological Science"),
        ],
      },
    ],
    features: [
      "One of the widest engineering & biomedical research portfolios",
      "Full Language Program → Bachelor's → Master's pathway",
      "Strong semiconductor & mobility engineering research focus",
    ],
    students: "11,000+ Active Students",
    image: "https://res.cloudinary.com/ddrbcubf8/image/upload/v1789808630/sun_moon_Uni_h6sooq.jpg",
    bgGradient: "from-orange-700 to-amber-600",
  },
];