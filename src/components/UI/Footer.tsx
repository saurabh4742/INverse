import React from 'react'

const Footer = () => {
  return (
<div className="flex-col gap-3 bg-[#022C22]  text-[#F0FDFA] shadow-md p-2 mt-4 rounded-t-2xl">
        <div className=" sm:flex   justify-around   text-sm  items-center">
          <div className="flex-col gap-4 text-center ">
            <div>
              <a href="/">Privacy Policy</a>
            </div>
            <div>
              <a href="/">Guide</a>
            </div>
            <div>
              <a href="/">Contributors</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-2">
          &copy; 2024 INverse by Saurabh Anand. All rights reserved.
        </p>
      </div>
  )
}

export default Footer
