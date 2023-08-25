import React from 'react'
import Image from 'next/image'

export default function Search() {
    return (
        <div className="flex-grow flex flex-row px-1 py-[10px] rounded-md mx-[10px] focus:">
            <button className="flex flex-row gap-1 px-3 items-center justify-center bg-light_gray rounded-l-md">
                <span className="">All</span>
                <Image
                    className="transform rotate-90"
                    src="/icons/common/triangle_right_sharp_edges_black.svg"
                    alt="arrow down icon"
                    width={16}
                    height={16} 
                />
            </button>
            <div className="flex bg-white flex-grow">
                <label className="hidden">
                    Search Amazon.in
                </label>
                <input
                    className="w-full py-[10px] pr-[7px] pl-2 leading=[15px] focus:appearance-none focus:outline-none focus:ring-0 focus:border-transparent"
                    type="text"
                    placeholder="Search Amazon.in"
                >
                </input>
            </div>
            <button className="flex items-center bg-pumpkin_orange rounded-r-md px-3">
                <Image
                    src="/icons/common/search_black.svg"
                    alt="search icon"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    )
}
