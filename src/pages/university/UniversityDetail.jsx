import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { universities } from "../../data/koreaData";

export default function UniversityDetail() {
  const { id } = useParams();
  const university = universities.find((u) => u.id === id);
  const [activeCategory, setActiveCategory] = useState(0);

  if (!university) {
    return <Navigate to="/university-not-found" replace />;
  }

  const {
    name,
    location,
    logo,
    overview,
    categories = [],
    features = [],
    students,
    image,
    bgGradient,
    shortName,
  } = university;

  const currentCategory = categories[activeCategory];
  const currentPrograms = currentCategory?.programs || [];

  return (
    <div className="w-full min-h-screen bg-primary text-accent font-outfit relative overflow-x-hidden selection:bg-secondary selection:text-accent">
      <Header />

      <div className="relative w-full h-[380px] lg:h-[460px] overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-accent via-accent/60 to-transparent opacity-90 ${
            bgGradient ? bgGradient : ""
          }`}
        />

        <div className="absolute inset-0 max-w-6xl mx-auto px-6 lg:px-8 flex items-end pb-10 lg:pb-14 z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full">
            {logo && (
              <div className="w-20 h-20 rounded-2xl bg-primary/95 backdrop-blur-md p-2.5 shadow-2xl ring-1 ring-white/20 flex-shrink-0 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`${shortName} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30 backdrop-blur-md">
                Verified Institution
              </span>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {name}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base font-medium flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>


      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12 space-y-16">
        {/* Overview Card */}
        <section className="bg-accent/5 border border-accent/10 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <h2 className="text-2xl font-bold text-accent tracking-tight mb-4 flex items-center gap-3">
            <span className="w-2 h-7 bg-secondary rounded-full inline-block" />
            Overview
          </h2>
          <p className="text-accent/80 text-base sm:text-lg leading-relaxed font-normal">
            {overview}
          </p>
          {students && (
            <div className="mt-6 inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-accent px-4 py-2 rounded-xl text-sm font-semibold">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>{students}</span>
            </div>
          )}
        </section>


        <section className="space-y-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-accent tracking-tight">
              Programs Offered
            </h2>
            <p className="text-accent/60 text-sm mt-1">
              Select a program category below to explore specific tracks and requirements.
            </p>
          </div>


          <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-accent/10 pb-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-accent text-primary shadow-lg shadow-accent/20 scale-105"
                    : "bg-accent/5 text-accent/70 hover:bg-accent/10 hover:text-accent border border-accent/10"
                }`}
              >
                {cat.type}
              </button>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPrograms.map((program, i) => (
              <div
                key={i}
                className="group border border-accent/10 bg-primary rounded-3xl p-6 sm:p-8 shadow-lg shadow-accent/5 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all pointer-events-none" />

                <div>
                  <span className="inline-block bg-secondary/20 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                    {currentCategory.type}
                  </span>
                  <h3 className="text-accent text-2xl font-bold mt-3 group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <InfoBox label="Duration" value={program.duration} />
                    <InfoBox label="Intake" value={program.intake} />
                    <InfoBox label="Fees" value={program.fees} />
                  </div>

                  <div className="mt-8">
                    <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                      Admission Requirements
                    </h4>
                    <ul className="space-y-2.5">
                      {program.requirements?.map((req, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 bg-accent/5 border border-accent/5 rounded-2xl p-3 text-sm text-accent/80"
                        >
                          <span className="w-5 h-5 rounded-full bg-secondary/30 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-accent/5">
                  <Link
                    to={`/appointment?university=${university.id}&program=${encodeURIComponent(
                      program.title
                    )}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-accent text-primary font-semibold hover:bg-secondary hover:text-accent transition-all duration-300 shadow-md group-hover:shadow-secondary/20"
                  >
                    <span>Apply for {program.title}</span>
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="space-y-6">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-accent tracking-tight">
              Fees & Duration — All Programs
            </h2>
            <p className="text-accent/60 text-sm mt-1">
              Complete program matrix. Select any row to filter the cards above to that category.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-accent/10 bg-primary shadow-xl shadow-accent/5">
            <table className="w-full text-left text-sm">
              <thead className="bg-accent text-primary uppercase text-xs tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Category</th>
                  <th className="p-4 sm:p-5">Program</th>
                  <th className="p-4 sm:p-5">Duration</th>
                  <th className="p-4 sm:p-5">Intake</th>
                  <th className="p-4 sm:p-5">Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/10">
                {categories.map((cat, ci) =>
                  cat.programs.map((program, pi) => (
                    <tr
                      key={`${ci}-${pi}`}
                      onClick={() => setActiveCategory(ci)}
                      className={`cursor-pointer transition-colors duration-200 ${
                        activeCategory === ci
                          ? "bg-secondary/15 text-accent font-medium"
                          : "text-accent/80 hover:bg-accent/5"
                      }`}
                    >
                      <td className="p-4 sm:p-5 font-semibold text-accent">
                        {cat.type}
                      </td>
                      <td className="p-4 sm:p-5 font-bold">{program.title}</td>
                      <td className="p-4 sm:p-5">{program.duration}</td>
                      <td className="p-4 sm:p-5">{program.intake}</td>
                      <td className="p-4 sm:p-5 font-semibold text-accent">
                        {program.fees}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>


        {features.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-accent tracking-tight">
              Why Choose {shortName}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-accent/5 border border-accent/10 rounded-2xl p-5 shadow-sm hover:border-secondary/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-secondary/20 text-accent flex items-center justify-center font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-accent/90 text-sm sm:text-base font-medium leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}


        <section className="pt-6 pb-12">
          <div className="relative rounded-3xl bg-accent text-primary p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Ready to apply to {shortName}?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Our team handles your entire application, visa, and pre-departure process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  to="/appointment"
                  className="px-8 py-3.5 rounded-full bg-secondary text-accent font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/20 scale-100 hover:scale-105"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="bg-accent/5 border border-accent/5 rounded-2xl p-3 text-center flex flex-col justify-center">
      <p className="text-accent font-bold text-xs sm:text-sm line-clamp-1">
        {value}
      </p>
      <p className="text-accent/50 text-[10px] sm:text-xs font-semibold mt-1 uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}