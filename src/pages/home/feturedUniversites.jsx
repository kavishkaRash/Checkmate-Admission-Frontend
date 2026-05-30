import React, { useEffect, useRef, useState } from "react";
import { HiMapPin, HiAcademicCap, HiCalendarDays, HiBolt, HiArrowRight } from "react-icons/hi2";

const universities = [
  {
    id: 1,
    name: "Incheon National University",
    shortName: "INU",
    location: "Incheon, South Korea",
    intakes: ["March", "September"],
    programs: ["Language Program", "Bachelor's Degree", "Master's Degree"],
    highlight: "Most Popular",
    students: "80+",
    desc: "One of Korea's most internationally active universities, offering world-class language and degree programs in Incheon Free Economic Zone.",
    ranking: "Top 10 National",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sungkyunkwan University",
    shortName: "SKKU",
    location: "Seoul, South Korea",
    intakes: ["March", "September"],
    programs: ["Language Program", "Bachelor's Degree"],
    highlight: "Prestigious",
    students: "60+",
    desc: "Founded in 1398, SKKU is one of Asia's oldest and most prestigious universities, located in the heart of Seoul.",
    ranking: "#1 Samsung Partner",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Woosong University",
    shortName: "WSU",
    location: "Daejeon, South Korea",
    intakes: ["March", "September"],
    programs: ["Language Program", "Bachelor's Degree", "Vocational"],
    highlight: "Visa Friendly",
    students: "70+",
    desc: "Highly international-friendly university in Daejeon with a strong track record of Sri Lankan student visa approvals.",
    ranking: "Best Visa Rate",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Konkuk University",
    shortName: "KKU",
    location: "Seoul, South Korea",
    intakes: ["March", "September"],
    programs: ["Language Program", "Bachelor's Degree"],
    highlight: "Seoul Campus",
    students: "40+",
    desc: "A dynamic research university in Seoul known for its vibrant campus life, strong engineering and business faculties.",
    ranking: "Top Seoul Uni",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
  },
];

