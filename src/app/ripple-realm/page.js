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

const RippleRealm = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-card">
            <Navbar />
            <div className="pt-20">
                {" "}
                {/* Add padding to account for fixed navbar */}
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-20 text-center">
                    <Image
                        src="/assets/logo.png"
                        alt="The Ripple Realm"
                        width={192}
                        height={96}
                        className="w-48 mx-auto mb-8 drop-shadow-2xl"
                    />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                        The <span className="text-gradient">Ripple Realm</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
                        A living world of land and water that accommodates all creatures
                    </p>
                </section>
                {/* Lore Sections */}
                <WorldOverview />
                <OutbreakEvent />
                <LedgerCity />
                <MeetTheTribes />
                <OtterOutbreak />
                <PandaOutbreak />
                <BunnyOutbreak />
                <PenguinOutbreak />
                <HedgehogOutbreak />
                <BeyondOutbreaks />
            </div>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default RippleRealm
