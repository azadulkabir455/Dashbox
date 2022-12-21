import React from 'react'

interface inputVal {
    label: string;
    inputType: string;
    iconElement: React.ReactNode;
    inputPlaceholder: string;
    inputValue?: string | number;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
export default function SingleInput({ label, inputType, iconElement, inputPlaceholder, inputValue, handleChange }: inputVal) {
    return (
        <>
            <div className="mt-3">
                <label htmlFor={label} className='form-label text-capitalize m-0'>{label} :</label>
                <div className='input-group'>
                    <span className='input-group-text'>{iconElement}</span>
                    <input type={inputType} id={label} className='form-control' placeholder={inputPlaceholder} name={label} value={inputValue} onChange={handleChange} />
                </div>
            </div>
        </>
    )
}
