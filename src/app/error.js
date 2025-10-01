"use client"
import { Button } from "@/components/ui/button"

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center max-w-md mx-auto px-4">
                <div className="text-6xl mb-6">🦦</div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Oops! Something went wrong</h2>
                <p className="text-muted-foreground mb-6">
                    The otters encountered an unexpected error while exploring the realm.
                </p>
                <div className="space-y-4">
                    <Button onClick={reset} className="w-full">
                        Try Again
                    </Button>
                    <Button variant="outline" onClick={() => (window.location.href = "/")} className="w-full">
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    )
}
