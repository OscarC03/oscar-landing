"use client";

import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/lib/use-active-section";

const sections = [
    "about",
    "education",
    "experience",
    "skills",
    "volunteering",
    "contact",
] as const;

const socialLinks = [
    { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
    { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: siteConfig.instagram, icon: InstagramIcon, label: "Instagram" },
];

export function Nav() {
    const t = useTranslations("nav");
    const tHero = useTranslations("hero");
    const active = useActiveSection(sections);

    return (
        <>
            <div className="fixed top-4 right-4 z-20 flex items-center gap-2 shadow-sm lg:top-6 lg:right-6">
                <ThemeToggle />
                <LocaleSwitcher />
            </div>

            <aside className="border-border fixed inset-y-0 left-0 hidden w-72 flex-col justify-between border-r px-8 py-12 shadow-sm lg:flex">
                <div>
                    <a
                        href="#top"
                        className="text-lg font-semibold tracking-tight"
                    >
                        Oscar Cristaudo
                    </a>
                    <p className="text-muted mt-3 text-sm">
                        {tHero("eyebrow")}
                    </p>
                    <nav className="mt-12 flex flex-col gap-4">
                        {sections.map((section) => {
                            const isActive = active === section;
                            return (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`group flex items-center gap-3 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "text-ink"
                                            : "text-muted hover:text-ink"
                                    }`}
                                >
                                    <span
                                        className={`h-px transition-all ${
                                            isActive
                                                ? "bg-accent w-10"
                                                : "bg-border group-hover:bg-muted w-6"
                                        }`}
                                    />
                                    {t(section)}
                                </a>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="text-muted hover:text-ink transition-colors"
                        >
                            <Icon className="h-4 w-4" />
                        </a>
                    ))}
                </div>
            </aside>
        </>
    );
}
