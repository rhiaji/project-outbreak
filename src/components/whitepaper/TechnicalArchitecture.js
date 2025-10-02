import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const TechnicalArchitecture = () => (
    <section id="technical-architecture" className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Technical Architecture</h2>
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Why XRP Ledger (XRPL)?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold mb-3 text-primary">Technical Advantages</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        • <strong>Speed:</strong> 3-5 second settlement times
                                    </li>
                                    <li>
                                        • <strong>Cost:</strong> Minimal transaction fees (~$0.0002)
                                    </li>
                                    <li>
                                        • <strong>Sustainability:</strong> Carbon-neutral consensus
                                    </li>
                                    <li>
                                        • <strong>Scalability:</strong> 1,500+ TPS capacity
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-3 text-secondary">Ecosystem Benefits</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Native AMM for seamless trading</li>
                                    <li>• Built-in NFT support (XLS-20)</li>
                                    <li>• Decentralized exchange functionality</li>
                                    <li>• Enterprise-grade reliability</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Smart Contract Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold mb-2">NFT Implementation (XLS-20)</h4>
                                <p className="text-sm text-muted-foreground">
                                    Utilizing XRPL's native NFT functionality for secure, efficient minting and trading
                                    with built-in royalty mechanisms and metadata standards.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">AMM Integration (XLS-30)</h4>
                                <p className="text-sm text-muted-foreground">
                                    Leveraging XRPL's Automated Market Maker for token liquidity, ensuring smooth
                                    trading experiences and sustainable price discovery.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Token Standards</h4>
                                <p className="text-sm text-muted-foreground">
                                    Custom token implementation with built-in utility functions for minting access,
                                    holder verification, and governance mechanisms.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </section>
)

export default TechnicalArchitecture
