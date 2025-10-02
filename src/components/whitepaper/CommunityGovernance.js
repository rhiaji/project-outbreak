import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const CommunityGovernance = () => (
    <section id="community" className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Community & Governance</h2>
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Community-First Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <p className="leading-relaxed">
                                <strong>Project Outbreak</strong> is built on the belief that sustainable NFT ecosystems
                                thrive on <strong>active and engaged communities</strong>. Our governance ensures that
                                both NFT holders and token holders play unique, complementary roles in shaping the
                                project’s future.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold mb-3 text-primary">Governance Rights</h4>
                                    <div className="mb-2">
                                        <strong>NFT Holders</strong>
                                        <ul className="space-y-2 text-sm list-disc ml-5 mt-1">
                                            <li>Vote on introducing new species and realm expansions</li>
                                            <li>
                                                Receive direct rewards in future collections (e.g.,{" "}
                                                <strong>free mints, airdrops, and exclusive perks</strong>)
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong>Token Holders</strong>
                                        <ul className="space-y-2 text-sm list-disc ml-5 mt-1">
                                            <li>Influence roadmap priorities and utility development</li>
                                            <li>
                                                Gain access to <strong>purchasable whitelist/free-mint spots</strong> in
                                                upcoming collections
                                            </li>
                                            <li>Participate in Liquidity Wars and governance decisions</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 text-secondary">Community Benefits</h4>
                                    <ul className="space-y-2 text-sm list-disc ml-5 mt-1">
                                        <li>Regular community events and lore-driven contests</li>
                                        <li>Exclusive access to project updates and behind-the-scenes content</li>
                                        <li>Direct communication with the team</li>
                                        <li>Collaborative world-building and lore expansion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Communication Channels</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center p-4 border border-border rounded-lg">
                                <h4 className="font-bold mb-2">Twitter/X</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Official announcements and community updates
                                </p>
                                <Button size="sm" variant="outline" asChild>
                                    <a href="https://x.com/Outbreak_XRP" target="_blank" rel="noopener noreferrer">
                                        Follow Us
                                    </a>
                                </Button>
                            </div>
                            <div className="text-center p-4 border border-border rounded-lg">
                                <h4 className="font-bold mb-2">Telegram</h4>
                                <p className="text-sm text-muted-foreground mb-3">Daily community chat and support</p>
                                <Button size="sm" variant="outline" asChild>
                                    <a href="https://t.me/+R7pVBMjJ-lZlNGE1" target="_blank" rel="noopener noreferrer">
                                        Join Chat
                                    </a>
                                </Button>
                            </div>
                            <div className="text-center p-4 border border-border rounded-lg">
                                <h4 className="font-bold mb-2">Website</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Complete project information and lore
                                </p>
                                <Button size="sm" variant="outline" asChild>
                                    <Link href="/">Explore</Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </section>
)

export default CommunityGovernance
