import React, { useState, useEffect } from "react";
import { FaChartLine, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AdminStudentPage from "./admin/adminStudentPage";
import AdminReviewPage from "./admin/adminReviewPage";
import AdminUserPage from "./admin/adminUserPage";
import AdminDashboard from "./admin/adminDashboard";
import { PiStudent, PiCalendarCheck } from "react-icons/pi";
import AdminAppointment from "./admin/adminAppointment";
import AdminAddNewReview from "./admin/adminAddNewReview";
import UpdateAddNewReview from "./admin/adminUpdateReview";

export default function Admin() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    const linkStyle = (path) => {
        const isActive = location.pathname === path;
        return `flex items-center gap-3 px-[14px] py-[10px] rounded-[10px] transition-all duration-200 text-[14px] font-outfit tracking-wide border ${
            isActive
                ? "bg-secondary/12 border-secondary/25 text-secondary font-semibold"
                : "border-transparent text-primary/40 hover:text-primary/70 hover:bg-primary/4 hover:border-primary/6 font-normal"
        }`;
    };

    return (
        <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden bg-primary">
            
            <div className="md:hidden w-full h-[64px] bg-[#080808] border-b border-secondary/10 flex items-center justify-between px-4 z-40">
                <div className="flex items-center gap-2">
                    <img
                        src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png"
                        alt="Logo"
                        className="h-[36px] w-auto object-contain"
                    />
                    <span className="font-syne font-extrabold text-[15px] text-primary tracking-[-0.4px]">
                        Checkmate
                    </span>
                </div>
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-primary text-xl p-2 rounded-lg bg-secondary/10 border border-secondary/20"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <aside className={`
                w-[260px] min-w-[260px] h-full flex flex-col bg-[#080808] border-r border-secondary/10 px-4 py-6
                fixed md:static inset-y-0 left-0 z-50 transition-transform duration-300 transform
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}>
                <div className="flex items-center justify-between md:justify-start gap-3 px-1">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png"
                            alt="Checkmate Admission Logo"
                            className="h-[54px] w-auto object-contain"
                        />
                        <div className="w-px h-[34px] bg-gradient-to-b from-transparent via-secondary/25 to-transparent" />
                        <div className="flex flex-col gap-0.5 leading-none">
                            <span className="font-syne font-extrabold text-[18px] text-primary tracking-[-0.4px]">
                                Checkmate
                            </span>
                            <span className="font-outfit font-light text-[9px] text-secondary tracking-[4px] uppercase">
                                Admission
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="md:hidden text-primary/60 text-lg p-1"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="flex items-center gap-3 mt-6 px-4 py-2 rounded-full border border-secondary/20 relative">
                    <span className="relative flex h-[10px] w-[10px] flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
                        <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-secondary" />
                    </span>
                    <span className="font-syne font-bold text-[13px] text-primary tracking-[0.2px]">
                        Manager Suite
                    </span>
                </div>

                <p className="text-[10px] font-medium text-primary/20 tracking-[2px] uppercase px-3 mt-6 mb-2">
                    Navigation
                </p>

                <nav className="flex flex-col gap-0.5 flex-1 overflow-y-auto custom-scrollbar">
                    <Link to="/admin" className={linkStyle("/admin")}>
                        <FaChartLine className="text-base flex-shrink-0" />
                        <span>Dashboard</span>
                        {location.pathname === "/admin" && (
                            <span className="ml-auto w-[5px] h-[5px] rounded-full bg-secondary" />
                        )}
                    </Link>

                    <Link to="/admin/students" className={linkStyle("/admin/students")}>
                        <PiStudent className="text-base flex-shrink-0" />
                        <span>Students</span>
                        {location.pathname === "/admin/students" && (
                            <span className="ml-auto w-[5px] h-[5px] rounded-full bg-secondary" />
                        )}
                    </Link>

                    <Link to="/admin/appointment" className={linkStyle("/admin/appointment")}>
                        <PiCalendarCheck className="text-base flex-shrink-0" />
                        <span>Appointment</span>
                        {location.pathname === "/admin/appointment" && (
                            <span className="ml-auto w-[5px] h-[5px] rounded-full bg-secondary" />
                        )}
                    </Link>

                    <Link to="/admin/reviews" className={linkStyle("/admin/reviews")}>
                        <MdOutlineRateReview className="text-base flex-shrink-0" />
                        <span>Reviews</span>
                        {location.pathname === "/admin/reviews" && (
                            <span className="ml-auto w-[5px] h-[5px] rounded-full bg-secondary" />
                        )}
                    </Link>

                    <Link to="/admin/users" className={linkStyle("/admin/users")}>
                        <HiOutlineUser className="text-base flex-shrink-0" />
                        <span>Users</span>
                        {location.pathname === "/admin/users" && (
                            <span className="ml-auto w-[5px] h-[5px] rounded-full bg-secondary" />
                        )}
                    </Link>
                </nav>

                <div className="mt-auto pt-4 px-[14px] py-3 bg-secondary/4 border border-secondary/10 rounded-[12px] text-center">
                    <p className="text-[10px] text-primary/20 font-medium uppercase tracking-[1.5px]">
                        CheckMate v2.1.0-Core
                    </p>
                </div>
            </aside>

            {isSidebarOpen && (
                <div 
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
                />
            )}

            <div className="flex-1 h-[calc(100vh-64px)] md:h-screen flex flex-col min-w-0">
                <div className="h-full w-full overflow-y-auto custom-scrollbar">
                    <div className="animate-in fade-in duration-700 h-full">
                        <Routes>
                            <Route path="/" element={<AdminDashboard />} />
                            <Route path="/students" element={<AdminStudentPage />} />
                            <Route path="/appointment" element={<AdminAppointment />} />
                            <Route path="/reviews" element={<AdminReviewPage />} />
                            <Route path="/add-review" element={<AdminAddNewReview/>} />
                            <Route path="/update-reviews" element={<UpdateAddNewReview />} />
                            <Route path="/users" element={<AdminUserPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}