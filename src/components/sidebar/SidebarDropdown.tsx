import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import "../../assets/css/sidebar.scss"

interface SidebarDropdownProps {
    dropdownIcon: React.ReactNode,
    dropdownName: string,
    dropdownLink: string,
}
interface SidebarMenuProps {
    menuIcon: React.ReactNode,
    menuName: string
    dropdownContents?: SidebarDropdownProps[]
}

export default function SidebarDropdown({ menuIcon, menuName, dropdownContents }: SidebarMenuProps) {
    return (
        <div className="dropdown mb-2">
            <button className="dropdown-toggle text-muted text-capitalize fw-semibold d-flex align-items-center p-2 rounded" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {menuIcon} <span className="ms-2">{menuName}</span>
            </button>
            <ul className="dropdown-menu p-2 border border-2 border-primary border-opacity-10" aria-labelledby="dropdownMenuButton1">

                {
                    dropdownContents?.map((dropdownContent) =>
                        <li>
                            <Link className="dropdown-item p-1 fw-semibold text-capitalize text-muted d-flex align-items-center" to={dropdownContent.dropdownLink}>
                                {dropdownContent.dropdownIcon} <span className='ms-2'>{dropdownContent.dropdownName}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
