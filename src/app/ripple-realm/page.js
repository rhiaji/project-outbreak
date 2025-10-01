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
                    <div className="flex justify-center gap-6 mt-4">
                        <a
                            href="https://x.com/Outbreak_XRP"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X (Twitter)"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all shadow-lg"
                        >
                            {/* X logo SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M17.53 3H21L14.19 10.68L22.13 21H15.68L10.68 14.53L5.97 21H2L9.13 12.82L1.47 3H8.09L12.65 8.84L17.53 3ZM16.37 19H18.19L7.72 5H5.81L16.37 19Z" />
                            </svg>
                            <span className="font-semibold">X</span>
                        </a>
                        <a
                            href="https://t.me/+R7pVBMjJ-lZlNGE1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all shadow-lg"
                        >
                            {/* Telegram logo SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M9.04 16.47L9.25 19.39C9.57 19.39 9.71 19.25 9.87 19.09L11.25 17.77L14.18 19.84C14.72 20.13 15.13 19.97 15.27 19.36L17.93 7.27C18.13 6.51 17.67 6.19 17.07 6.41L4.47 11.09C3.74 11.37 3.75 11.78 4.36 11.97L7.47 12.97L15.13 8.36C15.47 8.16 15.78 8.28 15.53 8.5L9.04 16.47Z" />
                            </svg>
                            <span className="font-semibold">Telegram</span>
                        </a>
                    </div>
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
