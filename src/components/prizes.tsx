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
        <div className="md:px-[8%] mt-10 px-12">
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
            <div className="md:flex md:justify-evenly md:items-center mt-20">
                <div className="md:w-[400px] md:h-[500px] w-full h-[500px] border border-white/10 bg-grid-white/5 rounded-xl relative mb-10">
                    <Gradient />
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
                <div className="md:w-[400px] md:h-[500px] w-full h-[500px] border border-white/10 bg-grid-white/5 rounded-xl relative mb-10">
                    <Gradient />
                    <div className=" rounded-2xl absolute pointer-events-none inset-0 flex items-center justify-center bg-[#0a0a0a] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                </div>
            </div>
        </div>
    )
}