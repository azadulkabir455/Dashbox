import React from 'react'
import { Link } from 'react-router-dom'
import { DropDownIndividualSettingsProps } from '../../../../assets/TsType/TypeScriptTypes';
import {BsTrashFill,BsThreeDotsVertical,BsPersonCircle,BsFillCheckCircleFill, BsDashCircleFill  } from "react-icons/bs";
import "../../../../assets/css/menuCSS/dropDownContainer.scss"



export default function DropDownIndividualSettings({deleteText, blockText}: DropDownIndividualSettingsProps) {
  return (
    <div className="dropdown">
    <span className="settingDropdown dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <BsThreeDotsVertical />
    </span>
    <ul className="dropdown-menu ">
        <li>
            <Link className="dropdown-item p-0 mb-2 text-muted d-flex align-items-center p-1" to="#">
                <BsPersonCircle /> <span className=' text-capitalize ps-2 fw-semibold'>View profile</span>
            </Link>
        </li>
        <li>
            <Link className="dropdown-item p-0 mb-2 text-muted d-flex align-items-center p-1" to="#">
                <BsFillCheckCircleFill /> <span className=' text-capitalize ps-2 fw-semibold'>Mark as unread</span>
            </Link>
        </li>
        <li>
            <Link className="dropdown-item p-0  mb-2 text-muted d-flex align-items-center p-1" to="#">
                <BsTrashFill /> <span className=' text-capitalize ps-2 fw-semibold'>{deleteText}</span>
            </Link>
        </li>
        <li>
            <Link className="dropdown-item p-0 text-muted d-flex align-items-center p-1" to="#">
                <BsDashCircleFill /> <span className=' text-capitalize ps-2 fw-semibold'>{blockText}</span>
            </Link>
        </li>
    </ul>
</div>
  )
}
