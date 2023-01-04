import React from 'react'
import { BsMoonFill, BsGlobe2, BsCart3, BsFillEnvelopeFill, BsBellFill, BsGear, BsFillPersonFill, BsDoorOpenFill } from "react-icons/bs";
import MenuItem from './menuComponent/MenuItem';
import LanguagesDropdownMenu from './menuComponent/LanguagesDropdownMenu';
import { Images } from '../../assets/media/Media';
import { Link } from 'react-router-dom';
import "../../assets/css/menuCSS/topnav.scss"
import MessageDropdownMenu from './menuComponent/MessageDropdownMenu';
import ProductDropdownMenu from './menuComponent/ProductDropdownMenu';
import NotificationDropdownMenu from './menuComponent/NotificationDropdownMenu';

export default function TopNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top border-bottom border-primary border-2 border-opacity-10">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={Images.brandLogo} alt="" />
                    </Link>
                    <div className='d-flex'>
                        <button className='btn btn-sm btn-primary d-none' >
                            <BsGear /> Action
                        </button>
                        <ul className="navbar-nav ms-auto mainMenu">
                            <MenuItem menuIcon={<BsMoonFill />} />
                            <MenuItem
                                menuIcon={<BsGlobe2 />}
                                dropDownItems={<LanguagesDropdownMenu />} />
                            <MenuItem
                                menuIcon={<BsCart3 />}
                                notificationCount={99}
                                dropDownItems={<ProductDropdownMenu />} />
                            <MenuItem
                                menuIcon={<BsFillEnvelopeFill />}
                                notificationCount={99}
                                dropDownItems={<MessageDropdownMenu />} />
                            <MenuItem
                                menuIcon={<BsBellFill />}
                                notificationCount={99}
                                dropDownItems={<NotificationDropdownMenu />} />
                        </ul>
                        <ul className="navbar-nav userMenu ps-2">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" alt="" />
                                    <span className="userInfo ms-2">
                                        <p className='text-secondary fw-semibold text-capitalize m-0'>Azad ul kabir</p>
                                        <small className='text-primary'>@azad455</small>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item p-1 fw-semibold text-capitalize d-flex align-items-center" href="/profile">
                                            <BsFillPersonFill className='me-1'/>My Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item p-1 fw-semibold text-capitalize d-flex align-items-center" href="/">
                                            <BsDoorOpenFill className='me-1'/>Log out
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
