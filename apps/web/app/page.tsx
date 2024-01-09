import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

export default function Page(): JSX.Element {
  return (
    <div className="h-screen">
      <SignInButton mode="modal" redirectUrl="/">
        Sign in
      </SignInButton>
      <Button variant={"outline"}>Go to dashboard</Button>
      <UserButton />
      <h1 className="text-red-500">bye</h1>
    </div>
  );
}
