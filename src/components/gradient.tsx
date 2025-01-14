'use client'
import { motion } from "motion/react"
export const Gradient = ()=> {
    return (
        <motion.span className="gradient-animation bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-neutral-950 to-[#0a0a0a] w-full h-40 absolute -z-10 top-0"
        initial = {{opacity: 0, y: -20}}
        animate = {{opacity : 1, y:0}}
        transition={{ duration: 5, ease: "linear", type: "spring", delay: 0.5, }}
        ></motion.span>
    )
}