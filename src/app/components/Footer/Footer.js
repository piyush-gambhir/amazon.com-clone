import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FooterConfig } from './FooterConfig'

export default function Footer() {
  const footerConfig = FooterConfig
  return (
    <div className="flex flex-col z-10 text-light_gray">
      <Link href="#" className="flex items-center justify-center p-[15px] bg-steel_blue">
        <p className="text-[13px] leading-[19px] ">
          Back to top
        </p>
      </Link>
      <div className="flex flex-col justify-center items-center bg-blue_gray pt-10 gap-10">
        <div className="grid grid-cols-4 gap-[100px]">
          {
            footerConfig.footerLinks.map((item, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <h1 className="text-white text-base font-bold font-amazon-ember leading-[120%] mt-[6px] mb-[14px]">{item.Heading}</h1>
                  {
                    item.links.map((link, index) => {
                      return (
                        <Link href={link.link} key={index}>
                          <p className="text-sm font-medium mb-[10px] hover:underline">{link.name}</p>
                        </Link>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <div className="w-full flex flex-col border-t-[0.1px] border-gray">
          <div className="flex flex-row justify-center items-center gap-20 my-[19px]">
            <Image
              className=""
              src="/images/amazon_logo_white_text.png"
              alt="logo"
              width={90}
              height={30}
            />
            <button className="flex justify-center items-center border-[1px] border-solid border-light_gray rounded-[3px] text-[13px] py-[6px] pl-[8px] pr-[18px] mr-1">
              Laguage
            </button>
          </div>
          <div className="flex flex-wrap justify-center whitespace-normal">
            {footerConfig.countryLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index}>
                  <p className="text-xs font-medium px-[7.2px] my-[19px] leading-[18px] hover:underline">{link.name}</p>
                </Link>
              )
            }
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-midnight_navy_blue">
        <div className="flex justify-center py-[30px]">
          <div className="grid grid-cols-5 justify-center gap-5">
            {footerConfig.footerBottomLinks.map((link, index) => {
              return (
                <Link href={link.link} key={index} className="px-2 hover:underline">
                  <p className="text-xs">{link.title}</p>
                  <p className="text-gray text-xs">{link.description.split('\n').map((item, index) => {
                    return (
                      <span key={index}>{item}<br /></span>
                    )
                  }
                  )}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-[13px] py-[10px] pb-[30px]">
          <div className="flex flex-row gap-5">
            <Link href="#" className="hover:underline">
              Conditions of Use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Notice
            </Link>
            <Link href="#" className="hover:underline">
              Interest-Based Ads
            </Link>
          </div>
          <p className="text-light_gray">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div >
  )
}
