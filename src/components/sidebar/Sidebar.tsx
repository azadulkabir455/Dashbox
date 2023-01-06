import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import SidebarDropdown from './SidebarDropdown';
import "../../assets/css/sidebar.scss"



export default function Sidebar() {
    return (
        <>
            <div className="sidebar border-end border-primary border-2 border-opacity-10 py-4 px-3 ">
                <div className="collapsableIcon">
                
                </div>
                <SidebarDropdown 
                menuIcon={<BsFillGrid1X2Fill />} 
                menuName="Dashbord"
                dropdownContents={
                    [
                        {dropdownIcon:<BsFillGrid1X2Fill />, dropdownName: "Action", dropdownLink: "/something"},
                        {dropdownIcon:<BsFillGrid1X2Fill />, dropdownName: "Action Again",dropdownLink: "/something"},
                    ]}/>
            </div>
        </>
    )
}
