"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import HeroSection from "@/components/whitepaper/HeroSection"
import TableOfContents from "@/components/whitepaper/TableOfContents"
import ExecutiveSummary from "@/components/whitepaper/ExecutiveSummary"
import ProjectVision from "@/components/whitepaper/ProjectVision"
import RippleRealm from "@/components/whitepaper/RippleRealm"
import NFTCollections from "@/components/whitepaper/NFTCollections"
import Tokenomics from "@/components/whitepaper/Tokenomics"
import TechnicalArchitecture from "@/components/whitepaper/TechnicalArchitecture"
import Roadmap from "@/components/whitepaper/Roadmap"
import CommunityGovernance from "@/components/whitepaper/CommunityGovernance"
import RiskFactors from "@/components/whitepaper/RiskFactors"
import Conclusion from "@/components/whitepaper/Conclusion"

const tableOfContents = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "project-vision", title: "Project Vision & Mission" },
    { id: "ripple-realm", title: "The Ripple Realm Universe" },
    { id: "nft-collections", title: "NFT Collections Overview" },
    { id: "tokenomics", title: "Tokenomics & Utility" },
    { id: "technical-architecture", title: "Technical Architecture" },
    { id: "roadmap", title: "Development Roadmap" },
    { id: "community", title: "Community & Governance" },
    { id: "risk-factors", title: "Risk Factors" },
    { id: "conclusion", title: "Conclusion" },
]

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const WhitepaperPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-card">
            <Navbar />
            <div className="pt-20">
                <HeroSection />
                <TableOfContents items={tableOfContents} scrollToSection={scrollToSection} />
                <ExecutiveSummary />
                <ProjectVision />
                <RippleRealm />
                <NFTCollections />
                <Tokenomics />
                <TechnicalArchitecture />
                <Roadmap />
                <CommunityGovernance />
                <RiskFactors />
                <Conclusion />
            </div>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default WhitepaperPage
