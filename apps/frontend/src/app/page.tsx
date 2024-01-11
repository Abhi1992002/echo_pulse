import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="w-[80px]">
        <UserButton afterSignOutUrl="/" />

        <Button tone="bright">
          <SignInButton>Sign in</SignInButton>
        </Button>
      </div>
    </main>
  );
}
