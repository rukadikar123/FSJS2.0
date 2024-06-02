import React from 'react'

const Cards = ({value, discr}) => {
    return (
        <>
            <div className='h-48 w-72 mt-20 text-xl '>
                <div className='flex flex-col bg-slate-200 p-4	gap-2'>
                    <div className='font-medium	' >{value} </div>
                    <div className='text-base'>{discr} </div>
                </div>
            </div>
        </>
    )
}

export default Cards