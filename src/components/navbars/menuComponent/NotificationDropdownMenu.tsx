import React from 'react'
import DropdownMenuContainer from './DropdownMenuContainer'
import DropDownIndividualSettings from './menuActions/DropDownIndividualSettings'
import { BsFillHeartFill, BsChatSquareFill } from "react-icons/bs";

const iconStyle = {
    left: "50%",
    top: "50%",
    fill: "#E99002",
    fontSize: "18px"
}
export default function NotificationDropdownMenu() {
    return (
        <DropdownMenuContainer headerText='Notifications' buttonText='View all notifications' deleteSettingsText='Delete all notifications'>
            <div className="d-flex justify-content-betwen align-items-center">
                <div className="notificationInfoContainer d-flex align-items-center">
                    <div className="imgContainer position-relative">
                        <img
                            src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
                            alt=""
                            style={{ width: "35px", height: "35px" }}
                            className="rounded-circle border border-primary" />
                        <BsFillHeartFill className='position-absolute' style={iconStyle} />
                    </div>
                    <div className="notificationInfo ms-3">
                        <small className='d-block fw-wemibold text-capitalize text-muted'><b>Azad</b> added to his favorite list <b>Leather belt</b></small>
                        <small className='d-block text-info fw-bold' style={{ fontSize: "12px", marginTop: "-2px" }}>Few seconds ago</small>
                    </div>
                </div>
                <DropDownIndividualSettings deleteText='Delete notification' blockText='Block notification' />
            </div>
            <div className="d-flex justify-content-betwen align-items-center">
                <div className="notificationInfoContainer d-flex align-items-center">
                    <div className="imgContainer position-relative">
                        <img
                            src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
                            alt=""
                            style={{ width: "35px", height: "35px" }}
                            className="rounded-circle border border-primary" />
                        <BsChatSquareFill className='position-absolute' style={iconStyle} />
                    </div>
                    <div className="notificationInfo ms-3">
                        <small className='d-block fw-wemibold text-capitalize text-muted'><b>Azad</b> added to his favorite list <b>Leather belt</b></small>
                        <small className='d-block text-info fw-bold' style={{ fontSize: "12px", marginTop: "-2px" }}>Few seconds ago</small>
                    </div>
                </div>
                <DropDownIndividualSettings deleteText='Delete notification' blockText='Block notification' />
            </div>
        </DropdownMenuContainer>
    )
}
