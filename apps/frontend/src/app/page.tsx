import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="w-[80px]">
        <Button tone="bright">Chat</Button>
      </div>
      <div className="w-[160px]">
        <Button tone="dark">Your Profile</Button>
      </div>
    </main>
  );
}
