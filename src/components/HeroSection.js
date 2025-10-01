"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Waves } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
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
                        className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Cute animals are breaking into the XRPL — starting with 589 playful otters.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all group"
                            asChild
                        >
                            <a
                                href="https://xrp.cafe/collection/otters-outbreak"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Waves className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                                Explore Outbreak & Mint
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary text-xl px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-secondary/50 transition-all group"
                            asChild
                        >
                            <a href="https://x.com/Outbreak_XRP" target="_blank" rel="noopener noreferrer">
                                {/* X logo SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-2 h-5 w-5 group-hover:animate-pulse"
                                >
                                    <path d="M17.53 3H21L14.19 10.68L22.13 21H15.68L10.68 14.53L5.97 21H2L9.13 12.82L1.47 3H8.09L12.65 8.84L17.53 3ZM16.37 19H18.19L7.72 5H5.81L16.37 19Z" />
                                </svg>
                                Join the Community
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground border-secondary text-xl px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-secondary/50 transition-all group"
                            asChild
                        >
                            <a href="https://t.me/+R7pVBMjJ-lZlNGE1" target="_blank" rel="noopener noreferrer">
                                {/* Telegram logo SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mr-2 h-5 w-5 group-hover:animate-pulse"
                                >
                                    <path d="M9.04 16.47L9.25 19.39C9.57 19.39 9.71 19.25 9.87 19.09L11.25 17.77L14.18 19.84C14.72 20.13 15.13 19.97 15.27 19.36L17.93 7.27C18.13 6.51 17.67 6.19 17.07 6.41L4.47 11.09C3.74 11.37 3.75 11.78 4.36 11.97L7.47 12.97L15.13 8.36C15.47 8.16 15.78 8.28 15.53 8.5L9.04 16.47Z" />
                                </svg>
                                Join on Telegram
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Decorative floating paw prints */}
                <div className="absolute top-20 left-10 text-primary/20 text-6xl animate-float">🐾</div>
                <div className="absolute bottom-20 right-10 text-secondary/20 text-6xl animate-float-delayed">🐾</div>
            </div>
        </section>
    )
}

export default HeroSection
