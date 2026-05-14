import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoBanOutline, IoClose, IoShieldCheckmarkOutline, IoMailOutline, IoCallOutline, IoPersonOutline } from "react-icons/io5";
import Loader from "../../components/Loader";

function BlockUserDeleteConfirm(props) {
    const email = props.user?.email;
    const isBlocking = !props.user?.isBlock;
    const close = props.close;
    const refresh = props.refresh;


    function blockUser() {
        const token = localStorage.getItem("token");
        axios.put(import.meta.env.VITE_API_URL + "/api/users/block/" +email, {
            isBlock: isBlocking,
        }, {
            headers: { Authorization: `Bearer ${token}` }
            
        }).then(() => {
            close();
            toast.success(isBlocking ? "User restricted successfully" : "User access restored");
            refresh();
        }).catch(() => {
            toast.error("Process failed. Please try again.");
        });
    }

    return (
        <div className="fixed inset-0 w-full h-screen bg-accent/60 backdrop-blur-md z-[100] flex justify-center items-center p-4 animate-in fade-in duration-300">
            <div className="w-full max-w-[420px] bg-primary border border-accent/10 rounded-[2rem] p-10 relative animate-in zoom-in-95 duration-300 shadow-2xl">
                
                <button
                    onClick={close}
                    className="absolute right-6 top-6 w-10 h-10 flex items-center justify-center rounded-full text-accent/30 hover:text-accent hover:bg-accent/5 transition-all"
                >
                    <IoClose size={22} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border-2 rotate-3 ${
                        isBlocking
                            ? 'bg-rose-50 text-rose-500 border-rose-100'
                            : 'bg-secondary/10 text-secondary border-secondary/30'
                    }`}>
                        {isBlocking ? <IoBanOutline size={36} /> : <IoShieldCheckmarkOutline size={36} />}
                    </div>

                    <h2 className="font-syne font-bold text-2xl text-accent tracking-tight mb-3">
                        {isBlocking ? "Confirm Restriction" : "Restore Access"}
                    </h2>

                    <p className="font-outfit text-sm text-accent/50 leading-relaxed mb-6">
                        Are you sure you want to change the access status for <br/>
                        <span className="text-secondary font-semibold font-outfit">{email}</span>?
                    </p>

                    <div className="flex w-full gap-4">
                        <button
                            onClick={close}
                            className="flex-1 py-4 rounded-xl bg-accent/5 text-accent/60 font-outfit text-xs font-bold tracking-[2px] uppercase hover:bg-accent/10 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={blockUser}
                            className={`flex-1 py-4 rounded-xl text-xs font-outfit font-bold tracking-[2px] uppercase transition-all shadow-lg active:scale-95 ${
                                isBlocking
                                    ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200'
                                    : 'bg-secondary text-accent hover:opacity-90 shadow-secondary/30'
                            }`}
                        >
                            {isBlocking ? "Restrict" : "Restore"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AdminUserPage() {
    const [users, setUsers] = useState([]);
    const [isBlockConfirmVisible, setIsBlockConfirmVisible] = useState(false);
    const [userToBlock, setUserToBlock] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_API_URL + "/api/users/all-users", {
                headers: { Authorization: `Bearer ${token}` }
            }).then((response) => {
                setUsers(response.data);
                setIsLoading(false);
            }).catch((error) => {
                console.log("ERROR:", error.message);
            });
        }
    }, [isLoading]);

    return (
        <div className="w-full min-h-screen bg-primary p-6 lg:p-12 selection:bg-secondary selection:text-accent">
            {isBlockConfirmVisible && (
                <BlockUserDeleteConfirm
                    refresh={() => setIsLoading(true)}
                    user={userToBlock}
                    close={() => setIsBlockConfirmVisible(false)}
                />
            )}

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="h-[2px] w-8 bg-secondary"></div>
                            <p className="font-outfit text-[11px] text-secondary tracking-[4px] uppercase font-bold">
                                Management
                            </p>
                        </div>
                        <h1 className="font-syne font-extrabold text-4xl lg:text-5xl text-accent tracking-tighter">
                            System <span className="text-accent/30 font-light">Users</span>
                        </h1>
                    </div>

                    <div className="bg-accent/5 backdrop-blur-sm border border-accent/5 p-2 rounded-2xl flex items-center gap-6 pr-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                            <IoPersonOutline size={20} className="text-accent" />
                        </div>
                        <div>
                            <p className="text-[10px] font-outfit uppercase tracking-widest text-accent/40 font-bold">Total Directory</p>
                            <p className="text-xl font-syne font-bold text-accent">
                                {isLoading ? "..." : users.length} <span className="text-[12px] font-medium opacity-50">Members</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-white border border-accent/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-accent/[0.01] border-b border-accent/5">
                                    <th className="py-7 px-8 text-[10px] uppercase tracking-[3px] font-bold text-accent/40 text-left font-outfit">User Profile</th>
                                    <th className="py-7 px-8 text-[10px] uppercase tracking-[3px] font-bold text-accent/40 text-left font-outfit">Contact Info</th>
                                    <th className="py-7 px-8 text-[10px] uppercase tracking-[3px] font-bold text-accent/40 text-center font-outfit">Permissions</th>
                                    <th className="py-7 px-8 text-[10px] uppercase tracking-[3px] font-bold text-accent/40 text-right font-outfit">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-accent/[0.03]">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={4} className="py-32 text-center">
                                            <div className="flex justify-center scale-150"><Loader /></div>
                                        </td>
                                    </tr>
                                ) : users.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="py-32 text-center font-outfit text-accent/30 tracking-widest uppercase text-xs">
                                            No accounts found in database
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user) => (
                                        <tr key={user._id} className="group hover:bg-secondary/[0.02] transition-all duration-300">
                                            {/* Profile */}
                                            <td className="py-6 px-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-accent text-primary flex items-center justify-center font-syne font-bold text-sm shadow-lg group-hover:bg-secondary group-hover:text-accent transition-all duration-500">
                                                        {user.firstName?.[0]}{user.lastName?.[0]}
                                                    </div>
                                                    <div>
                                                        <p className="font-syne font-bold text-[15px] text-accent tracking-tight">
                                                            {user.firstName} {user.lastName}
                                                        </p>
                                                        <div className="flex items-center gap-1.5 mt-1">
                                                            <div className={`w-1.5 h-1.5 rounded-full ${user.isBlock ? 'bg-rose-400' : 'bg-secondary'}`}></div>
                                                            <p className="text-[11px] font-outfit font-medium text-accent/30 uppercase tracking-tighter">
                                                                {user.isBlock ? 'Restricted' : 'Active Account'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Contact */}
                                            <td className="py-6 px-8">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-accent/50 group-hover:text-accent transition-colors">
                                                        <IoMailOutline size={14} className="text-secondary" />
                                                        <span className="font-outfit text-[13px]">{user.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-accent/30">
                                                        <IoCallOutline size={14} />
                                                        <span className="font-outfit text-[12px]">{user.phoneNumber || "N/A"}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Role */}
                                            <td className="py-6 px-8 text-center">
                                                <span className="px-4 py-1.5 rounded-full text-[10px] font-outfit font-bold tracking-widest uppercase bg-accent/5 text-accent/60 border border-accent/5 group-hover:border-secondary/30 transition-all">
                                                    {user.role}
                                                </span>
                                            </td>

                                            {/* Actions */}
                                            <td className="py-6 px-8 text-right">
                                                <button
                                                    onClick={() => { setUserToBlock(user); setIsBlockConfirmVisible(true); }}
                                                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-outfit font-bold uppercase tracking-[2px] transition-all duration-300 border ${
                                                        user.isBlock
                                                            ? 'bg-secondary text-accent border-secondary shadow-lg shadow-secondary/20 hover:brightness-105'
                                                            : 'bg-white border-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white hover:border-rose-500'
                                                    }`}
                                                >
                                                    {user.isBlock ? "Restore" : "Restrict"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}