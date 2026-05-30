import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaRegEdit, FaYoutube } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { IoClose, IoWarningOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";

/* ── YouTube ID helper ── */
const getYouTubeId = (url) => {
  const match = url?.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/
  );
  return match ? match[1] : null;
};

/* ── Delete Confirm Modal ── */
function DeleteConfirm({ reviewId, close, refresh }) {
  const [deleting, setDeleting] = useState(false);

  function handleDelete() {
    const token = localStorage.getItem("token");
    setDeleting(true);
    axios
      .delete(import.meta.env.VITE_API_URL + "/api/reviews/" + reviewId, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Review deleted successfully");
        close();
        refresh();
      })
      .catch(() => {
        toast.error("Failed to delete review");
        setDeleting(false);
      });
  }

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl shadow-[#0f172a]/10 border border-slate-200 relative">
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <IoClose size={16} className="text-slate-500" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 mx-auto bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mb-4">
            <IoWarningOutline size={24} className="text-red-500" />
          </div>
          <h2 className="text-lg font-black text-[#0f172a] mb-1 tracking-tight">Delete Review?</h2>
          <p className="text-sm text-slate-400 font-medium mb-6">This action cannot be undone.</p>

          <div className="flex gap-3">
            <button
              onClick={close}
              className="flex-1 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-bold transition-colors disabled:opacity-60"
            >
              {deleting ? "Deleting..." : "Yes, Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */
export default function AdminReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(import.meta.env.VITE_API_URL + "/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const filtered = reviews.filter((r) =>
    r.name?.toLowerCase().includes(search.toLowerCase()) ||
    r.university?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div>
          <h1 className="text-xl font-black text-[#0f172a] tracking-tight">Reviews Management</h1>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            {reviews.length} total reviews · Manage student success stories
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMagnifyingGlass className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search reviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-[#0f172a] placeholder-slate-400 transition-all font-medium w-52"
            />
          </div>
          {/* Add button */}
          <Link
            to="/admin/add-review"
            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <FaPlus className="text-[10px]" />
            Add Review
          </Link>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Reviews", value: reviews.length, color: "text-[#0f172a]" },
          { label: "Avg Rating", value: reviews.length ? (reviews.reduce((a, r) => a + (r.rating || 5), 0) / reviews.length).toFixed(1) : "—", color: "text-amber-500" },
          { label: "Universities", value: [...new Set(reviews.map(r => r.university))].length, color: "text-blue-600" },
          { label: "This Month", value: reviews.filter(r => new Date(r.createdAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length, color: "text-[#0f172a]" },
        ].map((s, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl px-5 py-4 text-center hover:shadow-md transition-all duration-300">
            <div className={`text-2xl font-black tracking-tight ${s.color}`}>{s.value}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── TABLE ── */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

        {/* Table header */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
          <h3 className="text-sm font-black text-[#0f172a]">
            All Reviews
            <span className="ml-2 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {filtered.length}
            </span>
          </h3>
        </div>

        {loading ? (
          <div className="p-16 flex justify-center">
            <Loader />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-sm font-medium">
            No reviews found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-6 py-3">Video</th>
                  <th className="px-6 py-3">Student</th>
                  <th className="px-6 py-3">University</th>
                  <th className="px-6 py-3">Quote</th>
                  <th className="px-6 py-3 text-center">Rating</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map((item) => {
                  const ytId = getYouTubeId(item.youtubeUrl);
                  return (
                    <tr key={item._id} className="hover:bg-slate-50/60 transition-colors duration-150 group">

                      {/* Video thumbnail */}
                      <td className="px-6 py-4">
                        <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                          {ytId ? (
                            <img
                              src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                              <FaYoutube className="text-slate-400 text-xl" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-[#0f172a]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaYoutube className="text-white text-sm" />
                          </div>
                        </div>
                      </td>

                      {/* Name */}
                      <td className="px-6 py-4">
                        <div className="font-black text-sm text-[#0f172a]">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">{item.program} · {item.year}</div>
                      </td>

                      {/* University */}
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {item.university?.split(" ").slice(0, 2).join(" ")}
                        </span>
                      </td>

                      {/* Quote */}
                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-xs text-slate-400 font-medium truncate italic">"{item.quote}"</p>
                      </td>

                      {/* Rating */}
                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-lg">
                          <span className="text-amber-400 text-xs">★</span>
                          <span className="text-xs font-black text-amber-600">{item.rating}</span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => navigate("/admin/update-reviews", { state: item })}
                            className="w-8 h-8 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-500 rounded-lg flex items-center justify-center transition-all duration-200"
                          >
                            <FaRegEdit className="text-xs" />
                          </button>
                          <button
                            onClick={() => setDeleteId(item._id)}
                            className="w-8 h-8 bg-red-50 hover:bg-red-500 hover:text-white text-red-500 rounded-lg flex items-center justify-center transition-all duration-200"
                          >
                            <FaRegTrashCan className="text-xs" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Table footer */}
        {!loading && filtered.length > 0 && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
            <p className="text-[11px] text-slate-400 font-medium">
              Showing <span className="text-[#0f172a] font-bold">{filtered.length}</span> of{" "}
              <span className="text-[#0f172a] font-bold">{reviews.length}</span> reviews
            </p>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteId && (
        <DeleteConfirm
          reviewId={deleteId}
          close={() => setDeleteId(null)}
          refresh={fetchReviews}
        />
      )}
    </div>
  );
}