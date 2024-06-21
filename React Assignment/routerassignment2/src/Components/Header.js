import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <ul className='flex justify-between px-52'>
        <NavLink className={({ isActive }) => {
          return ((isActive) ? "text-rose-600	" : "bg-white")
        }} to='/home'>Home</NavLink>
        <NavLink className={({ isActive }) => {
          return ((isActive) ? "text-rose-600	" : "bg-white")
        }} to='/about'>About</NavLink>
        <NavLink className={({ isActive }) => {
          return ((isActive) ? "text-rose-600	" : "bg-white")
        }} to='/contact'>Contact</NavLink>
      </ul>
    </>
  )
}

export default Header