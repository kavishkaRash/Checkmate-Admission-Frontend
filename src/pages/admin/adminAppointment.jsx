import axios from "axios";
import { useEffect, useState } from "react";
import { IoCalendarOutline, IoMailOutline, IoCallOutline, IoPersonOutline, IoSchoolOutline, IoLocationOutline, IoAirplaneOutline, IoBanOutline } from "react-icons/io5";
import Loader from "../../components/Loader";
import AppointmentInfoModal from "../../components/appointmentInfoModel";

export default function AdminAppointment() {
    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        if (isLoading) {
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_API_URL + "/api/appointment/all", {
                headers: { Authorization: `Bearer ${token}` }
            }).then((response) => {
                setAppointments(response.data);
                setIsLoading(false);
            }).catch((error) => {
                console.log("ERROR:", error.message);
                setIsLoading(false);
            });
        }
    }, [isLoading]);

    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case 'hold': return 'bg-orange-50 text-orange-600 border-orange-100';
            case 'approve': return 'bg-green-50 text-green-600 border-green-100';
            case 'reject': return 'bg-rose-50 text-rose-600 border-rose-100';
            default: return 'bg-accent/[0.03] text-accent/40 border-accent/5';
        }
    };

    const handleRowClick = (item) => {
        setSelectedAppointment(item);
        setIsModelOpen(true);
    };

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] p-4 lg:p-10 selection:bg-secondary selection:text-accent font-outfit">
            

            <AppointmentInfoModal 
                selectedAppointment={selectedAppointment} 
                isModelOpen={isModelOpen} 
                closeModal={() => setIsModelOpen(false)} 
                refresh={() => setIsLoading(true)} 
            />

            <div className="max-w-[1600px] mx-auto">


                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div className="animate-in fade-in slide-in-from-left duration-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-[1px] w-8 bg-secondary"></div>
                            <p className="text-[10px] text-secondary tracking-[5px] uppercase font-black">Management</p>
                        </div>
                        <h1 className="font-syne font-extrabold text-3xl lg:text-5xl text-accent tracking-tighter">
                            Client <span className="text-accent/20 font-light italic">Inquiries</span>
                        </h1>
                    </div>


                    <div className="bg-white border border-accent/5 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-secondary">
                            <IoCalendarOutline size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] uppercase tracking-[2px] text-accent/40 font-bold">Total Directory</p>
                            <p className="text-xl font-syne font-bold text-accent">
                                {isLoading ? "..." : appointments.length.toString().padStart(2, '0')}{" "}
                                <span className="text-[10px] text-secondary font-black uppercase tracking-wider ml-1">People</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-white border border-accent/5 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.02)] overflow-hidden">


                    <div className="hidden lg:block overflow-x-auto custom-scrollbar">
                        <table className="w-full border-collapse min-w-[1200px]">
                            <thead className="bg-accent/[0.01] border-b border-accent/5 text-[10px] uppercase tracking-[3px] font-black text-accent/30">
                                <tr>
                                    <th className="py-8 px-8 text-left italic">Applicant</th>
                                    <th className="py-8 px-6 text-left">Academic Info</th>
                                    <th className="py-8 px-6 text-left">Visa & Target</th>
                                    <th className="py-8 px-6 text-left">Direct Contact</th>
                                    <th className="py-8 px-8 text-right">Status</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-accent/[0.02]">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="5" className="py-32 text-center">
                                            <div className="flex justify-center"><Loader /></div>
                                        </td>
                                    </tr>
                                ) : appointments.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-32 text-center">
                                            <div className="flex flex-col items-center justify-center opacity-30 gap-2">
                                                <IoBanOutline size={32} />
                                                <p className="text-xs uppercase font-black tracking-widest">No Records Found</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    appointments.map((item) => (
                                        <tr 
                                            key={item._id}
                                            onClick={() => handleRowClick(item)} 
                                            className="group hover:bg-secondary/[0.015] cursor-pointer transition-all duration-200"
                                        >
                                            <td className="py-6 px-8">
                                                <p className="font-syne font-bold text-accent group-hover:text-secondary transition-colors text-[15px]">{item.fullName}</p>
                                                <p className="text-[11px] text-accent/40 font-medium mt-0.5">{item.age} Years Old</p>
                                            </td>
                                            <td className="py-6 px-6">
                                                <div className="flex items-center gap-2 text-[13px] font-bold text-accent/80">
                                                    <IoSchoolOutline className="text-secondary/70" size={14} /> {item.education}
                                                </div>
                                                <p className="text-[11px] text-accent/30 italic ml-5 mt-0.5 truncate max-w-[220px]">{item.university || "Not Provided"}</p>
                                            </td>
                                            <td className="py-6 px-6">
                                                <div className="flex items-center gap-2 text-[12px] font-bold text-accent/80 uppercase">
                                                    <IoAirplaneOutline className="text-accent/40" size={14} /> {item.visaType}
                                                </div>
                                                <p className="text-[10px] font-black text-secondary tracking-widest ml-5 uppercase mt-0.5">{item.Destination || "S. KOREA"}</p>
                                            </td>
                                            <td className="py-6 px-6" onClick={(e) => e.stopPropagation()}>
                                                {/* Stop propagation blocks row click event when firing dialers directly */}
                                                <a href={`tel:${item.phoneNumber}`} className="flex items-center gap-2 text-[12px] font-bold text-accent hover:text-secondary transition-colors mb-1 w-fit">
                                                    <IoCallOutline className="text-secondary" /> {item.phoneNumber}
                                                </a>
                                                <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-[11px] text-accent/40 hover:text-secondary transition-colors italic w-fit truncate max-w-[200px]">
                                                    <IoMailOutline /> {item.email}
                                                </a>
                                            </td>
                                            <td className="py-6 px-8 text-right">
                                                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusStyles(item.status)}`}>
                                                    {item.status || "Reviewing"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>


                    <div className="lg:hidden divide-y divide-accent/5">
                        {isLoading ? (
                            <div className="py-20 flex justify-center"><Loader /></div>
                        ) : appointments.length === 0 ? (
                            <div className="py-20 flex flex-col items-center justify-center opacity-30 gap-2">
                                <IoBanOutline size={32} />
                                <p className="text-xs uppercase font-black tracking-widest">No Records Found</p>
                            </div>
                        ) : (
                            appointments.map((item) => (
                                <div 
                                    key={item._id} 
                                    onClick={() => handleRowClick(item)}
                                    className="p-6 bg-white active:bg-secondary/[0.02] cursor-pointer transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-syne font-bold text-lg text-accent leading-none group-hover:text-secondary">{item.fullName}</h3>
                                            <p className="text-[11px] text-accent/40 font-bold mt-1 uppercase tracking-wider">{item.age} Years • {item.education}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-md text-[8px] font-black uppercase border ${getStatusStyles(item.status)}`}>
                                            {item.status || "Reviewing"}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2.5 mb-5">
                                        <div className="flex items-center gap-3 text-accent/60">
                                            <IoAirplaneOutline className="text-secondary" size={15} />
                                            <span className="text-[12px] font-bold">{item.visaType} to {item.Destination || "Korea"}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-accent/60">
                                            <IoLocationOutline className="text-secondary" size={15} />
                                            <span className="text-[11px] font-medium italic truncate max-w-[280px]">{item.address || "No address provided"}</span>
                                        </div>
                                    </div>


                                    <div className="flex gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
                                        <a
                                            href={`tel:${item.phoneNumber}`}
                                            className="flex-1 h-12 bg-accent text-primary rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] tracking-widest uppercase shadow-lg shadow-accent/10 active:scale-95 transition-all"
                                        >
                                            <IoCallOutline size={16} className="text-secondary" /> Call
                                        </a>
                                        <a
                                            href={`mailto:${item.email}`}
                                            className="w-12 h-12 border border-accent/10 rounded-xl flex items-center justify-center text-accent/40 active:bg-accent/5 transition-all"
                                        >
                                            <IoMailOutline size={18} />
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar { height: 5px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 239, 0.1); border-radius: 10px; }
                `}
            </style>
        </div>
    );
}