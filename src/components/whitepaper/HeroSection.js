import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

const HeroSection = () => (
    <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Image
                src="/assets/logo.png"
                alt="Project Outbreak"
                width={192}
                height={96}
                className="w-32 sm:w-40 md:w-48 mx-auto mb-6 sm:mb-8 drop-shadow-2xl"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-foreground">
                Project Outbreak <span className="text-gradient">Whitepaper</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8">
                Building the Future of Cute Animal NFTs on XRPL
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="https://xrp.cafe/collection/otters-outbreak" target="_blank" rel="noopener noreferrer">
                        Mint on XRP Cafe
                    </a>
                </Button>
            </div>
        </motion.div>
    </section>
)

export default HeroSection
