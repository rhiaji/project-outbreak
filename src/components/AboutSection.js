import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AboutSection = () => {
    const otters = [
        { img: "/assets/otter-15.png", alt: "Legendary Otter #15", delay: 0 },
        { img: "/assets/otter-69.png", alt: "Legendary Otter #69", delay: 0.1 },
        { img: "/assets/otter-123.png", alt: "Legendary Otter #123", delay: 0.2 },
        { img: "/assets/otter-389.png", alt: "Legendary Otter #389", delay: 0.3 },
    ]

    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        className="space-y-6 md:order-1 order-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                            What is <span className="text-gradient">Project Outbreak</span>?
                        </h2>

                        <p className="text-lg text-secondary font-semibold italic">
                            Where cuteness meets the blockchain.
                        </p>

                        <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Project Outbreak is a series of{" "}
                                <span className="text-primary font-semibold">
                                    NFT collections where cute animals break into the XRPL blockchain
                                </span>
                                , each bringing their own unique story to the{" "}
                                <span className="text-secondary font-semibold">Ripple Realm</span>.
                            </p>

                            <p>
                                The first wave is <span className="text-secondary font-semibold">Otters Outbreak</span>{" "}
                                — 589 unique otters with fun outfits, colorful personalities, and legendary traits who
                                sparked the great unity across the realm.
                            </p>

                            <p>
                                Explore the rich lore and discover how these adorable creatures transformed from
                                isolated tribes into a united community. And this is just the beginning… 🐼 🐰 🐧 🦔
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/ripple-realm">
                                    <Button
                                        size="lg"
                                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
                                    >
                                        Explore the Ripple Realm
                                    </Button>
                                </Link>
                                <a
                                    href="https://xrpl.to/projectoutbreak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                                    >
                                        Mint Otters
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: NFT Grid (2x2) */}
                    <div className="grid grid-cols-2 gap-4 md:order-2 order-1">
                        {otters.map((otter, index) => (
                            <motion.div
                                key={index}
                                className="bg-background rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-shadow"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.5, delay: otter.delay }}
                            >
                                <Image
                                    src={otter.img}
                                    alt={otter.alt}
                                    width={400}
                                    height={400}
                                    className="w-full rounded-2xl"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
