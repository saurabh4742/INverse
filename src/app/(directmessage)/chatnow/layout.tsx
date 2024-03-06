import React from "react";
import { UserButton } from "@clerk/nextjs";
const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full h-[100vh]  justify-between ">
      <div className="hidden sm:flex items-center sm:w-2/12 sm:flex-col gap-4 sm:h-full sm:bg-[#065F46] text-[#F0FDFA]">
        <div className="flex gap-2 justify-start  mt-8 items-center">
          <div className="rounded-full border-2 border-[#F0FDFA]"><UserButton afterSignOutUrl="/"/></div>
        </div>
      </div>
      <div className="w-full justify-center flex p-2 h-full bg-[#F0FDFA]">
      {children}
      </div>
    </div>
   
  );
};

export default page;
