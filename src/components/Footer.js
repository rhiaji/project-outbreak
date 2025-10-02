import { ExternalLink, BookOpen } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    const socialLinks = [
        { icon: faTwitter, label: "Twitter", href: "https://x.com/Outbreak_XRP", external: true },
        { icon: faTelegram, label: "Telegram", href: "https://t.me/+R7pVBMjJ-lZlNGE1", external: true },
        { icon: ExternalLink, label: "XRPL Explorer", href: "#", external: true },
    ]

    const internalLinks = [{ icon: BookOpen, label: "The Ripple Realm", href: "/ripple-realm", external: false }]

    return (
        <footer className="bg-muted py-16 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image
                            src="/assets/logo.png"
                            alt="Project Outbreak"
                            width={192}
                            height={96}
                            className="w-48 opacity-90 mb-8"
                        />
                    </div>

                    {/* Slogan */}
                    <p className="text-2xl font-heading text-foreground">
                        Cuteness is contagious — <span className="text-gradient">join the outbreak</span> 🐾
                    </p>

                    {/* Treasury r-address */}
                    <div className="text-sm text-muted-foreground bg-card/50 px-6 py-3 rounded-full inline-block">
                        <span className="font-semibold">Treasury:</span> rPBRKmsW6jQ975ACJ6rTZbRvK9fYLDtnP7
                    </div>

                    {/* Navigation Links */}
                    <div className="flex justify-center gap-6 flex-wrap">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon
                            const isFontAwesome = Icon && Icon.iconName !== undefined
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-card rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground group"
                                    aria-label={link.label}
                                >
                                    {isFontAwesome ? (
                                        <FontAwesomeIcon icon={Icon} className="h-5 w-5 group-hover:animate-pulse" />
                                    ) : (
                                        <Icon size={20} className="group-hover:animate-pulse" />
                                    )}
                                    <span className="font-semibold">{link.label}</span>
                                </a>
                            )
                        })}
                        {internalLinks.map((link, index) => {
                            const Icon = link.icon
                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="flex items-center gap-2 px-6 py-3 bg-card rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground group"
                                    aria-label={link.label}
                                >
                                    <Icon size={20} className="group-hover:animate-pulse" />
                                    <span className="font-semibold">{link.label}</span>
                                </Link>
                            )
                        })}
                    </div>

                    {/* Minting/Browsing Link */}
                    <div className="pt-8 border-t border-border space-y-4">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <span>Powered by</span>
                            <span className="text-primary font-semibold">XRPL Blockchain</span>
                            <span className="text-lg">⚡</span>
                            <span className="mx-2">•</span>
                            <span>Made with</span>
                            <span className="text-lg">☕</span>
                            <span>&</span>
                            <span className="text-red-500 text-lg">❤️</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm mt-2">
                            <a
                                href="https://xrp.cafe/collection/otters-outbreak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-secondary transition-colors font-semibold"
                            >
                                Mint or buy Otters Outbreak on XRP Cafe
                            </a>
                        </div>
                        <p className="text-muted-foreground">© 2025 Project Outbreak. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
