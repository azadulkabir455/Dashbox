import React from 'react'

interface inputVal {
    label:string;
    inputType: string;
    iconElement: React.ReactNode;
    inputPlaceholder:string;

}
export default function SingleInput({label,inputType,iconElement,inputPlaceholder}:inputVal) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={label} className='form-label text-capitalize m-0'>{label} :</label>
                <div className='input-group'>
                    <span className='input-group-text'>{iconElement}</span>
                    <input type={inputType} id={label} className='form-control' placeholder={inputPlaceholder} />
                </div>
            </div>
        </>
    )
}
