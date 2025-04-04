"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

      {isMobile ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
          <Image
            src="/images/grid/img-1.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-2.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-3.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-4.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-5.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-6.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-7.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-8.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-9.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
          <Image
            src="/images/grid/img-10.png"
            width={200}
            height={200}
            alt="Food image"
            className="w-full rounded-lg"
          />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-3 relative z-10">
          {/* Coluna 1 */}
          <div className="mt-8 flex flex-col gap-3">
            <div className="w-full">
              <Image
                src="/images/grid/img-1.png"
                width={380}
                height={240}
                alt="Food image"
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square w-full">
              <Image
                src="/images/grid/img-3.png"
                width={180}
                height={180}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col gap-3">
            <div className="aspect-square w-full">
              <Image
                src="/images/grid/img-2.png"
                width={180}
                height={180}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="aspect-[3/4] w-full">
              <Image
                src="/images/grid/img-6.png"
                width={180}
                height={240}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col gap-3 mt-22">
            <div className="aspect-[3/4] w-full">
              <Image
                src="/images/grid/img-4.png"
                width={180}
                height={240}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className=" w-full">
              <Image
                src="/images/grid/img-5.png"
                width={180}
                height={225}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Coluna 4 */}
          <div className="flex flex-col gap-3 mt-8">
            <div className="aspect-[3/4] w-full">
              <Image
                src="/images/grid/img-7.png"
                width={180}
                height={240}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square w-full">
              <Image
                src="/images/grid/img-8.png"
                width={180}
                height={180}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Coluna 5 */}
          <div className="flex flex-col gap-3 mt-16">
            <div className="aspect-square w-full">
              <Image
                src="/images/grid/img-9.png"
                width={180}
                height={180}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-[4/5] w-full">
              <Image
                src="/images/grid/img-10.png"
                width={180}
                height={225}
                alt="Food image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
      {/* Masonry grid */}
    </div>
  );
}
