import React from 'react'
import Image from 'next/image'
import Hyperlink from './components/common/Hyperlink'

export const metadata = {
    title: '404 - Page Not Found',
    description: '404 - Page Not Found',
}

export default function notFound() {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Image
                className="py-4 my-2"
                src="/images/amazon_logo_black_text.png"
                alt="Amazon Logo"
                width={104}
                height={32}
            />
            <div className="flex flex-row gap-2">
                <div className="p-[10px]">
                    <Image
                        className="mt-2"
                        src="/icons/common/question_mark_circle_pumpkin_orange.svg"
                        alt="question mark circle icon"
                        width={34}
                        height={34}
                    />
                </div>
                <div className="flex flex-col gap-[15px]">
                    <div className="flex flex-col">
                        <h3 className="text-md font-bold font-sans text-pumpkin_orange">Looking for Something?</h3>
                        <p className="font-medium mt-0.5">We're sorry. The Web address you entered is not a functioning page on our site.</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <Image
                            className=""
                            src="/icons/common/triangle_right_sharp_edges_pumpkin_orange.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                        <p className="font-bold">Go to Amazon's <Hyperlink text="Home" link="/" /> Page.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
