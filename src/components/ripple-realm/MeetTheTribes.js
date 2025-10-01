"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const MeetTheTribes = () => {
    const [activeTab, setActiveTab] = useState("otters")

    const tribes = {
        otters: {
            name: "Otters",
            emoji: "🦦",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            role: "First Heroes & Ambassadors",
            description:
                "The brave pioneers who sparked the idea of unity across the Ripple Realm. 589 unique otters with vibrant colors and playful personalities.",
            traits: ["Explorers", "Diplomats", "Storytellers", "Unity Bringers"],
            status: "Available Now",
        },
        pandas: {
            name: "Pandas",
            emoji: "🐼",
            color: "text-green-500",
            bgColor: "bg-green-50",
            role: "Guardians of Balance",
            description:
                "Wise caretakers from bamboo forests who bring serenity and wisdom to the realm. Masters of nature communication.",
            traits: ["Mediators", "Nature Communicators", "Wisdom Keepers", "Peace Makers"],
            status: "Coming Soon",
        },
        bunnies: {
            name: "Bunnies",
            emoji: "🐰",
            color: "text-pink-500",
            bgColor: "bg-pink-50",
            role: "Sprightly Stewards",
            description:
                "Creative builders and farmers who transform communities with their ingenuity and teamwork. Masters of celebration.",
            traits: ["Builders", "Craftsmen", "Festival Organizers", "Community Leaders"],
            status: "Coming Soon",
        },
        penguins: {
            name: "Penguins",
            emoji: "🐧",
            color: "text-cyan-500",
            bgColor: "bg-cyan-50",
            role: "Navigators from Afar",
            description: "Brave explorers from icy southern isles who chart the seas and expand the realm's horizons.",
            traits: ["Navigators", "Map Makers", "Explorers", "Global Connectors"],
            status: "Coming Soon",
        },
        hedgehogs: {
            name: "Hedgehogs",
            emoji: "🦔",
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            role: "Keepers of Knowledge",
            description:
                "Small but mighty scholars who preserve all knowledge and create ingenious solutions for the realm.",
            traits: ["Scholars", "Librarians", "Engineers", "Record Keepers"],
            status: "Coming Soon",
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

                {/* Tribe Selector Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tribeKeys.map((tribe) => (
                        <motion.button
                            key={tribe}
                            onClick={() => setActiveTab(tribe)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${
                                activeTab === tribe
                                    ? `${tribes[tribe].color} bg-background shadow-lg scale-105`
                                    : "text-muted-foreground hover:text-foreground bg-card"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-2xl mr-2">{tribes[tribe].emoji}</span>
                            {tribes[tribe].name}
                        </motion.button>
                    ))}
                </div>

                {/* Active Tribe Details */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className={`${tribes[activeTab].bgColor} rounded-3xl p-8 shadow-xl`}>
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-4">{tribes[activeTab].emoji}</div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">{tribes[activeTab].name}</h3>
                            <p className={`text-xl font-semibold ${tribes[activeTab].color} mb-4`}>
                                {tribes[activeTab].role}
                            </p>
                            <div
                                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                                    activeTab === "otters"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground"
                                }`}
                            >
                                {tribes[activeTab].status}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-foreground">About</h4>
                                <p className="text-muted-foreground leading-relaxed">{tribes[activeTab].description}</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-3 text-foreground">Key Traits</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {tribes[activeTab].traits.map((trait, index) => (
                                        <motion.div
                                            key={trait}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-background rounded-lg px-3 py-2 text-sm font-medium text-center"
                                        >
                                            {trait}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default MeetTheTribes
