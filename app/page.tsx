import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Image className="rounded-xl" src="/biohacks/cyberpunk.png" alt="cyberpunk" width={500} height={500} />

      
      <h1 className="text-4xl text-yellow-200">Cyberpunk Recipe App</h1>
    </div>
  );
}
