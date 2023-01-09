import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import "../../assets/css/breadCrumbs.scss"

export default function BreadCrumbs() {
    const location = useLocation();
    let currentLink: string = "";
    let crumbs = location.pathname.split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentLink += `/${crumb}`
            return (

                <Link to={currentLink} key={crumb} className=" text-decoration-none fw-semibold">
                    {crumb}
                </Link>

            )
        })

    console.log(currentLink)
    return (
        <>
            <div className="breadCrumbsContainer">
                <div className="crumbs">
                    <Link to="/" className=" text-decoration-none fw-semibold">Dashbord</Link>
                    {crumbs}
                </div>
            </div>
        </>
    )
}
