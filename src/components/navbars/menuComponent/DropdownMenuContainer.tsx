import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillGearFill } from "react-icons/bs";
import "../../../assets/css/menuCSS/dropDownContainer.scss"

export default function DropdownMenuContainer() {
    return (
        <>
            <div className='containerHeader d-flex justify-content-between border-bottom border-1'>
                <h6 className='fw-semibold'>Orders</h6>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsFillGearFill />
                    </button>
                    <ul className="dropdown-menu ">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                    </ul>
                </div>
            </div>
            <div className="containerContent">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, maxime.</p>
            </div>
            <div className="containerFooter d-grid">
                <div className="btn btn-sm btn-primary">Click here</div>
            </div>
        </>
    )
}
