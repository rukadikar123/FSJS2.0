import React from 'react'
import UserCard from './UserCard'

const HeroSection = () => {
  return(
    <div>
    <img className='h-56' src='https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='random scene'/>
    <UserCard/>
  </div>

  )
}
export default HeroSection