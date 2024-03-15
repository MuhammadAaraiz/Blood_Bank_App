import React from 'react'
import { Link } from 'react-router-dom'
const Navbar_Component = () => {
    return (
        <div className='bg-amber-600 h-30 flex items-center justify-between'>
            <div style={{ margin: '10px' }} className='text-4xl text-white font-italic'>
                Home Page
            </div>
            <div className='space-x-3 text-3xl text-white font-medium'>
                <Link to='/login'
                    className='login_Btn'>
                    Sign Out</Link>
            </div>
        </div>
    )
}

export { Navbar_Component }
