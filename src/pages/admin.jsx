import { FaChartLine } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AdminStudentPage from "./admin/adminStudentPage";
import AdminReviewPage from "./admin/adminReviewPage";
import AdminUserPage from "./admin/adminUserPage";
import AdminDashboard from "./admin/adminDashboard";
import { PiStudent } from "react-icons/pi";

export default function Admin() {

    const location = useLocation();

    const linkStyle = (path) => {
        const isActive = location.pathname === path;
        return `flex items-center gap-3 px-[14px] py-[10px] rounded-[10px] transition-all duration-200 text-[14px] font-outfit tracking-wide border ${
            isActive
                ? "bg-secondary/12 border-secondary/25 text-secondary font-semibold"
                : "border-transparent text-primary/40 hover:text-primary/70 hover:bg-primary/4 hover:border-primary/6 font-normal"
        }`;
    };

    return (
        <div className="w-full h-screen flex overflow-hidden bg-primary">

            {/* Sidebar */}
            <aside className="w-[260px] min-w-[260px] h-full flex flex-col bg-[#080808] border-r border-secondary/10 px-4 py-6">

                {/* Logo */}
                <div className="flex items-center gap-3 px-1">
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

                {/* Manager Suite badge */}
                <div className="flex items-center gap-3 mt-6 px-4 py-2 rounded-full border border-secondary/20 relative">
                    <span className="relative flex h-[10px] w-[10px] flex-shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
                        <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-secondary" />
                    </span>
                    <span className="font-syne font-bold text-[13px] text-primary tracking-[0.2px]">
                        Manager Suite
                    </span>
                </div>

                {/* Nav label */}
                <p className="text-[10px] font-medium text-primary/20 tracking-[2px] uppercase px-3 mt-6 mb-2">
                    Navigation
                </p>

                {/* Nav links */}
                <nav className="flex flex-col gap-0.5 flex-1">
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

                {/* Footer */}
                <div className="mt-auto px-[14px] py-3 bg-secondary/4 border border-secondary/10 rounded-[12px] text-center">
                    <p className="text-[10px] text-primary/20 font-medium uppercase tracking-[1.5px]">
                        CheckMate v2.1.0-Core
                    </p>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 h-screen flex flex-col min-w-0">
                <div className="h-full w-full overflow-y-auto custom-scrollbar">
                    <div className="animate-in fade-in duration-700">
                        <Routes>
                            <Route path="/" element={<AdminDashboard />} />
                            <Route path="/students" element={<AdminStudentPage />} />
                            <Route path="/reviews" element={<AdminReviewPage />} />
                            <Route path="/users" element={<AdminUserPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}