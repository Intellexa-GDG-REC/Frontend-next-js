"use client";
import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
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
    caption: "Slide 7"
  },
  {
    url: "/collab/img7.jpg",
    caption: "Slide 7"
  },
  {
    url: "/collab/img8.jpg",
    caption: "Slide 7"
  },
  {
    url: "/collab/img9.jpg",
    caption: "Slide 7"
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
  return (
    <div>
      <motion.h2
        className="block bg-green-500 w-[20%] sm:w-[35%] mx-auto text-black md:text-5xl text-3xl px-1 py-5 text-center rounded-lg"
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
      <Image
        alt="loading"
        src={'/collab/kenesis.jpg'}
        className="mx-auto mt-20 m-15 mt-[7%] transition-transform duration-300 hover:scale-[1.1] mb-[7%] rounded-[20px]"
        width={500}
        height={500}
      />
      <motion.h2
        className="block bg-green-500 w-[50%] mx-auto text-black md:text-5xl text-3xl px-1 py-5 text-center rounded-lg"
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
     
      <div className="mb-20 mt-20 flex justify-center items-center pt-10 custom-overflow">
        <div className="w-full">
          <Slide autoplay={true} slidesToShow={5} slidesToScroll={1} infinite={true} duration={10}>
            {slideImages.map((slide, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 h-[300px] bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-900 bg-opacity-40 mx-2"
              >
                <div className="flex items-center justify-center rounded-2xl overflow-hidden">
                  <Image
                    src={slide.url}
                    alt={slide.caption}
                    width={300}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
     
    </div>
  );
};

export default Slideshow;
