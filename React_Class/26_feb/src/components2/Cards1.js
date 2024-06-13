import React from 'react'

const Cards1 = ({heading,details}) => {
  return (
    <>
    
    <div className='flex flex-col gap-2 mt-10 text-lg w-94'>
    <h2>{heading}</h2>
    <p>{details}</p>
    <p className='font-medium text-sm'>Registration Started <span className='pl-6 text-teal-600	'>Starts on 27 May 2024</span></p>
    <div className='flex gap-6 text-white text-base'><button className='px-10 py-2 bg-rose-800'>Explore</button> <button className='px-10  bg-rose-800'>Buy now</button></div>
    </div>
    </>
  )
}

export default Cards1