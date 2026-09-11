import React from 'react'
import benner from "../assets/banner-main.png"
const Banner = () => {
  return (
    <div className='container mx-auto h-150  bg-amber-300 rounded-lg'>
      <img className='m-auto ' src={benner}  />
    </div>
  )
}

export default Banner
