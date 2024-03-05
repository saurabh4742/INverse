import { SignIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
export default function Page() {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <SignIn  />
    </div>
  );
}
