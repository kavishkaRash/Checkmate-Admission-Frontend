import React, { useEffect, useRef, useState } from "react";

// ── STUDENT REVIEWS DATA DATASET ───────────────────────────────────────────
const reviews = [
    {
        id: 1,
        name: "Ravindu Senevirathna",
        initials: "RS",
        university: "Incheon National University",
        program: "Language Program",
        year: "2025",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "Checkmate handled absolutely everything. My visa was approved in just 3 weeks — I couldn't believe how smooth the process was. Highly recommend!",
        color: "blue",
        location: "Incheon",
    },
    {
        id: 2,
        name: "Nethmi Perera",
        initials: "NP",
        university: "Sungkyunkwan University",
        program: "Language Program",
        year: "2025",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "I had no idea where to start with the Korea visa process. The team at Checkmate guided me step by step — from documents to departure. Amazing!",
        color: "indigo",
        location: "Seoul",
    },
    {
        id: 3,
        name: "Dinusha Kumara",
        initials: "DK",
        university: "Woosong University",
        program: "Bachelor's Degree",
        year: "2024",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "Best decision I made. Checkmate's support didn't stop after I landed — they're still helping me settle in Korea. Truly beyond expectations!",
        color: "green",
        location: "Daejeon",
    },
    {
        id: 4,
        name: "Kavindi Silva",
        initials: "KS",
        university: "Konkuk University",
        program: "Language Program",
        year: "2025",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "From my very first consultation to arriving in Seoul, everything was perfectly organized. Checkmate made my dream of studying in Korea a reality.",
        color: "purple",
        location: "Seoul",
    },
    {
        id: 5,
        name: "Tharindu Wickrama",
        initials: "TW",
        university: "Incheon National University",
        program: "Bachelor's Degree",
        year: "2024",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "The mock embassy interview training was a game changer. I walked in so confident. Got my visa approved first try — thank you Checkmate!",
        color: "blue",
        location: "Incheon",
    },
    {
        id: 6,
        name: "Sachini Fernando",
        initials: "SF",
        university: "Sungkyunkwan University",
        program: "Language Program",
        year: "2025",
        rating: 5,
        youtubeId: "dQw4w9WgXcQ",
        quote: "Zero hidden fees, zero surprises. What they quoted is exactly what I paid. Transparent, honest, and incredibly helpful throughout the entire process.",
        color: "indigo",
        location: "Seoul",
    },
];

// ── BRAND-SYNCED COLOR MAP (Matched to Hero Elements) ───────────────────
const colorMap = {
    blue: {
        avatar: "bg-blue-50 text-blue-600 border-blue-100",
        badge: "bg-white/90 text-blue-600 border-slate-200",
        bar: "from-blue-600 to-indigo-600",
        ring: "ring-blue-100",
    },
    indigo: {
        avatar: "bg-indigo-50 text-indigo-600 border-indigo-100",
        badge: "bg-white/90 text-indigo-600 border-slate-200",
        bar: "from-indigo-600 to-purple-600",
        ring: "ring-indigo-100",
    },
    green: {
        avatar: "bg-emerald-50 text-emerald-600 border-emerald-100",
        badge: "bg-white/90 text-emerald-600 border-slate-200",
        bar: "from-emerald-500 to-teal-500",
        ring: "ring-emerald-100",
    },
    purple: {
        avatar: "bg-purple-50 text-purple-600 border-purple-100",
        badge: "bg-white/90 text-purple-600 border-slate-200",
        bar: "from-purple-600 to-pink-500",
        ring: "ring-purple-100",
    },
};

