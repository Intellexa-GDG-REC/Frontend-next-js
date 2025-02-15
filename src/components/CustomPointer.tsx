"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomPointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none sm:invisible md:invisible "
      animate={{ x: position.x - 10, y: position.y - 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ zIndex: 9999 }}
    >
        <img src="./pointer.png" alt="pointer" ></img>
        </motion.div>
  );
};

export default CustomPointer;
