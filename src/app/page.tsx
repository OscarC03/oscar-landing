"use client";

import { Dialog } from "radix-ui";
import { Sparkles, X } from "lucide-react";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 font-sans dark:bg-black">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-50">
                <Sparkles className="h-6 w-6" />
                <h1 className="text-2xl font-semibold tracking-tight">
                    Oscar Landing
                </h1>
            </div>

            <Dialog.Root>
                <Dialog.Trigger className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                    Apri esempio Radix
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl dark:bg-zinc-900">
                        <Dialog.Title className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                            Setup completato
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                            Next.js (App Router), TypeScript, Tailwind CSS,
                            Radix UI e lucide-react sono configurati e
                            funzionanti.
                        </Dialog.Description>
                        <Dialog.Close className="absolute top-4 right-4 rounded-full p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                            <X className="h-4 w-4" />
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