// ── REVIEW CARD COMPONENT ──────────────────────────────────────────────────
function ReviewCard({ review, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [playing, setPlaying] = useState(false);
    const s = colorMap[review.color] || colorMap.blue;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), index * 100);
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
            className={`group relative flex flex-col overflow-hidden rounded-2xl cursor-default select-none h-full
                bg-white border border-slate-200 transition-all duration-700 hover:-translate-y-2 
                hover:shadow-2xl hover:shadow-[#0f172a]/5
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            style={{ transitionDelay: visible ? "0ms" : `${index * 100}ms` }}
        >
            {/* Top accent bar — slides in on hover */}
            <div className={`h-[3px] w-full bg-gradient-to-r ${s.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

            {/* ── VIDEO AREA ── */}
            <div className="relative h-48 bg-[#0f172a] overflow-hidden">
                {playing ? (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${review.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`${review.name} review`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <img
                            src={`https://img.youtube.com/vi/${review.youtubeId}/hqdefault.jpg`}
                            alt={review.name}
                            className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />

                        <button
                            onClick={() => setPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center z-10 focus:outline-none"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center
                                shadow-2xl shadow-[#0f172a]/40 transition-all duration-300 ring-4 ring-white/20
                                group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white text-[#0f172a]">
                                <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </button>

                        <div className={`absolute bottom-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-xl border backdrop-blur-sm shadow-sm ${s.badge}`}>
                            {review.university.split(" ").slice(0, 2).join(" ")}
                        </div>

                        <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded flex items-center gap-1 shadow-md">
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
                            </svg>
                            YouTube
                        </div>
                    </>
                )}
            </div>

            {/* ── CARD BODY ── */}
            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                    <span className="text-slate-400 text-[10px] ml-1.5 font-bold">5.0</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium mb-4 italic">
                    "{review.quote}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-black flex-shrink-0 ${s.avatar}`}>
                            {review.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-black text-[13px] text-[#0f172a] leading-tight">{review.name}</div>
                            <div className="text-xs text-slate-400 font-medium truncate mt-0.5">
                                {review.program} · {review.year}
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 flex-shrink-0 bg-slate-50 px-2 py-1 rounded-md border border-slate-200 font-semibold">
                            <span>📍</span>
                            <span>{review.location || "Seoul"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── ANIMATED COUNTER COMPONENT ─────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1500 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const windowObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let startTime = null;
                const step = (ts) => {
                    if (!startTime) startTime = ts;
                    const progress = Math.min((ts - startTime) / duration, 1);
                    setCount(Math.floor(progress * target));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        if (ref.current) windowObserver.observe(ref.current);
        return () => windowObserver.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

// ── MAIN EXPORT FUNCTION ───────────────────────────────────────────────────
export default function StudentReviews() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredReviews = reviews.filter(review =>
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.program.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="bg-[#f8fafc] text-[#0f172a] py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans">

            {/* Pattern Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

            {/* Radial glow subtle ambience placement */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ── ALIGNED MODERN HEADER WITH SEARCH & UNIVERSITY BRANDING LOGOS ── */}
                <div className="border-b border-slate-200 pb-10 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">

                        {/* Title Block */}
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2.5 bg-white/90 border border-slate-200 text-blue-600 text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl mb-4 shadow-sm backdrop-blur-sm">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                                </span>
                                Student Success Stories
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#0f172a]">
                                Real students. <br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Real results.
                                </span>
                            </h2>
                        </div>

                        {/* Functional Search Control Block */}
                        <div className="lg:col-span-3 w-full">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search by university or degree..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full text-xs pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-[#0f172a] placeholder-slate-400 transition-all shadow-sm font-medium"
                                />
                            </div>
                        </div>

                        {/* Clean Partner Network Logos Integration */}
                        <div className="lg:col-span-4 w-full flex flex-col sm:items-start lg:items-end space-y-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Partner Networks
                            </span>
                            <div className="flex flex-wrap gap-4 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
                                <div className="flex items-center gap-1.5 font-black tracking-tight text-xs text-[#0f172a]">
                                    <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white">INU</div>
                                    <span>Incheon</span>
                                </div>
                                <div className="flex items-center gap-1.5 font-black tracking-tight text-xs text-[#0f172a]">
                                    <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center text-[9px] font-bold text-white">SKK</div>
                                    <span>SKKU</span>
                                </div>
                                <div className="flex items-center gap-1.5 font-black tracking-tight text-xs text-[#0f172a]">
                                    <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-bold text-white">WS</div>
                                    <span>Woosong</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── STATS ROW ── */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                    {[
                        { value: 300, suffix: "+", label: "Students Placed", color: "text-[#0f172a]" },
                        { value: 98, suffix: "%", label: "Visa Success Rate", color: "text-blue-600" },
                        { value: 15, suffix: "+", label: "Partner Universities", color: "text-[#0f172a]" },
                        { value: 99, suffix: "+", label: "Five-Star Reviews", color: "text-blue-600" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-center hover:shadow-md transition-all duration-300">
                            <div className={`text-xl sm:text-3xl font-black tracking-tight ${stat.color}`}>
                                <Counter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-[9px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ── PREMIUM SCROLLABLE REVIEWS ROW (3 CARDS PER VIEW ON LG DESKTOP) ── */}
                {filteredReviews.length > 0 ? (
                    <div className="relative w-full">
                        <div className="flex gap-6 md:gap-8 lg:gap-10 overflow-x-auto pt-2 pb-8 px-2 snap-x snap-mandatory scroll-smooth
                            scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300 hover:scrollbar-thumb-blue-500">
                            {filteredReviews.map((review, i) => (
                                <div 
                                    key={review.id} 
                                    className="w-[290px] sm:w-[340px] md:w-[380px] lg:w-[calc(33.333%-24px)] flex-shrink-0 snap-start"
                                >
                                    <ReviewCard review={review} index={i} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12 text-sm font-semibold text-slate-400 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        No matching success stories found.
                    </div>
                )}

            </div>
        </section>
    );
}