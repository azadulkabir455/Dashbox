import React, { useContext } from 'react'
import { GlobalContextProvider } from '../../contextApi/GlobalContext'
import { SidebarMenuProps } from '../../assets/TsType/TypeScriptTypes'
import { Link } from 'react-router-dom'



export default function SidebarDropdown({ menuIcon, menuName, menuLink, dropdownContents }: SidebarMenuProps) {
    const { sidebarCollapse }: any = useContext(GlobalContextProvider)
    console.log(sidebarCollapse);
    return (
        <div className="dropdown mb-2">
            {
                menuLink === undefined ?
                    <>
                        <button className="dropdown-toggle text-muted text-capitalize fw-semibold d-flex align-items-center p-2 rounded" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <Link className='text-decoration-none text-muted' to={`${menuLink && menuLink}`}>
                                {menuIcon} <span className="ms-2">{menuName}</span>
                            </Link>
                        </button>
                        {
                            dropdownContents &&
                            <ul className="dropdown-menu p-2 border border-2 border-primary border-opacity-10" aria-labelledby="dropdownMenuButton1">

                                {
                                    dropdownContents?.map((dropdownContent) =>
                                        <li key={dropdownContent.dropdownName}>
                                            <Link className="dropdown-item p-1 fw-semibold text-capitalize text-muted d-flex align-items-center" to={dropdownContent.dropdownLink}>
                                                {dropdownContent.dropdownIcon} <span className='ms-2'>{dropdownContent.dropdownName}</span>
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </>
                    :
                    <Link className='text-decoration-none text-muted singleMenu d-flex align-items-center p-2' to={`${menuLink && menuLink}`}>
                        {menuIcon} <span className="ms-2">{menuName}</span>
                    </Link>

            }
        </div>
    )
}
