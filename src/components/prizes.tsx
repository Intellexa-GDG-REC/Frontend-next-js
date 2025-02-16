'use client'
import { motion } from "motion/react"
import { Gradient } from "./gradient"
import { PrizeCard } from "./prizeCard"
export const Prize = () => {
    const variant = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
    }
    return (
        <div className="mt-20 md:mt-28 p-4 sm:p-6 md:p-8 lg:p-12 relative">
            <div className="flex justify-center">
                <motion.h2
                    className="block bg-green-500 text-black md:text-5xl text-3xl px-6 py-5"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        type: "spring",
                        damping: 10,
                        delay: 0.3
                    }}
                    viewport={{ once: true }}
                >
                    {"<Prize Pool />"}
                </motion.h2>
            </div>
            <div className="lg:flex lg:justify-evenly lg:items-center ">
                <div>
                    <PrizeCard title="Top 10 Contributors💰" description="₹5000 for each of the top 10 Contributors💰" amount="5000" />
                </div>
                <div>
                    <PrizeCard title="Best Women Contributor💰" description="₹2500 for the Best Women Contributor💰" amount="2500" />
                </div>
            </div>
        </div>
    )
}