import React from 'react'

const Cards1 = ({heading,details}) => {
  return (
    <>
    <h1>Our Courses</h1>
    <h3>Data Science & Analytics</h3>
    <div>
    <h2>{heading}</h2>
    <p>{details}</p>
    <p>Registration Started <span>Starts on 27 May 2024</span></p>
    <div><button>Explore</button> <button>Buy now</button></div>
    </div>
    </>
  )
}

export default Cards1