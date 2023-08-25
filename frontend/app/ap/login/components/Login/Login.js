'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Input from '/app/components/common/Input'
import Hyperlink from '/app/components/common/Hyperlink'

export default function Login() {
  const [phoneOrEmail, setPhoneOrEmail] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [isNeedHelpOpen, setIsNeedHelpOpen] = React.useState(false);

  const handlePhoneOrEmailChange = (e) => {
    setPhoneOrEmail(e.target.value);
  }

  const validateInput = () => {
    let errors = {};
    if (!phoneOrEmail) {
      errors.phoneOrEmail = "Enter your email or mobile phone number";
    }
    return errors;
  }

  const onContinueClick = () => {
    const errors = validateInput();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("Continue clicked");
  }

  const onNeedHelpClick = () => {
    setIsNeedHelpOpen(!isNeedHelpOpen);
  }

  const onCreateAccountClick = () => {

  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5">
        <div className="w-[350px] h-auto flex flex-col py-5 px-7 border-[1px] border-gray-300 rounded-lg">
          <h1 className="text-[28px] font-normal mb-4">
            Sign in
          </h1>
          <div className="flex flex-col gap-3 mb-1">
            <Input
              label="Email or mobile phone number"
              name="phoneOrEmail"
              type="text"
              value={phoneOrEmail}
              onChange={handlePhoneOrEmailChange}
              placeholder=""
              isRequired={true}
              errors={errors}
              errorMessage="Enter your email or mobile phone number"
              disabled={false}
            />
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <button
              className="w-full bg-yellow-400 rounded-lg p-2 mt-3 cursor-pointer hover:bg-yellow-500"
              onClick={onContinueClick}
            >
              <p className="text-sm font-normal">Continue</p>
            </button>
            <p className="text-xs">
              By continuing, you agree to Amazon's <Hyperlink link="#" text="Conditions of Use" /> and <Hyperlink link="#" text="Privacy Notice" />.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <button
              className="flex flex-row gap-1 items-center"
              type="button"
              onClick={onNeedHelpClick}
            >
              <Image
                className={isNeedHelpOpen ? "transform rotate-90" : ""}
                src="/icons/common/triangle_right_sharp_edges_black.svg"
                alt="lock"
                width={12}
                height={12}
              />
              <Hyperlink
                link="#"
                text="Need help?"
              />
            </button>
            {isNeedHelpOpen && (<div className="pl-4 flex flex-col gap-2">
              <Hyperlink
                link="/ap/forgotpassword"
                text="Forgot Password"
              />
              <Hyperlink
                link="#"
                text="Other issues with Sign-In"
              />
            </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="text-xs text-gray-600">New to Amazon?</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
          <Link href="register" className="flex justify-center px-1 py-2 border-[1px] border-gray-300 rounded-lg">
            {/* <button
              className="px-1 py-2 border-[1px] border-gray-300 rounded-lg"
              onClick={
                onCreateAccountClick
              }
            > */}
            <p className="text-sm font-base">
              Create your Amazon account
            </p>
            {/* </button> */}
          </Link >
        </div>
      </div>
    </div>
  )
}
