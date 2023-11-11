"use client";

import { ProgressBar } from "./progress";
import { StartButton } from "./button";
import { useProgress } from "@/app/ui/start/progress";

export const StartMenu: React.FC = () => {
  const progress = useProgress();

  if (progress !== 100) {
    return <ProgressBar progress={progress} />;
  }

  return <StartButton />;
};
