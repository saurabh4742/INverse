import ChatWithUs from "@/Lottie/ChatWithUs";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";
import SingleLineQuotes from "@/components/UI/SingleLineQuotes";
import React from "react";
const page = () => {
  
  return (
    <div className="sm:space-y-8 space-y-28     bg-white h-[100vh] gap-2 w-full  ">
      {/* navbar */}
      <Navbar/>
      {/* main */}
      <div className="flex h-5/6  justify-center items-center bg-white sm:p-1 ">
        <div className="flex-col sm:w-6/12 w-full justify-center items-center">
          
          <div className="text-center text-wrap px-4 my-3 ">
            <h1 className="bold text-3xl my-4 uppercase">
              Welcome to Inverse chat app
            </h1>{" "}
            where conversations come alive! Share files, exchange audio
            messages, and connect with your friends seamlessly. Let your words
            resonate, and your files fly freely in the digital airwaves. Start
            chatting now!
          </div>
          <div className="flex justify-center  "><ChatWithUs/></div>
          <SingleLineQuotes/>
          <div className="flex justify-center bg-white my-4">
            <button
              className="bg-[#10B981] text-xl text-[#F0FDFA] rounded-full px-8 py-3 hover:opacity-75 hover:transform hover:scale-105 transition duration-300 ease-in-out"
              type="button"
            >
              <a href="/dashboard">Dashboard</a>
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default page;
