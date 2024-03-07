import { GoogleGenerativeAI } from "@google/generative-ai";
import {NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);


// 2 
const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 500,
    temperature: 0.7,
    topP: 0.6,
    topK: 16,
  };

// 3 
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});

// 4
export async function POST() {
 const messages =`write humorous single line quote for a web chat application called "INverse" unique`
 const prompt = messages;
 const result = await model.generateContent(prompt);

// 5
 return new NextResponse(JSON.stringify({ quote: result.response.text() }),{ status: 200 });
}