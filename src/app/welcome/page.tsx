'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-03-01") - +new Date();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white relative">
            {/* Video */}
            {!videoEnded && (
                <video
                    ref={videoRef}
                    src="/bg.mp4"
                    loop
                    className="w-full opacity-20 h-screen object-cover fixed top-0 left-0"
                    muted
                    autoPlay
                    onEnded={handleVideoEnd}
                />
            )}

            {/* Timer Overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center absolute mx-auto transform -translate-x-1/2 -translate-y-1/2 z-10"
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
            </motion.div>
        </div>
    );
}