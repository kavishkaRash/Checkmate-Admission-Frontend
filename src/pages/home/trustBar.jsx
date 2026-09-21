import React from "react";
import { universities } from "../../data/koreaData";

function getGradientColors(bgGradient) {
  const colorMap = {
    rose: "#e11d48", orange: "#f97316", blue: "#2563eb", cyan: "#0891b2",
    emerald: "#059669", teal: "#0d9488", indigo: "#4f46e5", purple: "#9333ea",
    pink: "#db2777", green: "#16a34a", red: "#dc2626", amber: "#d97706",
    fuchsia: "#c026d3", violet: "#7c3aed", yellow: "#ca8a04", stone: "#57534e",
    slate: "#475569", lime: "#65a30d", sky: "#0284c7", gray: "#4b5563", neutral: "#525252",
  };
  const parts = bgGradient.match(/from-(\w+)-\d+ to-(\w+)-\d+/);
  const from = colorMap[parts?.[1]] || "#2563eb";
  const to = colorMap[parts?.[2]] || "#1d4ed8";
  return { from, to };
}

function UniIcon({ uni }) {
  const { from, to } = getGradientColors(uni.bgGradient);
  const gradId = `grad-${uni.id}`;

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        d="M50,12 L82,26 L82,52 C82,72 68,86 50,92 C32,86 18,72 18,52 L18,26 Z"
        fill="none" stroke={`url(#${gradId})`} strokeWidth="4" strokeLinejoin="round"
      />
      <path
        d="M32,42 Q50,34 68,42 L68,60 Q50,52 32,60 Z"
        fill="none" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinejoin="round"
      />
      <path d="M50,36 L50,58" stroke={`url(#${gradId})`} strokeWidth="2.5" />
      <circle cx="50" cy="24" r="3.5" fill={to} />
    </svg>
  );
}

// 🔑 Meka thamai key part eka — uni.logo thibunoth image ekk pennanwa,
// nathnam styled SVG icon ekaට fallback wenawa
function UniBadge({ uni }) {
  return (
    <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center group-hover/item:bg-blue-50/40 group-hover/item:border-blue-100 group-hover/item:scale-105 transition-all duration-300 overflow-hidden">
      {uni.logo ? (
        <img src={uni.logo} alt={`${uni.name} logo`} className="w-full h-full object-contain" />
      ) : (
        <UniIcon uni={uni} />
      )}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="bg-[#f8fafc] py-16 border-b border-slate-200/50 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col items-center mb-12">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
            Academic Network
          </span>
          <p className="text-center text-xs sm:text-sm font-bold tracking-wide text-slate-400 uppercase">
            Direct Student Placements at 26+ South Korean Universities
          </p>
        </div>

        <div className="absolute left-0 bottom-0 top-0 w-24 md:w-48 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 bottom-0 top-0 w-24 md:w-48 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex w-full overflow-hidden relative">

          <div className="flex flex-nowrap shrink-0 items-center gap-8 animate-scroll hover:[animation-play-state:paused] pr-8">
            {universities.map((uni, index) => (
              <div
                key={`uni-set1-${uni.id}-${index}`}
                className="flex items-center space-x-5 bg-white border border-slate-200/60 hover:border-blue-300/80 px-7 py-4.5 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-600/[0.04] cursor-pointer group/item hover:-translate-y-1"
              >
                <UniBadge uni={uni} />
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black tracking-wider text-slate-800 group-hover/item:text-blue-600 transition-colors uppercase">
                    {uni.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 mt-0.5 max-w-[160px] truncate group-hover/item:text-slate-500 transition-colors">
                    {uni.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-nowrap shrink-0 items-center gap-8 animate-scroll hover:[animation-play-state:paused] pr-8"
            aria-hidden="true"
          >
            {universities.map((uni, index) => (
              <div
                key={`uni-set2-${uni.id}-${index}`}
                className="flex items-center space-x-5 bg-white border border-slate-200/60 hover:border-blue-300/80 px-7 py-4.5 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-600/[0.04] cursor-pointer group/item hover:-translate-y-1"
              >
                <UniBadge uni={uni} />
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black tracking-wider text-slate-800 group-hover/item:text-blue-600 transition-colors uppercase">
                    {uni.shortName}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 mt-0.5 max-w-[160px] truncate group-hover/item:text-slate-500 transition-colors">
                    {uni.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}