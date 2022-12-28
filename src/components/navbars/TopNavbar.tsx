import React from 'react'
import { BsMoonFill, BsGlobe2, BsCart3, BsFillEnvelopeFill, BsBellFill, BsGear } from "react-icons/bs";
import DropDownMenu from './menuComponent/DropDownMenu';
import { Images } from '../../assets/media/Media';
import { Link } from 'react-router-dom';
import "../../assets/css/menuCSS/topnav.scss"

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
                            <DropDownMenu  menuIcon={<BsMoonFill />} />
                            <DropDownMenu  menuIcon={<BsGlobe2 />} dropDownItems={"Action"} />
                            <DropDownMenu  menuIcon={<BsCart3 />} notificationCount={99} dropDownItems={"Action"} />
                            <DropDownMenu  menuIcon={<BsFillEnvelopeFill />} notificationCount={99} dropDownItems={"Action"} />
                            <DropDownMenu  menuIcon={<BsBellFill />} notificationCount={99} dropDownItems={"Action"} />
                        </ul>
                        <ul className="navbar-nav userMenu">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRr0YlatAy-hrNCQjzZ7fqDzNiXt7HGmzVaA&usqp=CAU" alt=""/>
                                    <span className="userInfo ms-2">
                                    <p className='text-secondary fw-bold text-capitalize m-0'>Azad ul kabir</p>
                                    <small className='text-primary'>@azad455</small>
                                    </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
