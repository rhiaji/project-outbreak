import { Zap, Layers } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGift, faStar } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const UtilitySection = () => {
    const utilities = [
        {
            icon: faGift,
            title: "Community Rewards",
            description: "Collectors get trait-based surprises and airdrops",
            color: "text-primary",
            isFontAwesome: true,
        },
        {
            icon: Layers,
            title: "Expanding Universe",
            description: "More animals join in future outbreaks",
            color: "text-secondary",
            isFontAwesome: false,
        },
        {
            icon: Zap,
            title: "XRPL Powered",
            description: "Fast, eco-friendly, and low-cost blockchain",
            color: "text-primary",
            isFontAwesome: false,
        },
        {
            icon: faStar,
            title: "From Cute to Legendary",
            description: "Commons, rares, and ultra-rare XRPL treasures",
            color: "text-secondary",
            isFontAwesome: true,
        },
    ]

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Why Join the <span className="text-gradient">Outbreak</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground">More than just cute faces</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {utilities.map((utility, index) => {
                        const Icon = utility.icon
                        const bgColors = ["bg-primary/10", "bg-secondary/10", "bg-primary/10", "bg-secondary/10"]
                        return (
                            <motion.div
                                key={index}
                                className="bg-card p-8 rounded-3xl shadow-lg border border-border"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                            >
                                <div
                                    className={`${bgColors[index]} w-20 h-20 rounded-full flex items-center justify-center mb-4`}
                                >
                                    {utility.isFontAwesome ? (
                                        <FontAwesomeIcon icon={Icon} className={`text-4xl ${utility.color}`} />
                                    ) : (
                                        <Icon size={40} strokeWidth={1.5} className={utility.color} />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{utility.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{utility.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default UtilitySection
