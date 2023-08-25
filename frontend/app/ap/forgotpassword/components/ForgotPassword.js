'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Input from '/app/components/common/Input'
import Hyperlink from '/app/components/common/Hyperlink'
import YellowButton from '/app/components/common/Button/Yellow Button/YellowButton'

export default function ForgotPassword() {
    const [phoneOrEmail, setPhoneOrEmail] = React.useState("");
    const [errors, setErrors] = React.useState({});

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

    return (
        <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col gap-5">
                <div className="w-[350px] h-auto flex flex-col py-5 px-7 border-[1px] border-light_gray rounded-lg">
                    <div className="mb-4">
                        <h1 className="text-[28px] font-normal mb-1">
                            Password assistance
                        </h1>
                        <p className="text-xs">
                            Enter the email address or mobile phone number associated with your Amazon account.
                        </p>
                    </div>
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
                    <div className="flex flex-col gap-4 ">
                        <YellowButton
                            onClick={onContinueClick}
                            title="Continue"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[350px] flex flex-col gap-1">
                <h3 className="text-[17px] leading-[1.255] font-normal">Has your email address or mobile phone number changed?</h3>
                <p className="text-[13px] leading-[19px]">If you no longer use the e-mail address associated with your Amazon account, you may contact <Hyperlink text="Customer Service" link="#" /> for help restoring access to your account.</p>
            </div>
        </div>
    )
}
