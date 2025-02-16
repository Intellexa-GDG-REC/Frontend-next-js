'use client';
import { motion } from "motion/react"
import { useEffect, useState } from "react";
import { AddCommitSvg } from "./addCommitSvg";
import { useAuthStore } from '@/lib/auth'
import { JoinNow } from "./joinNow";

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

    const words = ["Connect", "Create", "Contribute", "innovate", "have fun"];
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] overflow-x-hidden w-screen">
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
                    <svg className="size-24 drop-shadow-[0_16px_24px_rgba(223,35,79,0.60)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#DF234F" d="M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z" /></svg>
                </motion.span>

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
                        Git<span className="text-green-400">REC</span>Quest
                    </motion.h1>
                    <motion.h3
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.6 }}
                        initial={{ y: -20, opacity: 0 }}

                        className="text-2xl mt-5">An inter-college GitHub collaboration to build, innovate, and <span className="text-green-400">connect</span></motion.h3>

                    <JoinNow />
                </div>
            </div>
            {/* <AddCommitSvg></AddCommitSvg> this looks really bad */} 
            
        </div>
    )
}