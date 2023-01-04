import React, { useState, useEffect,useRef } from 'react'
import { dropDownMenuValues } from '../../../assets/TsType/TypeScriptTypes'
import "../../../assets/css/menuCSS/dropDownMenu.scss"

export default function MenuItem({ menuIcon, notificationCount, dropDownItems }: dropDownMenuValues) {
    // Functionality modified for dropdown onclick
    const [showDropdown, setShowDropdown] = useState(false)
    const dropDownRef = useRef<HTMLUListElement>(null!);

    // Fucntion for toggle dropdown show class
    const toggleClass = () => {
        setShowDropdown((value) => !value);
    }

    // Function for hidden dropdown click anywhere except dropdown content
    useEffect(() => {
        const dropdownHideHandler = (event: any) => {
            if(!dropDownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener("mousedown", dropdownHideHandler)
    },[])

    return (
        <>
            <li className="nav-item dropdown">
                <span className="nav-link" role="button" onClick={() => toggleClass()}>
                    <span className='position-relative'>
                        {menuIcon}
                        {notificationCount &&
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary fw-bold'>
                                {notificationCount}
                            </span>
                        }
                    </span>

                </span>
                {dropDownItems &&
                    <ul className={`mainDropdown dropdown-menu border border-2 border-primary border-opacity-10 ${showDropdown ? " active" : ""}`} ref={dropDownRef} >
                        <li>
                            {dropDownItems}
                        </li>
                    </ul>
                }
            </li>
        </>
    )
}
