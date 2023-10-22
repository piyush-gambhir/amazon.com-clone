import React from 'react'

import Hyperlink from 'app/components/common/Hyperlink/Hyperlink'
export default function Footer() {
  return (
    <div className="flex justify-center p-2 mt-7">
      <div className="flex flex-col gap-4 text-xs">
        <div className="flex flex-row justify-between">
          <Hyperlink
            link=""
            text="Conditions of Use" />
          <Hyperlink
            link=""
            text="Privacy Notice" />
          <Hyperlink
            link=""
            text="Help" />
        </div>
        <div className="">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div >
  )
}
