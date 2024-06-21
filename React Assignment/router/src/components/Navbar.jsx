import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className=''>
                <ul className='flex'>
                    <NavLink  to="/home" className={({isActive})=>
                    `${isActive ? 'bg-red-800': 'bg-gray-400'}`}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/about">  
                        <li>About</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default Navbar