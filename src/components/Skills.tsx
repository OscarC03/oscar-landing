import { useTranslations } from "next-intl";

const categoryKeys = ["languages", "frontend", "backend", "tools"] as const;

export function Skills() {
    const t = useTranslations("skills");

    return (
        <section id="skills" className="scroll-mt-24 py-16 md:py-20">
            <div className="flex items-baseline gap-3">
                <span className="text-accent text-sm font-medium">04</span>
                <h2 className="text-3xl font-semibold tracking-tight">
                    {t("heading")}
                </h2>
            </div>
            <dl className="divide-border border-border mt-8 divide-y border-t">
                {categoryKeys.map((key) => {
                    const items = t.raw(`categories.${key}.items`) as string[];
                    return (
                        <div
                            key={key}
                            className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
                        >
                            <dt className="text-muted text-sm font-medium tracking-wide uppercase">
                                {t(`categories.${key}.label`)}
                            </dt>
                            <dd className="text-base leading-relaxed md:text-lg">
                                {items.join("  ·  ")}
                            </dd>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}
