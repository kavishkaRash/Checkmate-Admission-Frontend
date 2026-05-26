import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
    IoSchoolOutline, IoTrashOutline, IoCreateOutline, IoEyeOutline, 
    IoSearchOutline, IoFilterOutline, IoCalendarOutline, IoCallOutline, IoMailOutline 
} from "react-icons/io5";
import Loader from "../../components/Loader";

const EMPTY_FORM = {
    indexNo: "", name: "", birthday: "", passportNumber: "",
    applyingUniversity: "", applyingProgram: "", applyingMajor: "",
    applyingSemester: "January", 
    city: "", postalCode: "", address: "",
    applicantPhone: "", parentsPhone: "", email: "",
    sponsorName: "", sponsorRelation: "",
    instituteCategory: "", schoolName: "", results: "",
    gpa: "", entranceDate: "", graduateDate: "",
    ieltsScore: "", showMoney: "", incomeSources: "",
};

const SelectField = ({ label, name, value, onChange, options }) => (
    <div>
        <label className="block text-xs font-bold text-accent/40 uppercase tracking-wider mb-1.5 ml-0.5">
            {label}
        </label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border border-accent/10 bg-white px-4 py-2.5 rounded-xl text-sm text-accent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const Field = ({ label, name, value, onChange, placeholder, type = "text", span }) => (
    <div className={span === 2 ? "md:col-span-2" : ""}>
        <label className="block text-xs font-bold text-accent/40 uppercase tracking-wider mb-1.5 ml-0.5">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full border border-accent/10 bg-accent/[0.01] px-4 py-2.5 rounded-xl text-sm text-accent focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
        />
    </div>
);

const Section = ({ number, title }) => (
    <h3 className="text-[10px] font-black uppercase tracking-[3px] text-secondary border-b border-accent/5 pb-2 mb-4 mt-2">
        {number}. {title}
    </h3>
);

const Toast = ({ msg, type }) =>
    msg ? (
        <div className={`fixed bottom-6 right-6 z-[100] px-5 py-3 rounded-xl shadow-xl text-xs font-bold uppercase tracking-wider transition-all animate-in fade-in slide-in-from-bottom duration-300 ${type === "error" ? "bg-rose-600 text-white" : "bg-green-600 text-white"}`}>
            {msg}
        </div>
    ) : null;

export default function AdminStudentPage() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [selectedSemester, setSelectedSemester] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [form, setForm] = useState(EMPTY_FORM);
    const [saving, setSaving] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [toast, setToast] = useState({ msg: "", type: "success" });

    const notify = (msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast({ msg: "", type: "success" }), 3000);
    };

    const fetchStudents = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            const queryParams = {};
            if (search) queryParams.search = search;
            if (selectedSemester) queryParams.semester = selectedSemester;
            if (selectedYear) queryParams.year = selectedYear;

            const res = await axios.get("http://localhost:5001/api/students", {
                params: queryParams,
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            setStudents(res.data?.data || res.data || []);
        } catch (err) {
            notify(err.response?.data?.message || "Failed to load students", "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [selectedSemester, selectedYear]);

    const handleSearch = (e) => {
        if (e.key === "Enter") fetchStudents();
    };

    const openAdd = () => {
        setForm(EMPTY_FORM);
        setEditingId(null);
        setShowForm(true);
    };

    const openEdit = (student) => {
        setForm({ ...student });
        setEditingId(student._id);
        setSelectedStudent(null);
        setShowForm(true);
    };

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        const token = localStorage.getItem("token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        try {
            if (editingId) {
                await axios.put(`http://localhost:5001/api/students/${editingId}`, form, { headers });
                notify("Student record updated successfully");
            } else {
                await axios.post("http://localhost:5001/api/students", form, { headers });
                notify("Student registered successfully");
            }
            setShowForm(false);
            fetchStudents();
        } catch (err) {
            notify(err.response?.data?.message || "Save failed", "error");
        } finally {
            setSaving(false);
        }
    };

    const confirmDelete = async () => {
        if (!deleteConfirm) return;
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`http://localhost:5001/api/students/${deleteConfirm._id}`, {
                headers: token ? { Authorization: `Bearer ${token}` } : {}
            });
            notify("Student profile deleted permanently");
            setDeleteConfirm(null);
            setSelectedStudent(null);
            fetchStudents();
        } catch (err) {
            notify(err.response?.data?.message || "Delete operations failed", "error");
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] p-3 sm:p-6 lg:p-10 selection:bg-secondary selection:text-accent font-outfit text-accent">

            <Toast msg={toast.msg} type={toast.type} />

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-12">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[1px] w-8 bg-secondary"></div>
                        <p className="text-[10px] text-secondary tracking-[5px] uppercase font-black">Registrar</p>
                    </div>
                    <h1 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-5xl text-accent tracking-tighter">
                        Visa <span className="text-accent/20 font-light italic">Applications</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center gap-3 w-full lg:w-auto">
                    <div className="relative w-full lg:w-48">
                        <select
                            value={selectedSemester}
                            onChange={(e) => setSelectedSemester(e.target.value)}
                            className="w-full appearance-none border border-accent/10 bg-white rounded-xl pl-10 pr-4 h-[46px] text-xs font-bold uppercase tracking-wider text-accent/70 outline-none focus:border-secondary transition cursor-pointer"
                        >
                            <option value="">All Semesters</option>
                            <option value="January">January intake</option>
                            <option value="March">March intake</option>
                            <option value="June">June intake</option>
                            <option value="September">September intake</option>
                        </select>
                        <IoFilterOutline className="absolute left-3.5 top-3.5 text-accent/40" size={16} />
                    </div>

                    <div className="relative w-full lg:w-36">
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="w-full appearance-none border border-accent/10 bg-white rounded-xl pl-10 pr-4 h-[46px] text-xs font-bold uppercase tracking-wider text-accent/70 outline-none focus:border-secondary transition cursor-pointer"
                        >
                            <option value="">All Years</option>
                            <option value="2026">2026</option>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                        </select>
                        <IoFilterOutline className="absolute left-3.5 top-3.5 text-accent/40" size={16} />
                    </div>

                    <div className="relative w-full sm:col-span-2 lg:w-64">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                            placeholder="Search name, passport..."
                            className="w-full border border-accent/10 bg-white rounded-xl pl-10 pr-4 h-[46px] text-sm outline-none focus:border-secondary transition"
                        />
                        <IoSearchOutline className="absolute left-3.5 top-3.5 text-accent/30" size={16} />
                    </div>

                    <button onClick={fetchStudents} className="w-full lg:w-auto bg-accent text-primary text-xs font-black tracking-widest uppercase h-[46px] px-6 rounded-xl hover:bg-secondary hover:text-accent transition duration-300">
                        Search
                    </button>

                    <button onClick={openAdd} className="w-full lg:w-auto bg-secondary text-accent text-xs font-black tracking-widest uppercase h-[46px] px-6 rounded-xl hover:bg-accent hover:text-primary shadow-lg shadow-secondary/10 transition duration-300 whitespace-nowrap">
                        + Add Student
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-[2rem] border border-accent/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="px-5 sm:px-8 py-5 bg-accent/[0.01] border-b border-accent/5 flex items-center justify-between">
                    <h3 className="font-syne font-bold text-sm text-accent/80 tracking-tight">
                        Active Profiles Directory{" "}
                        {selectedSemester && <span className="text-secondary font-light">({selectedSemester} Intake)</span>}
                        <span className="bg-secondary/20 text-accent text-[10px] font-black px-2.5 py-0.5 rounded-full ml-1.5">
                            {students.length} Filtered
                        </span>
                    </h3>
                </div>

                {loading ? (
                    <Loader />
                ) : students.length === 0 ? (
                    <div className="p-16 sm:p-24 text-center text-accent/40 font-medium text-sm tracking-wide">No applicant profiles detected for this selection.</div>
                ) : (
                    <>
                        <div className="block md:hidden divide-y divide-accent/[0.05] p-2 space-y-3 bg-accent/[0.01]">
                            {students.map((s) => (
                                <div key={s._id} className="bg-white p-4 rounded-2xl border border-accent/5 space-y-3 shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="font-mono font-bold text-secondary text-[11px] block">{s.indexNo || "N/A"}</span>
                                            <h4 className="font-syne font-bold text-accent text-base mt-0.5">{s.name}</h4>
                                        </div>
                                        <span className="px-2 py-0.5 rounded text-[9px] font-black tracking-wider uppercase bg-accent/5 text-accent/70 border border-accent/5">
                                            {s.applyingSemester || "January"}
                                        </span>
                                    </div>

                                    <div className="text-xs space-y-1 text-accent/70 pt-1 border-t border-accent/[0.03]">
                                        <p><span className="font-medium text-accent/40">Passport:</span> <span className="font-mono font-bold">{s.passportNumber}</span></p>
                                        <p className="flex items-center gap-1"><IoSchoolOutline className="text-secondary/60" /> <span className="font-bold">{s.applyingUniversity}</span> ({s.applyingProgram})</p>
                                        <p className="text-[11px] font-mono text-accent/40 flex items-center gap-1"><IoCalendarOutline /> Applied: {s.createdAt ? new Date(s.createdAt).toLocaleDateString() : "N/A"}</p>
                                    </div>

                                    <div className="flex items-center gap-2 pt-2 border-t border-accent/[0.03]">
                                        {s.applicantPhone && (
                                            <a 
                                                href={`tel:${s.applicantPhone}`} 
                                                className="flex-1 flex items-center justify-center gap-1.5 h-9 bg-green-50 border border-green-200 text-green-700 font-bold text-xs rounded-xl active:bg-green-600 active:text-white transition"
                                            >
                                                <IoCallOutline size={14} /> Call Student
                                            </a>
                                        )}
                                        <div className="flex items-center gap-1">
                                            <button onClick={() => setSelectedStudent(s)} className="p-2.5 rounded-xl bg-accent/[0.02] border border-accent/5 text-accent/50" title="View"><IoEyeOutline size={15} /></button>
                                            <button onClick={() => openEdit(s)} className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-orange-600" title="Edit"><IoCreateOutline size={15} /></button>
                                            <button onClick={() => setDeleteConfirm(s)} className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-600" title="Delete"><IoTrashOutline size={15} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block overflow-x-auto custom-scrollbar">
                            <table className="w-full text-left border-collapse min-w-[1100px]">
                                <thead>
                                    <tr className="bg-accent/[0.01] text-accent/30 text-[10px] uppercase tracking-[3px] font-black border-b border-accent/5">
                                        <th className="py-6 px-8 italic">Index No</th>
                                        <th className="py-6 px-4">Student Identity</th>
                                        <th className="py-6 px-4">Passport ID</th>
                                        <th className="py-6 px-4">University & Framework</th>
                                        <th className="py-6 px-4">Semester</th>
                                        <th className="py-6 px-4">Applied Date</th>
                                        <th className="py-6 px-8 text-center">Operations</th>
                                    </tr>
                                </thead>
                                <tbody className="text-accent text-sm divide-y divide-accent/[0.02]">
                                    {students.map((s) => (
                                        <tr key={s._id} className="hover:bg-secondary/[0.015] transition-colors group">
                                            <td className="py-5 px-8 font-mono font-bold text-secondary text-xs">{s.indexNo || "N/A"}</td>
                                            <td className="py-5 px-4">
                                                <span className="font-syne font-bold text-accent group-hover:text-secondary transition-colors block">{s.name}</span>
                                                {s.applicantPhone && (
                                                    <a href={`tel:${s.applicantPhone}`} className="inline-flex items-center gap-1 text-[11px] font-medium text-green-600 hover:underline mt-0.5">
                                                        <IoCallOutline size={12} /> {s.applicantPhone} (Tap to Call)
                                                    </a>
                                                )}
                                            </td>
                                            <td className="py-5 px-4 font-mono text-xs text-accent/60">{s.passportNumber}</td>
                                            <td className="py-5 px-4">
                                                <span className="font-bold text-accent/80 flex items-center gap-1.5"><IoSchoolOutline className="text-secondary/60" /> {s.applyingUniversity}</span>
                                                <span className="block text-xs text-accent/40 font-light mt-0.5 ml-5">{s.applyingProgram} — <span className="italic">{s.applyingMajor}</span></span>
                                            </td>
                                            <td className="py-5 px-4">
                                                <span className="px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider uppercase bg-accent/5 text-accent/70 border border-accent/5">
                                                    {s.applyingSemester || "January"}
                                                </span>
                                            </td>
                                            <td className="py-5 px-4 font-mono text-xs text-accent/50">
                                                <span className="flex items-center gap-1"><IoCalendarOutline className="text-accent/30" /> {s.createdAt ? new Date(s.createdAt).toLocaleDateString() : "N/A"}</span>
                                            </td>
                                            <td className="py-5 px-8">
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <button onClick={() => setSelectedStudent(s)} className="p-2 rounded-xl bg-accent/[0.02] border border-accent/5 text-accent/50 hover:text-secondary hover:border-secondary/20 transition"><IoEyeOutline size={15} /></button>
                                                    <button onClick={() => openEdit(s)} className="p-2 rounded-xl bg-orange-50/50 border border-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white transition"><IoCreateOutline size={15} /></button>
                                                    <button onClick={() => setDeleteConfirm(s)} className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 hover:bg-rose-600 hover:text-white transition"><IoTrashOutline size={15} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>

            {selectedStudent && (
                <Modal onClose={() => setSelectedStudent(null)}>
                    <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-accent/5 z-10 flex justify-between items-start gap-4">
                        <div>
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-secondary/10 text-accent px-2.5 py-1 rounded-md border border-secondary/20">REF: {selectedStudent.indexNo}</span>
                            <h2 className="font-syne font-extrabold text-xl sm:text-2xl text-accent mt-2">{selectedStudent.name}</h2>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                            <button onClick={() => openEdit(selectedStudent)} className="px-3 py-1.5 bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider transition border border-orange-100">Edit</button>
                            <button onClick={() => setSelectedStudent(null)} className="w-8 h-8 flex items-center justify-center text-accent/40 bg-accent/[0.03] hover:bg-accent/10 rounded-full font-bold transition text-lg">&times;</button>
                        </div>
                    </div>

                    <div className="p-5 sm:p-8 space-y-8 text-sm max-h-[70vh] overflow-y-auto custom-scrollbar">
                        <div>
                            <Section number="1" title="Personal & Contact Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <Info label="Birthday / Age" value={selectedStudent.birthday} />
                                <Info label="Passport Number" value={selectedStudent.passportNumber} mono />
                                <Info label="Email Address" value={selectedStudent.email} />
                                
                                <div>
                                    <span className="text-accent/40 block text-[10px] font-black uppercase tracking-wider">Applicant Mobile</span>
                                    {selectedStudent.applicantPhone ? (
                                        <a href={`tel:${selectedStudent.applicantPhone}`} className="text-green-600 font-bold flex items-center gap-1 hover:underline mt-0.5">
                                            <IoCallOutline size={14} /> {selectedStudent.applicantPhone}
                                        </a>
                                    ) : <span className="text-accent/50 text-sm">Not Provided</span>}
                                </div>
                                <div>
                                    <span className="text-accent/40 block text-[10px] font-black uppercase tracking-wider">Parents Mobile</span>
                                    {selectedStudent.parentsPhone ? (
                                        <a href={`tel:${selectedStudent.parentsPhone}`} className="text-green-600 font-bold flex items-center gap-1 hover:underline mt-0.5">
                                            <IoCallOutline size={14} /> {selectedStudent.parentsPhone}
                                        </a>
                                    ) : <span className="text-accent/50 text-sm">Not Provided</span>}
                                </div>

                                <Info label="City / Postal Code" value={`${selectedStudent.city} (${selectedStudent.postalCode || "N/A"})`} />
                                <div className="sm:col-span-2 md:col-span-3"><Info label="Permanent Residence Address" value={selectedStudent.address} /></div>
                            </div>
                        </div>
                        <div>
                            <Section number="2" title="Applying Program Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                <Info label="Target University" value={selectedStudent.applyingUniversity} bold />
                                <Info label="Program Route" value={selectedStudent.applyingProgram} />
                                <Info label="Academic Major" value={selectedStudent.applyingMajor} />
                                <Info label="Intake Semester" value={selectedStudent.applyingSemester || "January"} badge="purple" />
                            </div>
                        </div>
                        <div>
                            <Section number="3" title="Academic History" />
                            <div className="bg-accent/[0.01] border border-accent/5 p-4 sm:p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Info label="Institute Category" value={selectedStudent.instituteCategory} />
                                <Info label="School / Alma Mater Name" value={selectedStudent.schoolName} />
                                <Info label="A/L or Graduation Results Summary" value={selectedStudent.results} mono />
                                <Info label="Cumulative GPA / Total Marks" value={selectedStudent.gpa} />
                                <Info label="Study Lifecycle Duration" value={`${selectedStudent.entranceDate || "N/A"} → ${selectedStudent.graduateDate || "N/A"}`} />
                                <Info label="IELTS / Language Score" value={selectedStudent.ieltsScore} />
                            </div>
                        </div>
                        <div>
                            <Section number="4" title="Sponsor & Financial Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Info label="Financial Sponsor Name" value={selectedStudent.sponsorName} />
                                <Info label="Relationship Matrix" value={selectedStudent.sponsorRelation} badge="purple" />
                                <div className="sm:col-span-2"><Info label="Show Money Portfolio Status" value={selectedStudent.showMoney} badge="green" /></div>
                                <div className="sm:col-span-2 bg-amber-50/50 p-4 rounded-2xl border border-amber-100/60">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-700 block mb-1.5">Income Sources Verification Breakdown</span>
                                    <p className="text-accent/80 text-xs leading-relaxed font-medium whitespace-pre-line">{selectedStudent.incomeSources || "No specific verification matrix attached."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-accent/5 z-10 flex justify-between items-center">
                        <h2 className="font-syne font-extrabold text-lg sm:text-xl text-accent">{editingId ? "Modify Applicant Profile" : "Enroll New Visa Profile"}</h2>
                        <button onClick={() => setShowForm(false)} className="w-8 h-8 flex items-center justify-center text-accent/40 bg-accent/[0.03] hover:bg-accent/10 rounded-full font-bold transition text-lg">&times;</button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8 text-sm max-h-[75vh] overflow-y-auto custom-scrollbar">
                        <div>
                            <Section number="1" title="Personal & Contact Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Index Number" name="indexNo" value={form.indexNo} onChange={handleChange} placeholder="UOM/STU/2026/01" />
                                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Full legal name" />
                                <Field label="Birthday" name="birthday" value={form.birthday} onChange={handleChange} placeholder="YYYY.MM.DD" />
                                <Field label="Passport Number" name="passportNumber" value={form.passportNumber} onChange={handleChange} placeholder="P0000000" />
                                <Field label="Email Address" name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" type="email" />
                                <Field label="Applicant Phone" name="applicantPhone" value={form.applicantPhone} onChange={handleChange} placeholder="+94 700 000 000" />
                                <Field label="Parents Phone" name="parentsPhone" value={form.parentsPhone} onChange={handleChange} placeholder="+94 700 000 000" />
                                <Field label="City" name="city" value={form.city} onChange={handleChange} placeholder="City" />
                                <Field label="Postal Code" name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="00000" />
                                <Field label="Permanent Residence Address" name="address" value={form.address} onChange={handleChange} placeholder="Full address" span={2} />
                            </div>
                        </div>

                        <div>
                            <Section number="2" title="Applying Program Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <Field label="Target University" name="applyingUniversity" value={form.applyingUniversity} onChange={handleChange} placeholder="e.g. Incheon" />
                                <Field label="Program Route" name="applyingProgram" value={form.applyingProgram} onChange={handleChange} placeholder="e.g. Language" />
                                <Field label="Academic Major" name="applyingMajor" value={form.applyingMajor} onChange={handleChange} placeholder="e.g. Korean Studies" />
                                <SelectField
                                    label="Intake Semester"
                                    name="applyingSemester"
                                    value={form.applyingSemester || "January"}
                                    onChange={handleChange}
                                    options={["January", "March", "June", "September"]}
                                />
                            </div>
                        </div>

                        <div>
                            <Section number="3" title="Academic History" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Institute Category" name="instituteCategory" value={form.instituteCategory} onChange={handleChange} placeholder="e.g. High School" />
                                <Field label="School / Institute Name" name="schoolName" value={form.schoolName} onChange={handleChange} placeholder="School name" />
                                <Field label="A/L or Degree Results Summary" name="results" value={form.results} onChange={handleChange} placeholder="A-1, C-6..." />
                                <Field label="GPA / Marks Hierarchy" name="gpa" value={form.gpa} onChange={handleChange} placeholder="4.00" />
                                <Field label="Entrance Date" name="entranceDate" value={form.entranceDate} onChange={handleChange} placeholder="YYYY.MM.DD" />
                                <Field label="Graduate Date" name="graduateDate" value={form.graduateDate} onChange={handleChange} placeholder="YYYY.MM.DD" />
                                <Field label="IELTS / Language Score" name="ieltsScore" value={form.ieltsScore} onChange={handleChange} placeholder="e.g. 6.5" span={2} />
                            </div>
                        </div>

                        <div>
                            <Section number="4" title="Sponsor & Financial Information" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Sponsor Full Name" name="sponsorName" value={form.sponsorName} onChange={handleChange} placeholder="Full name" />
                                <Field label="Sponsor Relation Matrix" name="sponsorRelation" value={form.sponsorRelation} onChange={handleChange} placeholder="e.g. Mother" />
                                <Field label="Show Money Portfolio Status" name="showMoney" value={form.showMoney} onChange={handleChange} placeholder="Admission package status" span={2} />
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-bold text-accent/40 uppercase tracking-wider mb-1.5 ml-0.5">Income Sources Verification Ledger</label>
                                    <textarea
                                        name="incomeSources"
                                        value={form.incomeSources || ""}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="House Rent - 70,000..."
                                        className="w-full border border-accent/10 bg-accent/[0.01] p-4 rounded-xl text-sm focus:border-secondary outline-none transition resize-none text-accent font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-accent/5 pt-6 flex justify-end gap-3">
                            <button type="button" onClick={() => setShowForm(false)} className="h-11 px-5 border border-accent/10 rounded-xl text-xs font-black uppercase tracking-wider text-accent/60 hover:bg-accent/[0.02] transition">Dismiss</button>
                            <button type="submit" disabled={saving} className="h-11 px-6 bg-accent hover:bg-secondary hover:text-accent disabled:opacity-60 text-primary font-black text-xs uppercase tracking-widest rounded-xl shadow-md transition">
                                {saving ? "Processing…" : editingId ? "Commit Changes" : "Save Portfolio"}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}

            {deleteConfirm && (
                <div className="fixed inset-0 bg-accent/40 backdrop-blur-sm flex justify-center items-center z-[110] p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-[2rem] border border-accent/5 w-full max-w-sm p-6 shadow-2xl">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4 text-rose-600 border border-rose-100"><IoTrashOutline size={20} /></div>
                            <h3 className="font-syne font-bold text-gray-800 text-lg mb-1">Purge Profile?</h3>
                            <p className="text-accent/60 text-xs font-medium leading-relaxed mb-6">This will permanently delete <span className="font-bold text-accent">{deleteConfirm.name}</span>. This operation is irreversible.</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteConfirm(null)} className="flex-1 h-11 border border-accent/10 rounded-xl text-xs font-black uppercase tracking-wider text-accent/60 hover:bg-accent/[0.02] transition">Cancel</button>
                            <button onClick={confirmDelete} className="flex-1 h-11 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition shadow-md">Yes, Purge</button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 239, 0.15); border-radius: 10px; }
            `}</style>
        </div>
    );
}

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-accent/30 backdrop-blur-md flex justify-center items-start z-50 p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-300" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="bg-white rounded-2xl sm:rounded-[2.5rem] border border-accent/5 w-full max-w-4xl my-4 sm:my-8 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">{children}</div>
        </div>
    );
}

function Info({ label, value, mono, bold, badge }) {
    let valueEl = <span className={`text-accent font-semibold tracking-tight block ${mono ? "font-mono text-xs" : "text-sm"} ${bold ? "font-syne font-bold text-sm sm:text-base text-accent" : ""}`}>{value || "Not Provided"}</span>;
    if (badge === "purple") valueEl = <span className="inline-block bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mt-0.5">{value}</span>;
    if (badge === "green") valueEl = <span className="inline-block bg-green-50 text-green-700 border border-green-100 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider mt-0.5">{value}</span>;
    return (
        <div className="space-y-0.5">
            <span className="text-accent/40 block text-[10px] font-black uppercase tracking-wider">{label}</span>
            {valueEl}
        </div>
    );
}