import { SignIn } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="flex items-center bg-[#F0FDFA] justify-center h-[100vh] ">
      <SignIn  />
    </div>
  );
}
