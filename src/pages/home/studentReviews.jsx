import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaYoutube, FaStar } from "react-icons/fa";
import { HiChatBubbleLeftRight, HiMagnifyingGlass, HiMapPin, HiPlay, HiStar } from "react-icons/hi2";
import { SiYoutube } from "react-icons/si";

const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
    );
    return match ? match[1] : null;
};

const colorMap = {
    blue: { avatar: "bg-blue-50 text-blue-600 border-blue-100", badge: "bg-white/90 text-blue-600 border-slate-200", bar: "from-blue-600 to-indigo-600" },
    indigo: { avatar: "bg-indigo-50 text-indigo-600 border-indigo-100", badge: "bg-white/90 text-indigo-600 border-slate-200", bar: "from-indigo-600 to-purple-600" },
    green: { avatar: "bg-emerald-50 text-emerald-600 border-emerald-100", badge: "bg-white/90 text-emerald-600 border-slate-200", bar: "from-emerald-500 to-teal-500" },
    purple: { avatar: "bg-purple-50 text-purple-600 border-purple-100", badge: "bg-white/90 text-purple-600 border-slate-200", bar: "from-purple-600 to-pink-500" },
};

function ReviewCard({ review, index }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [playing, setPlaying] = useState(false);
    const s = colorMap[review.color] || colorMap.blue;
    const ytId = getYouTubeId(review.youtubeUrl);

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
        bg-white border border-slate-200 transition-all duration-700
        hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f172a]/5
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
            style={{ transitionDelay: visible ? "0ms" : `${index * 100}ms` }}
        >
            <div className={`h-[3px] w-full bg-gradient-to-r ${s.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

            <div className="relative h-48 bg-[#0f172a] overflow-hidden">
                {playing ? (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                        title={`${review.name} review`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <>
                        {ytId ? (
                            <img
                                src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                                alt={review.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />

                        {/* Play button */}
                        <button
                            onClick={() => ytId && setPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center z-10 focus:outline-none"
                        >
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center
                shadow-2xl shadow-[#0f172a]/40 transition-all duration-300
                group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white text-[#0f172a]">
                                <HiPlay className="text-xl ml-0.5" />
                            </div>
                        </button>

                        <div className={`absolute bottom-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-xl border backdrop-blur-sm shadow-sm ${s.badge}`}>
                            {review.university?.split(" ").slice(0, 2).join(" ")}
                        </div>

                        <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded flex items-center gap-1 shadow-md uppercase tracking-wider">
                            <FaYoutube className="text-xs" />
                            YouTube
                        </div>
                    </>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">

                <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(review.rating || 5)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 text-xs" />
                    ))}
                    <span className="text-slate-400 text-[10px] ml-1.5 font-bold">{review.rating}.0</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium mb-4 italic">
                    "{review.quote}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-black flex-shrink-0 ${s.avatar}`}>
                            {review.initials || review.name?.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="font-black text-[13px] text-[#0f172a] leading-tight">{review.name}</div>
                            <div className="text-xs text-slate-400 font-medium truncate mt-0.5">
                                {review.program} · {review.year}
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 flex-shrink-0 bg-slate-50 px-2 py-1 rounded-md border border-slate-200 font-bold uppercase tracking-wider">
                            <HiMapPin className="text-blue-500 text-xs" />
                            <span>{review.location || "Seoul"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Counter({ target, suffix = "", duration = 1500 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
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
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function SkeletonCard() {
    return (
        <div className="w-[290px] sm:w-[340px] md:w-[380px] lg:w-[calc(33.333%-24px)] flex-shrink-0 rounded-2xl overflow-hidden border border-slate-200 bg-white animate-pulse">
            <div className="h-48 bg-slate-100" />
            <div className="p-5 space-y-3">
                <div className="h-3 bg-slate-100 rounded w-1/3" />
                <div className="h-3 bg-slate-100 rounded w-full" />
                <div className="h-3 bg-slate-100 rounded w-4/5" />
                <div className="h-3 bg-slate-100 rounded w-3/5" />
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-slate-100" />
                    <div className="space-y-1.5 flex-1">
                        <div className="h-3 bg-slate-100 rounded w-2/3" />
                        <div className="h-2 bg-slate-100 rounded w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function StudentReviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    import.meta.env.VITE_API_URL + "/api/reviews"
                );
                setReviews(res.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    const filtered = reviews.filter((r) =>
        r.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.university?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.program?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="reviews" className="bg-[#f8fafc] text-[#0f172a] py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 70%)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="border-b border-slate-200 pb-10 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

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

                        <div className="lg:col-span-3 w-full">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <HiMagnifyingGlass className="h-4 w-4 text-slate-400" />
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

                        <div className="lg:col-span-4 flex flex-col lg:items-end gap-2.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Partner Networks</span>
                            <div className="flex flex-wrap gap-2 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                                {[
                                    { code: "INU", name: "Incheon", color: "bg-blue-600 shadow-blue-600/20" },
                                    { code: "SKK", name: "SKKU", color: "bg-indigo-600 shadow-indigo-600/20" },
                                    { code: "WS", name: "Woosong", color: "bg-emerald-600 shadow-emerald-600/20" },
                                    { code: "KKU", name: "Konkuk", color: "bg-purple-600 shadow-purple-600/20" },
                                ].map((u) => (
                                    <div key={u.code} className="flex items-center gap-1.5 bg-white border border-slate-200 pl-1.5 pr-2.5 py-1 rounded-xl shadow-sm">
                                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center text-[8px] font-black text-white shadow-sm ${u.color}`}>{u.code}</div>
                                        <span className="font-bold text-[11px] text-[#0f172a]">{u.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

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

                {loading ? (
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : error ? (
                    <div className="text-center py-12 text-sm font-semibold text-red-400 bg-red-50 border border-red-100 rounded-2xl">
                        {error}
                    </div>
                ) : filtered.length > 0 ? (
                    <div className="flex gap-6 md:gap-8 overflow-x-auto pt-2 pb-8 px-1 snap-x snap-mandatory scroll-smooth
            scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-300 hover:scrollbar-thumb-blue-500">
                        {filtered.map((review, i) => (
                            <div
                                key={review._id}
                                className="w-[290px] sm:w-[340px] md:w-[380px] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
                            >
                                <ReviewCard review={review} index={i} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-sm font-semibold text-slate-400 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        No matching success stories found.
                    </div>
                )}

                <div className="mt-10 bg-[#0f172a] rounded-2xl border border-white/5 overflow-hidden
          grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 shadow-xl">
                    {[
                        {
                            icon: <SiYoutube className="text-[#ff0000] text-lg group-hover/strip:scale-110 transition-transform duration-300" />,
                            label: "More Videos",
                            value: "Watch on our YouTube Channel",
                            href: "https://youtube.com" // 👈 Insert channel link here
                        },
                        {
                            icon: <HiStar className="text-amber-400 text-xl group-hover/strip:scale-110 transition-transform duration-300" />,
                            label: "Average Rating",
                            value: "5.0 / 5.0 — Google Reviews",
                            href: "https://google.com" // 👈 Insert review link here
                        },
                        {
                            icon: <HiChatBubbleLeftRight className="text-emerald-400 text-xl group-hover/strip:scale-110 transition-transform duration-300" />,
                            label: "Talk to a Student",
                            value: "WhatsApp us to connect",
                            href: "https://wa.me/94776022231"
                        },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                        >
                            <div className="p-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer group/strip h-full">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0
                group-hover/strip:bg-white/10 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-0.5">{item.label}</div>
                                    <div className="text-sm font-bold text-white group-hover/strip:text-blue-400 transition-colors duration-300">{item.value}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}