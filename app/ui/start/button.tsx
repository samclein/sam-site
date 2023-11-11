"use client";

import { useEffect, useState } from "react";

import { p2p } from "../fonts";

export const StartButton: React.FC = () => {
  const finalStartText = "Press Enter to Start";
  const [startText, setStartText] = useState("");

  useEffect(() => {
    const timers = finalStartText
      .split("")
      .map((char, index) =>
        setTimeout(
          () =>
            setStartText(
              (prevText) =>
                prevText.replace("_", "") +
                `${char}${index === finalStartText.length - 1 ? "" : "_"}`
            ),
          index * 75
        )
      );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <button
      className={`${p2p.className} hover:white shadow-blackA4 inline-flex h-[40px] border-solid border-2 border-white items-center justify-center rounded-[4px] bg-black px-[15px] font-medium leading-none shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-blue-300`}
    >
      {startText}
      {startText === finalStartText && (
        <p className="animate-fade animate-infinite animate-delay-100"> _</p>
      )}
    </button>
  );
};
