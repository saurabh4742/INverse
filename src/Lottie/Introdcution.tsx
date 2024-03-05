"use client"
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import animationData from "./Introduction.json"
const Introdcution = () => {
  return (
    <div className='sm:w-10/12 '>
      <Player src={animationData} loop  autoplay  />
    </div>
  )
}

export default Introdcution
