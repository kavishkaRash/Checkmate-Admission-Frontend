import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2"; // Standardized Heroicons v2 Exports
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans border-t border-slate-800">
            

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none z-0"
                style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 80%)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
                    

                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 flex items-center justify-center tracking-tighter text-white select-none pointer-events-none">
                                <img 
                                    src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png" 
                                    alt="Checkmate Logo" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tight text-white">
                                Checkmate<span className="text-blue-500">.</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
                            Your trusted bridge to South Korean higher education. We simplify applications, visa documentation, and embassy interviews to secure your future.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Official Partner Agency
                        </div>
                    </div>


                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Explore</h4>
                        <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/korea-student-visa" className="hover:text-blue-400 transition-colors">Student Visa Korea</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contacts</Link></li>
                        </ul>
                    </div>


                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Top Universities</h4>
                        <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
                            <li><Link to="/university/ajou" className="hover:text-blue-400 transition-colors">Ajou University</Link></li>
                            <li><Link to="/university/inu" className="hover:text-blue-400 transition-colors">Incheon National University</Link></li>
                            <li><Link to="/university/konkuk" className="hover:text-blue-400 transition-colors">Konkuk Uni</Link></li>
                            <li><Link to="/university/skku" className="hover:text-blue-400 transition-colors">Sungkyunkwan University</Link></li>
                            
                        </ul>
                    </div>


                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Contact Office</h4>
                        <ul className="space-y-4 text-xs font-semibold text-slate-400">

                            <li className="flex items-start gap-3 group">
                                <span className="text-blue-500 bg-white/5 p-1.5 rounded-lg border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                                    <HiMapPin className="text-[15px]" />
                                </span>
                                <a href="https://www.google.com/maps/place/Checkmate+Admission+Guide+(pvt)+Ltd/@6.9329683,79.9798375,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae257e8fcb300df:0x9fa7dccd98ae23d4!8m2!3d6.9329683!4d79.9824124!16s%2Fg%2F11x1llq2xq?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" className="leading-relaxed text-slate-400 pointer:cursor hover:text-blue-400 group-hover:text-white transition-colors duration-300">
                                    381/6 Kandy Road, Kaduwela<br />Sri Lanka
                                </a>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="text-blue-500 bg-white/5 p-1.5 rounded-lg border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-0.5">
                                    <HiMapPin className="text-[15px]" />
                                </span>
                                <a href="https://www.google.com/maps/place/CHECKMATE+ADMISSION+GUIDE+(PVT)+LDT/@8.3358101,80.4112811,17z/data=!3m1!4b1!4m6!3m5!1s0x3afcf500033ce99b:0x7e5199bb4b03a9a9!8m2!3d8.3358101!4d80.4112811!16s%2Fg%2F11zb58rykn?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" className="leading-relaxed text-slate-400 hover:text-blue-400 group-hover:text-white transition-colors duration-300">
                                    8CP6+8GC, Anuradhapura<br />Sri Lanka
                                </a>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <span className="text-blue-500 bg-white/5 p-1.5 rounded-lg border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <HiEnvelope className="text-[15px]" />
                                </span>
                                <a href="mailto:info@checkmateadmission.com" className="text-slate-400 hover:text-blue-400 group-hover:text-white transition-colors duration-300">
                                    info@checkmateadmission.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3 group">
                                <span className="text-blue-500 bg-white/5 p-1.5 rounded-lg border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <HiPhone className="text-[15px]" />
                                </span>
                                <a href="tel:+94112548212" className="text-slate-400 hover:text-blue-400 group-hover:text-white transition-colors duration-300">
                                    +94 (11) 254-8212 
                                </a>
                            </li>

                            
                        </ul>
                    </div>

                </div>


                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                    
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        © {new Date().getFullYear()} Checkmate Admission Guide. All Rights Reserved.
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs font-bold text-slate-500 tracking-wide uppercase">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                            <span className="text-slate-800">·</span>
                            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        </div>
                        
                        <span className="hidden sm:inline text-slate-800">·</span>
                        

                        <div className="flex items-center gap-3 pt-2 sm:pt-0">
                            <a 
                                href="https://www.facebook.com/CheckmateAdmissionGuideSL/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 
                                transition-all duration-300 ease-out hover:-translate-y-1 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2]
                                hover:shadow-[0_8px_20px_-4px_rgba(24,119,242,0.6)]"
                            >
                                <FaFacebook className="text-[18px]" />
                            </a>

                            <a 
                                href="https://www.instagram.com/checkmate_admission/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-400 
                                transition-all duration-300 ease-out hover:-translate-y-1 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent
                                hover:shadow-[0_8px_20px_-4px_rgba(238,42,123,0.6)]"
                            >
                                <PiInstagramLogoFill className="text-[19px]" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}