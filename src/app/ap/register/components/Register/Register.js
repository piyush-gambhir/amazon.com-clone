'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Input from '/app/components/common/Input'
import Hyperlink from '/app/components/common/Hyperlink'


export default function Register() {
  const [yourName, setYourName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


  const handleYourNameChange = (e) => {
    setYourName(e.target.value);
    if (errors.yourName) {
      delete errors.yourName;
    }
  }

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    if (errors.mobileNumber) {
      delete errors.mobileNumber;
    }
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      delete errors.email;
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      delete errors.password;
    }
  }


  const onContinueClick = () => {
    let errors = {};
    if (!yourName) {
      errors.yourName = "Enter your name";
    }
    if (!password) {
      errors.password = "Enter your password";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    console.log("Continue clicked");
  }

  return (
    <div className="flex justify-center">
      <div className="w-[350px] h-auto flex flex-col py-3.5 px-5 border-[1px] rounded-lg sborder-gray-300">
        <div className="flex flex-col">
          <h1 className="text-[28px] font-normal mb-4">
            Create Account
          </h1>
          <div className="flex flex-col gap-3 mb-1">
            <Input
              label="Your name"
              name="yourName"
              type="text"
              value={yourName}
              onChange={handleYourNameChange}
              placeholder="First and last name"
              isRequired={true}
              errors={errors}
              errorMessage="Enter your name"
              disabled={false}
            />
            <Input
              label="Mobile number"
              name="mobileNumber"
              type="tel"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              isRequired={true}
              placeholder="Mobile number"
              errors={errors}
              errorMessage="Enter your email"
              disabled={false}
            />
            <Input
              label="Email (optional)"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              isRequired={false}
              errors={errors}
              errorMessage="Enter your email"
              disabled={false}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              isRequired={true}
              errors={errors}
              errorMessage="Enter your password"
              disabled={false}
              placeholder="At least 6 characters"
              tip="Passwords must be at least 6 characters."
            />

            <p className="text-[13px] mt-4">
              To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
            </p>
            <button
              className="w-full bg-yellow-400 rounded-[7px] p-2 cursor-pointer hover:bg-yellow-500"
              onClick={onContinueClick}
            >
              <p className="text-sm font-normal">Continue</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-6 text-[13px] leading-5">
          <div className="flex flex-col">
            <p>
              Already have an account? <Hyperlink link="/ap/login" text="Sign-In" />
            </p>
            <p>
              Buying for work? <Hyperlink link="" text="Create a free business account" />
            </p>
          </div>
          <div className="">
            By creating an account or logging in, you agree to Amazon’s <Hyperlink link="" text="Conditions of Use" /> and <Hyperlink link="" text="Privacy Policy" />.
          </div>
        </div>
      </div>
    </div>
  )
}
