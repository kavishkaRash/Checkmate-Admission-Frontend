import { useState } from "react";
import Header from "../components/header";
import { IoCalendarOutline, IoPersonOutline, IoSchoolOutline, IoGlobeOutline, IoCallOutline, IoMailOutline, IoChatboxEllipsesOutline, IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

export default function AppointmentPage() {
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [visaType, setVisaType] = useState("");
    const [message, setMessage] = useState("");
    const [university, setUniversity] = useState("");
    const [address, setAddress] = useState("");
    const [education, setEducation] = useState("");

    function clear() {
        setFullName("");
        setAge("");
        setEmail("");
        setPhoneNumber("");
        setCountry("");
        setVisaType("");
        setMessage("");
        setUniversity("");
        setAddress("");
        setEducation("");
    }

    async function confirmBooking() {
        if (!fullName || !age || !email || !phoneNumber || !country || !visaType || !address || !education || !message) {
            toast.error("Please fill in all required fields.");
            return;
        }
        try {
            await axios.post(import.meta.env.VITE_API_URL + "/api/appointment/create", {
                fullName: fullName,
                age: age,
                email: email,
                phoneNumber: phoneNumber,
                country: country,
                visaType: visaType,
                message: message,
                university: university,
                address: address,
                education: education
            })
            toast.success("Booking Confirmed!");
            clear();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full min-h-screen bg-primary selection:bg-secondary selection:text-accent font-outfit overflow-x-hidden">
            <Header />

            {/* Background Decorative Elements */}
            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 py-12 relative z-10">

                {/* Page Header */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[1px] w-10 bg-secondary" />
                        <span className="text-secondary text-[10px] font-black uppercase tracking-[5px]">Consultation</span>
                    </div>
                    <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-accent tracking-tighter mb-4">
                        Book Your <span className="text-secondary/80">Future.</span>
                    </h1>
                    <p className="text-accent/40 text-lg max-w-md">
                        Complete the form below. Our admissions experts will contact you within <span className="text-accent font-bold">24 hours</span>.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Form Container */}
                    <div className="w-full lg:max-w-[750px] bg-white/70 backdrop-blur-3xl border border-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] p-8 md:p-12 animate-in zoom-in-95 duration-1000">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoPersonOutline className="text-secondary" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>

                            {/* Age */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    placeholder="21"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>

                            {/* Education Select */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoSchoolOutline className="text-secondary" /> Current Education
                                </label>
                                <select
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Level</option>
                                    <option value="bachelor">Bachelor</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="master">Master</option>
                                </select>
                            </div>

                            {/* Conditional University Field */}
                            {education === "undergraduate" && (
                                <div className="space-y-2 animate-in fade-in zoom-in duration-300">
                                    <label className="text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                        Current University
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name of Institution"
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                        className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all shadow-inner"
                                    />
                                </div>
                            )}

                            {/* Visa Type */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    Visa Type
                                </label>
                                <select
                                    value={visaType}
                                    onChange={(e) => setVisaType(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer">
                                    <option value="student">Student Visa (D-2)</option>
                                    <option value="language">Language Trainee (D-4)</option>
                                </select>
                            </div>

                            {/* Country */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoGlobeOutline className="text-secondary" /> Destination
                                </label>
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer font-bold"
                                >
                                    <option value="">Select Destination</option>
                                    <option value="korea">South Korea</option>
                                </select>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoCallOutline className="text-secondary" /> Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+94 XX XXX XXXX"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>

                            {/* Permanent Address Section */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoLocationOutline className="text-secondary" /> Permanent Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Street Address, City, Country"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoMailOutline className="text-secondary" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl px-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-accent/30 uppercase tracking-[3px] ml-1">
                                    <IoChatboxEllipsesOutline className="text-secondary" /> Message / Notes
                                </label>
                                <textarea
                                    placeholder="Tell us about your academic goals..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full h-32 bg-accent/[0.02] border border-accent/10 rounded-2xl p-6 text-sm focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-12 flex justify-center">
                            <button onClick={confirmBooking} className="group relative h-16 w-full md:w-64 bg-accent text-primary font-syne font-bold text-xs tracking-[4px] uppercase rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95">
                                <span className="relative z-10">Confirm Booking</span>
                                <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Side Info / Visuals */}
                    <div className="hidden lg:block flex-1 space-y-12 sticky top-32">

                        {/* High-End Info Card */}
                        <div className="bg-accent text-primary p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-accent/20">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                    <span className="text-[10px] font-black tracking-[4px] text-secondary">PREMIUM SERVICE</span>
                                </div>

                                <h3 className="font-syne text-2xl font-bold mb-6 leading-tight">Why Choose <br /> Checkmate Korea?</h3>

                                <div className="space-y-5">
                                    {[
                                        "Official Partner with Top 20 Universities",
                                        "Certified Visa Consulting Specialists",
                                        "Direct Support in Seoul & Busan"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-secondary/30 flex items-center justify-center text-[10px] text-secondary">
                                                0{i + 1}
                                            </div>
                                            <p className="text-sm text-primary/60 font-light leading-snug">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* MINIMALIST PROFESSIONAL BRAND LOCKUP */}
                        <div className="relative px-8">
                            <div className="flex flex-col gap-6">

                                {/* The Logo / Seal */}
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 border border-accent/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                        <span className="font-syne font-black text-2xl text-accent relative z-10">C</span>
                                        <div className="absolute inset-0 bg-secondary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-outfit text-[11px] font-black text-secondary tracking-[6px] uppercase">
                                            Accredited
                                        </span>
                                        <div className="h-px w-full bg-accent/10 my-1" />
                                        <span className="font-outfit text-[10px] font-medium text-accent/40 uppercase">
                                            Admission Authority
                                        </span>
                                    </div>
                                </div>

                                {/* Typography with Professional Spacing */}
                                <div className="space-y-1">
                                    <h2 className="font-syne text-5xl font-black text-accent tracking-tighter uppercase leading-[0.8]">
                                        Checkmate
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <span className="font-outfit text-sm font-light text-accent/30 tracking-[0.2em]">KOREA ADMISSIONS</span>
                                        <div className="flex-1 h-[1px] bg-gradient-to-r from-accent/10 to-transparent" />
                                    </div>
                                </div>

                                {/* Verification Badge */}
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/[0.03] border border-accent/5 rounded-full w-fit">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]" />
                                    <span className="font-outfit text-[9px] font-bold text-accent/50 uppercase tracking-widest">
                                        Verified Global Partner 2026
                                    </span>
                                </div>
                            </div>

                            {/* Traditional Korean Pattern Accent */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-[0.02] pointer-events-none rotate-12">
                                <svg viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M0,0 L100,0 L100,100 L0,100 Z M10,10 L90,10 L90,90 L10,90 Z" />
                                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}