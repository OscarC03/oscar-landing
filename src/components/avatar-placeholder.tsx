export function AvatarPlaceholder({
    initials,
    size = 96,
}: {
    initials: string;
    size?: number;
}) {
    return (
        <div
            className="bg-accent flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
            style={{ width: size, height: size, fontSize: size * 0.36 }}
            aria-hidden="true"
        >
            {initials}
        </div>
    );
}
