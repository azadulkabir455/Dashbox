import React from 'react'
import { dropDownMenuValues } from '../../../assets/TsType/TypeScriptTypes'
import "../../../assets/css/menuCSS/dropDownMenu.scss"

export default function MenuItem({ menuIcon, notificationCount, dropDownItems }: dropDownMenuValues) {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className='position-relative'>
                        {menuIcon}
                        {notificationCount &&
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary fw-bold'>
                                {notificationCount}
                            </span>
                        }
                    </span>

                </a>
                {dropDownItems &&
                    <ul className="dropdown-menu border border-2 border-primary border-opacity-10">
                        <li>
                            {dropDownItems}
                        </li>
                    </ul>
                }
            </li>
        </>
    )
}
