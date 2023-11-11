"use client";

import * as Progress from "@radix-ui/react-progress";

import { useEffect, useState } from "react";

import { p2p } from "../fonts";

export const useProgress = () => {
  const [progress, setProgress] = useState(3);

  useEffect(() => {
    const timers = [
      setTimeout(() => setProgress(50), 150),
      setTimeout(() => setProgress(99), 1000),
      setTimeout(() => setProgress(100), 1600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  return progress;
};

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="flex-row text-center space-y-1">
      <p className={`${p2p.className} `}>Loading...</p>
      <Progress.Root
        className="relative overflow-hidden bg-gray-800 rounded-full w-[300px] h-[25px]"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Progress.Indicator
          className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
};
