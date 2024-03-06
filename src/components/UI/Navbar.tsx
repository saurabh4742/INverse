import { CurrentProfile } from '@/clerkAuthsFolder/currentuser';
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Navbar = async () => {
    const user = await CurrentProfile();
  return (
    <div className="flex justify-around  bg-[#022C22] shadow-md p-4 rounded-b-xl">
        <span className="text-2xl text-[#F0FDFA]">INverse</span>
        {user ? (
          <>
            <button
              className="bg-[#10B981]  text-[#F0FDFA] rounded-full px-4 hover:opacity-75 hover:transform hover:scale-105 transition duration-300 ease-in-out"
              type="button"
            >
              <a href="/chatnow">Chat Now</a>
            </button>
            <div className='rounded-full border-2 border-[#F0FDFA]'><UserButton afterSignOutUrl="/" /></div>
          </>
        ) : (
          <button
            className="bg-[#10B981]  text-[#F0FDFA] rounded-full px-4 hover:opacity-75 hover:transform hover:scale-105 transition duration-300 ease-in-out"
            type="button"
          >
            <a href="/sign-in">Sign in</a>
          </button>
        )}
      </div>
  )
}

export default Navbar
