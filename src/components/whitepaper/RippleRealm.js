import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const RippleRealm = () => (
    <section id="ripple-realm" className="container mx-auto px-4 py-16">
        <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Ripple Realm Universe</h2>
            <Card>
                <CardContent className="p-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">World Overview</h3>
                            <p className="leading-relaxed">
                                The Ripple Realm is a vibrant world of both land and water that serves as the narrative
                                foundation for all Project Outbreak collections. This living realm accommodates
                                creatures of all kinds, each with their own territories, cultures, and unique
                                characteristics.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-secondary">The Outbreak Event</h3>
                            <p className="leading-relaxed">
                                A mysterious surge in the Ledger energy swept across the realm, transforming ordinary
                                animals into unique, trait-bearing creatures. This event, known as "The Outbreak,"
                                serves as the catalyst for each NFT collection, explaining how simple animals gain
                                extraordinary characteristics and consciousness.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Ledger City</h3>
                            <p className="leading-relaxed">
                                The capital of unity where all species collaborate. Built collectively after The
                                Outbreak, Ledger City represents the shared values of cooperation, trade, and peaceful
                                coexistence that define the Project Outbreak ecosystem.
                            </p>
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg">
                            <h4 className="font-bold mb-3">Planned Species & Their Roles</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    🦦 <strong>Otters:</strong> First Heroes & Unity Ambassadors
                                </div>
                                <div>
                                    🐼 <strong>Pandas:</strong> Guardians of Balance & Wisdom
                                </div>
                                <div>
                                    🐰 <strong>Bunnies:</strong> Creative Builders & Celebrators
                                </div>
                                <div>
                                    🐧 <strong>Penguins:</strong> Brave Navigators & Explorers
                                </div>
                                <div>
                                    🦔 <strong>Hedgehogs:</strong> Keepers of Knowledge & Innovation
                                </div>
                                <div>
                                    ✨ <strong>More Species:</strong> Future Expansions Planned
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                            <p className="text-sm text-muted-foreground">
                                <strong>Community Co-Creation:</strong> The Ripple Realm grows through community input.
                                <Link href="#community" className="text-primary hover:underline ml-1">
                                    Learn how your voice shapes our world →
                                </Link>
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-8 text-center">
                <Button asChild variant="outline">
                    <Link href="/ripple-realm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore the Full Lore
                    </Link>
                </Button>
            </div>
        </motion.div>
    </section>
)

export default RippleRealm