// High-End Minimalist Korea Badge
const KoreaBadge = () => (
  <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-[#0d1b2a] text-[9px] font-black px-1.5 py-0.5 rounded-md flex-shrink-0">
    KR
  </span>
);

function UniCard({ uni, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`group relative bg-white border border-[#0d1b2a]/10 rounded-2xl overflow-hidden
        flex flex-col cursor-default select-none transition-all duration-700
        hover:-translate-y-2 hover:border-[#2563eb]/20 hover:shadow-[0_24px_50px_-20px_rgba(13,27,42,0.08)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: visible ? "0ms" : `${index * 120}ms` }}
    >
      {/* Brand Blue Top Indicator line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2563eb] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* CARD IMAGE AREA */}
      <div className="relative h-48 bg-[#0d1b2a]/10 overflow-hidden border-b border-[#0d1b2a]/5">
        <img
          src={uni.image}
          alt={uni.name}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/95 via-[#0d1b2a]/40 to-[#0d1b2a]/30 group-hover:via-[#0d1b2a]/50 transition-all duration-500" />

        {/* Glassmorphism Acronym Overlay */}
        <div className="absolute bottom-3 left-4 z-10">
          <span className="font-mono font-black text-2xl tracking-tighter text-white drop-shadow-md">
            {uni.shortName}
          </span>
        </div>

        {/* Dynamic Badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-md bg-white text-[#0d1b2a] border border-white/20 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse" />
          {uni.highlight.toUpperCase()}
        </div>

        {/* Students Count Badge */}
        <div className="absolute top-3 right-3 z-10 bg-black/30 text-white border border-white/10 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide backdrop-blur-md">
          {uni.students} Students
        </div>
      </div>

      {/* CARD BODY */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title Block */}
        <div className="mb-3.5">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className="font-black text-[15px] text-[#0d1b2a] leading-tight tracking-tight group-hover:text-[#2563eb] transition-colors duration-300">
              {uni.name}
            </h3>
            <KoreaBadge />
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#0d1b2a]/40 font-bold tracking-wide">
            <HiMapPin className="text-[#2563eb] text-xs flex-shrink-0" />
            <span className="truncate">{uni.location.toUpperCase()}</span>
            <span className="text-[#0d1b2a]/20">·</span>
            <span className="text-[#2563eb] font-extrabold flex-shrink-0">{uni.ranking}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[12.5px] text-[#0d1b2a]/60 leading-relaxed mb-4 flex-1 font-medium">
          {uni.desc}
        </p>

        {/* Intakes Section */}
        <div className="mb-4">
          <div className="text-[9px] font-black text-[#0d1b2a]/40 uppercase tracking-widest mb-2">Intakes</div>
          <div className="flex gap-2">
            {uni.intakes.map((intake) => (
              <span key={intake} className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#0d1b2a]/[0.02] border border-[#0d1b2a]/5 text-[#0d1b2a]/70">
                {intake}
              </span>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-6">
          <div className="text-[9px] font-black text-[#0d1b2a]/40 uppercase tracking-widest mb-2">Available Programs</div>
          <div className="flex flex-wrap gap-1.5">
            {uni.programs.map((prog) => (
              <span key={prog} className="text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#2563eb]/10 bg-[#2563eb]/[0.02] text-[#2563eb]">
                {prog}
              </span>
            ))}
          </div>
        </div>

        {/* Card Main Action CTA — Updated Arrow */}
        <button className="group/btn w-full text-[10px] font-black uppercase tracking-widest py-3 rounded-xl border border-[#0d1b2a]/10 text-[#0d1b2a]/60 transition-all duration-300 hover:border-[#2563eb] hover:bg-[#2563eb] hover:text-white hover:shadow-md hover:shadow-[#2563eb]/10 flex items-center justify-center gap-1.5">
          Learn More 
          <HiArrowRight className="text-xs transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export default function FeaturedUniversities() {
  return (
    <section className="bg-[#ffffff] text-[#0d1b2a] py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden border-t border-[#0d1b2a]/5">
      
      {/* Sync Micro Tech Grid Layout */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage: "linear-gradient(#0d1b2a 1px, transparent 1px), linear-gradient(90deg, #0d1b2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Visual Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#0d1b2a]/10 text-[#2563eb] text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl mb-6 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb]/40 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
              </span>
              Partner Universities
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#0d1b2a]">
              Top Korean universities <br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                we place you in.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end lg:pb-2">
            <p className="text-[#0d1b2a]/60 text-sm leading-relaxed max-w-sm font-medium lg:text-right">
              Direct partnerships with <span className="text-[#0d1b2a] font-bold">15+ Korean universities.</span> We match you with the best fit for your profile and goals.
            </p>
            <button className="group self-start lg:self-end inline-flex items-center gap-2 bg-[#0d1b2a] hover:bg-[#2563eb] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#2563eb]/10 hover:-translate-y-0.5">
              View All Universities
              <HiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ── UNIVERSITY CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {universities.map((uni, i) => (
            <UniCard key={uni.id} uni={uni} index={i} />
          ))}
        </div>

        {/* ── BOTTOM FEATURE STRIP — UPDATED WITH HEROICONS ── */}
        <div className="mt-14 bg-[#0d1b2a] rounded-2xl border border-white/[0.04] overflow-hidden
          grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] shadow-xl shadow-[#0d1b2a]/10">

          {/* Item 1: Programs */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <HiAcademicCap className="text-xl text-[#2563eb]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Programs Available</div>
              <div className="text-sm font-bold text-white">Language, Bachelor's, Master's</div>
            </div>
          </div>

          {/* Item 2: Intakes */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <HiCalendarDays className="text-xl text-[#2563eb]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Intake Periods</div>
              <div className="text-sm font-bold text-white">March & September annually</div>
            </div>
          </div>

          {/* Item 3: Timeline */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <HiBolt className="text-xl text-[#2563eb]" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Admission Timeline</div>
              <div className="text-sm font-bold text-white">As fast as 3–4 weeks</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}