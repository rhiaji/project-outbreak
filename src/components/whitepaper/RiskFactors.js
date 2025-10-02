import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

const RiskFactors = () => (
    <section id="risk-factors" className="container mx-auto px-4 py-16">
        <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Risk Factors</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="h-6 w-6" />
                        Important Disclaimers
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-sm">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                            <h4 className="font-bold mb-2 text-black">Market Risk</h4>
                            <p className="text-black">
                                NFT and cryptocurrency markets are highly volatile. The value of Project Outbreak NFTs
                                and tokens may fluctuate significantly and could result in partial or total loss.
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <h4 className="font-bold mb-2 text-black">Technology Risk</h4>
                            <p className="text-black">
                                Blockchain technology and smart contracts carry inherent risks including bugs, network
                                congestion, and regulatory changes that could affect project functionality.
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                            <h4 className="font-bold mb-2 text-black">Regulatory Risk</h4>
                            <p className="text-black">
                                Evolving regulations around NFTs and cryptocurrencies may impact the project's
                                operations, utility features, or accessibility in certain jurisdictions.
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <h4 className="font-bold mb-2 text-black">Project Risk</h4>
                            <p className="text-black">
                                While we're committed to delivering our roadmap, unforeseen circumstances, technical
                                challenges, or market conditions could affect development timelines.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="text-sm font-medium">
                            <strong>Investment Notice:</strong> Project Outbreak NFTs and tokens are digital
                            collectibles and utility tokens, not investment securities. Please only participate with
                            funds you can afford to lose and conduct your own research before making any purchase
                            decisions.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    </section>
)

export default RiskFactors
