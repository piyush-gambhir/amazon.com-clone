"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  ProductCarouselHeading: string;
  ProductCarouelViewAllLink: string;
  ProductCarouselLinks: {
    image: string;
    link: string;
  }[];
};

export default function ProductCarousel({
  ProductCarouselHeading,
  ProductCarouelViewAllLink,
  ProductCarouselLinks,
}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  const imageWidth = 200;
  const gap = 6;

  useEffect(() => {
    if (scrollPosition <= 0) {
      setIsAtStart(true);
    } else {
      setIsAtStart(false);
    }

    const maxScroll =
      (imageWidth + gap) * ProductCarouselLinks.length -
      carouselRef.current.offsetWidth;

    // Add a little buffer (like 5px) to account for possible rounding errors.
    if (scrollPosition >= maxScroll - 5) {
      setIsAtEnd(true);
    } else {
      setIsAtEnd(false);
    }
  }, [scrollPosition]);

  const goPrev = () => {
    setScrollPosition((prev) => Math.max(prev - imageWidth - gap, 0));
  };

  const goNext = () => {
    const maxScroll =
      (imageWidth + gap) * ProductCarouselLinks.length -
      carouselRef.current.offsetWidth;
    setScrollPosition((prev) => Math.min(prev + imageWidth + gap, maxScroll));
  };

  return (
    <div className="bg-white flex flex-col relative overflow-hidden py-[10px] px-[20px]">
      <div className="flex flex-row gap-2 mt-[10px] mb-2">
        <h3 className="text-[21px] font-bold">{ProductCarouselHeading}</h3>
        <Link className="text-[14px]" href="/">
          {ProductCarouelViewAllLink}
        </Link>
      </div>
      <div className="relative bg-white mb-[14px]">
        <div
          ref={carouselRef}
          className="h-[200px] flex flex-nowrap gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
            minWidth: `${(imageWidth + gap) * ProductCarouselLinks.length}px`,
          }}
        >
          {ProductCarouselLinks.map((ProductCarouselLink, index) => (
            <Link
              key={index}
              href={ProductCarouselLink.link}
              className="cursor-pointe w-full h-full"
              style={{ minWidth: `${imageWidth}px` }}
            >
              <Image
                src={ProductCarouselLink.image}
                alt={`carousel-${index}`}
                width={imageWidth}
                height={144}
                className="w-full h-full"
              />
            </Link>
          ))}
        </div>
        <button
          onClick={goPrev}
          className="w-[45px] h-[100px] absolute top-1/2 left-0 flex justify-center items-center transform -translate-y-1/2 pr-[5px] bg-white disabled:bg-opacity-50 rounded-r-[3px]"
          disabled={isAtStart}
        >
          <Image
            className="transform -rotate-90"
            src="/icons/common/arrow_up_edges_curved_black.svg"
            alt="arrow-left"
            width={20}
            height={20}
          />
        </button>
        <button
          onClick={goNext}
          className="w-[45px] h-[100px] absolute top-1/2 right-0 flex justify-center items-center transform -translate-y-1/2 pl-[5px] bg-white disabled:bg-opacity-50
                    rounded-l-[3px]"
          disabled={isAtEnd}
        >
          <Image
            className="transform rotate-90"
            src="/icons/common/arrow_up_edges_curved_black.svg"
            alt="arrow-left"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}
