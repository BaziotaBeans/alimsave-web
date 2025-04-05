"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "../../data/how-does-work-slides";
import Image from "next/image";

const SLIDE_INTERVAL = 5000; // 5 segundos por slide

export function HowDoesItWord() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current === 4 ? 1 : current + 1));
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleSlideChange = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="bg-orange flex flex-col relative overflow-hidden">
      <div className="flex flex-col py-16 gap-4 w-[80%] mx-auto">
        <h1 className="text-5xl font-montserrat font-extrabold  text-white">Como funciona?</h1>

        {/* Numbered buttons */}
        <div className="flex space-x-4 mb-8">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handleSlideChange(num)}
              className={`w-[72px] h-10 rounded-full  flex items-center justify-center font-bold transition-colors duration-300 ${
                activeSlide === num
                  ? "bg-white text-orang border-2 border-white text-orange"
                  : "bg-transparent text-white border-2 border-[#F6A170]"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Slide content */}
        <div>
          <AnimatePresence mode="wait">
            {slides.map(
              (slide) =>
                activeSlide === slide.id && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-xl"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white">{slide.content}</p>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center space-x-2 mt-8">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={`dot-${num}`}
              onClick={() => handleSlideChange(num)}
              className="focus:outline-none"
            >
              {num === activeSlide ? (
                <motion.div className="w-12 h-2 bg-white rounded-full" layoutId="activeDot" />
              ) : (
                <div className="w-2 h-2 bg-white rounded-full opacity-70" />
              )}
            </button>
          ))}
        </div>
      </div>

      <Image
        src="/images/illustration-food.png"
        alt="illustration food"
        width={506}
        height={506}
        className="object-center w-full max-w-[400px] pointer-events-none absolute right-0"
        quality={100}
      />
    </div>
  );
}
