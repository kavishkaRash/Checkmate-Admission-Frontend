import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  IoStar, IoPersonOutline, IoChatbubbleEllipsesOutline,
  IoFingerPrintOutline, IoPencilOutline, IoLogoYoutube,
  IoArrowBack, IoCheckmarkCircle, IoSchoolOutline,
  IoLocationOutline, IoColorPaletteOutline, IoCalendarOutline,
} from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

// ── YouTube ID helper ──────────────────────────────────────────────────────
const getYouTubeId = (url) => {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
  );
  return match ? match[1] : null;
};

// ── Field wrapper ──────────────────────────────────────────────────────────
function Field({ label, icon, children, hint }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs font-black text-[#0f172a] uppercase tracking-wider mb-2">
        <span className="text-blue-500 text-sm">{icon}</span>
        {label}
      </label>
      {children}
      {hint && <p className="text-[11px] text-slate-400 font-medium mt-1.5">{hint}</p>}
    </div>
  );
}

// ── Star rating ────────────────────────────────────────────────────────────
function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1.5 mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform duration-100 hover:scale-125"
        >
          <IoStar
            className={`text-2xl transition-colors duration-150 ${
              star <= (hovered || value) ? "text-amber-400" : "text-slate-200"
            }`}
          />
        </button>
      ))}
      <span className="text-xs font-black text-[#0f172a] ml-2">{value}.0 / 5.0</span>
    </div>
  );
}

const inputCls = "w-full bg-slate-50 border border-slate-200 text-[#0f172a] placeholder-slate-300 text-sm font-medium px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all duration-200";

