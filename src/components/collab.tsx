"use client";
import React, { useState, useEffect } from "react";

const slides = [
  "https://i.pinimg.com/736x/92/44/3a/92443a61d25cf4e18f33ee6876aad09b.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen h-[100px] flex items-center justify-center">
      <div className="relative w-full max-w-2xl">
        <img
          src={slides[currentSlide]}
          alt="Slide"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
