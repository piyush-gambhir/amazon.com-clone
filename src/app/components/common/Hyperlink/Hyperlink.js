import React from 'react'
import Link from 'next/link'

export default function Hyperlink({ link, text, underlineOnHover = true }) {
    return (
        <Link
            href={link}
            className={`
                text-royal_blue 
                hover:text-orange-600 
                ${underlineOnHover ? 'hover:underline' : ''}
                `}
        >
            {text}
        </Link >
    )
}
