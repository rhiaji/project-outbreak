"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import WorldOverview from "@/components/ripple-realm/WorldOverview"
import OutbreakEvent from "@/components/ripple-realm/OutbreakEvent"
import LedgerCity from "@/components/ripple-realm/LedgerCity"
import MeetTheTribes from "@/components/ripple-realm/MeetTheTribes"
import OtterOutbreak from "@/components/ripple-realm/OtterOutbreak"
import PandaOutbreak from "@/components/ripple-realm/PandaOutbreak"
import BunnyOutbreak from "@/components/ripple-realm/BunnyOutbreak"
import PenguinOutbreak from "@/components/ripple-realm/PenguinOutbreak"
import HedgehogOutbreak from "@/components/ripple-realm/HedgehogOutbreak"
import BeyondOutbreaks from "@/components/ripple-realm/BeyondOutbreaks"
import SectionDivider from "@/components/ui/SectionDivider"
import LoreTimeline from "@/components/ui/LoreTimeline"
import SectionCTA from "@/components/ui/SectionCTA"

const RippleRealm = () => {
    const timelineEvents = [
        {
            title: "The Awakening",
            description: "The Ripple Realm comes into existence as a balanced world",
            icon: "🌊",
            date: "Beginning of Time",
        },
        {
            title: "The Great Outbreak",
            description: "Animals begin their transformation and awakening",
            icon: "⚡",
            date: "The First Era",
        },
        {
            title: "Ledger City Founded",
            description: "The great city becomes the center of the realm",
            icon: "🏛️",
            date: "Second Era",
        },
        {
            title: "Tribal Unity",
            description: "Different species learn to cooperate and thrive together",
            icon: "🤝",
            date: "Current Era",
        },
        {
            title: "Future Expansion",
            description: "New realms and possibilities await discovery",
            icon: "🚀",
            date: "Coming Soon",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-card">
            <Navbar />
            <div className="pt-20">
                {" "}
                {/* Add padding to account for fixed navbar */}
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
                    <Image
                        src="/assets/logo.png"
                        alt="The Ripple Realm"
                        width={192}
                        height={96}
                        className="w-32 sm:w-40 md:w-48 mx-auto mb-6 sm:mb-8 drop-shadow-2xl"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground px-4">
                        The <span className="text-gradient">Ripple Realm</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
                        A living world of land and water that accommodates all creatures
                    </p>
                </section>
                <SectionDivider type="ripples" />
                {/* Lore Sections */}
                <WorldOverview />
                <SectionCTA
                    title="Discover the World"
                    description="Explore the vast landscapes and hidden secrets of our realm"
                    buttonText="Learn About Geography"
                    icon="🗺️"
                />
                <SectionDivider type="waves" />
                <OutbreakEvent />
                <SectionDivider type="pawprints" />
                <LedgerCity />
                <SectionCTA
                    title="Visit Ledger City"
                    description="Experience the bustling heart of civilization in the Ripple Realm"
                    buttonText="Explore the City"
                    icon="🏛️"
                />
                <SectionDivider type="ripples" />
                <LoreTimeline events={timelineEvents} />
                <SectionDivider type="waves" />
                <MeetTheTribes />
                <SectionDivider type="pawprints" />
                <OtterOutbreak />
                <SectionCTA
                    title="Meet the Otters"
                    description="Join the brave pioneers who started it all"
                    buttonText="Mint Otters Now"
                    buttonHref="https://xrp.cafe/collection/otters-outbreak"
                    isExternal={true}
                    variant="default"
                    icon="🦦"
                />
                <SectionDivider type="waves" />
                <PandaOutbreak />
                <SectionDivider type="ripples" />
                <BunnyOutbreak />
                <SectionDivider type="pawprints" />
                <PenguinOutbreak />
                <SectionDivider type="waves" />
                <HedgehogOutbreak />
                <SectionDivider type="ripples" />
                <BeyondOutbreaks />
            </div>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default RippleRealm
