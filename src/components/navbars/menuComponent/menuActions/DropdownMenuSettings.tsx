import React from 'react'
import { BsFillGearFill, BsFillEnvelopeOpenFill, BsFillEnvelopeFill, BsTrashFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function DropdownMenuSettings({settingsText}:any) {
  return (
    <div className="dropdown">
    <span className="settingDropdown dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <BsFillGearFill />
    </span>
    <ul className="dropdown-menu ">
        <li>
            <Link className="dropdown-item p-0 pb-2 text-muted" to="#">
                <BsFillEnvelopeOpenFill /> <span className=' text-capitalize ps-1 fw-semibold'>Mark all is read</span>
            </Link>
        </li>
        <li>
            <Link className="dropdown-item p-0 pb-2 text-muted" to="#">
                <BsFillEnvelopeFill /> <span className=' text-capitalize ps-1 fw-semibold'>Mark all is unread</span>
            </Link>
        </li>
        <li>
            <Link className="dropdown-item p-0 text-muted" to="#">
                <BsTrashFill /> <span className=' text-capitalize ps-1 fw-semibold'>{settingsText}</span>
            </Link>
        </li>
    </ul>
</div>
  )
}
