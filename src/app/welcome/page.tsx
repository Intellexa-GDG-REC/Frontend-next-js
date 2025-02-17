'use client';
import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { useRouter } from "next/navigation";
export default function Countdown() {
    const calculateTimeLeft = () => {
       // const targetDate = new Date("2025-02-22T19:00:00"); // Set date and time to 7 PM
        const targetDate = new Date("2025-02-17T22:26:00");
const difference = +targetDate - +new Date(); 
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };  const router = useRouter();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            const remainingTime = calculateTimeLeft();
            setTimeLeft(remainingTime);
            console.log(remainingTime)
            if (remainingTime.minutes <= 0) {
                clearInterval(timer);
                router.push("/home")
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (videoRef.current && !videoEnded) {
                videoRef.current.play();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [videoEnded]);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    return (
        <div>
           
       
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white relative">
            
            {/* Video */}
            {!videoEnded && (
                <video
                    ref={videoRef}
                    src="/bg.mp4"
                    loop
                    className="w-full  h-screen object-cover fixed top-0 left-0"
                    muted
                    autoPlay
                    onEnded={handleVideoEnd}
                />
            )}
{/*  <div className="flex  justify-center items-center gap-4">
            
            <Image
                    alt="loading"
                    src={'/wtm_white.png'}
                    className="p-5 mx-auto  rounded-[20px]"
                    width={170}
                    height={300}
                  />
            <Image
                    alt="loading"
                    src={'/gdg_white.png'}
                    className="p-5 mx-auto  rounded-[20px]"
                    width={300}
                    height={400}
                  />
            <Image
                    alt="loading"
                    src={'/college.webp'}
                    className="p-5 mx-auto"
                    width={300}
                    height={400}
                  />
                     <Image
                    alt="loading"
                    src={'/image-removebg-preview.png'}
                    className="p-5 mx-auto"
                    width={300}
                    height={400}
                  />
            </div>
            */}
            {/* Timer Overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center absolute  transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
                 
                <img src="/pointer.png" alt="logo" className="mx-auto w-[200px] h-[200px] mb-6" />
                <h1 className="text-5xl font-extrabold mb-6 text-white pb-5">Countdown</h1>

                <div className="flex gap-4 text-3xl font-mono bg-gray-900 px-8 py-6 rounded-[15px] shadow-2xl border border-gray-700">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="flex flex-col items-center">
                            <span className={`text-6xl font-bold ${
                                unit === "days" ? "text-yellow-400" :
                                unit === "hours" ? "text-green-400" :
                                unit === "minutes" ? "text-red-400" :
                                "text-purple-400"
                            }`}>
                                {value}
                            </span>
                            <span className="text-lg text-gray-400">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                        </div>
                    ))}
                </div>
                <motion.button
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                    damping: 10,
                    
                }}
                initial={{ y: -20, opacity: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
               onClick={() => router.push("/form")}
                className="mt-6 text-xl px-5 py-3 bg-gradient-to-b from-green-400 to-green-500 text-black rounded-xl duration-200 hover:drop-shadow-[0_16px_24px_rgba(34,197,94,0.35)]"
            >
                Register Now
                
            </motion.button>
            </motion.div>
        </div>
       
        </div>
    );
}