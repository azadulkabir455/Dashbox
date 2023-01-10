import React, { useContext } from 'react'
import { GlobalContextProvider } from '../../contextApi/GlobalContext';
import { BsFillGrid1X2Fill, BsTextIndentLeft,BsJournalText, BsFillJournalBookmarkFill,BsJournalPlus,BsJournalMedical } from "react-icons/bs";
import SidebarDropdown from './SidebarDropdown';
import "../../assets/css/sidebar.scss"
import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';


export default function Sidebar() {
    const { sidebarCollapse, sidebarCollapseToggle }: any = useContext(GlobalContextProvider);

    return (
        <>
            <div className={`sidebar ${sidebarCollapse ? "collapseSidebar" : ""} border-end border-primary border-2 border-opacity-10 py-4 px-3 bg-light`}>
                <div className="collapsableIcon d-flex align-items-center justify-content-center" onClick={sidebarCollapseToggle}>
                    <BsTextIndentLeft />
                </div>
                <SidebarDropdown
                    menuIcon={<BsFillGrid1X2Fill />}
                    menuName="Dashbord"
                    menuLink='/'

                />
                <SidebarDropdown
                    menuIcon={<BsFillJournalBookmarkFill />}
                    menuName="Blog posts"
                    dropdownContents={
                        [
                            { dropdownIcon: <BsJournalText />, dropdownName: "All Blogs", dropdownLink: "/allblog" },
                            { dropdownIcon: <BsJournalPlus />, dropdownName: "Create Blog", dropdownLink: "/allblog/createblog" },
                            { dropdownIcon: <BsJournalMedical />, dropdownName: "Add Categories", dropdownLink: "/allblog/createcetagories" },
                        ]}

                />
            </div>
            <div className={`dashbordContent ${sidebarCollapse ? "collapseDashbordContainer" : ""}`}>
                <BreadCrumbs />
                <Outlet />
            </div>
        </>
    )
}
