import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const CollectionsSection = () => {
    return (
        <section id="collections" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        The Outbreak <span className="text-gradient">Collections</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Multiple species, endless cuteness</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Otters Outbreak - Genesis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                    >
                        <Card className="overflow-hidden shadow-xl bg-card border-primary/20 h-full">
                            <div className="relative">
                                <Image
                                    src="/assets/otter-389.png"
                                    alt="Otters Outbreak"
                                    width={400}
                                    height={256}
                                    className="w-full h-64 object-cover"
                                />
                                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                    Genesis
                                </Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Otters Outbreak</CardTitle>
                                <CardDescription>The first wave has arrived</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Supply:</span>
                                        <span className="font-semibold text-primary">589</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Trait Categories:</span>
                                        <span className="font-semibold">6</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Pandas Outbreak - Coming Soon */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                    >
                        <Card className="overflow-hidden shadow-xl bg-card/60 h-full border-secondary/30">
                            <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-muted flex items-center justify-center">
                                <motion.div
                                    className="text-8xl opacity-40"
                                    animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    🐼
                                </motion.div>
                                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                                    Coming Soon
                                </Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Pandas Outbreak</CardTitle>
                                <CardDescription>Lazy, cozy bamboo munchers</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">
                                    From bamboo forests straight into the XRPL...
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Bunnies Outbreak - Future */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                    >
                        <Card className="overflow-hidden shadow-xl bg-card/40 opacity-70 h-full">
                            <div className="relative h-64 bg-gradient-to-br from-card to-muted flex items-center justify-center">
                                <div className="text-8xl opacity-30">🐰</div>
                                <Badge className="absolute top-4 right-4 bg-muted-foreground">Future</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Bunnies Outbreak</CardTitle>
                                <CardDescription>Too fast to catch</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Hopping into chaos soon...</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Penguins Outbreak - Future */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                    >
                        <Card className="overflow-hidden shadow-xl bg-card/40 opacity-70 h-full">
                            <div className="relative h-64 bg-gradient-to-br from-card to-muted flex items-center justify-center">
                                <div className="text-8xl opacity-30">🐧</div>
                                <Badge className="absolute top-4 right-4 bg-muted-foreground">Future</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Penguins Outbreak</CardTitle>
                                <CardDescription>Straight from the iceberg</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Waddling onto XRPL...</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Hedgehogs Outbreak - Future */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05, y: -8 }}
                    >
                        <Card className="overflow-hidden shadow-xl bg-card/40 opacity-70 h-full">
                            <div className="relative h-64 bg-gradient-to-br from-card to-muted flex items-center justify-center">
                                <div className="text-8xl opacity-30">🦔</div>
                                <Badge className="absolute top-4 right-4 bg-muted-foreground">Future</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Hedgehogs Outbreak</CardTitle>
                                <CardDescription>Small, spiky troublemakers</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">Rolling into XRPL...</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CollectionsSection
