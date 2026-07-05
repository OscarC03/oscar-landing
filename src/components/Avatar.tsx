import Image from "next/image";

export function Avatar({ size = 40 }: { size?: number }) {
    return (
        <Image
            src="/images/oscar.jpg"
            alt="Oscar Cristaudo"
            width={size}
            height={size}
            className="shrink-0 rounded-full object-cover"
        />
    );
}
