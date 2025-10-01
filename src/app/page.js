"use client"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import CollectionsSection from "@/components/CollectionsSection"
import UtilitySection from "@/components/UtilitySection"
import RoadmapSection from "@/components/RoadmapSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                {" "}
                {/* Add padding to account for fixed navbar */}
                <HeroSection />
                <AboutSection />
                <CollectionsSection />
                <UtilitySection />
                <RoadmapSection />
                <FAQSection />
                <Footer />
            </div>
            <BackToTop />
        </div>
    )
}

export default HomePage
