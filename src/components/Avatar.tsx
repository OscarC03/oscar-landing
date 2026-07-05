import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({ className }: { className?: string }) {
    return (
        <Image
            src="/images/oscar.jpg"
            alt="Oscar Cristaudo"
            width={128}
            height={128}
            className={cn(
                "shrink-0 rounded-full object-cover shadow-md",
                className,
            )}
        />
    );
}
