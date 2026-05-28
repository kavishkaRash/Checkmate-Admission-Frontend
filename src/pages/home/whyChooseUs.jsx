import React, { useEffect, useRef, useState } from "react";

const reasons = [
  {
    id: "01",
    title: "98% Visa Success Rate",
    desc: "Sri Lanka's highest visa approval rate. Our profile-matching process ensures your application is bulletproof before it reaches the embassy.",
    stat: "300+ approvals",
    statLabel: "and counting",
    iconType: "chart",
    color: "cyan",
  },
  {
    id: "02",
    title: "Direct University Access",
    desc: "No middlemen. We work directly with 15+ elite Korean universities — admission letters faster, smoother, guaranteed.",
    stat: "15+ unis",
    statLabel: "direct partners",
    iconType: "handshake",
    color: "teal",
  },
  {
    id: "03",
    title: "Zero Hidden Fees",
    desc: "What we quote is what you pay. Full transparency on tuition, visa fees, and university charges — from day one.",
    stat: "100%",
    statLabel: "transparent pricing",
    iconType: "diamond",
    color: "sky",
  },
  {
    id: "04",
    title: "Interview & Doc Prep",
    desc: "Mock embassy interviews, document reviews, and expert coaching — so you walk into that interview confident and prepared.",
    stat: "Expert",
    statLabel: "guided preparation",
    iconType: "target",
    color: "blue",
  },
];

// Reusable Clean Vector Components Matching Card Theme
const CardIcon = ({ type }) => {
  const baseClass = "w-full h-full stroke-current fill-none";
  switch (type) {
    case 'chart':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12A10 10 0 1 1 12 2" className="text-slate-800 group-hover:text-cyan-950/20 transition-colors" strokeWidth="1.5" />
          <path d="M22 2 12 12H2" className="text-cyan-400" />
          <path d="M16 2h6v6" className="text-cyan-300" />
          <circle cx="12" cy="12" r="3" className="fill-cyan-400/20 stroke-cyan-400" />
        </svg>
      );
    case 'handshake':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="text-slate-800 group-hover:text-teal-950/20 transition-colors" />
          <circle cx="9" cy="7" r="4" className="text-teal-400" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" className="text-teal-500" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" className="text-teal-300" />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12l4 6-10 12L2 9z" className="text-sky-400" />
          <path d="M11 3 8 9l4 12 4-12-3-6" className="text-sky-300" />
          <path d="M2 9h20" className="text-sky-200/40" strokeWidth="1" />
        </svg>
      );
    case 'target':
      return (
        <svg viewBox="0 0 24 24" className={baseClass} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" className="text-slate-800 group-hover:text-blue-950/20 transition-colors" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" className="text-blue-500" />
          <circle cx="12" cy="12" r="2" className="fill-blue-400 stroke-none" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" className="text-blue-300" />
        </svg>
      );
    default:
      return null;
  }
};

const glowMap = {
  cyan: "group-hover:shadow-cyan-500/[0.03] group-hover:border-cyan-500/30",
  teal: "group-hover:shadow-teal-500/[0.03] group-hover:border-teal-500/30",
  sky: "group-hover:shadow-sky-500/[0.03] group-hover:border-sky-500/30",
  blue: "group-hover:shadow-blue-500/[0.03] group-hover:border-blue-500/30",
};

const iconGlowMap = {
  cyan: "group-hover:border-cyan-500/30 group-hover:bg-cyan-950/30 group-hover:shadow-cyan-500/[0.05]",
  teal: "group-hover:border-teal-500/30 group-hover:bg-teal-950/30 group-hover:shadow-teal-500/[0.05]",
  sky: "group-hover:border-sky-500/30 group-hover:bg-sky-950/30 group-hover:shadow-sky-500/[0.05]",
  blue: "group-hover:border-blue-500/30 group-hover:bg-blue-950/30 group-hover:shadow-blue-500/[0.05]",
};

const barMap = {
  cyan: "from-cyan-500 via-teal-400 to-cyan-300",
  teal: "from-teal-500 via-cyan-400 to-teal-300",
  sky: "from-sky-500 via-cyan-400 to-sky-300",
  blue: "from-blue-500 via-cyan-400 to-blue-300",
};

