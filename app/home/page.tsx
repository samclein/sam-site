import { GAME_TEXT_MS_PER_CHAR, GameText } from "@/app/ui/start/game-text";

import { p2p } from "../ui/fonts";

export default function Home() {
  const prompt = "Please choose an option:";
  const delayForPrompt = prompt.length * 75;

  return (
    <main className={`${p2p.className} flex min-h-screen flex-col p-6 `}>
      <div className="mt-4 flex grow flex-col items-center justify-center gap-4 md:flex-col ">
        <h1 className="pb-20 text-6xl">Sam Clein</h1>
        <GameText>{prompt}</GameText>
        <div className="flex flex-col items-start">
          <GameText delay={delayForPrompt}>{"> CV"}</GameText>
          <GameText delay={delayForPrompt}>{"> About Me"}</GameText>
          <GameText delay={delayForPrompt}>{"> Projects"}</GameText>
        </div>
      </div>
    </main>
  );
}
