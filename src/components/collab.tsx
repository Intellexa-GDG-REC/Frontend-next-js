"use client";
import "react-slideshow-image/dist/styles.css";
import React, { useEffect, useState } from "react";
import { Marquee } from "./marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const slideImages = [
  {
    url: "/collab/img1.jpg",
    caption: "Slide 1"
  },
  {
    url: "/collab/img2.jpg",
    caption: "Slide 2"
  },
  {
    url: "/collab/img3.jpg",
    caption: "Slide 3"
  },
  {
    url: "/collab/img4.jpg",
    caption: "Slide 4"
  },
  {
    url: "/collab/img5.jpg",
    caption: "Slide 5"
  },
  {
    url: "/collab/img6.jpg",
    caption: "Slide 6"
  },
  {
    url: "/collab/img7.jpg",
    caption: "Slide 7"
  },
  {
    url: "/collab/img8.jpg",
    caption: "Slide 8"
  },
  {
    url: "/collab/img9.jpg",
    caption: "Slide 9"
  }
];

const variant = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0
  },
};

const Slideshow = () => {
  const [slideWidth, setSlideWidth] = useState(400); // Default width for slides

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlideWidth(150);
      } else if (window.innerWidth < 768) { 
        setSlideWidth(200);
      } else if (window.innerWidth < 1024) {
        setSlideWidth(200);
      } else if (window.innerWidth < 1280) {
        setSlideWidth(250);
      } else {
        setSlideWidth(350);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <div className="mt-20 md:mt-3 p-4 sm:p-6 md:p-8 lg:p-12 relative">
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
          {"<Startups />"}
        </motion.h2>
      </div>

      <div className="w-full max-w-15xl px-4 mt-10">
        <Image
          alt="loading"
          src={'/collab/kenesis.jpg'}
          className="mx-auto transition-transform duration-300 hover:scale-105 rounded-2xl"
          width={300}
          height={300}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>

      <motion.h2
        className="block bg-green-500 text-black md:text-5xl text-3xl px-6 py-5 mt-20 w-max mx-auto"
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
        {"<Community Partners />"}
      </motion.h2>

      <div className="w-full mt-10" >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full rounded-lg shadow-lg overflow-hidden ">
            <Marquee containerClassName="cntr" duration={20}>
              <div className="flex space-x-3 items-center justify-center">
                {slideImages.map((slide, index) => (
                  <div key={index}>
                    <Image
                      src={slide.url}
                      width={slideWidth} 
                      height={slideWidth}
                      alt={slide.caption}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div >
      </div >
    </div>
  );
};

export default Slideshow;