const statColorMap = {
  cyan: "text-cyan-400",
  teal: "text-teal-400",
  sky: "text-sky-400",
  blue: "text-blue-400",
};

const cornerOrbMap = {
  cyan: "group-hover:bg-cyan-500/[0.06]",
  teal: "group-hover:bg-teal-500/[0.06]",
  sky: "group-hover:bg-sky-500/[0.06]",
  blue: "group-hover:bg-blue-500/[0.06]",
};

const textHoverMap = {
  cyan: "group-hover:text-cyan-400",
  teal: "group-hover:text-teal-400",
  sky: "group-hover:text-sky-400",
  blue: "group-hover:text-blue-400",
};

function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const num = parseInt(target.replace(/\D/g, "")) || 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, statLabel, color, animate }) {
  const num = parseInt(stat.replace(/\D/g, "")) || 0;
  const suffix = stat.replace(/[0-9]/g, "");
  const count = useCounter(stat, 1200, animate);
  const colorClass = statColorMap[color];

  return (
    <div className="mt-6 pt-5 border-t border-slate-800/60">
      <div className={`text-2xl font-black ${colorClass} tracking-tight leading-none`}>
        {num > 0 ? `${count}${suffix}` : stat}
      </div>
      <div className="text-[11px] text-slate-500 mt-1.5 font-semibold uppercase tracking-wider">{statLabel}</div>
    </div>
  );
}

function Card({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            setTimeout(() => setAnimate(true), 300);
          }, index * 120);
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
      className={`group relative bg-gradient-to-b from-[#16223f]/40 to-[#0f172a]/90 border border-slate-800/80 rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-default
        transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl
        ${glowMap[item.color]}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: visible ? "0ms" : `${index * 120}ms` }}
    >
      {/* Dynamic Corner Orb */}
      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-transparent rounded-full blur-2xl transition-all duration-700 pointer-events-none ${cornerOrbMap[item.color]}`} />

      <div>
        <div className="flex items-center justify-between mb-7">
          {/* Theme-based Reusable Icon Container */}
          <div className={`w-12 h-12 bg-[#111c30] border border-slate-800/80 rounded-xl flex items-center justify-center p-3 text-slate-400
            group-hover:scale-105 transition-all duration-500 shadow-inner ${iconGlowMap[item.color]}`}>
            <CardIcon type={item.iconType} />
          </div>
          <span className="text-xs font-black tracking-widest text-slate-700 group-hover:text-slate-500 transition-colors duration-500 font-mono">
            {item.id}
          </span>
        </div>

        <h3 className={`text-[17px] font-extrabold text-slate-100 mb-3 tracking-tight leading-snug transition-colors duration-500 ${textHoverMap[item.color]}`}>
          {item.title}
        </h3>

        <p className="text-[12.5px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-300/90 transition-colors duration-300">
          {item.desc}
        </p>
      </div>

      <StatCard stat={item.stat} statLabel={item.statLabel} color={item.color} animate={animate} />

      <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${barMap[item.color]} group-hover:w-full transition-all duration-700 rounded-full`} />
      <div className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 pointer-events-none`} />
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b1120] text-white py-28 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">

      {/* Ambient background orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-xl mb-5 backdrop-blur-md shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Why Choose Checkmate
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] mb-5">
            The Smartest Way to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Study in Korea
            </span>
          </h2>

          <p className="text-slate-400 text-[13.5px] leading-relaxed max-w-xl mx-auto font-medium">
            Hundreds of Sri Lankan students trusted Checkmate to get them to Korea.
            Here's exactly why — and why you should too.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => (
            <Card key={item.id} item={item} index={parseInt(item.id) - 1} />
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-xs tracking-wide font-medium">
            Trusted by{" "}
            <span className="text-cyan-400 font-bold">300+ Sri Lankan students</span>
            {" "}who are now studying in South Korea 🇰🇷
          </p>
        </div>

      </div>
    </section>
  );
}