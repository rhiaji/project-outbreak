"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Share2, Upload, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import Link from "next/link"

const logo = "/assets/logo.png"
const watermarkLogo = "/assets/watermark.png"
const MEME_TEMPLATES = [
    { id: "meme-1", name: "Meme #1", image: "/memes/meme-1.png" },
    { id: "meme-2", name: "Meme #2", image: "/memes/meme-2.png" },
    { id: "meme-3", name: "Meme #3", image: "/memes/meme-3.png" },
    { id: "meme-4", name: "Meme #4", image: "/memes/meme-4.png" },
    { id: "meme-5", name: "Meme #5", image: "/memes/meme-5.png" },
    { id: "meme-6", name: "Meme #6", image: "/memes/meme-6.png" },
]

export default function MemeGenerator() {
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [selectedTemplate, setSelectedTemplate] = useState(MEME_TEMPLATES[0])
    const [customImage, setCustomImage] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const canvasRef = useRef(null)
    const fileInputRef = useRef(null)

    // Generate meme whenever inputs change
    useEffect(() => {
        generateMeme()
    }, [topText, bottomText, selectedTemplate, customImage])

    const generateMeme = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const img = new Image()
        img.crossOrigin = "anonymous"
        img.src = customImage || selectedTemplate.image

        img.onload = () => {
            // Set canvas size
            canvas.width = 800
            canvas.height = 800

            // Draw image
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

            // Configure text style
            ctx.fillStyle = "white"
            ctx.strokeStyle = "black"
            ctx.lineWidth = 4
            ctx.font = "bold 60px Impact, sans-serif"
            ctx.textAlign = "center"
            ctx.textBaseline = "top"

            // Draw top text
            if (topText) {
                const topLines = wrapText(ctx, topText.toUpperCase(), canvas.width - 40)
                topLines.forEach((line, index) => {
                    const y = 30 + index * 70
                    ctx.strokeText(line, canvas.width / 2, y)
                    ctx.fillText(line, canvas.width / 2, y)
                })
            }

            // Draw bottom text
            if (bottomText) {
                const bottomLines = wrapText(ctx, bottomText.toUpperCase(), canvas.width - 40)
                ctx.textBaseline = "bottom"
                bottomLines.forEach((line, index) => {
                    const y = canvas.height - 30 - (bottomLines.length - 1 - index) * 70
                    ctx.strokeText(line, canvas.width / 2, y)
                    ctx.fillText(line, canvas.width / 2, y)
                })
            }

            // Draw watermark as upper layer
            const watermark = new Image()
            watermark.crossOrigin = "anonymous"
            watermark.src = watermarkLogo || "/assets/watermark.png"
            watermark.onload = () => {
                ctx.globalAlpha = 0.7
                ctx.drawImage(watermark, 0, 0, canvas.width, canvas.height)
                ctx.globalAlpha = 1.0
            }
        }

        img.onerror = () => {
            toast.error("Failed to load image")
        }
    }

    const wrapText = (ctx, text, maxWidth) => {
        const words = text.split(" ")
        const lines = []
        let currentLine = ""

        words.forEach((word) => {
            const testLine = currentLine + (currentLine ? " " : "") + word
            const metrics = ctx.measureText(testLine)

            if (metrics.width > maxWidth && currentLine) {
                lines.push(currentLine)
                currentLine = word
            } else {
                currentLine = testLine
            }
        })

        if (currentLine) {
            lines.push(currentLine)
        }

        // Limit to 2 lines
        return lines.slice(0, 2)
    }

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0]
        if (!file) return

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image must be less than 5MB")
            return
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file")
            return
        }

        const reader = new FileReader()
        reader.onload = (event) => {
            setCustomImage(event.target?.result)
            toast.success("Custom image loaded!")
        }
        reader.readAsDataURL(file)
    }

    const handleDownload = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        setIsGenerating(true)

        canvas.toBlob((blob) => {
            if (!blob) {
                toast.error("Failed to generate meme")
                setIsGenerating(false)
                return
            }

            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `outbreak-meme-${Date.now()}.png`
            a.click()
            URL.revokeObjectURL(url)

            toast.success("Meme downloaded!")
            setIsGenerating(false)
        }, "image/png")
    }

    const handleShareTwitter = () => {
        const text = encodeURIComponent(
            `Check out my Project Outbreak meme! 🦦✨\n\n#ProjectOutbreak #OttersOutbreak #XRPL`
        )
        window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "width=550,height=420")
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
            {/* Header */}
            <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-lg font-bold">Meme Generator</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost">← Back to Home</Button>
                    </Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">🦦 Outbreak Meme Generator</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Create and share your own Project Outbreak memes! Choose a template or upload your own image.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-primary" />
                                Customize Your Meme
                            </h2>

                            <div className="space-y-4">
                                {/* Top Text */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Top Text</label>
                                    <Input
                                        placeholder="Enter top text..."
                                        value={topText}
                                        onChange={(e) => setTopText(e.target.value)}
                                        maxLength={50}
                                    />
                                </div>

                                {/* Bottom Text */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Bottom Text</label>
                                    <Input
                                        placeholder="Enter bottom text..."
                                        value={bottomText}
                                        onChange={(e) => setBottomText(e.target.value)}
                                        maxLength={50}
                                    />
                                </div>

                                {/* Template Selection */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">Choose Template</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {MEME_TEMPLATES.map((template) => (
                                            <motion.button
                                                key={template.id}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    setSelectedTemplate(template)
                                                    setCustomImage(null)
                                                }}
                                                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                                                    selectedTemplate.id === template.id && !customImage
                                                        ? "border-primary shadow-lg"
                                                        : "border-border hover:border-primary/50"
                                                }`}
                                            >
                                                <img
                                                    src={template.image}
                                                    alt={template.name}
                                                    className="w-full h-20 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <span className="text-xs text-white font-bold">
                                                        {template.name}
                                                    </span>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Upload Custom Image */}
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Or Upload Your Own (max 5MB)
                                    </label>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <Upload className="w-4 h-4 mr-2" />
                                        Upload Image
                                    </Button>
                                    {customImage && (
                                        <p className="text-xs text-muted-foreground mt-2">✓ Custom image loaded</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-card border border-border rounded-lg p-6 shadow-lg space-y-3">
                            <Button onClick={handleDownload} disabled={isGenerating} className="w-full" size="lg">
                                <Download className="w-4 h-4 mr-2" />
                                {isGenerating ? "Generating..." : "Download Meme"}
                            </Button>

                            <div className="grid grid-cols-1 gap-2">
                                <Button variant="outline" className="w-full" onClick={handleShareTwitter}>
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share on X
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-card border border-border rounded-lg p-6 shadow-lg sticky top-24">
                            <h2 className="text-2xl font-bold mb-4">Preview</h2>
                            <div className="rounded-lg overflow-hidden border-2 border-border shadow-xl">
                                <canvas ref={canvasRef} className="w-full h-auto" style={{ maxWidth: "100%" }} />
                            </div>
                            <p className="text-xs text-muted-foreground text-center mt-4">
                                Your meme updates in real-time as you type
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Tips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-3xl mx-auto mt-12 bg-secondary/20 border border-border rounded-lg p-6"
                >
                    <h3 className="font-bold text-lg mb-3">💡 Pro Tips</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Keep text short and punchy for maximum impact</li>
                        <li>• Use ALL CAPS for classic meme style</li>
                        <li>• Upload square images (1:1 ratio) for best results</li>
                        <li>• Share your memes with #ProjectOutbreak #OttersOutbreak</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}
