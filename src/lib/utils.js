import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Utility function for opening external links
export function openExternalLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
}
