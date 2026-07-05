"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const other = locale === "it" ? "en" : "it";

    return (
        <button
            type="button"
            onClick={() => router.replace(pathname, { locale: other })}
            className="border-border text-muted hover:text-ink rounded-full border px-3 py-1 text-xs font-medium uppercase transition-colors"
        >
            {other}
        </button>
    );
}
