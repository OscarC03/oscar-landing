import { useTranslations } from "next-intl";

export function Volunteering() {
    const t = useTranslations("volunteering");

    return (
        <section id="volunteering" className="scroll-mt-24 py-16 md:py-20">
            <div className="flex items-baseline gap-3">
                <span className="text-accent text-sm font-medium">05</span>
                <h2 className="text-3xl font-semibold tracking-tight">
                    {t("heading")}
                </h2>
            </div>
            <div className="border-accent mt-8 border-l-2 pl-6">
                <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-xl font-semibold">{t("role")}</h3>
                    <span className="text-muted">{t("organization")}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="border-border text-muted rounded-full border px-3 py-1">
                        {t("sinceVolunteer")}
                    </span>
                    <span className="border-border text-muted rounded-full border px-3 py-1">
                        {t("sinceInstructor")}
                    </span>
                    <span className="border-accent text-accent rounded-full border px-3 py-1">
                        {t("award")}
                    </span>
                </div>
                <p className="text-muted mt-4 max-w-3xl text-base leading-relaxed md:text-lg">
                    {t("description")}
                </p>
            </div>
        </section>
    );
}
