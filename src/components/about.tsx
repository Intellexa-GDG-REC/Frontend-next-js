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
      <div className="px-4 sm:px-6 lg:px-[8%] min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 py-0">
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
      <div className="lg:mt-0 md:mt-20 mt-12" >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
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
                  <svg className="mr-3" role="img" width={30} height={30} fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rockstar Games</title><path d="M5.971 6.816h3.241c1.469 0 2.741-.448 2.741-2.084 0-1.3-1.117-1.576-2.19-1.576H6.748l-.777 3.66Zm12.834 8.753h5.168l-4.664 3.228.755 5.087-4.041-3.07L10.599 24l2.536-5.392s-2.95-3.075-2.947-3.075c-.198-.262-.265-.936-.265-1.226 0-.367.024-.739.049-1.134.028-.451.058-.933.058-1.476 0-1.338-.59-2.038-2.036-2.038H5.283l-1.18 5.525H.026L3.269 0h7.672c2.852 0 5.027.702 5.027 3.936 0 2.276-1.12 3.894-3.592 4.233v.045c1.162.276 1.598 1.062 1.598 2.527 0 .585-.018 1.098-.034 1.581-.015.428-.03.834-.03 1.243 0 .525.137 1.382.48 1.968h.567l3.028-5.06.82 5.096Zm-1.233-2.948-2.187 3.654h-3.457l2.103 2.189-1.73 3.672 3.777-2.218 2.976 2.263-.553-3.731 3.093-2.139h-3.43l-.592-3.69Z" /></svg>
                </div>
                <div>
                  <svg fill="white" className="mr-3" role="img" width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </div>
                <div>
                  <svg fill="white" className="mr-3" width={30} height={30} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dolby</title><path d="M0 3.564v16.872h2.488c4.648 0 8.438-3.788 8.438-8.436s-3.79-8.436-8.438-8.436H0zm21.512 0c-4.648 0-8.438 3.788-8.438 8.436s3.79 8.436 8.438 8.436H24V3.564h-2.488z" /></svg>
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

