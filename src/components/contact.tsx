import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
    const t = useTranslations("contact");

    const links = [
        { label: t("email"), href: `mailto:${siteConfig.email}`, icon: Mail },
        {
            label: t("linkedin"),
            href: siteConfig.linkedin,
            icon: LinkedinIcon,
        },
        { label: t("github"), href: siteConfig.github, icon: GithubIcon },
        {
            label: t("instagram"),
            href: siteConfig.instagram,
            icon: InstagramIcon,
        },
    ];

    return (
        <section id="contact" className="scroll-mt-24 py-16 md:py-20">
            <div className="flex items-baseline gap-3">
                <span className="text-accent text-sm font-medium">06</span>
                <h2 className="text-3xl font-semibold tracking-tight">
                    {t("heading")}
                </h2>
            </div>
            <p className="text-muted mt-6 max-w-xl text-base leading-relaxed md:text-lg">
                {t("description")}
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium">
                {links.map(({ label, href, icon: Icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                        className="decoration-border hover:decoration-accent inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors"
                    >
                        <Icon className="h-4 w-4" />
                        {label}
                    </a>
                ))}
            </div>
        </section>
    );
}
