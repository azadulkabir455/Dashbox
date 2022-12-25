import React, { useState } from 'react'
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

interface inputVal {
    label: string;
    inputType: string;

    inputPlaceholder: string;
    inputValue: string | number;
    iconElement: React.ReactNode;
    toggleEyeShow?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
export default function SingleInput({ label, inputType, iconElement, inputPlaceholder, inputValue,toggleEyeShow, handleChange }: inputVal) {
    const [showPassword, setShowPassword] = useState<string>("password");
    const [eyeIcon, setEyeIcon] = useState<React.ReactNode>(<BsFillEyeFill />)

    const passwordShowToggle = () => {
        if (showPassword === "password") {
            setShowPassword("text");
            setEyeIcon(<BsFillEyeSlashFill />)
        } else {
            setShowPassword("password");
            setEyeIcon(<BsFillEyeFill />)
        }
    }
    return (
        <>
            <div className="mt-3">
                <label htmlFor={label} className='form-label text-capitalize m-0'>{label} :</label>
                <div className='input-group'>
                    <span className='input-group-text'>{iconElement}</span>
                    <input type={toggleEyeShow? showPassword : inputType} id={label} className='form-control' placeholder={inputPlaceholder} name={label} value={inputValue} onChange={handleChange} />
                    {toggleEyeShow &&
                        <span className='input-group-text' role="button" onClick={passwordShowToggle}>{eyeIcon}</span>
                    }
                </div>
            </div>
        </>
    )
}
