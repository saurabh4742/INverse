"use client"
import React from "react";
import { useParams } from 'next/navigation'
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams<{ recieverid: string }>()
  return (
    <div className="space-y-5  ">
      <div>{params.recieverid} name and photo with circle logo</div>
      <div className="h-5/6  ">Your chat with {params.recieverid} </div>
      <div>Send message with + attachment</div>
    </div>
   
  );
};

export default page;
