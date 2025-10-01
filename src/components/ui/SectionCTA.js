import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const SectionCTA = ({
    title,
    description,
    buttonText = "Learn More",
    buttonHref,
    isExternal = false,
    variant = "default",
    icon = null,
}) => {
    const buttonContent = (
        <Button size="lg" variant={variant} className="group relative overflow-hidden w-full sm:w-auto">
            <span className="flex items-center gap-2 justify-center">
                {icon && <span className="text-base sm:text-lg">{icon}</span>}
                <span className="text-sm sm:text-base">{buttonText}</span>
                {isExternal ? (
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
        </Button>
    )

    return (
        <motion.div
            className="my-8 sm:my-12 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-gradient-to-r from-card/50 to-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto">
                {title && <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{title}</h3>}
                {description && <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">{description}</p>}

                {buttonHref ? (
                    isExternal ? (
                        <a href={buttonHref} target="_blank" rel="noopener noreferrer">
                            {buttonContent}
                        </a>
                    ) : (
                        <Link href={buttonHref}>{buttonContent}</Link>
                    )
                ) : (
                    buttonContent
                )}
            </div>
        </motion.div>
    )
}

export default SectionCTA
