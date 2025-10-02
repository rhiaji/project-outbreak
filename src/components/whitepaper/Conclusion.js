import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Conclusion = () => (
    <section id="conclusion" className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Conclusion</h2>
                <Card>
                    <CardContent className="p-8">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                Project Outbreak represents a new paradigm in NFT collections, combining the universal
                                appeal of cute animals with innovative blockchain technology, sustainable tokenomics,
                                and genuine utility. Built on the fast, eco-friendly XRPL blockchain, our ecosystem
                                offers holders real value through purchasable whitelist spots, community governance, and
                                an ever-expanding universe of adorable characters.
                            </p>
                            <p className="text-lg leading-relaxed">
                                The Ripple Realm serves as more than just backstory—it's a living world that grows with
                                each new collection, creating lasting narrative value and community connection. Our
                                commitment to transparency, sustainability, and community-first development ensures that
                                Project Outbreak will continue to evolve and provide value for years to come.
                            </p>
                            <div className="pt-6">
                                <h3 className="text-xl font-bold mb-4">Join the Outbreak</h3>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" asChild>
                                        <a
                                            href="https://xrp.cafe/collection/otters-outbreak"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Mint on XRP Cafe
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="/ripple-realm">Explore the Realm</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </section>
)

export default Conclusion
