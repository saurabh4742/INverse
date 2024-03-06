"use client"
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import animationData from "./ChatWithUs.json"
const ChatWithUs = () => {
  return (
    <div className='sm:w-6/12'>
      <Player src={animationData} loop  autoplay  />
    </div>
  )
}

export default ChatWithUs
