import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Gradient } from "@/components/gradient";
import { Timeline } from "@/components/timeline";
import { Prize } from "@/components/prizes";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import Collab from "@/components/collab";
import Domain from "@/components/domain";
import { Navbar2 } from "@/components/navbar2";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });
  
  export const metadata: Metadata = {
    title: "GitRecQuest v.1.0.0",
    description: "Inter-College, Open-Source Contribution Contest",
  };
export default function Home() {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased font-clash bg-[#0a0a0a] flex justify-center`}>
  <div className="max-w-screen-2xl overflow-x-hidden text-white relative ">
            <Gradient />
            <section className="bg-grid-white/5 border-white relative mb-40">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          {/*   <Navbar2 />  */}
              <Hero />  
            </section>
          <About />         
              <Domain/> 
           <Timeline />
          <Prize /> 
        
           <Collab/>  
           
          
            <Footer /> 
        </div>
        </div>
      
    );
}
