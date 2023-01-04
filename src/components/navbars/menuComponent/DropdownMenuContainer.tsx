import React from 'react'
import { DropDownMenuCotainerProps } from '../../../assets/TsType/TypeScriptTypes';
import DropdownMenuSettings from './menuActions/DropdownMenuSettings';
import "../../../assets/css/menuCSS/dropDownContainer.scss"


export default function DropdownMenuContainer(
    {headerText, buttonText, deleteSettingsText, children}:DropDownMenuCotainerProps) {
    return (
        <>
            <div className='containerHeader d-flex justify-content-between align-items-center py-2 border-bottom border-1'>
                <h6 className='fw-semibold m-0 text-muted'>{headerText}</h6>
                <DropdownMenuSettings settingsText={deleteSettingsText}/>
            </div>
            <div className="containerContent">
                {children}
            </div>
            <div className="containerFooter d-grid">
                <div className="btn btn-sm btn-primary text-capitalize fw-semibold">{buttonText}</div>
            </div>
        </>
    )
}
