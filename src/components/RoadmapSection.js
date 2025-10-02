import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const RoadmapSection = () => {
    const mintDate = new Date("2025-10-04T18:00:00+08:00") // 6PM PHT (GMT+8)

    // Countdown state
    const [countdown, setCountdown] = useState("")

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date()
            const diff = mintDate - now
            if (diff <= 0) {
                setCountdown("Minting is live!")
                return
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            const seconds = Math.floor((diff / 1000) % 60)
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        }
        updateCountdown()
        const timer = setInterval(updateCountdown, 1000)
        return () => clearInterval(timer)
    }, [])
    const phases = [
        {
            phase: "Phase 1",
            title: "NFT Art Creation",
            description: "All NFT artworks for the collection are completed.",
            status: "done",
        },
        {
            phase: "Phase 3",
            title: "Community Channels",
            description: "Twitter account and Telegram group are live.",
            status: "done",
        },
        {
            phase: "Phase 4",
            title: "Website Launch",
            description: "Project Outbreak website is launched.",
            status: "done",
        },
        {
            phase: "Phase 5",
            title: "NFT Minting & Launch",
            description:
                "Otters Outbreak NFT collection launches on XRPL.\n\nMinting will be on Oct 4, 2025 – 6PM PHT (GMT+8)\n6AM EST | 10AM UTC | 11AM CET",
            status: "current",
        },
        {
            phase: "Phase 6",
            title: "Token Creation & Initial Liquidity",
            description:
                "• Create our native token on XRPL with proper issuer setup\n• Use NFT funds to seed liquidity pool (token ↔ XRP)\n• Utilize XRPL's native AMM system (XLS-30) for trading\n\nPurpose: Establish tradability and initial liquidity for seamless token transactions",
            status: "upcoming",
        },
        {
            phase: "Phase 7",
            title: "Token Utility for Free Mints",
            description:
                "• Tokens can be used to purchase free mints for new collections\n• Token holders get exclusive access to mint new outbreaks at no additional cost\n• Simple token-to-mint exchange system\n\nPurpose: Drive token demand through direct utility for accessing new NFT collections",
            status: "future",
        },
        {
            phase: "Phase 8",
            title: "Future Collections & Expansion",
            description:
                "Pandas, Bunnies, Penguins, Hedgehogs, and more join the realm with enhanced token integration. Next collections launch in 2026 and beyond. No free airdrops to token-only holders for new collections.",
            status: "future",
        },
        {
            phase: "Phase 9",
            title: "New Outbreaks Expansion",
            description:
                "Pandas, Bunnies, Penguins, Hedgehogs, and more join the realm with enhanced token integration.",
            status: "future",
        },
        {
            phase: "Phase 10",
            title: "Treasury Growth & Ongoing Reinforcement",
            description:
                "• Allocate NFT mint revenues to continuously add liquidity\n• Use royalties from secondary sales to bolster pools\n\nPurpose: Ensure long-term liquidity strength and price stability",
            status: "future",
        },
    ]

    return (
        <section id="roadmap" className="py-20 bg-muted ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        The Outbreak <span className="text-gradient">Path</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Our journey together</p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-muted hidden md:block" />

                        <div className="space-y-8">
                            {phases.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex gap-6 group"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Paw print marker */}
                                    <div className="flex md:hidden items-start mb-4">
                                        <motion.div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg ${
                                                item.status === "current"
                                                    ? "bg-primary text-primary-foreground"
                                                    : item.status === "upcoming"
                                                    ? "bg-secondary text-secondary-foreground"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                                        >
                                            🐾
                                        </motion.div>
                                    </div>
                                    <div className="hidden md:flex items-start">
                                        <motion.div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                                                item.status === "current"
                                                    ? "bg-primary text-primary-foreground"
                                                    : item.status === "upcoming"
                                                    ? "bg-secondary text-secondary-foreground"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                                        >
                                            🐾
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-background p-4 sm:p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all group-hover:-translate-y-1 border border-border">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span
                                                className={`text-sm font-bold px-3 py-1 rounded-full ${
                                                    item.status === "current"
                                                        ? "bg-primary text-primary-foreground"
                                                        : item.status === "upcoming"
                                                        ? "bg-secondary text-secondary-foreground"
                                                        : "bg-muted text-muted-foreground"
                                                }`}
                                            >
                                                {item.phase}
                                            </span>
                                            {item.status === "current" && (
                                                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-semibold">
                                                    IN PROGRESS
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground whitespace-pre-line">{item.description}</p>
                                        {item.phase === "Phase 5" && (
                                            <div className="mt-2 text-lg font-bold text-primary">
                                                Countdown: {countdown}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection
