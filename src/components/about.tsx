'use client'

import { motion } from "motion/react"
import Image from "next/image"

export const About = () => {
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
        <div className="lg:px-[8%] md:flex md:space-x-48 h-screen md:items-center">
            <div className="md:w-1/2 p-6 text-center md:text-left">
                <motion.span
                    className="text-nowrap inline-block bg-green-500 text-black md:text-5xl text-3xl px-6 py-5"
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
                    {"<About the event />"}
                </motion.span>
                <motion.p
                    className="mt-10 text-2xl"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    viewport={{ once: true }}
                >
                    Intellexa and Google Developer Groups on Campus,
                    REC have hereby decided to host an inter- college
                    open source contribution competition jointly,
                    'GitRecQuest v1.0.0' , celebrating the spirit of open
                    source contribution and nuanced problem solving!
                </motion.p>
                <motion.p
                    className="text-2xl mt-8"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.6
                    }}
                    viewport={{ once: true }}
                >
                    Let's explore more on what GitRecQuest v1.0.0 has
                    to offer!
                </motion.p>
            </div>
            <div className="relative w-96 h-[65%] pt-32">
                <motion.div 
                    className="absolute left-0 top-0 w-52 h-52 border rounded-2xl border-white/10 flex justify-center items-center bg-white/5"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/intellexa_logo.png"
                        width={200}
                        height={200}
                        alt="Intellexa logo"
                    />
                </motion.div>

                <motion.div 
                    className="absolute left-1/3 top-1/3 w-52 h-52 border rounded-2xl border-white/10 flex justify-center items-center bg-white"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/gdg_logo.svg"
                        width={200}
                        height={200}
                        alt="GDG logo"
                    />
                </motion.div>

                <motion.div 
                    className="absolute left-2/3 top-2/3 w-52 h-52 border rounded-2xl border-white/10 flex justify-center items-center bg-white"
                    variants={variant}
                    initial="initial"
                    whileInView="animate"
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/wtm.png"
                        width={180}
                        height={180}
                        alt="WTM"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default About