/* eslint-disable @next/next/no-img-element */
import React from "react";
import { db } from "@/clerkAuthsFolder/db";
import { CurrentProfile } from "@/clerkAuthsFolder/currentuser";
const AllUser = async () => {
  const current=await CurrentProfile();
  const users = await db.profile.findMany({
    where:{
      userId: { not: current?.userId },

    }
  });

  return (
    <div className="items-center justify-center flex-col gap-4 mt-4">
      {users?.map((user:any) => (
        
        <div className="flex gap-1 my-4 items-center text-sm "  key={user.id}>
         <a href={`/chatnow/${user.id}`}><img className="h-8 w-8 rounded-full hover:scale-125  cursor-pointer"
           src={user.imageUrl} alt={user.name} /></a> 
        </div>
      ))}
    </div>
  );
};

export default AllUser;
