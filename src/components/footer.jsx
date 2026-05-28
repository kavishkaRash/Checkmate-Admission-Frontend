import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans border-t border-slate-800">
            
            {/* Pattern Blueprint Grid (Matches your design language) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

            {/* Subtle Bottom Glow Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 80%)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* ── TOP FOOTER GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
                    
                    {/* Column 1: Brand Info (4 Cols) */}
                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-2">
                            {/* App Logo Emblem */}
                            <div className="w-15 h-15  flex items-center justify-center  tracking-tighter text-white">
                                <img src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png" alt="" srcset="" />
                            </div>
                            <span className="text-lg font-black tracking-tight text-white">
                                Checkmate<span className="text-blue-500">.</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                            Your trusted bridge to South Korean higher education. We simplify applications, visa documentation, and embassy interviews to secure your future.
                        </p>
                        {/* Live Status Indicator */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Official Partner Agency
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation (2 Cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Explore</h4>
                        <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
                            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#universities" className="hover:text-blue-400 transition-colors">Universities</a></li>
                            <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Success Stories</a></li>
                            <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Partner Network Shortcuts (2 Cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Top Universities</h4>
                        <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
                            <li><a href="#inu" className="hover:text-blue-400 transition-colors">Incheon National</a></li>
                            <li><a href="#skku" className="hover:text-blue-400 transition-colors">Sungkyunkwan</a></li>
                            <li><a href="#wsu" className="hover:text-blue-400 transition-colors">Woosong Uni</a></li>
                            <li><a href="#kku" className="hover:text-blue-400 transition-colors">Konkuk Uni</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Office (3 Cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Contact Office</h4>
                        <ul className="space-y-3 text-xs font-semibold text-slate-400">
                            <li className="flex items-start gap-2.5">
                                <span className="text-blue-500">📍</span>
                                <span className="leading-relaxed">Colombo, Western Province,<br />Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="text-blue-500">✉️</span>
                                <a href="mailto:info@checkmate.lk" className="hover:text-blue-400 transition-colors">info@checkmate.lk</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="text-blue-500">📞</span>
                                <a href="tel:+94112345678" className="hover:text-blue-400 transition-colors">+94 (11) 234-5678</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ── BOTTOM LEGAL & COPYRIGHT ROW ── */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    {/* Copyright Note */}
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        © {new Date().getFullYear()} Checkmate Admission Guide. All Rights Reserved.
                    </div>
                    
                    {/* Social Icons & Tech Credit Links */}
                    <div className="flex items-center gap-6 text-xs font-bold text-slate-500 tracking-wide uppercase">
                        <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <span className="text-slate-800">·</span>
                        <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        <span className="text-slate-800">·</span>
                        
                        {/* Built-in Small Social Anchors */}
                        <div className="flex items-center gap-1 ml-2">
                            <a href="#fb" className="w-9 h-9  flex items-center justify-center text-slate-400 hover:text-white  transition-all">
                                <span className="text-[20px] font-black"><FaFacebook /></span>
                            </a>
                            <a href="#fb" className="w-9 h-9  flex items-center justify-center text-slate-400 hover:text-white  transition-all">
                                <span className="text-[20px] font-black"><PiInstagramLogoFill /></span>
                            </a>
                            
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}