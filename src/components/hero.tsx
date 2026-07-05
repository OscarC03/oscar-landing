import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section
            id="top"
            className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28"
        >
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
                {t("eyebrow")}
            </p>
            <h1 className="mt-5 max-w-3xl text-6xl leading-[0.95] font-semibold tracking-tighter md:text-7xl lg:text-8xl">
                {t("title")}
            </h1>
            <p className="text-muted mt-8 max-w-xl text-base leading-relaxed md:text-lg">
                {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
                <a
                    href={`mailto:${siteConfig.email}`}
                    className="decoration-border hover:decoration-accent inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors"
                >
                    <Mail className="h-4 w-4" />
                    {t("ctaContact")}
                </a>
                <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="decoration-border hover:decoration-accent inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors"
                >
                    <GithubIcon className="h-4 w-4" />
                    {t("ctaGithub")}
                </a>
            </div>
        </section>
    );
}
