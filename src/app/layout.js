import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
    title: "Project Outbreak - Cute Animals on XRPL Blockchain",
    description:
        "Project Outbreak is a series of NFT collections where cute animals break into the XRPL blockchain. Starting with 589 unique otters in the Ripple Realm.",
    keywords: "XRPL, NFT, blockchain, otters, cute animals, Project Outbreak, Ripple Realm, crypto collectibles",
    authors: [{ name: "Project Outbreak Team" }],
    creator: "Project Outbreak",
    openGraph: {
        title: "Project Outbreak - Cute Animals on XRPL",
        description:
            "Discover the Ripple Realm where cute animals unite across the XRPL blockchain. Start your journey with the Otter Outbreak collection.",
        url: "https://projectoutbreak.com",
        siteName: "Project Outbreak",
        images: [
            {
                url: "/assets/logo.png",
                width: 1200,
                height: 630,
                alt: "Project Outbreak Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Project Outbreak - Cute Animals on XRPL",
        description: "Discover the Ripple Realm where cute animals unite across the XRPL blockchain.",
        images: ["/assets/logo.png"],
    },
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    )
}
