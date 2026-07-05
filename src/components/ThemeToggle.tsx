"use client";

import { Moon, Sun } from "lucide-react";

function currentTheme(): "dark" | "light" {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function ThemeToggle() {
    function toggle() {
        const next = currentTheme() === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="border-border text-muted hover:text-ink rounded-full border p-2 transition-colors"
        >
            <Moon data-icon="moon" className="h-4 w-4" />
            <Sun data-icon="sun" className="h-4 w-4" />
        </button>
    );
}
