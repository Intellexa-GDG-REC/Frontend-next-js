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
    const scrollRef = useRef<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            console.log("sef");
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white">
            {!videoEnded ? (
                <video
                    ref={videoRef}
                    src="/bg.mp4"
                    className="w-full h-screen object-cover fixed top-0 left-0"
                    onEnded={handleVideoEnd}
                />
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-10"
                >
                    <h1 className="text-5xl font-extrabold mb-6 text-blue-400 pb-5">Countdown</h1>
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
            )}
        </div>
    );
}
