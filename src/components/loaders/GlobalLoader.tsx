import React from 'react'
import Spinner from "react-spinkit"

export default function GlobalLoader() {
    return (
        <>
            <div className='position-absolute top-50 start-50 transform-middle'>
                <Spinner name="ball-scale-multiple" color="#1194F6" />
            </div>
        </>
    )
}
