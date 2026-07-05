import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
    const t = useTranslations("notFound");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <p className="text-accent text-8xl font-semibold tracking-tighter">
                {t("title")}
            </p>
            <h1 className="mt-4 text-2xl font-semibold tracking-tight">
                {t("heading")}
            </h1>
            <p className="text-muted mt-3 max-w-sm text-base leading-relaxed">
                {t("description")}
            </p>
            <Link
                href="/"
                className="decoration-border hover:decoration-accent mt-8 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-colors"
            >
                {t("cta")}
            </Link>
        </div>
    );
}
