import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-80 py-20 bg-gray-500'>
        <ul className='flex-col '>
            <li className='py-6'>copyright@2022</li>
            <li>88657567....</li>
        </ul>
        <ul className='flex-col '> 
            <li className='py-6'>Home</li>
            <li>About us</li>
        </ul>
    </div>
  )
}

export default Footer