"use client";

import { ProgressBar } from "./progress";
import { useProgress } from "@/app/ui/start/progress";

export const StartMenu: React.FC = () => {
  const progress = useProgress();
  if (progress !== 100) {
    return <ProgressBar progress={progress} />;
  }
  return <button>Start!</button>;
};
