import React from 'react'
import { Link } from 'react-router-dom'

export default function FallbackUI() {
    return (
        <>
            <div className='position-absolute top-50 start-50 translate-middle text-center'>
                <h1>Sorry We have found some issue..</h1>
                <h3>Please go back
                    <button className='btn btn-lg btn-primary ms-2'>
                        <Link to="/" className='text-white text-decoration-none'>Home</Link>
                    </button>
                </h3>
            </div>
        </>
    )
}
