import { Introduction } from "@/components/introduction";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Introduction/>
        </div>
      </main>
    </div>
  );
}
