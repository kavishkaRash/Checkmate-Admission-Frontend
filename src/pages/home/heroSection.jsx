import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="bg-[#f8fafc] text-[#0f172a] relative min-h-screen w-full overflow-x-hidden font-sans select-none">

            {/* ── BACKGROUND VIDEO & GRADIENT OVERLAYS ── */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#f8fafc]">

                <div className="absolute w-full h-full top-0 right-0 z-0">
                    <video
                        className="w-full h-full object-cover object-center md:object-right mix-blend-normal opacity-40 md:opacity-100 scale-100"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="https://res.cloudinary.com/ddrbcubf8/video/upload/v1779896868/Asian_girl_sitting_on_suitcase_202605272117_l0hxyn.mp4"
                    />
                </div>

                {/* 🌟 FIXED GLOW: වීඩියෝ එකට උඩින් (z-20) mix-blend-multiply එකෙන් දැම්මා, එතකොට සුදු බැක්ග්‍රවුන්ඩ් එක උඩ විතරක් පාට වදිනවා */}
                <div 
                    className="absolute top-0 right-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none z-20 opacity-80 hidden md:block mix-blend-multiply"
                    style={{ 
                        background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)",
                        filter: "blur(50px)"
                    }}
                />

                {/* Blending gradients to smooth out the video edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/20 via-[#f8fafc]/80 to-[#f8fafc] md:bg-gradient-to-r md:from-[#f8fafc] md:via-[#f8fafc]/60 md:to-transparent z-10" />
            </div>

            {/* Subtle Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />

            {/* ── HERO CONTENT SECTION ── */}
            <section id="home" className="relative z-30 min-h-screen flex items-center px-4 sm:px-6 md:px-16 lg:px-32 pt-28 pb-20">

                <div className="w-full max-w-2xl relative z-30">

                    {/* Tagline Badge */}
                    <div className="inline-flex items-center gap-2.5 bg-white/90 border border-slate-200 text-blue-600 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-3 sm:px-4 py-2 rounded-xl mb-6 sm:mb-8 shadow-sm backdrop-blur-sm">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Sri Lanka's Premier Korean Visa Authority
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-[#0f172a]">
                        Empowering Your Journey<br />
                        To <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Korean Higher Education</span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 sm:mb-10 max-w-xl font-medium">
                        Navigating complex student visa pathways with unmatched expertise. Over <span className="text-slate-900 font-semibold">300+ successful placements</span> at top Korean universities with a verified <span className="text-blue-600 font-semibold">98% success rate</span>.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
                        <Link to="/appointment" className="w-full sm:w-auto bg-[#0f172a] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-blue-600 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-center">
                            Get Free Consultation →
                        </Link>
                        <a href="#reviews" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-700 hover:text-blue-600 text-xs font-bold px-6 py-4 rounded-xl border border-slate-200 hover:border-blue-300 shadow-sm transition-all duration-300">
                            <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs pl-0.5 border border-slate-200">▶</span>
                            Watch Reviews
                        </a>
                    </div>

                    {/* Trust Stats Counter Area */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200 pt-8 max-w-md">
                        {[
                            { value: "300+", label: "Visas Approved" },
                            { value: "98%", label: "Success Rate", highlight: true },
                            { value: "15+", label: "Partner Uni" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className={`text-xl sm:text-3xl font-black tracking-tight ${stat.highlight ? "text-blue-600" : "text-slate-900"}`}>
                                    {stat.value}
                                </div>
                                <div className="text-[9px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Side Glassmorphism Floating Expertise Badge */}
                <div className="hidden xl:block absolute right-24 bottom-32 z-30 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 w-[280px] shadow-xl shadow-slate-900/5 transition-all duration-500 hover:translate-y-[-4px]">
                    <div className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-4">Our Core Expertise</div>
                    <div className="space-y-4">
                        {[
                            "Direct University Admissions",
                            "D-4 & D-2 Visa Consultation",
                            "Financial Document Review",
                            "Official Interview Preparation"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-[10px]">✓</div>
                                <div className="text-xs text-slate-600 font-semibold">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* ── FOOTER FEATURE STRIP ── */}
            <div className="relative z-40 grid grid-cols-1 md:grid-cols-3 mx-4 sm:mx-6 md:mx-16 lg:mx-32 -mt-12 bg-[#0f172a] rounded-2xl border border-slate-800 shadow-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {[
                    { title: "Visa Documentation", desc: "Meticulous verification of financial and academic records to guarantee visa success." },
                    { title: "Direct Placements", desc: "Fast-tracked application submission through our 15+ elite South Korean partners." },
                    { title: "On-Ground Assistance", desc: "Comprehensive support for student accommodation booking and part-time job guidance." }
                ].map((feat, index) => (
                    <div key={index} className="p-6 sm:p-8 hover:bg-white/[0.01] transition-colors duration-300">
                        <h3 className="text-sm font-bold text-white mb-2 tracking-tight flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            {feat.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                ))}
            </div>
a
        </div>
    );
}