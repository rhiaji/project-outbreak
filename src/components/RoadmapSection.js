import { motion } from "framer-motion"

const RoadmapSection = () => {
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
            description: "Otters Outbreak NFT collection launches on XRPL.",
            status: "current",
        },
        {
            phase: "Phase 6",
            title: "Token Creation & Utilities",
            description: "Plan and create the project token, define its utilities for the ecosystem.",
            status: "upcoming",
        },
        {
            phase: "Phase 7",
            title: "Liquidity Pool Setup",
            description: "Establish liquidity pool for the token and enable trading.",
            status: "future",
        },
        {
            phase: "Phase 8",
            title: "New Outbreaks",
            description: "Pandas, Bunnies, Penguins, Hedgehogs, and more join the realm.",
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
                                    <div className="flex-1 bg-background p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all group-hover:-translate-y-1 border border-border">
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
                                        <p className="text-muted-foreground">{item.description}</p>
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
