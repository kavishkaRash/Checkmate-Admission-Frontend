import React from 'react';

const universities = [
  { 
    name: 'Seoul National University', 
    short: 'SNU', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="46" r="26" className="stroke-blue-600" strokeWidth="3" />
        <path d="M38,40 L45,55 L50,45 L55,55 L62,40" className="stroke-indigo-600" />
        <path d="M50,20 L50,32 M50,60 L50,72" className="stroke-blue-500" />
        <path d="M22,50 C18,65 32,78 50,78 C68,78 82,65 78,50" className="stroke-slate-400" />
        <path d="M15,42 Q25,30 35,32 M85,42 Q75,30 65,32" className="stroke-slate-400" />
      </svg>
    )
  },
  { 
    name: 'KAIST', 
    short: 'KAIST', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="3">
        <rect x="24" y="24" width="52" height="52" rx="14" className="stroke-cyan-600" />
        <path d="M40,38 L40,62 M40,50 L52,38 M40,50 L52,62" className="stroke-blue-600" strokeWidth="4" />
        <circle cx="62" cy="50" r="7" className="fill-blue-600 stroke-none" />
      </svg>
    )
  },
  { 
    name: 'Yonsei University', 
    short: 'YONSEI', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="32" className="stroke-blue-800" strokeWidth="3.5" />
        <polygon points="50,28 72,66 28,66" className="stroke-indigo-600" />
        <path d="M42,54 L58,54 M45,59 L55,59" className="stroke-slate-400" />
        <circle cx="50" cy="44" r="4" className="fill-blue-600 stroke-none" />
      </svg>
    )
  },
  { 
    name: 'Korea University', 
    short: 'KOREA', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <path d="M26,24 L74,24 L70,60 C70,74 50,82 50,82 C50,82 30,74 30,60 Z" className="stroke-red-700" strokeWidth="3.5" />
        <path d="M42,42 Q50,34 58,42 Q50,48 42,42 Z" className="fill-red-600 stroke-none" />
        <path d="M38,56 Q50,64 62,56" className="stroke-red-600" strokeWidth="3" />
        <path d="M45,48 L45,52 M55,48 L55,52" className="stroke-slate-900" />
      </svg>
    )
  },
  { 
    name: 'Sungkyunkwan University', 
    short: 'SKKU', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="34" className="stroke-emerald-600" strokeWidth="3" />
        <path d="M50,24 C38,35 32,55 50,72 C68,55 62,35 50,24 Z" className="stroke-emerald-700" />
        <path d="M50,42 L50,72" className="stroke-emerald-500" />
        <circle cx="50" cy="36" r="4" className="fill-emerald-600 stroke-none" />
      </svg>
    )
  },
  { 
    name: 'Hanyang University', 
    short: 'HANYANG', 
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="32" className="stroke-sky-600" strokeWidth="3" />
        <path d="M36,44 Q44,32 54,40 T72,42" className="stroke-sky-700" strokeWidth="3" />
        <path d="M40,58 Q50,66 64,54" className="stroke-indigo-600" />
        <path d="M42,48 C46,54 54,54 58,48" className="stroke-slate-400" />
      </svg>
    )
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f8fafc] py-16 border-b border-slate-200/50 overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-12">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
            Academic Network
          </span>
          <p className="text-center text-xs sm:text-sm font-bold tracking-wide text-slate-400 uppercase">
            Direct Student Placements at South Korea's Elite Institutions
          </p>
        </div>

        {/* Shadow Faders */}
        <div className="absolute left-0 bottom-0 top-0 w-24 md:w-48 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 bottom-0 top-0 w-24 md:w-48 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />

        {/* 🔄 Infinite Continuous Slider Wrapper */}
        <div className="flex w-full overflow-hidden relative">
          
          {/* Loop එක ගැස්සෙන්නේ නැතුව දිගටම වමට යන්න flex-nowrap සහ pr-8 දැම්මා */}
          <div className="flex flex-nowrap shrink-0 items-center gap-8 animate-scroll hover:[animation-play-state:paused] pr-8">
            {universities.map((uni, index) => (
              <div 
                key={`uni-set1-${index}`} 
                className="flex items-center space-x-5 bg-white border border-slate-200/60 hover:border-blue-300/80 px-7 py-4.5 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-600/[0.04] cursor-pointer group/item hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center group-hover/item:bg-blue-50/40 group-hover/item:border-blue-100 group-hover/item:scale-105 transition-all duration-300">
                  {uni.svg}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black tracking-wider text-slate-800 group-hover/item:text-blue-600 transition-colors uppercase">
                    {uni.short}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 mt-0.5 max-w-[160px] truncate group-hover/item:text-slate-500 transition-colors">
                    {uni.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated set for seamless animation */}
          <div className="flex flex-nowrap shrink-0 items-center gap-8 animate-scroll hover:[animation-play-state:paused] pr-8" aria-hidden="true">
            {universities.map((uni, index) => (
              <div 
                key={`uni-set2-${index}`} 
                className="flex items-center space-x-5 bg-white border border-slate-200/60 hover:border-blue-300/80 px-7 py-4.5 rounded-2xl transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-blue-600/[0.04] cursor-pointer group/item hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center group-hover/item:bg-blue-50/40 group-hover/item:border-blue-100 group-hover/item:scale-105 transition-all duration-300">
                  {uni.svg}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-sm font-black tracking-wider text-slate-800 group-hover/item:text-blue-600 transition-colors uppercase">
                    {uni.short}
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