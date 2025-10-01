"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Waves } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated ripple background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background to-card" />
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 rounded-full border-2 border-primary"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.1, 0.3],
                        // ...existing code...
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-96 h-96 rounded-full border-2 border-secondary"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>
            <div className="absolute inset-0 paw-pattern opacity-20" />

            <div className="container relative z-10 px-4 py-20 text-center">
                <div>
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Claw mark scratch animation */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0, scale: 1.2, rotate: -15 }}
                            animate={{ opacity: [0, 0.3, 0], scale: [1.2, 1, 1], rotate: [-15, -10, -15] }}
                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                        >
                            <div className="text-8xl text-primary/30">🗡️</div>
                        </motion.div>

                        <Image
                            src="/assets/logo.png"
                            alt="Project Outbreak Logo"
                            width={384}
                            height={192}
                            className="w-64 md:w-96 mx-auto mb-8 drop-shadow-2xl relative z-10"
                            priority
                        />
                    </motion.div>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Cute animals are breaking into the XRPL — starting with 589 playful otters.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 rounded-full font-semibold shadow-lg hover:shadow-secondary/50 transition-all group w-full sm:w-auto"
                            asChild
                        >
                            <a href="https://x.com/Outbreak_XRP" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                                <span className="whitespace-nowrap">Join the Community</span>
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground border-secondary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 rounded-full font-semibold shadow-lg hover:shadow-secondary/50 transition-all group w-full sm:w-auto"
                            asChild
                        >
                            <a href="https://t.me/+R7pVBMjJ-lZlNGE1" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTelegram} className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-pulse" />
                                <span className="whitespace-nowrap">Join on Telegram</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Decorative floating paw prints */}
                <div className="absolute top-10 sm:top-20 left-2 sm:left-10 text-primary/20 text-4xl sm:text-6xl animate-float">🐾</div>
                <div className="absolute bottom-10 sm:bottom-20 right-2 sm:right-10 text-secondary/20 text-4xl sm:text-6xl animate-float-delayed">🐾</div>
            </div>
        </section>
    )
}

export default HeroSection
