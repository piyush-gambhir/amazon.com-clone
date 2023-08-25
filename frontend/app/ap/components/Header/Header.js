import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex justify-center items-center mb-5">
      <Image
        src="/images/amazon_logo_black_text.png"
        width={108}
        height={32}
        className="cursor-pointer"
      />
    </div>
  )
}
