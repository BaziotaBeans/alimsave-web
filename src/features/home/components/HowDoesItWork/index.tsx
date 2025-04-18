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
    <div className="border-t-8 border-t-green bg-green-light flex flex-col relative overflow-hidden py-8 px-4 md:px-0">
      <div className="flex flex-col py-12 md:py-16 gap-6 md:gap-4 w-full md:w-[80%] mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-montserrat font-extrabold text-green text-center md:text-left">
          Como funciona?
        </h1>

        {/* Numbered buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-6">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handleSlideChange(num)}
              className={`w-10 h-10 md:w-[72px] rounded-full cursor-pointer flex items-center justify-center font-bold transition-colors duration-300 ${
                activeSlide === num
                  ? "bg-transparent text-green border-3 border-green"
                  : "bg-transparent text-green border-3 border-green/30"
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
                    className="max-w-full md:max-w-xl text-center md:text-left"
                  >
                    <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-green">
                      {slide.title}
                    </h3>
                    <p className="text-base md:text-xl text-green">{slide.content}</p>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center md:justify-start space-x-2 mt-6">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={`dot-${num}`}
              onClick={() => handleSlideChange(num)}
              className="focus:outline-none cursor-pointer"
            >
              {num === activeSlide ? (
                <motion.div
                  className="w-8 md:w-12 h-2 bg-green rounded-full"
                  layoutId="activeDot"
                />
              ) : (
                <div className="w-2 h-2 bg-green rounded-full opacity-70" />
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
        className="w-64 md:w-[400px] pointer-events-none absolute right-0 bottom-0 md:bottom-auto opacity-10 sm:opacity-50"
        quality={100}
      />
    </div>
  );
}
