import React from 'react'
import Image from 'next/image'

export default function Input({ label, name, type, value, placeholder = "", onChange, isRequired, errors, disabled, tip }) {
    let errorMessage = errors[name];
    if (!errorMessage) {
        errorMessage = "";
    }
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[13px] font-bold"
                htmlFor={name}
            >
                {label}
            </label>
            <input type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full text-sm border-[1px] rounded-[3px] px-2 py-1 placeholder:text-medium_gray placeholder:font-medium focus:border-2 focus:outline-none ${errorMessage ? "border-crimson_red focus:shadow-input_box_error_focus" : "border-light_gray border-t-[1px] border-solid border-t-medium_gray focus:border-blue_green focus:bg-snow_white focus:shadow-input_box_focus"}`}
                placeholder={placeholder}
                required={isRequired}
                disabled={disabled}
                autoComplete="new-password"
            />
            {errorMessage && (
                <div className="flex flex-row items-center">
                    <Image
                        className="rotate-6"
                        src="/icons/common/alert_icon_red.svg"
                        alt="info"
                        width={14}
                        height={14}
                    />
                    <p className="text-xs text-crimson_red font-base">
                        {errorMessage}
                    </p>
                </div>
            )}
            {!errorMessage && tip && (
                <div className="flex flex-row gap-1 items-baseline">
                    <Image
                        className=""
                        src="/icons/common/info_borderless_light_blue.svg"
                        alt="info"
                        width={10}
                        height={10}
                    />
                    <p className="text-[13px]">
                        {tip}
                    </p>
                </div>
            )}
        </div>
    )
}
