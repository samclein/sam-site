"use client";

import { useEffect, useState } from "react";

import { p2p } from "@/app/ui/fonts";

const GAME_TEXT_MS_PER_CHAR = 75;

const useStaggeredText = ({
  finalText,
  delay,
}: {
  finalText: string;
  delay: number;
}) => {
  const [staggeredText, setStaggeredText] = useState("");
  useEffect(() => {
    const timers = finalText
      .split("")
      .map((char, index) =>
        setTimeout(
          () =>
            setStaggeredText(
              (prevText) =>
                prevText.replace("_", "") +
                `${char}${index === finalText.length - 1 ? "" : "_"}`,
            ),
          (delay + index) * GAME_TEXT_MS_PER_CHAR,
        ),
      );
    return () => timers.forEach(clearTimeout);
  }, [delay, finalText]);

  return staggeredText;
};

interface GameTextProps {
  children: string;
  delay?: number;
  showCursor?: boolean;
}

export const GameText: React.FC<GameTextProps> = ({
  children: finalText,
  delay = 0,
  showCursor = false,
}) => {
  const staggeredText = useStaggeredText({ finalText, delay });
  return (
    <div
      className={`${p2p.className} inline-flex items-center justify-center `}
    >
      <p>&nbsp;{staggeredText}</p>
      {showCursor && staggeredText === finalText && (
        <p className="animate-fade animate-delay-100 animate-infinite"> _</p>
      )}
    </div>
  );
};
