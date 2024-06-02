import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <div className='flex items-center justify-between py-6 px-40  '><h1 className='text-2xl'>PW SKILL</h1>
                <input className='pr-80'  type='{text}' placeholder='Search by product title' />
                <button className='text-base bg-rose-500 rounded-md	 py-2 px-4'>Login/Register</button></div>
           <Navbar />
        </>
    )
}

export default Header