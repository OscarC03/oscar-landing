import { useTranslations } from "next-intl";

export function Education() {
    const t = useTranslations("education");

    return (
        <section id="education" className="scroll-mt-24 py-16 md:py-20">
            <div className="flex items-baseline gap-3">
                <span className="text-accent text-sm font-medium">02</span>
                <h2 className="text-3xl font-semibold tracking-tight">
                    {t("heading")}
                </h2>
            </div>
            <div className="border-border mt-8 border-l-2 pl-6">
                <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-xl font-semibold">{t("school")}</h3>
                    <span className="text-muted">{t("period")}</span>
                </div>
                <p className="text-muted mt-1 text-sm">{t("field")}</p>
            </div>
        </section>
    );
}
