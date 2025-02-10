'use client';
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/lib/auth";
import Link from "next/link";

export const JoinNow = () => {
    const [isInitialRender, setIsInitialRender] = useState(true);
    const { setUser, user } = useAuthStore();

    useEffect(() => {
        setIsInitialRender(false);
    }, [user]);

    const handleLogin = () => {
        if (process.env.NEXT_PUBLIC_API_URL) {
            window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/github`;
        } else {
            console.error('API URL is not defined');
        }
    };

    const handleLogout = () => {
        document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setUser(null);
    };

    return (
        user == null ? (
            <motion.button
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                    damping: 10,
                    delay: isInitialRender ? 0.9 : 0,
                }}
                initial={{ y: -20, opacity: 0 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogin}
                className="mt-6 text-xl px-5 py-3 bg-gradient-to-b from-green-400 to-green-500 text-black rounded-xl duration-200 hover:drop-shadow-[0_16px_24px_rgba(34,197,94,0.35)]"
            >
                Register Now
            </motion.button>
        ) : (
            <Link href = "/contribute">
                <motion.button
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "spring",
                        damping: 10,
                        delay: isInitialRender ? 0.9 : 0,
                    }}
                    initial={{ y: -20, opacity: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 text-xl px-5 py-3 bg-gradient-to-b from-green-400 to-green-500 text-black rounded-xl duration-200 hover:drop-shadow-[0_16px_24px_rgba(34,197,94,0.35)]"
                >
                    Contribute
                </motion.button>
            </Link>
        )
    );
};
