import React from 'react'
import DropdownMenuContainer from './DropdownMenuContainer'
import DropDownIndividualSettings from './menuActions/DropDownIndividualSettings';

export default function MessageDropdownMenu() {
    return (
        <DropdownMenuContainer headerText="Messages" buttonText="View all messages" deleteSettingsText="Delete all messages">
        <div className="d-flex justify-content-between my-1 p-2">
                <img
                    src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                    className="rounded-circle border border-primary" />
                <div className="textContainer px-1">
                    <small className='d-block fw-bold text-capitalize'>Azad ul kabir</small>
                    <small className='d-block text-info fw-semibold' style={{ fontSize: "12px", marginTop: "-5px" }}>Lorem, ipsum dolor sit...</small>
                </div>
                <div className="messageNumber ">
                    <span className="badge rounded-pill bg-info py-1 px-1">03</span>
                </div>
                <DropDownIndividualSettings deleteText="Delete message" blockText="Block message"/>
        </div>
        </DropdownMenuContainer>
    )
}
