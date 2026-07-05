"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations("error");

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <p className="text-accent text-8xl font-semibold tracking-tighter">
                500
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight">
                {t("heading")}
            </h1>
            <p className="text-muted mt-3 max-w-sm text-base leading-relaxed">
                {t("description")}
            </p>
            <button
                type="button"
                onClick={reset}
                className="decoration-border hover:decoration-accent mt-8 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-colors"
            >
                {t("cta")}
            </button>
        </div>
    );
}
