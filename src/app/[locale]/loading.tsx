function SkeletonSection() {
    return (
        <div className="py-16 md:py-20">
            <div className="flex items-center gap-3">
                <div className="bg-surface h-4 w-5 animate-pulse rounded" />
                <div className="bg-surface h-6 w-32 animate-pulse rounded" />
            </div>
            <div className="mt-6 space-y-3">
                <div className="bg-surface h-4 w-full max-w-2xl animate-pulse rounded" />
                <div className="bg-surface h-4 w-5/6 max-w-xl animate-pulse rounded" />
            </div>
        </div>
    );
}

export default function Loading() {
    return (
        <main className="divide-border mx-auto w-full max-w-3xl flex-1 divide-y px-6">
            <div className="py-10 md:py-24 lg:py-28">
                <div className="bg-surface h-3 w-40 animate-pulse rounded" />
                <div className="bg-surface mt-5 h-14 w-2/3 animate-pulse rounded md:h-20" />
                <div className="mt-8 space-y-3">
                    <div className="bg-surface h-4 w-full max-w-xl animate-pulse rounded" />
                    <div className="bg-surface h-4 w-2/3 max-w-xl animate-pulse rounded" />
                </div>
                <div className="mt-8 flex gap-6">
                    <div className="bg-surface h-4 w-24 animate-pulse rounded" />
                    <div className="bg-surface h-4 w-24 animate-pulse rounded" />
                </div>
            </div>
            <SkeletonSection />
            <SkeletonSection />
            <SkeletonSection />
            <SkeletonSection />
            <SkeletonSection />
            <SkeletonSection />
        </main>
    );
}
