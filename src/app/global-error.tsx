"use client";

import "./globals.css";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body className="bg-paper text-ink flex min-h-screen flex-col items-center justify-center px-6 text-center">
                <p className="text-accent text-8xl font-semibold tracking-tighter">
                    500
                </p>
                <h1 className="mt-4 text-2xl font-semibold tracking-tight">
                    Something went wrong
                </h1>
                <button
                    type="button"
                    onClick={reset}
                    className="mt-8 text-sm font-medium underline underline-offset-4"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
