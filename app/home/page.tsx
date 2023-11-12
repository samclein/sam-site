import { GameText } from "@/app/ui/game-text";
import Link from "next/link";
import { p2p } from "../ui/fonts";

export default function Home() {
  const prompt = "Please choose an option:";
  const options = [
    { text: "CV", route: "cv" },
    { text: "About Me", route: "about" },
    { text: "Projects", route: "projects" },
  ];
  return (
    <main className={`${p2p.className} flex min-h-screen flex-col p-6 `}>
      <div className="mt-4 flex grow flex-col items-center justify-center gap-4 md:flex-col ">
        <h1 className="pb-12 text-6xl">Sam Clein</h1>
        <GameText>{prompt}</GameText>
        <div className="flex flex-col items-start">
          {options.map((option, index) => (
            <Link
              href={option.route}
              key={option.route}
              className={
                "outline-none hover:text-blue-300 focus:animate-pulse focus:text-blue-500 focus:animate-duration-500"
              }
              autoFocus={index == 0}
            >
              <GameText delay={prompt.length}>{"> " + option.text}</GameText>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
