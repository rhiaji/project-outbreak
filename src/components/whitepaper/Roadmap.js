import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const roadmapData = [
    {
        phase: "Phase 1-5",
        title: "Foundation & Launch",
        status: "Q4 2025",
        items: ["NFT Art Creation", "Community Channels", "Website Launch", "NFT Minting & Launch"],
    },
    {
        phase: "Phase 6-7",
        title: "Token & Utility Launch",
        status: "Q4 2025",
        items: ["Token Creation & Initial Liquidity", "Token Utility for Free Mints"],
    },
    {
        phase: "Phase 8-9",
        title: "Ecosystem Expansion",
        status: "Q4 2025",
        items: ["Token Holder Rewards", "New Outbreaks Expansion"],
    },
    {
        phase: "Phase 10",
        title: "Sustainable Growth",
        status: "Q4 2025",
        items: ["Treasury Growth & Ongoing Reinforcement"],
    },
]

const Roadmap = () => (
    <section id="roadmap" className="container mx-auto px-4 py-16">
        <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Development Roadmap</h2>
            <div className="space-y-6">
                {roadmapData.map((roadmapItem) => (
                    <Card key={roadmapItem.phase}>
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="font-bold text-lg">
                                        {roadmapItem.phase}: {roadmapItem.title}
                                    </h4>
                                </div>
                                <Badge
                                    className={
                                        roadmapItem.status === "Current"
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary text-secondary-foreground"
                                    }
                                >
                                    {roadmapItem.status}
                                </Badge>
                            </div>
                            <div className="grid md:grid-cols-2 gap-2">
                                {roadmapItem.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center text-sm">
                                        <span className="text-primary mr-2">•</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-8 text-center">
                <Button asChild variant="outline">
                    <Link href="/#roadmap">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Detailed Roadmap
                    </Link>
                </Button>
            </div>
        </motion.div>
    </section>
)

export default Roadmap
