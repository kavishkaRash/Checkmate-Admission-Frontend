import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import {
    HiSquares2X2, HiCalendarDays, HiUserGroup, HiStar,
    HiMagnifyingGlass, HiBell, HiUserPlus, HiAdjustmentsHorizontal,
    HiPlus, HiArrowTopRightOnSquare, HiEllipsisVertical
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function AdminDashboard() {

    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (loading) {
            axios
                .get(import.meta.env.VITE_API_URL + "/api/dashboard")
                .then((res) => {
                    setDashboardData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [loading]);

    const totalAppointmentsCount = dashboardData?.state?.totalAppointments || 0;
    const activeStudentsCount = dashboardData?.state?.totalStudents || 0;
    const averageRating = dashboardData?.state?.averageRating || 0;
    const completionRate = dashboardData?.state?.completionRate ? dashboardData.state.completionRate + "%" : "0%";

    const filteredAppointments = useMemo(() => {
        const list = dashboardData?.recentAppointments || [];
        if (!searchQuery) return list;
        return list.filter((app) =>
            app.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.service?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [dashboardData, searchQuery]);

    const analyticsData = useMemo(() => {
        return dashboardData?.analytics || [];
    }, [dashboardData]);

    const maxBookingCount = useMemo(() => {
        const counts = analyticsData.map(d => d.count);
        return Math.max(...counts, 5);
    }, [analyticsData]);

    if (loading) return (
        <div className="w-full h-screen bg-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#020618] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-500 font-sans text-sm font-semibold animate-pulse">Initializing Checkmate Systems...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FFFFFF] text-slate-950 font-sans selection:bg-[#00ffef] selection:text-slate-900">

            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#020618] flex items-center justify-center text-[#00ffef] font-black shadow-md shadow-slate-200">
                            <HiSquares2X2 className="text-xl" />
                        </div>
                        <div>
                            <h1 className="text-base font-black tracking-tight uppercase text-[#020618]">Checkmate</h1>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5">Control Panel</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto justify-end">

                        <div className="relative w-full sm:w-64 group">
                            <HiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search appointments..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-blue-600/30 focus:bg-white transition-all font-medium text-slate-800 placeholder:text-slate-400"
                            />
                        </div>

                        <div className="w-px h-6 bg-slate-200 hidden sm:block" />

                        <div className="flex items-center gap-2.5 pl-1 flex-shrink-0">
                            <div className="w-8 h-8 rounded-xl bg-[#020618] flex items-center justify-center font-bold text-xs text-[#00ffef]">
                                AD
                            </div>
                            <div className="hidden md:block text-left">
                                <div className="text-xs font-bold text-[#020618] leading-none">Admin User</div>
                                <div className="text-[10px] font-semibold text-slate-400 mt-0.5">Super Admin</div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-[#020618]">Dashboard Overview</h2>
                        <p className="text-xs text-slate-500 mt-1 font-medium">Real-time dynamic control center.</p>
                    </div>
                    <div className="text-xs bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-slate-600 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { title: "Total Appointments", value: totalAppointmentsCount, label: "Live Count", icon: <HiCalendarDays />, color: "text-blue-600", bg: "bg-blue-50" },
                        { title: "Active Students", value: activeStudentsCount, label: "Registered", icon: <HiUserGroup />, color: "text-purple-600", bg: "bg-purple-50" },
                        { title: "Average Rating", value: averageRating, label: "From Reviews", icon: <HiStar />, color: "text-amber-500", bg: "bg-amber-50" },
                        { title: "Completion Rate", value: completionRate, label: "Confirmed Ratio", icon: <HiSquares2X2 />, color: "text-emerald-600", bg: "bg-emerald-50" },
                    ].map((card, i) => (
                        <div key={i} className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm rounded-2xl p-5 transition-all group">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{card.title}</span>
                                <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center ${card.color} border border-transparent group-hover:scale-105 transition-transform`}>
                                    {card.icon}
                                </div>
                            </div>
                            <div className="mt-4 flex items-baseline gap-2.5">
                                <span className="text-2xl font-black text-[#020618]">{card.value}</span>
                                <span className="text-[10px] font-bold text-slate-400">{card.label}</span>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-700">Appointment Analytics</h3>
                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">Monthly distribution of bookings</p>
                                </div>
                                <HiAdjustmentsHorizontal className="text-slate-400 text-lg cursor-pointer hover:text-slate-900" />
                            </div>

                            <div className="space-y-4 my-2">
                                {analyticsData.map((item, i) => {
                                    const widthPercent = Math.min((item.count / maxBookingCount) * 100, 100);
                                    return (
                                        <div key={i} className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-slate-500 w-8 font-mono">{item.month}</span>
                                            <div className="flex-grow bg-slate-100 h-6 rounded-lg overflow-hidden relative border border-slate-200/50">
                                                <div
                                                    className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-600 to-[#00ffef] rounded-r-md transition-all duration-500 shadow-sm"
                                                    style={{ width: `${widthPercent}%` }}
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#020618] z-10">{item.count} Bookings</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                            <span>Data synchronized successfully</span>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                        <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 mb-5">Quick Actions</h3>

                            <div className="grid grid-cols-1 gap-2.5">
                                <Link to="/admin/students" className="w-full inline-flex items-center justify-between bg-[#020618] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm">
                                    <span className="flex items-center gap-2"><HiUserPlus className="text-sm text-[#00ffef]" /> Add Student</span>
                                    <HiPlus className="text-xs" />
                                </Link>

                                <Link to="/admin/appointment" className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all border border-slate-200">
                                    <span className="flex items-center gap-2"><HiCalendarDays className="text-sm text-blue-600" /> View Appointments</span>
                                    <HiArrowTopRightOnSquare className="text-xs text-slate-400" />
                                </Link>

                                <Link to="/admin/add-review" className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all border border-slate-200">
                                    <span className="flex items-center gap-2"><HiStar className="text-sm text-amber-500" /> Add Review</span>
                                    <HiPlus className="text-xs text-slate-400" />
                                </Link>

                                <Link to="/admin/students" className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all border border-slate-200">
                                    <span className="flex items-center gap-2"><HiUserGroup className="text-sm text-purple-600" /> Manage Student</span>
                                    <HiArrowTopRightOnSquare className="text-xs text-slate-400" />
                                </Link>
                            </div>
                        </div>

                        <div className="text-[10px] text-center text-slate-400 font-medium pt-4 mt-4 border-t border-slate-100">
                            Nexus Terminal Live Connection
                        </div>
                    </div>

                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 space-y-6">

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Recent Appointments</h3>
                                {searchQuery && <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded font-bold">Filtered Results</span>}
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs">
                                    <thead>
                                        <tr className="border-b border-slate-100 text-slate-400 font-bold">
                                            <th className="pb-3 font-semibold">Student Name</th>
                                            <th className="pb-3 font-semibold">Service / Phone</th>
                                            <th className="pb-3 font-semibold">Age</th>
                                            <th className="pb-3 text-right font-semibold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                                        {filteredAppointments.length > 0 ? (
                                            filteredAppointments.map((app) => (
                                                <tr key={app._id} className="hover:bg-slate-50/50 transition-colors">
                                                    <td className="py-3 font-bold text-slate-900">{app.fullName}</td>
                                                    <td className="py-3 text-slate-500">{app.service || app.phoneNumber || "Visa Consultation"}</td>
                                                    <td className="py-3 text-slate-400">{app.age || 25} Yrs</td>
                                                    <td className="py-3 text-right">
                                                        <span className={`px-2 py-0.5 text-[10px] rounded-md font-bold border ${app.status === "Confirmed" || !app.status ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                                                            app.status === "Pending" ? "bg-amber-50 text-amber-600 border-amber-200" :
                                                                "bg-rose-50 text-rose-600 border-rose-200"
                                                            }`}>
                                                            {app.status || "Confirmed"}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="py-6 text-center text-slate-400 italic">No matching appointments found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Recent Students</h3>
                                <span className="text-[10px] text-slate-400 font-medium">Total: {activeStudentsCount}</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {dashboardData?.recentStudents?.length > 0 ? (
                                    dashboardData.recentStudents.map((student, i) => (
                                        <div key={student._id || i} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between hover:bg-slate-100/50 transition-colors">
                                            <div>
                                                <div className="text-xs font-bold text-slate-900">{student.name}</div>
                                                <div className="text-[10px] text-slate-400 font-semibold mt-0.5">{student.indexNo || "L/2024"} • {student.program || "Vocational"}</div>
                                            </div>
                                            <HiEllipsisVertical className="text-slate-400 text-base cursor-pointer hover:text-slate-900" />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-xs text-slate-400 italic col-span-2 py-2">No recent student records available.</p>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Recent Reviews</h3>
                                <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-md font-bold">★ {averageRating} Avg</span>
                            </div>

                            <div className="space-y-3">
                                {dashboardData?.recentReviews?.length > 0 ? (
                                    dashboardData.recentReviews.map((review) => (
                                        <div key={review._id} className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1.5 hover:bg-slate-100/50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-slate-800">{review.name}</span>
                                                <div className="flex text-amber-500 text-[10px]">
                                                    {Array(5).fill(0).map((_, idx) => <HiStar key={idx} />)}
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-500 font-semibold">{review.university || "University Student"}</p>
                                            <p className="text-[11px] text-slate-400 italic leading-relaxed font-medium">Program: {review.program || "Vocational"}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-xs text-slate-400 italic py-4">No recent reviews submitted.</p>
                                )}
                            </div>
                        </div>

                        <Link to="/admin/reviews" className="w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-[10px] uppercase tracking-wider py-2.5 rounded-xl transition-all mt-4 border border-slate-200">
                            Read All Reviews
                        </Link>
                    </div>

                </section>

            </main>
        </div>
    );
}