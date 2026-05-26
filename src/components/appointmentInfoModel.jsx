import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { IoClose, IoTimeOutline, IoCheckmarkDoneOutline, IoCloseCircleOutline, IoPersonOutline, IoSchoolOutline, IoLocationOutline, IoMailOutline, IoCallOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

export default function AppointmentInfoModal({ isModelOpen, selectedAppointment, closeModal, refresh }) {
    
    if (!isModelOpen || !selectedAppointment) return null;

    
    const updateStatus = (newStatus) => {
    const token = localStorage.getItem("token");
    axios.put(
        `${import.meta.env.VITE_API_URL}/api/appointment/status/${selectedAppointment._id}`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(() => {
        toast.success(`Appointment marked as ${newStatus}`);
        refresh();
        closeModal();
    })
    .catch((error) => {
        console.error(error);
        toast.error("Failed to update Appointment status");
    });
};

    return (
        <div className="fixed inset-0 bg-accent/40 backdrop-blur-xl flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300">
            
            {/* Modal Container */}
            <div className="bg-white/95 backdrop-blur-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white flex flex-col relative animate-in zoom-in-95 duration-300 font-outfit">
                
                {/* Header Section */}
                <div className="p-6 md:p-8 border-b border-accent/5 flex justify-between items-center bg-accent/[0.01]">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                            <IoShieldCheckmarkOutline size={24} />
                        </div>
                        <div>
                            <h2 className="font-syne font-extrabold text-xl md:text-2xl text-accent tracking-tight">Applicant Dossier</h2>
                            <p className="text-[10px] uppercase tracking-[3px] font-black text-accent/30 mt-1">
                                ID: #{selectedAppointment._id?.slice(-8).toUpperCase()}
                            </p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={closeModal}
                        className="w-10 h-10 rounded-full bg-accent/[0.03] border border-accent/5 flex items-center justify-center text-accent/50 hover:text-accent hover:bg-accent/10 transition-all"
                    >
                        <IoClose size={20} />
                    </button>
                </div>

                {/* Content Section (Scrollable) */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-8 custom-scrollbar flex-1">
                    
                    {/* Status Indicator */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-accent/[0.02] border border-accent/5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-accent/40">Current Status</span>
                        <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                            ${selectedAppointment.status === 'delivered' ? 'bg-green-50 text-green-600 border border-green-100' : 
                              selectedAppointment.status === 'pending' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 
                              'bg-rose-50 text-rose-600 border border-rose-100'}
                        `}>
                            {selectedAppointment.status || "In Review"}
                        </span>
                    </div>

                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Left Side: Student Profile */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] uppercase tracking-[3px] font-black text-secondary border-b border-accent/5 pb-2">
                                Student Core Profile
                            </h3>
                            
                            <div className="space-y-3.5">
                                <div className="flex items-center gap-3">
                                    <IoPersonOutline className="text-accent/30" />
                                    <div>
                                        <p className="text-xs text-accent/40 font-bold uppercase tracking-wider leading-none mb-0.5">Full Name</p>
                                        <p className="font-syne font-bold text-base text-accent">{selectedAppointment.fullName}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <p className="text-[10px] text-accent/40 font-bold uppercase tracking-wider">Age</p>
                                        <p className="text-sm font-bold text-accent/80">{selectedAppointment.age} Yrs</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-accent/40 font-bold uppercase tracking-wider">Destination</p>
                                        <p className="text-sm font-bold text-secondary uppercase tracking-wider">{selectedAppointment.country || "South Korea"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoSchoolOutline className="text-accent/30" />
                                    <div>
                                        <p className="text-xs text-accent/40 font-bold uppercase tracking-wider leading-none mb-0.5">Education & Target</p>
                                        <p className="text-sm font-bold text-accent/80 capitalize">{selectedAppointment.education}</p>
                                        <p className="text-[11px] text-accent/40 italic mt-0.5">{selectedAppointment.university || "No specific university listed"}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] text-accent/40 font-bold uppercase tracking-wider mb-1">Visa Type Requested</p>
                                    <span className="inline-block bg-accent text-primary text-[10px] font-black tracking-widest px-3 py-1 rounded">
                                        {selectedAppointment.visaType || "Student Visa"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact & Communication */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] uppercase tracking-[3px] font-black text-secondary border-b border-accent/5 pb-2">
                                Contact & Communication
                            </h3>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <a href={`tel:${selectedAppointment.Phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-accent/[0.02] border border-accent/5 text-sm font-bold text-accent hover:text-secondary hover:border-secondary/20 transition-all">
                                        <IoCallOutline className="text-secondary" size={16} />
                                        {selectedAppointment.Phone || selectedAppointment.phoneNumber || "No Phone Data"}
                                    </a>
                                    <a href={`mailto:${selectedAppointment.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-accent/[0.02] border border-accent/5 text-sm font-medium text-accent/70 hover:text-secondary hover:border-secondary/20 transition-all truncate">
                                        <IoMailOutline className="text-secondary" size={16} />
                                        {selectedAppointment.email}
                                    </a>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-[10px] text-accent/40 font-bold uppercase tracking-wider flex items-center gap-1">
                                        <IoLocationOutline /> Permanent Address
                                    </p>
                                    <p className="text-xs text-accent/70 leading-relaxed bg-accent/[0.02] p-3 rounded-xl border border-accent/5 italic font-light">
                                        {selectedAppointment.address || "No address provided."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Section */}
                    <div className="space-y-2">
                        <h3 className="text-[10px] uppercase tracking-[3px] font-black text-secondary">Statement / Notes</h3>
                        <p className="text-sm text-accent/80 bg-secondary/5 p-4 rounded-2xl border border-secondary/10 whitespace-pre-line leading-relaxed">
                            {selectedAppointment.message || "No custom message attached to this inquiry."}
                        </p>
                    </div>
                </div>

                {/* Footer Section: Action Buttons */}
                <div className="p-6 md:p-8 bg-accent/[0.01] border-t border-accent/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                    
                    {/* Status Updates */}
                    <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <span className="text-[9px] uppercase tracking-widest font-black text-accent/40 text-center sm:text-left">
                            Update Registration Workflow
                        </span>
                        <div className="flex justify-center sm:justify-start gap-2">
                            <button 
                                onClick={() => updateStatus('approve')}  
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-50 hover:bg-green-600 text-green-600 hover:text-primary font-bold text-xs tracking-wider uppercase transition-all shadow-sm border border-green-100 active:scale-95" 
                                title="Approve / Mark Delivered"
                            >
                                <IoCheckmarkDoneOutline size={16} /> Approve
                            </button>
                            <button 
                                onClick={() => updateStatus('hold')} 
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-600 text-orange-600 hover:text-primary font-bold text-xs tracking-wider uppercase transition-all shadow-sm border border-orange-100 active:scale-95" 
                                title="Hold / Set Pending"
                            >
                                <IoTimeOutline size={16} /> Hold
                            </button>
                            <button 
                                onClick={() => updateStatus('reject')} 
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-primary font-bold text-xs tracking-wider uppercase transition-all shadow-sm border border-rose-100 active:scale-95" 
                                title="Reject Inquiry"
                            >
                                <IoCloseCircleOutline size={16} /> Reject
                            </button>
                        </div>
                    </div>

                    {/* Timestamp */}
                    <div className="text-center sm:text-right w-full sm:w-auto">
                        <span className="text-[10px] uppercase tracking-wider text-accent/30 block">Submission Date</span>
                        <span className="text-xs font-bold text-accent/60 mt-1 block">
                            {selectedAppointment.date || selectedAppointment.createdAt ? new Date(selectedAppointment.date || selectedAppointment.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : "N/A"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 239, 0.2); border-radius: 10px; }
            `}</style>
        </div>
    );
}