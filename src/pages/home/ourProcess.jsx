import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    subtitle: "Profile Evaluation",
    desc: "Meet our expert counselors — online or in Colombo. We assess your profile, recommend the best universities, and map out your entire Korea journey.",
    duration: "1–2 days",
    tag: "No commitment required",
    iconType: "consultation",
  },
  {
    num: "02",
    title: "Document Prep",
    subtitle: "University Selection",
    desc: "We select the perfect university match and prepare every document — transcripts, financial proofs, recommendation letters — reviewed by our experts.",
    duration: "1–2 weeks",
    tag: "We handle everything",
    iconType: "document",
  },
  {
    num: "03",
    title: "Visa Application",
    subtitle: "Embassy Submission",
    desc: "Your visa file is submitted with precision. We coach you for the embassy interview, track your application, and keep you updated every step.",
    duration: "2–4 weeks",
    tag: "98% approval rate",
    iconType: "visa",
  },
  {
    num: "04",
    title: "Fly to Korea!",
    subtitle: "Pre-Departure Briefing",
    desc: "Visa approved! We arrange your pre-departure briefing, accommodation in Korea, airport pickup, and SIM card — you just pack your bags and go.",
    duration: "Departure day",
    tag: "Full support on arrival",
    isLast: true,
    iconType: "fly",
  },
];

// High-End Outlined Vector Icons (Synced with Brand Colors)
const StepIcon = ({ type }) => {
  const baseClass = "w-6 h-6 stroke-[#2563eb] fill-none transition-transform duration-500 group-hover:scale-110";
  
  switch (type) {
    case 'consultation':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <path d="M12 11h.01M8 11h.01M16 11h.01" stroke="#0d1b2a" strokeWidth="2.5" />
        </svg>
      );
    case 'document':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" stroke="#0d1b2a" strokeWidth="1.5" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="#0d1b2a" strokeWidth="1.5" className="opacity-60" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="#0d1b2a" strokeWidth="1.5" className="opacity-60" />
        </svg>
      );
    case 'visa':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" stroke="#0d1b2a" strokeWidth="2" />
        </svg>
      );
    case 'fly':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5c.8-.8.8-2 0-2.8s-2-.8-2.8 0L13.2 8.2 5 6.4l-3 3 7 2.5-4 4-3-1-1 1 3 2 2 3 1-1-1-3 4-4 2.5 7z" />
        </svg>
      );
    default:
      return null;
  }
};

