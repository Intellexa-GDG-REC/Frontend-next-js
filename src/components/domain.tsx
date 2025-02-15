"use client"
import React from 'react'

import { FocusCards } from './ui/focus-cards'
import { motion } from "framer-motion"
export default function Domain() {
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
    const cards = [
        {
          title: "Web development",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },  
        {
          title: "App development ",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },
        {
          title: "Artificial Intelligence & Machine Learning",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },
        {
          title: "DS (Data Science)",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },
        {
          title: "DL (Deep Learning)",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },
        {
          title: "Blockchain & Web 3",
          src: "https://photoszone.net/wp-content/uploads/girls-dp3.jpg",
        },
      ];
     
      return (
        <div className='mt-[5%]'>
             <div className="flex justify-center">
                           <motion.h2
                               className="block bg-green-500 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 py-3 sm:py-5 rounded-lg"
                               initial={{ opacity: 0, y: -20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.3 }}
                               viewport={{ once: true }}
                           >
                               {"<Domain/>"}
                           </motion.h2>
                       </div>
          <div className='p-5 mt-20'>
          <motion.h2
                               className="block text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-6 py-3 sm:py-5 rounded-lg"
                               initial={{ opacity: 0, y: -20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10, delay: 0.3 }}
                               viewport={{ once: true }}
                           >
  <FocusCards cards={cards} />
  </motion.h2>
 </div>
        </div>
    
      );
}
