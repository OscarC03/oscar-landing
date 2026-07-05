import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Volunteering } from "@/components/Volunteering";
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <main className="divide-border mx-auto w-full max-w-3xl flex-1 divide-y px-6">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Volunteering />
            <Contact />
        </main>
    );
}
