import Introdcution from "@/Lottie/Introdcution";
import { CurrentProfile } from "@/clerkAuthsFolder/currentuser";
import { UserButton } from "@clerk/nextjs";
import React from "react";
const page = async () => {
  const user = await CurrentProfile();
  return (
    <div className="flex-col  w-full  ">
      {/* navbar */}
      <div className="flex justify-between bg-[#1C1917] shadow-md p-4 rounded-b-xl">
        <span className="text-2xl">INverse</span>
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            className="bg-[#78716C]  text-[#FAFAF9] rounded-full px-4 hover:opacity-75 hover:transform hover:scale-105 transition duration-300 ease-in-out"
            type="button"
          >
            <a href="/sign-in">Sign in</a>
          </button>
        )}
      </div>
      {/* main */}
      <div className="flex h-5/6  justify-center items-center p-1">
        <div className="flex-col  sm:w-6/12 w-full justify-center items-center">
<div className="flex justify-center">
<div className="flex sm:w-9/12 justify-center">
            <Introdcution />
          </div>
</div>
          <div className="text-center text-wrap">
            <h1 className="bold text-3xl my-4 uppercase">
              Welcome to our Inverse chat app
            </h1>{" "}
            where conversations come alive! Share files, exchange audio
            messages, and connect with your friends seamlessly. Let your words
            resonate, and your files fly freely in the digital airwaves. Start
            chatting now!
          </div>
          <div className="flex justify-center my-4">
            <button
              className="bg-[#78716C] text-xl text-[#FAFAF9] rounded-full px-8 py-3 hover:opacity-75 hover:transform hover:scale-105 transition duration-300 ease-in-out"
              type="button"
            >
              <a href="/dashboard">Dashboard</a>
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex-col gap-3 bg-[#1C1917] shadow-md p-2 mt-4 rounded-t-2xl">
        <div className=" sm:flex  justify-around   text-sm  items-center">
          <div className="flex-col gap-4 text-center">
            <div>
              <a href="/">Docs</a>
            </div>
            <div>
              <a href="/">Api</a>
            </div>
            <div>
              <a href="/">Support</a>
            </div>
          </div>
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
          <div className="flex-col gap-4 text-center ">
            <div>
              <a href="/">Keys</a>
            </div>
            <div>
              <a href="/">Encryption</a>
            </div>
            <div>
              <a href="/">24*7 Service</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-2">
          &copy; 2024 INverse by Saurabh Anand. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default page;
