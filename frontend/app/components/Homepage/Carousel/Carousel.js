'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Carousel({ CarouselLinks }) {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === CarouselLinks.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? CarouselLinks.length - 1 : current - 1);
    };

    return (
        <div className="relative overflow-hidden w-full h-[496px]">
            {CarouselLinks.map((CarouselLink, index) => (
                <div
                    key={index}
                    className={`absolute top-0 w-full h-full transition-opacity duration-500 ${current === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${CarouselLink.image})`, backgroundSize: 'cover' }}
                ></div>
            ))}
            <button
                className="h-full max-h-[244px] w-[80px] flex justify-center items-center absolute left-0 top-[122px] transform -translate-y-1/2 rounded-[5px]  border-2 border-transparent focus:border-black"
                onClick={prevSlide}>
                <Image
                    src='/icons/common/arrow_left_sharp_edges_black.svg'
                    alt='arrow-left'
                    width={30}
                    height={30}
                />
            </button>
            <button
                className="h-full max-h-[244px] w-[80px] flex justify-center items-center absolute right-0 top-[122px] transform -translate-y-1/2 rounded-[5px]  border-2 border-transparent focus:border-black"
                onClick={nextSlide}>
                <Image
                    src='/icons/common/arrow_right_sharp_edges_black.svg'
                    alt='arrow-right'
                    width={30}
                    height={30}
                />
            </button>
        </div>
    );
}   