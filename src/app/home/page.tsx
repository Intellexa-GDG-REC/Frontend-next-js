import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Gradient } from "@/components/gradient";
import { Timeline } from "@/components/timeline";
import { Prize } from "@/components/prizes";
export default function Home() {
    return (
        <div className="max-w-screen-2xl overflow-x-hidden text-white relative">
            <Gradient />
            <section className="bg-grid-white/5 border-white relative mb-40">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <Navbar />
                <Hero />
            </section>
            <About />
            <Timeline />
            <Prize />
            <Footer />
        </div>

    );
}
