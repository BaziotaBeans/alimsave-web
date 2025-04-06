"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animação sequencial para cada item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function MasonryGrid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const mobileImages = [
    "/images/grid/img-1.png",
    "/images/grid/img-2.png",
    "/images/grid/img-3.png",
    "/images/grid/img-4.png",
    "/images/grid/img-5.png",
    "/images/grid/img-6.png",
    "/images/grid/img-7.png",
    "/images/grid/img-8.png",
    "/images/grid/img-9.png",
    "/images/grid/img-10.png",
  ];

  return (
    <div className="relative w-full h-full rounded-xl">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100,200 Q50,100 200,300 T500,400 T800,200"
            stroke="#FFD700"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M300,700 Q450,600 600,650 T900,500"
            stroke="#00FF00"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M1000,100 Q900,300 800,400 T500,600 T200,700"
            stroke="#FF6347"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      <svg
        width="383"
        height="641"
        viewBox="0 0 383 641"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-80 -right-12 pointer-events-none"
      >
        <path
          d="M644.781 -100.464C681.918 -73.5696 726.671 1.45022 608.593 86.3709C460.996 192.522 253.676 239.456 239.948 329.157C209.88 525.632 465.962 325.48 308.017 298.878C30.8299 252.194 -14.075 541.75 7.88794 640.333"
          stroke="#E8CE27"
          strokeWidth="5"
        />
      </svg>
      <svg
        width="755"
        height="685"
        viewBox="0 0 755 685"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-28 -left-28 pointer-events-none"
      >
        <path
          d="M-60.5 683.5C3.27016 684.862 248 523.091 290.761 471.576C344.211 407.183 242.568 400.936 215.697 445.147C194.2 480.515 298.033 491.839 360.033 454.073C483.5 386 481 344 450.5 330.5C283.171 256.436 553.203 11.7498 754 2"
          stroke="#14E29A"
          strokeWidth="3"
        />
      </svg>

      <svg
        width="91"
        height="182"
        viewBox="0 0 91 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-20 -right-0 pointer-events-none"
      >
        <path
          d="M76.1816 180.807C105.681 138.807 51.4972 121.538 41.6815 117.307C12.6814 104.807 1.9606 124.459 1.68162 127.807C-0.818604 157.807 55.1235 134.716 60.1814 132.307C85.1814 120.396 108.518 97.5202 41.6815 61.3069C-25.1549 25.0936 90.6813 1.80643 90.6813 1.80643"
          stroke="#E7FFCE"
          strokeWidth="3"
        />
      </svg>

      {isMobile ? (
        <div
          //className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10"
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-3 relative z-10"
        >
          {mobileImages.map((src, index) => (
            <motion.div
              key={src}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <Image
                src={src}
                width={200}
                height={200}
                alt="Food image"
                className="w-full h-full rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-3 relative z-10">
          {/* Coluna 1 */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              { src: "img-1", aspect: "default" },
              { src: "img-3", aspect: "square" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <Image
                  src={`/images/grid/${img.src}.png`}
                  width={380}
                  height={240}
                  alt="Food image"
                  className={`w-full h-full object-cover rounded-lg ${img.aspect === "square" ? "aspect-square" : ""}`}
                  quality={100}
                />
              </motion.div>
            ))}
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-3">
            {[
              { src: "img-2", aspect: "square" },
              { src: "img-6", aspect: "[3/4]" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i + 2}
              >
                <Image
                  src={`/images/grid/${img.src}.png`}
                  width={180}
                  height={240}
                  alt="Food image"
                  className={`w-full h-full object-cover rounded-lg aspect-${img.aspect}`}
                  quality={100}
                />
              </motion.div>
            ))}
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-3 mt-22">
            {["img-4", "img-5"].map((src, i) => (
              <motion.div
                key={src}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i + 4}
              >
                <Image
                  src={`/images/grid/${src}.png`}
                  width={180}
                  height={225}
                  alt="Food image"
                  className="w-full h-full object-cover rounded-lg"
                  quality={100}
                />
              </motion.div>
            ))}
          </div>

          {/* Coluna 4 */}
          <div className="flex flex-col gap-3 mt-8">
            {["img-7", "img-8"].map((src, i) => (
              <motion.div
                key={src}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i + 6}
              >
                <Image
                  src={`/images/grid/${src}.png`}
                  width={180}
                  height={180}
                  alt="Food image"
                  className="w-full h-full object-cover rounded-lg"
                  quality={100}
                />
              </motion.div>
            ))}
          </div>

          {/* Coluna 5 */}
          <div className="flex flex-col gap-3 mt-16">
            {["img-9", "img-10"].map((src, i) => (
              <motion.div
                key={src}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={i + 8}
              >
                <Image
                  src={`/images/grid/${src}.png`}
                  width={180}
                  height={225}
                  alt="Food image"
                  className="w-full h-full object-cover rounded-lg"
                  quality={100}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
