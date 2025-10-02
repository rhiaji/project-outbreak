import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const ExecutiveSummary = () => (
    <section id="executive-summary" className="container mx-auto px-4 py-16">
        <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Executive Summary</h2>
            <Card>
                <CardContent className="p-8">
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            <strong>Project Outbreak</strong> represents a revolutionary approach to NFT collections on
                            the XRP Ledger (XRPL), combining adorable animal characters with rich storytelling,
                            sustainable tokenomics, and genuine utility. Our mission is to create an interconnected
                            universe where cute animals "break into" the blockchain, each bringing unique value to a
                            growing ecosystem called the <strong>Ripple Realm</strong>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-primary">Key Highlights</h4>
                                <ul className="space-y-2 text-base">
                                    <li>• 589 Genesis Otters launching October 4, 2025</li>
                                    <li>• Native XRPL token with AMM integration</li>
                                    <li>• Multi-species expansion roadmap</li>
                                    <li>• Token-based free mint utility system</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-secondary">Market Opportunity</h4>
                                <ul className="space-y-2 text-base">
                                    <li>• Growing XRPL NFT ecosystem</li>
                                    <li>• Sustainable tokenomics model</li>
                                    <li>• Cross-collection utility framework</li>
                                    <li>• Community-driven expansion</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Unlike traditional profile picture (PFP) projects, Project Outbreak builds a comprehensive
                            ecosystem where each NFT collection serves as both standalone art and a key component in an
                            expanding narrative universe with real-world utility and sustainable economics.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    </section>
)

export default ExecutiveSummary
