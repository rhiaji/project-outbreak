import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const NFTCollections = () => (
    <section id="nft-collections" className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">NFT Collections Overview</h2>
                <Card className="mb-8">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Genesis Collection: Otters Outbreak</CardTitle>
                            <Badge className="bg-primary text-primary-foreground">Minting Oct 4, 2025</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold mb-3">Collection Details</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <strong>Supply:</strong> 589 unique otters
                                    </li>
                                    <li>
                                        <strong>Trait Categories:</strong> 6 main categories
                                    </li>
                                    <li>
                                        <strong>Rarity System:</strong> Common to Legendary
                                    </li>
                                    <li>
                                        <strong>Launch Date:</strong> October 4, 2025
                                    </li>
                                    <li>
                                        <strong>Blockchain:</strong> XRP Ledger (XRPL)
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-3">Utility & Benefits</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Access to token airdrops</li>
                                    <li>• Priority for future collections</li>
                                    <li>• Governance voting rights</li>
                                    <li>• Exclusive community events</li>
                                    <li>• Trait-based reward multipliers</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <h3 className="text-2xl font-bold mb-6 text-center">Future Collections Roadmap</h3>
                <div className="grid gap-6">
                    {[
                        { name: "Pandas Outbreak", role: "Guardians of Balance", status: "Q4 2025" },
                        { name: "Bunnies Outbreak", role: "Creative Builders", status: "2026 and beyond" },
                        { name: "Penguins Outbreak", role: "Brave Navigators", status: "2026 and beyond" },
                        { name: "Hedgehogs Outbreak", role: "Keepers of Knowledge", status: "2026 and beyond" },
                    ].map((collection, index) => (
                        <Card key={collection.name}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-lg">{collection.name}</h4>
                                        <p className="text-muted-foreground">{collection.role}</p>
                                    </div>
                                    <Badge variant="outline">{collection.status}</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
)

export default NFTCollections
