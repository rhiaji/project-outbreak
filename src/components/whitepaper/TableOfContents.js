import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TableOfContents = ({ items, scrollToSection }) => (
    <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    {items.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-left p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-primary font-semibold">{index + 1}.</span> {item.title}
                        </motion.button>
                    ))}
                </div>
            </CardContent>
        </Card>
    </section>
)

export default TableOfContents