function StepCard({ step, index }) {
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
      className={`group relative flex flex-col h-full bg-white border border-[#0d1b2a]/10
        rounded-2xl p-6 overflow-hidden cursor-default select-none
        transition-all duration-700
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0d1b2a]/5 hover:border-[#2563eb]/30
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: visible ? "0ms" : `${index * 120}ms` }}
    >
      {/* Top blue accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />

      {/* Ghost step number */}
      <div className="absolute -top-2 -right-1 font-black text-[72px] leading-none select-none pointer-events-none text-[#0d1b2a]/[0.02] group-hover:text-[#2563eb]/[0.04] transition-colors duration-500 font-mono">
        {step.num}
      </div>

      {/* Premium SVG Icon Block */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5
        bg-[#0d1b2a]/[0.02] border border-[#0d1b2a]/5
        group-hover:bg-[#2563eb]/[0.06] group-hover:border-[#2563eb]/20 group-hover:scale-105
        transition-all duration-500 shadow-xs">
        <StepIcon type={step.iconType} />
      </div>

      {/* Step label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#2563eb]">
          Step {step.num}
        </span>
        <span className="text-[#0d1b2a]/20 text-[10px]">/</span>
        <span className="text-[#0d1b2a]/50 text-[10px] font-bold uppercase tracking-wider">{step.subtitle}</span>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-black text-[#0d1b2a] mb-3 tracking-tight leading-snug
        group-hover:text-[#2563eb] transition-colors duration-300">
        {step.title}
      </h3>

      {/* Desc */}
      <p className="text-[12.5px] text-[#0d1b2a]/60 leading-relaxed flex-1 font-medium
        group-hover:text-[#0d1b2a]/80 transition-colors duration-300">
        {step.desc}
      </p>

      {/* Card Footer */}
      <div className="mt-5 pt-4 border-t border-[#0d1b2a]/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {/* Custom Mini Clock SVG */}
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-[#0d1b2a]/40 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[#0d1b2a]/50 text-[11px] font-bold font-mono tracking-wide">{step.duration}</span>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg
          bg-[#2563eb]/[0.04] text-[#2563eb] border border-[#2563eb]/10
          group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-[#2563eb]
          transition-all duration-300">
          {step.tag}
        </span>
      </div>
    </div>
  );
}

export default function OurProcess() {
  const [lineWidth, setLineWidth] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLineWidth(100), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#ffffff] text-[#0d1b2a] py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden"
    >
      {/* Brand Radial Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
      />

      {/* Hero Sync Micro Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(#0d1b2a 1px, transparent 1px), linear-gradient(90deg, #0d1b2a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#0d1b2a]/10 text-[#2563eb] text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl mb-6 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb]/40 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
              </span>
              How It Works
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#0d1b2a]">
              Your Korea journey <br />
              <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
                in 4 clear steps.
              </span>
            </h2>
          </div>

          <p className="text-[#0d1b2a]/60 text-sm leading-relaxed max-w-sm font-medium lg:text-right lg:pb-2">
            We've simplified the entire visa and admission process so you can focus on one thing —{" "}
            <span className="text-[#0d1b2a] font-bold">getting excited about Korea.</span>
          </p>
        </div>

        {/* ── PROGRESS LINE (Desktop) ── */}
        <div className="hidden lg:block relative mb-12">
          <div className="h-px w-full bg-[#0d1b2a]/10 rounded-full" />
          <div
            className="absolute top-0 left-0 h-px transition-all duration-[2000ms] ease-out rounded-full"
            style={{
              width: `${lineWidth}%`,
              background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 flex">
            {[0, 33.33, 66.66, 100].map((pos, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div
                  className="w-2.5 h-2.5 rounded-full -translate-y-1/2 border-2 border-white transition-all duration-500"
                  style={{
                    transitionDelay: `${i * 350 + 300}ms`,
                    background: lineWidth > pos ? "#2563eb" : "#d1d5db",
                    boxShadow: lineWidth > pos ? "0 0 0 4px rgba(37,99,235,0.15)" : "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── STEP CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* ── BOTTOM FEATURE STRIP (All Vector Custom Icons) ── */}
        <div className="mt-14 bg-[#0d1b2a] rounded-2xl border border-white/[0.04] overflow-hidden
          grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] shadow-xl shadow-[#0d1b2a]/10">
          
          {/* Item 1: Processing Time */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2563eb] fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Average Processing</div>
              <div className="text-sm font-bold text-white">6–8 weeks total</div>
            </div>
          </div>

          {/* Item 2: Consultation */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2563eb] fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Free First Meeting</div>
              <div className="text-sm font-bold text-white">No commitment, no fees</div>
            </div>
          </div>

          {/* Item 3: Korea Intake */}
          <div className="p-6 flex items-center gap-4 hover:bg-white/[0.01] transition-colors duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2563eb] fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" stroke="#0d1b2a" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Next Korea Intake</div>
              <div className="text-sm font-bold text-white">March & September</div>
            </div>
          </div>

        </div>

        {/* ── CTA FOOTER ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#0d1b2a]/50 text-xs font-medium">
            Join <span className="text-[#0d1b2a] font-bold">300+ Sri Lankan students</span> already studying in Korea 🇰🇷
          </p>
          <Link to="/appointment" className="group inline-flex items-center gap-2 bg-[#0d1b2a] hover:bg-[#2563eb] text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#2563eb]/20 active:translate-y-0">
            Begin Free Evaluation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}