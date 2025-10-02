import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Globe, Zap, Users, Shield } from "lucide-react"

const ProjectVision = () => (
    <section id="project-vision" className="bg-muted py-16">
        <div className="container mx-auto px-4">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Project Vision & Mission</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-6 w-6 text-primary" />
                                Our Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-relaxed">
                                To create the most beloved and sustainable animal-themed NFT ecosystem on XRPL, where
                                cuteness meets cutting-edge blockchain technology. We envision a world where digital
                                collectibles transcend mere ownership to become keys to an ever-expanding universe of
                                stories, utilities, and community experiences.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="h-6 w-6 text-secondary" />
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="leading-relaxed">
                                To build an inclusive, community-driven ecosystem that combines the joy of cute animal
                                characters with innovative tokenomics, rich storytelling, and genuine utility. We're
                                committed to creating long-term value for our community through sustainable economics
                                and continuous innovation.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="text-center">Core Principles</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-bold">Community First</h4>
                                <p className="text-sm text-muted-foreground">
                                    Every decision prioritizes community value and long-term sustainability
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                                    <Shield className="h-6 w-6 text-secondary" />
                                </div>
                                <h4 className="font-bold">Transparency</h4>
                                <p className="text-sm text-muted-foreground">
                                    Open communication about roadmap, tokenomics, and project developments
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                    <Zap className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="font-bold">Innovation</h4>
                                <p className="text-sm text-muted-foreground">
                                    Leveraging XRPL's unique features to create novel NFT experiences
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </section>
)

export default ProjectVision
