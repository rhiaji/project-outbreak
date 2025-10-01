import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const FAQSection = () => {
    const faqs = [
        {
            question: "What is Project Outbreak?",
            answer: "Project Outbreak is a series of cute animal NFT collections launching on the XRPL blockchain. Each 'outbreak' features a different adorable species with unique traits and personalities.",
        },
        {
            question: "How many NFTs are in Otters Outbreak?",
            answer: "Otters Outbreak is the genesis collection with a supply of 589 unique otters. Each otter has randomized traits across 6 categories, ranging from common to legendary rarity.",
        },
        {
            question: "Will there be more outbreaks?",
            answer: "Absolutely! After the Otters Outbreak, we'll be releasing Foxes, Pandas, Pigeons, and many more cute animals. Each species will have its own unique style and traits.",
        },
        {
            question: "Do holders get rewards?",
            answer: "Yes! Otter holders will receive trait-based rewards, community airdrops, and early access to future outbreak launches. The rarer your otter, the better the perks.",
        },
        {
            question: "Why XRPL?",
            answer: "XRPL is fast, eco-friendly, and extremely cost-effective. It's perfect for NFTs with near-instant transactions and minimal environmental impact. Plus, it's the home of the legendary 589!",
        },
    ]

    return (
        <section id="faq" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Everything you need to know</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-card border border-border rounded-2xl px-6 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                                        <span className="flex items-center gap-3">
                                            <span className="text-primary">🐾</span>
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
