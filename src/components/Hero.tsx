import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Avatar } from "@/components/Avatar";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
    const t = useTranslations("hero");

    return (
        <section
            id="top"
            className="scroll-mt-24 pt-8 pb-12 sm:pt-12 md:pt-24 md:pb-28 lg:pt-28"
        >
            <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28" />
            <p className="text-accent mt-6 text-sm font-medium tracking-widest uppercase">
                {t("eyebrow")}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[0.95] font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {t("title")}
            </h1>
            <p className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:mt-8 md:text-lg">
                {t("description")}
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium sm:mt-8 sm:gap-6">
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
