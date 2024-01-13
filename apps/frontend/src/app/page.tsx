"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <main>
      <div className="w-[80px]">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Button tone="bright">
            <SignInButton afterSignInUrl="/boarding">Sign in</SignInButton>
          </Button>
        )}

        <Link href={"/boarding"} className="text-white absolute top-[50%]">
          Do to dashboard
        </Link>
      </div>
    </main>
  );
}
