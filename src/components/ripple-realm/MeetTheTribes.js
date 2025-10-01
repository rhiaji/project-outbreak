"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import InteractiveTribeCard from "@/components/ui/InteractiveTribeCard"
import SectionDivider from "@/components/ui/SectionDivider"
import SwipeableCards from "@/components/ui/SwipeableCards"

const MeetTheTribes = () => {
    const [activeTab, setActiveTab] = useState("otters")

    const tribes = {
        otters: {
            name: "Otters",
            emoji: "🦦",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            role: "First Heroes & Ambassadors",
            shortDescription: "Brave pioneers who sparked unity",
            description:
                "The brave pioneers who sparked the idea of unity across the Ripple Realm. 589 unique otters with vibrant colors and playful personalities.",
            traits: ["Explorers", "Diplomats", "Storytellers", "Unity Bringers"],
            status: "Available Now",
            funFacts: [
                "First tribe to explore beyond their home waters",
                "Known for their signature floating formations",
                "Can communicate through ripple patterns",
                "Masters of underwater treasure hunting",
            ],
            specialTrait: "Unity Spark - Ability to inspire cooperation between different species",
        },
        pandas: {
            name: "Pandas",
            emoji: "🐼",
            color: "text-green-500",
            bgColor: "bg-green-50",
            role: "Guardians of Balance",
            shortDescription: "Wise caretakers bringing serenity",
            description:
                "Wise caretakers from bamboo forests who bring serenity and wisdom to the realm. Masters of nature communication.",
            traits: ["Mediators", "Nature Communicators", "Wisdom Keepers", "Peace Makers"],
            status: "Coming Soon",
            funFacts: [
                "Can understand the language of plants",
                "Sleep 14 hours a day but dream of great adventures",
                "Their black and white fur represents balance",
                "Bamboo grows faster in their presence",
            ],
            specialTrait: "Nature Harmony - Ability to restore ecological balance",
        },
        bunnies: {
            name: "Bunnies",
            emoji: "🐰",
            color: "text-pink-500",
            bgColor: "bg-pink-50",
            role: "Sprightly Stewards",
            shortDescription: "Creative builders and celebrators",
            description:
                "Creative builders and farmers who transform communities with their ingenuity and teamwork. Masters of celebration.",
            traits: ["Builders", "Craftsmen", "Festival Organizers", "Community Leaders"],
            status: "Coming Soon",
            funFacts: [
                "Can build entire villages in a single day",
                "Their ear positions convey complex emotions",
                "Expert carrot cultivators and recipe inventors",
                "Organize the realm's best seasonal festivals",
            ],
            specialTrait: "Creative Burst - Ability to inspire innovative solutions",
        },
        penguins: {
            name: "Penguins",
            emoji: "🐧",
            color: "text-cyan-500",
            bgColor: "bg-cyan-50",
            role: "Navigators from Afar",
            shortDescription: "Brave explorers from icy seas",
            description: "Brave explorers from icy southern isles who chart the seas and expand the realm's horizons.",
            traits: ["Navigators", "Map Makers", "Explorers", "Global Connectors"],
            status: "Coming Soon",
            funFacts: [
                "Can slide on ice at incredible speeds",
                "Their formal waddle is actually a complex dance",
                "Navigate by the stars and ocean currents",
                "Each penguin has a unique call signature",
            ],
            specialTrait: "Pathfinding - Ability to find routes through any terrain",
        },
        hedgehogs: {
            name: "Hedgehogs",
            emoji: "🦔",
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            role: "Keepers of Knowledge",
            shortDescription: "Mighty scholars and inventors",
            description:
                "Small but mighty scholars who preserve all knowledge and create ingenious solutions for the realm.",
            traits: ["Scholars", "Librarians", "Engineers", "Record Keepers"],
            status: "Coming Soon",
            funFacts: [
                "Can memorize entire libraries in a single night",
                "Their spines store information like data crystals",
                "Invented the realm's first communication devices",
                "Roll into balls to think faster",
            ],
            specialTrait: "Knowledge Matrix - Ability to instantly access any stored information",
        },
    }

    const tribeKeys = Object.keys(tribes)

    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Meet the <span className="text-gradient">Tribes</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Each tribe brings unique strengths to the Ripple Realm
                    </p>
                </div>

                {/* Interactive Tribe Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {Object.values(tribes).map((tribe, index) => (
                        <InteractiveTribeCard key={tribe.name} tribe={tribe} index={index} />
                    ))}
                </div>

                {/* Mobile Swipeable Cards for detailed traits */}
                <SwipeableCards
                    title="Explore Tribe Abilities"
                    cards={Object.values(tribes).map((tribe) => ({
                        icon: tribe.emoji,
                        title: `${tribe.name} Abilities`,
                        description: `${tribe.description} Special traits: ${tribe.traits.join(", ")}.`,
                    }))}
                />

                <SectionDivider type="pawprints" />
            </div>
        </section>
    )
}

export default MeetTheTribes
