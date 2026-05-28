import React from "react";
import Header from "../components/header.jsx";
import HeroSection from "./home/heroSection.jsx";
import TrustBar from "./home/trustBar.jsx";
import WhyChooseUs from "./home/whyChooseUs.jsx";
import OurProcess from "./home/ourProcess.jsx";
import FeaturedUniversities from "./home/feturedUniversites.jsx";
import StudentReviews from "./home/studentReviews.jsx";
import CTABanner from "./home/ctaBanner.jsx";
import Footer from "../components/footer.jsx";

export default function HomePage() {
    return (
        <div className="w-full min-h-screen bg-[#020618]">
            <Header />
            <HeroSection />
            <TrustBar />
            <WhyChooseUs />
            <OurProcess />
            <FeaturedUniversities />
            <StudentReviews />
            <CTABanner />
            <Footer />
        </div>
    );
}