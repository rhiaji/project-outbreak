import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const Tokenomics = () => (
    <section id="tokenomics" className="container mx-auto px-4 py-16">
        <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tokenomics & Utility</h2>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Native Token Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold mb-3 text-primary">Token Fundamentals</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <strong>Blockchain:</strong> XRP Ledger (XRPL)
                                    </li>
                                    <li>
                                        <strong>Standard:</strong> Native XRPL Token
                                    </li>
                                    <li>
                                        <strong>Liquidity:</strong> AMM Integration (XLS-30)
                                    </li>
                                    <li>
                                        <strong>Trading Pair:</strong> TOKEN ↔ XRP
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-3 text-secondary">Primary Utilities</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Free mints for new collections</li>
                                    <li>• Holder reward tiers</li>
                                    <li>• Governance voting power</li>
                                    <li>• Exclusive event access</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg">
                            <h4 className="font-bold mb-4">Token Distribution & Sustainability</h4>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <h5 className="font-semibold text-primary">Revenue Sources</h5>
                                    <ul className="mt-2 space-y-1">
                                        <li>• NFT mint sales</li>
                                        <li>• Secondary royalties</li>
                                        <li>• Future partnerships</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-secondary">Treasury Allocation</h5>
                                    <ul className="mt-2 space-y-1">
                                        <li>• Liquidity pool funding</li>
                                        <li>• Development costs</li>
                                        <li>• Community rewards</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-primary">Sustainability</h5>
                                    <ul className="mt-2 space-y-1">
                                        <li>• Continuous revenue reinvestment</li>
                                        <li>• Token burn mechanisms</li>
                                        <li>• Long-term value creation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Token Holder Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="p-4 border border-primary/20 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Free Mint Access</h4>
                            <p className="text-sm">
                                Token holders can spend tokens to secure free mints for new outbreak collections,
                                providing immediate utility and value.
                            </p>
                        </div>
                        <div className="p-4 border border-secondary/20 rounded-lg">
                            <h4 className="font-bold text-secondary mb-2">Holder Tier Rewards</h4>
                            <p className="text-sm">
                                Top token holders receive exclusive NFTs, governance votes, and community recognition
                                based on their holding amounts.
                            </p>
                        </div>
                        <div className="p-4 border border-primary/20 rounded-lg">
                            <h4 className="font-bold text-primary mb-2">Ecosystem Growth</h4>
                            <p className="text-sm">
                                As new collections launch and the ecosystem grows, token utility and demand increase,
                                potentially appreciating token value.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    </section>
)

export default Tokenomics
