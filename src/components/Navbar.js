"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { BookOpen, Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/logo.png"
                            alt="Project Outbreak"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-foreground">Project Outbreak</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                            Home
                        </Link>
                        <a
                            href="#collections"
                            className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
                        >
                            Collections
                        </a>
                        <a
                            href="#roadmap"
                            className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
                        >
                            Roadmap
                        </a>
                        <a
                            href="#faq"
                            className="text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
                        >
                            FAQ
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/ripple-realm" className="hidden md:block">
                            <Button variant="outline" size="sm">
                                <BookOpen size={20} className="group-hover:animate-pulse" />
                                <span className="font-semibold"> Ripple Realm</span>
                            </Button>
                        </Link>

                        {/* Mobile menu button */}
                        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-t">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <Link
                            href="/"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/ripple-realm"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Ripple Realm
                        </Link>
                        <a
                            href="#collections"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Collections
                        </a>
                        <a
                            href="#roadmap"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Roadmap
                        </a>
                        <a
                            href="#faq"
                            className="block text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </a>
                        <Link href="/ripple-realm" onClick={() => setIsOpen(false)}>
                            <Button variant="outline" size="sm" className="w-full">
                                Explore Lore
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
