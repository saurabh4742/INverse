import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary:"bg-[#0C0A09] hover:bg-[#292524] text-sm normal-case"
        ,
        variables: {
          colorText: "#FAFAF9"
        }
      },
    }}>
      <html lang="en">
      <body className={`${kanit.className} bg-[#FAFAFA] dark:bg-[#0C0A09] text-[#18181B] dark:text-[#FAFAF9]`}>
      {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
