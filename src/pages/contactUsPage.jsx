import { IoCallOutline, IoMailOutline, IoLogoWhatsapp, IoTimeOutline, IoLocationOutline, IoPaperPlaneOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import Header from "../components/header";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    })

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/inquiries/send", formData);

            toast.success("Message sent successfully");

            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                subject: "",
                message: ""
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
            toast.error("Failed to send inquiry");
        }
    }
    return (
        <div className="w-full min-h-screen bg-primary font-outfit text-accent">
            <Header />

            {/* --- HERO BANNER SECTION --- */}
            <div className="relative w-full h-[500px] lg:h-[580px] bg-accent flex items-center justify-center overflow-hidden">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/ddrbcubf8/image/upload/q_auto/f_auto/v1778913706/Gemini_Generated_Image_fy3q2mfy3q2mfy3q_d6v9hr.png"
                        alt="Contact Us Background"
                        className="w-full h-full object-cover opacity-30 scale-105 transform hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/80 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="text-[10px] tracking-[4px] uppercase font-black text-secondary">Get In Touch</span>
                    </div>
                    <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tighter">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400 italic font-light">Checkmate Admission</span>
                    </h1>
                    <p className="text-sm sm:text-base text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
                        We are here to guide your international education journey. Feel free to reach out to our experts anytime from anywhere.
                    </p>
                </div>
            </div>

            {/* --- QUICK CONTACT CARDS --- */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { icon: <IoCallOutline size={24} />, title: "Call Us", desc1: "+94 77 123 4567", desc2: "+94 11 234 5678", type: "tel" },
                    { icon: <IoMailOutline size={24} />, title: "Email Us", desc1: "info@checkmate.lk", desc2: "support@checkmate.lk", type: "mail" },
                    { icon: <IoLogoWhatsapp size={24} />, title: "WhatsApp", desc1: "+94 77 123 4567", desc2: "Chat with us 24/7", type: "wa" },
                    { icon: <IoTimeOutline size={24} />, title: "Working Hours", desc1: "Mon - Fri: 8.30 AM - 6.00 PM", desc2: "Sat: 9.00 AM - 2.00 PM", type: "text" }
                ].map((card, idx) => (
                    <div key={idx} className="bg-primary border border-accent/5 p-6 rounded-3xl shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] hover:border-secondary/30 transition-all group">
                        <div className="w-12 h-12 rounded-2xl bg-accent text-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-accent/10">
                            {card.icon}
                        </div>
                        <h3 className="font-syne font-bold text-base mt-4 mb-2">{card.title}</h3>
                        {card.type === "tel" && (
                            <>
                                <a href={`tel:${card.desc1}`} className="text-xs text-accent/60 hover:text-secondary block font-medium mb-1">{card.desc1}</a>
                                <a href={`tel:${card.desc2}`} className="text-xs text-accent/60 hover:text-secondary block font-medium">{card.desc2}</a>
                            </>
                        )}
                        {card.type === "mail" && (
                            <>
                                <a href={`mailto:${card.desc1}`} className="text-xs text-accent/60 hover:text-secondary block font-medium mb-1 truncate">{card.desc1}</a>
                                <a href={`mailto:${card.desc2}`} className="text-xs text-accent/60 hover:text-secondary block font-medium truncate">{card.desc2}</a>
                            </>
                        )}
                        {card.type === "wa" && (
                            <>
                                <a href={`https://wa.me/${card.desc1.replace(/\s+/g, '')}`} target="_blank" rel="noreferrer" className="text-xs text-accent/60 hover:text-secondary block font-medium mb-1">{card.desc1}</a>
                                <span className="text-xs text-accent/30 block font-medium">{card.desc2}</span>
                            </>
                        )}
                        {card.type === "text" && (
                            <>
                                <p className="text-xs text-accent/60 font-medium mb-1">{card.desc1}</p>
                                <p className="text-xs text-accent/30 font-medium">{card.desc2}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* --- OUR BRANCHES SECTION --- */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="text-center space-y-2 mb-16">
                    <p className="text-[10px] tracking-[4px] uppercase font-black text-secondary">Our Presence</p>
                    <h2 className="font-syne font-extrabold text-3xl lg:text-4xl">Visit One of Our Branches</h2>
                    <div className="w-12 h-[2px] bg-secondary mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Anuradhapura Branch */}
                    <div className="bg-primary border border-accent/5 rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-xl hover:border-secondary/10 transition-all duration-300 flex flex-col sm:flex-row">
                        <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=cover"
                                alt="Anuradhapura Branch"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 sm:w-1/2 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <span className="px-3 py-1 rounded-md text-[9px] font-black tracking-widest bg-secondary/10 text-accent uppercase border border-secondary/20">Cultural Hub</span>
                                <h3 className="font-syne font-bold text-xl text-accent pt-1">Anuradhapura Branch</h3>
                                <p className="text-xs text-accent/60 flex items-start gap-2 font-medium leading-relaxed">
                                    <IoLocationOutline size={18} className="text-secondary shrink-0 mt-0.5" />
                                    No. 45, Maithripala Senanayake Mawatha, Anuradhapura, Sri Lanka.
                                </p>
                            </div>
                            <button className="w-full h-11 border border-accent/10 rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-wider group-hover:bg-accent group-hover:text-primary transition-all">
                                View on Map <IoChevronForwardCircleOutline size={16} className="text-secondary" />
                            </button>
                        </div>
                    </div>

                    {/* Kaduwela Branch */}
                    <div className="bg-primary border border-accent/5 rounded-[2.5rem] overflow-hidden shadow-sm group hover:shadow-xl hover:border-secondary/10 transition-all duration-300 flex flex-col sm:flex-row">
                        <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=cover"
                                alt="Kaduwela Branch"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 sm:w-1/2 flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <span className="px-3 py-1 rounded-md text-[9px] font-black tracking-widest bg-secondary/10 text-accent uppercase border border-secondary/20">Colombo Suburb</span>
                                <h3 className="font-syne font-bold text-xl text-accent pt-1">Kaduwela Branch</h3>
                                <p className="text-xs text-accent/60 flex items-start gap-2 font-medium leading-relaxed">
                                    <IoLocationOutline size={18} className="text-secondary shrink-0 mt-0.5" />
                                    No. 120/A, Avissawella Road, Kaduwela (Colombo), Sri Lanka.
                                </p>
                            </div>
                            <button className="w-full h-11 border border-accent/10 rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-wider group-hover:bg-accent group-hover:text-primary transition-all">
                                View on Map <IoChevronForwardCircleOutline size={16} className="text-secondary" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- INQUIRY FORM & BUSINESS HOURS --- */}
            <div className="bg-accent/[0.02] border-y border-accent/5 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Inquiry Form */}
                    <div className="lg:col-span-7 bg-primary border border-accent/5 p-8 md:p-10 rounded-[2.5rem] shadow-sm">
                        <h3 className="font-syne font-bold text-2xl mb-2">Send Us a Message</h3>
                        <p className="text-xs text-accent/50 mb-8 font-medium">Fill out the form below and our team will get back to you within 24 hours.</p>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-accent/40 ml-1">Full Name</label>
                                    <input type="text"
                                        placeholder="John Doe"
                                        className="w-full h-12 px-4 rounded-xl border border-accent/10 focus:border-secondary focus:outline-none bg-accent/[0.01] text-sm font-medium transition-colors"
                                        value={formData.fullName}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                fullName: e.target.value
                                            })
                                        }} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-accent/40 ml-1">Email Address</label>
                                    <input type="email"
                                        placeholder="example@domain.com"
                                        className="w-full h-12 px-4 rounded-xl border border-accent/10 focus:border-secondary focus:outline-none bg-accent/[0.01] text-sm font-medium transition-colors"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                email: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-accent/40 ml-1">Phone Number</label>
                                    <input type="tel"
                                        placeholder="+94 7X XXX XXXX"
                                        className="w-full h-12 px-4 rounded-xl border border-accent/10 focus:border-secondary focus:outline-none bg-accent/[0.01] text-sm font-medium transition-colors"
                                        value={formData.phoneNumber}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                phoneNumber: e.target.value
                                            })
                                        }}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-black text-accent/40 ml-1">Subject</label>
                                    <input type="text"
                                        placeholder="Visa / Admission Inquiry"
                                        className="w-full h-12 px-4 rounded-xl border border-accent/10 focus:border-secondary focus:outline-none bg-accent/[0.01] text-sm font-medium transition-colors"
                                        value={formData.subject}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                subject: e.target.value
                                            })
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase tracking-widest font-black text-accent/40 ml-1">Your Message</label>
                                <textarea rows="4"
                                    placeholder="Type your detailed requirements here..."
                                    className="w-full p-4 rounded-xl border border-accent/10 focus:border-secondary focus:outline-none bg-accent/[0.01] text-sm font-medium transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            message: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <button type="submit" className="h-12 w-full sm:w-auto px-8 bg-accent text-primary rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-accent/20 active:scale-95 transition-all">
                                Send Inquiry <IoPaperPlaneOutline size={14} className="text-secondary" />
                            </button>
                        </form>
                    </div>

                    {/* Side Panel: Hours & Socials */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Business Hours */}
                        <div className="bg-accent text-primary p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
                            <h3 className="font-syne font-bold text-xl text-primary mb-6 flex items-center gap-2">
                                <IoTimeOutline className="text-secondary" /> Business Hours
                            </h3>
                            <div className="space-y-3 font-outfit text-sm">
                                <div className="flex justify-between border-b border-primary/10 pb-2">
                                    <span className="opacity-60">Monday - Friday</span>
                                    <span className="font-bold text-secondary">8.30 AM - 6.00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/10 pb-2">
                                    <span className="opacity-60">Saturday</span>
                                    <span className="font-bold text-secondary">9.00 AM - 2.00 PM</span>
                                </div>
                                <div className="flex justify-between pb-1">
                                    <span className="opacity-60">Sunday</span>
                                    <span className="text-rose-400 font-bold tracking-wider uppercase text-xs mt-0.5">Closed</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Connect */}
                        <div className="bg-primary border border-accent/5 p-8 rounded-[2.5rem] shadow-sm">
                            <h3 className="font-syne font-bold text-lg mb-4">Connect With Us</h3>
                            <div className="flex gap-3">
                                {["facebook", "instagram", "whatsapp", "linkedin"].map((platform, idx) => (
                                    <a key={idx} href={`#${platform}`} className="w-11 h-11 border border-accent/10 rounded-xl flex items-center justify-center text-accent/60 hover:text-secondary hover:bg-accent transition-all">
                                        <span className="text-xs font-bold uppercase tracking-tighter">{platform.slice(0, 2)}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- CTA BOTTOM FOOTER BANNER --- */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="w-full bg-accent text-primary p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#00ffef_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl max-w-xl mx-auto tracking-tight leading-tight">
                        Have Questions Regarding <span className="text-secondary italic font-light">Study Abroad?</span>
                    </h2>
                    <p className="text-xs md:text-sm text-primary/60 max-w-lg mx-auto font-light">
                        Our seasoned education specialists are standby to tailor your application framework perfectly.
                    </p>
                    <button className="h-12 px-8 bg-secondary text-accent rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-primary transition-colors shadow-lg shadow-secondary/10">
                        Talk to an Expert
                    </button>
                </div>
            </div>

        </div>
    );
}