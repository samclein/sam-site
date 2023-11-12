"use client";

import { GameText } from "@/app/ui/game-text";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const StartButton: React.FC<{ href: string }> = ({ href }) => {
  const router = useRouter();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        router.push(href);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [href, router]);

  return (
    <Link
      href={href}
      className={`inline-flex h-[40px] items-center justify-center rounded-[4px] border-2 border-solid border-white bg-black px-[15px] hover:shadow-[0_0_0_4px] hover:shadow-blue-300 focus:shadow-[0_0_0_4px] focus:shadow-blue-800`}
      autoFocus
    >
      <GameText className={"text-[0.75rem]"} showCursor={true}>
        Hit enter to begin
      </GameText>
    </Link>
  );
};
