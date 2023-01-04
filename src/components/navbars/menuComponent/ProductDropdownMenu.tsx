import React from 'react'
import DropdownMenuContainer from './DropdownMenuContainer'
import DropDownIndividualSettings from './menuActions/DropDownIndividualSettings'

const imgStyle = {
    width: "30px",
    height: "30px",
    marginLeft: "-15px"
}
export default function ProductDropdownMenu() {
    return (
        <DropdownMenuContainer headerText="Orders" buttonText="View all order" deleteSettingsText="Delete all order">
            <div className="d-flex align-items-center justify-content-between my-1 p-1 ">
                <div className="orderInfoContainer d-flex align-items-center ">
                    <img
                        src="https://dictionary.cambridge.org/es-LA/images/thumb/Tshirt_noun_001_18267_2.jpg?version=5.0.286"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                        className="rounded-circle border border-default" />
                    <img
                        src="https://infinitymegamall.com/wp-content/uploads/2021/09/10a-3.jpg"
                        alt=""
                        style={imgStyle}
                        className="rounded-circle border border-default" />
                    <span
                        className='bg-white text-muted d-flex align-items-center justify-content-center rounded-circle border border-default border-1'
                        style={imgStyle} >
                        +3
                    </span>
                    <div className="orderInfo ms-2">
                        <small className='d-block fw-bold text-capitalize'>Azad ul kabir</small>
                        <small className='d-block text-info fw-bold' style={{ fontSize: "12px", marginTop: "-2px" }}>Total price(104$)</small>
                    </div>
                </div>
                <DropDownIndividualSettings deleteText="Delete Order" blockText="Block order" />
            </div>
        </DropdownMenuContainer>
    )
}
