import { GameText } from "@/app/ui/game-text";
import Link from "next/link";
import { p2p } from "../ui/fonts";

export default function Home() {
  const prompt = "Please choose an option:";
  const options = [
    { text: "CV", route: "cv" },
    { text: "About Me", route: "cv" },
    { text: "Projects", route: "cv" },
  ];
  return (
    <main className={`${p2p.className} flex min-h-screen flex-col p-6 `}>
      <div className="mt-4 flex grow flex-col items-center justify-center gap-4 md:flex-col ">
        <h1 className="pb-1 text-6xl">Sam Clein</h1>
        <GameText className="min-h-[48px]">{prompt}</GameText>
        <div className="flex min-h-[75px] flex-col items-start gap-3 md:gap-0">
          {options.map((option, index) => (
            <Link
              href={option.route}
              key={option.text}
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
