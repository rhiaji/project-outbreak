import { motion } from "framer-motion"
import { useState } from "react"

const InteractiveTribeCard = ({ tribe, index }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <motion.div
            className="relative w-full h-72 sm:h-80 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ scale: 1.02 }}
        >
            <div
                className="relative w-full h-full preserve-3d transition-transform duration-700"
                style={{ transformStyle: "preserve-3d", transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-card to-background border border-border shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{tribe.emoji}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{tribe.name}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{tribe.shortDescription}</p>
                    <div className="text-xs text-primary font-semibold">Tap to learn more</div>
                </div>

                {/* Back of card */}
                <div
                    className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 shadow-lg p-4 sm:p-6 overflow-y-auto"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{tribe.name} Secrets</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        {tribe.funFacts?.map((fact, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{fact}</span>
                            </div>
                        ))}
                    </div>
                    {tribe.specialTrait && (
                        <div className="mt-4 p-3 bg-primary/20 rounded-lg">
                            <div className="text-xs font-semibold text-primary mb-1">Special Trait</div>
                            <div className="text-sm">{tribe.specialTrait}</div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default InteractiveTribeCard
