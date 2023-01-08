import React,{useContext} from 'react'
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import { BsFillGrid1X2Fill, BsTextIndentLeft } from "react-icons/bs";
import SidebarDropdown from './SidebarDropdown';
import "../../assets/css/sidebar.scss"
import { Outlet } from 'react-router-dom';




export default function Sidebar() {
    const {sidebarCollapse, sidebarCollapseToggle}:any = useContext(GlobalContextProvider);

    return (
        <>
            <div className={`sidebar ${sidebarCollapse? "collapseSidebar":""} border-end border-primary border-2 border-opacity-10 py-4 px-3 bg-light`}>
                <div className="collapsableIcon d-flex align-items-center justify-content-center" onClick={sidebarCollapseToggle}>
                    <BsTextIndentLeft />
                </div>
                <git SidebarDropdown 
                menuIcon={<BsFillGrid1X2Fill />} 
                menuName="Dashbord"
                menuLink='/dashbord'
                // dropdownContents={
                //     [
                //         {dropdownIcon:<BsFillGrid1X2Fill />, dropdownName: "Action", dropdownLink: "/dashbord"},
                //         {dropdownIcon:<BsFillGrid1X2Fill />, dropdownName: "Action Again",dropdownLink: "/something"},
                //     ]}
                    
                />
            </div>
            <div className={`dashbordContent ${sidebarCollapse? "collapseDashbordContainer":""}`}>
                <Outlet />
            </div>
        </>
    )
}
