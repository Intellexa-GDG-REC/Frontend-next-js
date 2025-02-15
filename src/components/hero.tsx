'use client';
import { motion } from "motion/react"
import { useEffect, useState } from "react";
import { AddCommitSvg } from "./addCommitSvg";
import { useAuthStore } from '@/lib/auth'
import { JoinNow } from "./joinNow";
import { FlipWords } from "./ui/flip-words";

export const Hero = () => {
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    };

    useEffect(() => {
        setIsInitialRender(false);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    const words = ["Connect", "Create", "New", "Modern"];
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
            <div className="relative px-52 py-36">
                <motion.span className="absolute top-20 left-12 rounded-xl p-2 hidden lg:block"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: 1
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: 1 },
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        x: mousePosition.x * 0.04,
                        y: mousePosition.y * 0.04,
                    }}
                >

                    <svg className="size-20 drop-shadow-[0_16px_24px_rgba(96,155,61,0.60)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 602 734" version="1.1"><title>neovim-mark@2x</title><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stopColor="#16B0ED" stopOpacity="0.800235524" offset="0%" /><stop stopColor="#0F59B2" stopOpacity="0.83700023" offset="100%" /></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2"><stop stopColor="#7DB643" offset="0%" /><stop stopColor="#367533" offset="100%" /></linearGradient><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3"><stop stopColor="#88C649" stopOpacity="0.8" offset="0%" /><stop stopColor="#439240" stopOpacity="0.84" offset="100%" /></linearGradient></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" ><g id="mark-copy" transform="translate(2.000000, 3.000000)"><path d="M0,155.5704 L155,-1 L154.999997,727 L0,572.237919 L0,155.5704 Z" id="Left---green" fill="url(#linearGradient-1)" /><path d="M443.060403,156.982405 L600,-1 L596.818792,727 L442,572.219941 L443.060403,156.982405 Z" id="Right---blue" fill="url(#linearGradient-2)" transform="translate(521.000000, 363.500000) scale(-1, 1) translate(-521.000000, -363.500000) " /><path d="M154.986294,0 L558,615.189696 L445.224605,728 L42,114.172017 L154.986294,0 Z" id="Cross---blue" fill="url(#linearGradient-3)" /><path d="M155,283.83232 L154.786754,308 L31,124.710606 L42.4619486,113 L155,283.83232 Z" id="Shadow" fillOpacity="0.13" fill="#000000" /></g></g></svg>

                </motion.span>

                <motion.span className="absolute top-2 right-16 rounded-xl p-2 hidden lg:block"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: 1
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: 1 },
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        x: mousePosition.x * 0.04,
                        y: mousePosition.y * 0.04,
                    }}>
                   
                   <svg className="size-20 drop-shadow-[0_16px_24px_rgba(96,155,61,0.60)]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg> </motion.span>

                <motion.span className="absolute bottom-14 text-[#ff3c00] right-14 rounded-xl hidden lg:block"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: 1
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: 1 },
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        x: mousePosition.x * 0.04,
                        y: mousePosition.y * 0.04,
                    }}
                >
                    <svg className="size-20 drop-shadow-[0_16px_24px_rgba(255,60,0,0.60)]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M27.573 4.229a9.733 9.733 0 0 0-13.068-2.802L7.041 6.172a8.48 8.48 0 0 0-3.854 5.734a8.9 8.9 0 0 0 .891 5.776a8.25 8.25 0 0 0-1.266 3.198a9.13 9.13 0 0 0 1.547 6.88a9.78 9.78 0 0 0 13.068 2.828l7.469-4.75a8.5 8.5 0 0 0 3.839-5.734a8.86 8.86 0 0 0-.896-5.755a9.04 9.04 0 0 0-.266-10.12M13.76 28.172a5.91 5.91 0 0 1-6.349-2.359c-.865-1.198-1.182-2.677-.932-4.146l.146-.708l.135-.438l.401.266a9.3 9.3 0 0 0 2.917 1.469l.271.094l-.031.266c-.026.37.083.786.297 1.104c.438.63 1.198.932 1.932.734c.161-.052.318-.104.453-.188l7.438-4.745c.375-.24.615-.599.708-1.026a1.7 1.7 0 0 0-.266-1.255a1.82 1.82 0 0 0-1.932-.708c-.161.057-.333.12-.469.203l-2.813 1.786a5.9 5.9 0 0 1-7.865-1.708a5.46 5.46 0 0 1-.938-4.146a5.16 5.16 0 0 1 2.365-3.469l7.422-4.745a6 6 0 0 1 1.521-.667a5.92 5.92 0 0 1 6.349 2.349a5.5 5.5 0 0 1 .76 4.849l-.135.443l-.385-.266a9.9 9.9 0 0 0-2.932-1.469l-.266-.078l.026-.266a1.83 1.83 0 0 0-.297-1.12a1.785 1.785 0 0 0-1.932-.708a2 2 0 0 0-.453.188l-7.453 4.786c-.375.25-.615.599-.693 1.036c-.078.427.026.896.266 1.24c.427.63 1.203.896 1.922.708a2 2 0 0 0 .464-.188l2.844-1.813a5.3 5.3 0 0 1 1.516-.677a5.89 5.89 0 0 1 6.349 2.359a5.5 5.5 0 0 1 .958 4.13a5.12 5.12 0 0 1-2.333 3.469l-7.438 4.734a6.5 6.5 0 0 1-1.547.677z" /></svg>
                </motion.span>


                <motion.span className="absolute bottom-4 left-20 text-[#58c4dc] rounded-xl p-2 hidden lg:block"
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: 1
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: 1 },
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{
                        x: mousePosition.x * 0.04,
                        y: mousePosition.y * 0.04,
                    }}>
                    <svg className="size-24 drop-shadow-[0_16px_24px_rgba(64,196,255,0.60)]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon><polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                    </svg>
                </motion.span>
            
                <div className="w-full h-full text-center">
                    <motion.h1
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.3 }}
                        initial={{ y: -20, opacity: 0 }}
                        className="md:text-8xl text-6xl  font-medium">
                        <span className="text-green-400">Git</span>RecQuest
                    </motion.h1>
                    <motion.h3
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.6 }}
                        initial={{ y: -20, opacity: 0 }}
                        className="text-3xl mt-5">An inter-college GitHub collaboration to build, innovate, and<FlipWords words={words} /> <br /></motion.h3>
                    <JoinNow />
                </div>
            </div>
            <AddCommitSvg></AddCommitSvg>
        </div>
    )
}
