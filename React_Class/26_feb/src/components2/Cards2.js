import React from 'react'

const Cards2 = ({heading, details}) => {
  return (
    <>
    <h3>Software Development Courses</h3>
    <div>
    <h2>{heading}</h2>
    <p>{details}</p>
    <p>Registration Started <span>Starts on 27 May 2024</span></p>
    <div><button>Explore</button> <button>Buy now</button></div>
    </div>
    </>
  )
}

export default Cards2