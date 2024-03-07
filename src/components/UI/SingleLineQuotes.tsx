"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

const SingleLineQuotes = () => {
    const [quote,setQuote]=useState(null);
  useEffect(() => {
    const GetQuotes = async () => {
        try {
            const response= await axios.post("/api/chat");
            setQuote(response.data.quote);
        } catch (error) {
            console.log("Error from api chat")
        }
    };
    GetQuotes();
  },[]);

  return <div className="px-6 text-2xl text-[#10B981] flex text-center justify-center items-center">{quote && `${quote}`}</div>;
};

export default SingleLineQuotes;
