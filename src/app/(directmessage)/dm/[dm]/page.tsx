import React from "react";
import { useSearchParams } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="flex w-full h-[100vh] text-[#FAFAFA] justify-between ">
      <div className="hidden sm:flex items-center sm:w-2/12 sm:flex-col gap-4 sm:h-full sm:bg-black">
        <div className="flex gap-2 justify-start  mt-8 items-center">
          <UserButton afterSignOutUrl="/"/>
        </div>
      </div>
      <div className="w-full justify-center flex p-2 h-full bg-[#18181B]">
      <div className="space-y-5  ">
      <div>Jiske sath chat kar rha uska name and photo with circle logo</div>
      <div className="h-5/6  ">Chat ALll my and samnew ala too</div>
      <div>Send message with + attachment</div>
    </div>
      </div>
    </div>
   
  );
};

export default page;
