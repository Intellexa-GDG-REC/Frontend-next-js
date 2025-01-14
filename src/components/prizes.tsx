'use client'
import { motion } from "motion/react"
import { Gradient } from "./gradient"
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
        <div className="lg:px-[8%] mt-10">
            <div className="flex justify-center">
                <motion.h2
                    className="block bg-green-500 text-black text-5xl px-6 py-5"
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
            <div className="flex justify-evenly items-center mt-20">
                <div className="w-[400px] h-[500px] border border-white/10 bg-grid-white/5 rounded-xl relative mb-10">
                    <Gradient />
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
                <div className="w-[400px] h-[500px] border border-white/10 bg-grid-white/5 rounded-xl relative mb-10">
                    <Gradient />
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
            </div>
        </div>
    )
}