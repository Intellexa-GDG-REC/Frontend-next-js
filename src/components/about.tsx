"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export const About = () => {
  const variant = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="px-4 sm:px-6 lg:px-[8%] min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 py-12">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.span
          className="inline-block bg-green-500 text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 py-3 sm:px-6 sm:py-5"
          variants={variant}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            damping: 10,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          {"<About the event />"}
        </motion.span>
        <motion.p
          className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl"
          variants={variant}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          Intellexa and Google Developer Groups on Campus, REC have hereby decided to host an inter- college open source
          contribution competition jointly, 'GitRecQuest v1.0.0' , celebrating the spirit of open source contribution
          and nuanced problem solving!
        </motion.p>
        <motion.p
          className="mt-4 sm:mt-6 lg:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl"
          variants={variant}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
          viewport={{ once: true }}
        >
          Let's explore more on what GitRecQuest v1.0.0 has to offer!
        </motion.p>
      </div>
      <div className="relative w-full max-w-md h-[300px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0">
        <motion.div
          className="absolute left-0 overflow-hidden top-0 w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-52 lg:h-52 border rounded-2xl border-white/10 flex justify-center items-center bg-white/5"
          variants={variant}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/intellexa_logo.png"
            width={220}
            height={220}
            alt="Intellexa logo"
            objectFit="contain"
            className="rounded-2xl scale-125"
          />
        </motion.div>

        <motion.div
          className="absolute left-1/3 top-1/3 w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-52 lg:h-52 border rounded-2xl border-white/10 flex justify-center items-center bg-white"
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
          className="absolute left-2/3 top-2/3 border rounded-2xl border-white/10 flex justify-center items-center bg-white w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-52 lg:h-52"
          variants={variant}
          initial="initial"
          whileInView="animate"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/wtm.png"
            width={200}
            height={200}
            alt="WTM"
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
