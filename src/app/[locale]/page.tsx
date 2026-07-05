import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Volunteering } from "@/components/volunteering";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <>
            <Nav />
            <div className="lg:pl-72">
                <main className="divide-border mx-auto w-full max-w-3xl flex-1 divide-y px-6">
                    <Hero />
                    <About />
                    <Education />
                    <Experience />
                    <Skills />
                    <Volunteering />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
