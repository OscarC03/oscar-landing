import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function Experience() {
    const t = useTranslations("experience");

    return (
        <section id="experience" className="scroll-mt-24 py-16 md:py-20">
            <Reveal>
                <div className="flex items-baseline gap-3">
                    <span className="text-accent text-sm font-medium">03</span>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        {t("heading")}
                    </h2>
                </div>
                <div className="border-accent mt-8 border-l-2 pl-6">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                        <h3 className="text-xl font-semibold">{t("role")}</h3>
                        <span className="text-muted">{t("company")}</span>
                    </div>
                    <p className="text-muted mt-1 text-sm">{t("period")}</p>
                    <p className="text-muted mt-4 max-w-3xl text-base leading-relaxed md:text-lg">
                        {t("description")}
                    </p>
                </div>
            </Reveal>
        </section>
    );
}
