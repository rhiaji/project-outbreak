import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SwipeableCards = ({ cards, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % cards.length)
    }

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }

    return (
        <div className="my-12">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
                <div className="flex justify-center gap-2 mb-4">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? "bg-primary" : "bg-muted"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop - Show all cards */}
            <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-card border border-border rounded-2xl p-6 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                        {card.icon && <div className="text-4xl mb-4">{card.icon}</div>}
                        <h4 className="text-xl font-bold text-foreground mb-3">{card.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Mobile - Swipeable cards */}
            <div className="md:hidden relative">
                <div className="overflow-hidden rounded-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="bg-card border border-border rounded-2xl p-6 shadow-lg min-h-[300px]"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            {cards[currentIndex].icon && (
                                <div className="text-5xl mb-4 text-center">{cards[currentIndex].icon}</div>
                            )}
                            <h4 className="text-xl font-bold text-foreground mb-3 text-center">
                                {cards[currentIndex].title}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed text-center">
                                {cards[currentIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <Button variant="outline" size="sm" onClick={prevCard} className="rounded-full w-12 h-12 p-0">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextCard} className="rounded-full w-12 h-12 p-0">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SwipeableCards
