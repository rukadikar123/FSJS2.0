import React from 'react'

function Navbar() {
  return (
    <div>
    <ul className="flex flex-row flex-initial gap-96 justify-center top-20 h-10 text-blue-700 font-semibold px-0 py-2">
      <li className="px-6 py-2 pb-10 text-lg text-center rounded-full hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
        Home
      </li>
      <li className="px-6 py-2 pb-10 text-lg text-center rounded-full hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
        About
      </li>
      <li className="px-6 py-2 pb-10 text-lg text-center rounded-full hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
        Receipe
      </li>
    </ul>
  </div>
  )
}

export default Navbar