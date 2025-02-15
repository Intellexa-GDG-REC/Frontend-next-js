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
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
        },  
        {
          title: "App development ",
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
        },
        {
          title: "Artificial Intelligence & Machine Learning",
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
        },
        {
          title: "DS (Data Science)",
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
        },
        {
          title: "DL (Deep Learning)",
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
        },
        {
          title: "Blockchain & Web 3",
          src: "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?t=st=1739587738~exp=1739591338~hmac=92d066b3e80411926ce98dd7a7293b98ae7b902f0ff4974ead495b9c74a40fdc&w=740",
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