// ── Main ───────────────────────────────────────────────────────────────────
export default function UpdateAddNewReview() {
  const navigate = useNavigate();
  const { state: existing } = useLocation(); // pre-filled data from navigate state

  const [form, setForm] = useState({
    reviewId:   existing?.reviewId   || "",
    name:       existing?.name       || "",
    initials:   existing?.initials   || "",
    university: existing?.university || "",
    program:    existing?.program    || "",
    year:       existing?.year       || new Date().getFullYear().toString(),
    quote:      existing?.quote      || "",
    youtubeUrl: existing?.youtubeUrl || "",
    rating:     existing?.rating     || 5,
    color:      existing?.color      || "blue",
    location:   existing?.location   || "Seoul",
  });

  const [saving, setSaving] = useState(false);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleNameChange = (e) => {
    const name = e.target.value;
    const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    setForm((prev) => ({ ...prev, name, initials }));
  };

  async function updateReview() {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/login"); return; }

    if (!form.name || !form.quote || !form.youtubeUrl) {
      toast.error("Name, quote and YouTube URL are required");
      return;
    }

    setSaving(true);
    try {
      await axios.put(
        import.meta.env.VITE_API_URL + "/api/reviews/" + existing._id,
        { ...form, rating: Number(form.rating) },
        { headers: { Authorization: "Bearer " + token } }
      );
      toast.success("Review Updated Successfully! ✅");
      navigate("/admin/reviews");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update review");
    } finally {
      setSaving(false);
    }
  }

  const ytId = getYouTubeId(form.youtubeUrl);

  const avatarColorMap = {
    blue:   "bg-blue-50 text-blue-600 border-blue-100",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    green:  "bg-emerald-50 text-emerald-600 border-emerald-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-5xl mx-auto">

        {/* ── PAGE HEADER ── */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/admin/reviews")}
            className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-[#0f172a] transition-all shadow-sm"
          >
            <IoArrowBack />
          </button>
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-0.5">
              <IoPencilOutline className="text-sm" />
              <span className="text-[10px] font-black uppercase tracking-widest">Edit Mode</span>
            </div>
            <h1 className="text-2xl font-black text-[#0f172a] tracking-tight">Update Review</h1>
          </div>

          {/* Existing review indicator */}
          {existing && (
            <div className="ml-auto flex items-center gap-2 bg-amber-50 border border-amber-100 px-3 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] font-bold text-amber-600">Editing: {existing.name}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT — FORM ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Card 1 — Student Info */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-[#0f172a] mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center text-white text-[10px] font-black">1</span>
                Student Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Review ID" icon={<IoFingerPrintOutline />}>
                  <input value={form.reviewId} onChange={set("reviewId")} className={inputCls} placeholder="REV-001" />
                </Field>

                <Field label="Student Name" icon={<IoPersonOutline />} hint="Initials auto-generated">
                  <input value={form.name} onChange={handleNameChange} className={inputCls} placeholder="Full name" />
                </Field>

                <Field label="Initials" icon={<IoPersonOutline />} hint="Max 2 characters">
                  <input
                    value={form.initials}
                    onChange={(e) => setForm(p => ({ ...p, initials: e.target.value.toUpperCase().slice(0, 2) }))}
                    className={inputCls}
                    placeholder="e.g. RS"
                    maxLength={2}
                  />
                </Field>

                <Field label="Location" icon={<IoLocationOutline />}>
                  <input value={form.location} onChange={set("location")} className={inputCls} placeholder="e.g. Seoul" />
                </Field>

                <Field label="University" icon={<IoSchoolOutline />}>
                  <select value={form.university} onChange={set("university")} className={inputCls}>
                    <option value="">Select university</option>
                    <option value="Incheon National University">Incheon National University</option>
                    <option value="Sungkyunkwan University">Sungkyunkwan University</option>
                    <option value="Woosong University">Woosong University</option>
                    <option value="Konkuk University">Konkuk University</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>

                <Field label="Program" icon={<IoSchoolOutline />}>
                  <select value={form.program} onChange={set("program")} className={inputCls}>
                    <option value="">Select program</option>
                    <option value="Language Program">Language Program</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Vocational">Vocational</option>
                  </select>
                </Field>

                <Field label="Year" icon={<IoCalendarOutline />}>
                  <input value={form.year} onChange={set("year")} className={inputCls} placeholder="2025" />
                </Field>

                <Field label="Card Color" icon={<IoColorPaletteOutline />}>
                  <div className="flex items-center gap-2 mt-1">
                    {["blue", "indigo", "green", "purple"].map((c) => {
                      const bg = { blue: "bg-blue-500", indigo: "bg-indigo-500", green: "bg-emerald-500", purple: "bg-purple-500" }[c];
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, color: c }))}
                          className={`w-8 h-8 rounded-lg ${bg} transition-all duration-200 ${form.color === c ? "ring-2 ring-offset-2 ring-slate-400 scale-110" : "opacity-60 hover:opacity-100"}`}
                        />
                      );
                    })}
                    <span className="text-xs text-slate-400 font-medium ml-1 capitalize">{form.color}</span>
                  </div>
                </Field>
              </div>
            </div>

            {/* Card 2 — Review Content */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-[#0f172a] mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center text-white text-[10px] font-black">2</span>
                Review Content
              </h3>

              <div className="space-y-5">
                <Field label="Review Quote" icon={<IoChatbubbleEllipsesOutline />} hint={`${form.quote.length} characters`}>
                  <textarea
                    value={form.quote}
                    onChange={set("quote")}
                    className={inputCls + " resize-none"}
                    rows={4}
                    placeholder="Student's experience in their own words..."
                  />
                </Field>

                <Field label="Rating" icon={<IoStar />}>
                  <StarRating value={form.rating} onChange={(v) => setForm(p => ({ ...p, rating: v }))} />
                </Field>
              </div>
            </div>

            {/* Card 3 — YouTube */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-[#0f172a] mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center text-white text-[10px]">
                  <FaYoutube />
                </span>
                YouTube Video
              </h3>

              <Field label="Video URL" icon={<IoLogoYoutube />} hint="Paste the full YouTube video URL">
                <input
                  value={form.youtubeUrl}
                  onChange={set("youtubeUrl")}
                  className={inputCls}
                  placeholder="https://www.youtube.com/watch?v=xxxxxx"
                />
              </Field>
            </div>
          </div>

          {/* ── RIGHT — PREVIEW ── */}
          <div className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm sticky top-6">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xs font-black text-[#0f172a] uppercase tracking-wider">Live Preview</h3>
                <span className="text-[10px] font-bold text-amber-500 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-lg">Editing</span>
              </div>

              {/* Thumbnail */}
              <div className="relative h-40 bg-[#0f172a] overflow-hidden">
                {ytId ? (
                  <img
                    src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                    alt="preview"
                    className="w-full h-full object-cover opacity-80"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <FaYoutube className="text-slate-600 text-3xl" />
                    <span className="text-slate-600 text-xs font-medium">No video URL</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                {ytId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                      <svg className="w-4 h-4 text-[#0f172a] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Preview body */}
              <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(Number(form.rating))].map((_, i) => (
                    <IoStar key={i} className="text-amber-400 text-xs" />
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic leading-relaxed mb-4 line-clamp-3">
                  "{form.quote || "Student quote will appear here..."}"
                </p>
                <div className="flex items-center gap-2.5 border-t border-slate-100 pt-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border ${avatarColorMap[form.color]}`}>
                    {form.initials || "??"}
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#0f172a]">{form.name || "Student Name"}</div>
                    <div className="text-[10px] text-slate-400">{form.program || "Program"} · {form.year}</div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-5 pb-5 space-y-2">
                <button
                  onClick={updateReview}
                  disabled={saving}
                  className="group w-full relative inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-60 overflow-hidden"
                >
                  <IoCheckmarkCircle className="text-sm" />
                  <span>{saving ? "Saving..." : "Save Changes"}</span>
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </button>
                <button
                  onClick={() => navigate("/admin/reviews")}
                  className="w-full text-slate-400 text-xs font-bold uppercase tracking-widest py-2 hover:text-slate-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}