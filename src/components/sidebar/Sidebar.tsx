import React,{useContext} from 'react'
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import { ContextApiChildrenType } from '../../assets/TsType/TypeScriptTypes';
import { BsFillGrid1X2Fill, BsTextIndentLeft } from "react-icons/bs";
import SidebarDropdown from './SidebarDropdown';
import "../../assets/css/sidebar.scss"




export default function Sidebar() {
    const {sidebarCollapse, sidebarCollapseToggle}:any = useContext(GlobalContextProvider);
    console.log(sidebarCollapse)
    return (
        <>
            <div className={`sidebar ${sidebarCollapse? "collapseSidebar":""} border-end border-primary border-2 border-opacity-10 py-4 px-3`}>
                <div className="collapsableIcon d-flex align-items-center justify-content-center" onClick={sidebarCollapseToggle}>
                    <BsTextIndentLeft />
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
