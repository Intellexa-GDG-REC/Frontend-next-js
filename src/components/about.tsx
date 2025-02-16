"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Marquee } from "./marquee"

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
    <div>
      <div className="px-4 sm:px-6 lg:px-[4%] flex flex-col lg:flex-row items-center justify-center gap-8 py-0">
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
            Intellexa and Google Developer Groups on Campus, REC have hereby decided to host an inter- college open
            source contribution competition jointly, 'GitRecQuest v1.0.0' , celebrating the spirit of open source
            contribution and nuanced problem solving!
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
            <Image src="/gdg_logo.svg" width={200} height={200} alt="GDG logo" />
          </motion.div>

          <motion.div
            className="absolute left-2/3 top-2/3 border rounded-2xl border-white/10 flex justify-center items-center bg-white w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-52 lg:h-52"
            variants={variant}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image src="/wtm.png" width={200} height={200} alt="WTM" className="rounded-2xl" />
          </motion.div>
        </div>
      </div>
      <div className="w-full mt-28 ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-lg shadow-lg overflow-hidden">
            <Marquee containerClassName="cntr" duration={10}>
              <div className="flex space-x-3 items-center justify-center">
                <div>
                  <Image
                    src="/catchblock.png"
                    width={150}
                    height={150}
                    alt="catchblock"
                  ></Image>
                </div>
                <div>
                  <svg
                    className="mr-3"
                    role="img"
                    width={30}
                    height={30}
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Google</title>
                    <path d="M12 12v-2.56h10.56c.24 1.28.24 2.56 0 3.84H12V12Zm0 0V9.44h-2.56V12h2.56Zm-5.12 0V9.44H4.32V12h2.56Zm-5.12 0V9.44H0V12h1.76Zm5.12 0H4.32v2.56h2.56V12Zm2.56 0H4.32v2.56h5.12V12ZM12 12h10.56c-.48 3.36-3.36 6.72-7.68 6.72-4.48 0-8-3.52-8-8s3.52-8 8-8c2.08 0 4.16.8 5.76 2.24l-2.4 2.4c-.96-.96-2.24-1.44-3.36-1.44-2.88 0-5.12 2.24-5.12 5.12s2.24 5.12 5.12 5.12c2.4 0 4.32-1.6 4.96-3.84H12Z" />
                  </svg>
                </div>

                <div>
                  <svg
                    className="mr-3"
                    role="img"
                    width={30}
                    height={30}
                    fill="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Dev.to</title>
                    <path d="M7.5 3.375h9A4.125 4.125 0 0 1 20.625 7.5v9a4.125 4.125 0 0 1-4.125 4.125h-9A4.125 4.125 0 0 1 3.375 16.5v-9A4.125 4.125 0 0 1 7.5 3.375ZM5.66 9.142h1.755v5.716H5.66V9.142Zm6.034 0h2.462c.742 0 1.323.59 1.323 1.323v3.07c0 .733-.581 1.323-1.323 1.323h-2.462c-.742 0-1.323-.59-1.323-1.323v-3.07c0-.733.581-1.323 1.323-1.323Zm3.248 1.142h-.977v2.462h.977v-2.462Zm-4.391 0h-.977v2.462h.977v-2.462Zm-6.6-.571h1.286v4.574H4.95v-4.574Zm9.128-2.062h-4.574a1.714 1.714 0 0 0-1.715 1.715v4.574c0 .947.767 1.715 1.715 1.715h4.574c.947 0 1.715-.768 1.715-1.715v-4.574a1.714 1.714 0 0 0-1.715-1.715Z" />
                  </svg>
                </div>
              </div>
            </Marquee>
          </div>
        </div >
      </div >
    </div>
  )
}

export default About

