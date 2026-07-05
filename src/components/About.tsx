import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";

export function About() {
    const t = useTranslations("about");

    return (
        <section id="about" className="scroll-mt-24 py-16 md:py-20">
            <Reveal>
                <div className="flex items-baseline gap-3">
                    <span className="text-accent text-sm font-medium">01</span>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        {t("heading")}
                    </h2>
                </div>
                <p className="text-muted mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
                    {t("body")}
                </p>
            </Reveal>
        </section>
    );
}
