import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("footer");
    const year = new Date().getFullYear();

    return (
        <footer className="border-border border-t py-8">
            <div className="text-muted mx-auto max-w-3xl px-6 text-sm">
                {t("text")} · {year}
            </div>
        </footer>
    );
}
