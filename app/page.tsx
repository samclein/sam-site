import { StartMenu } from "./ui/start/menu";

export default function Root() {
  return (
    <main className="flex min-h-screen flex-col p-6 ">
      <div className="mt-4 flex grow flex-col items-center justify-center gap-4 md:flex-row ">
        <StartMenu />
      </div>
    </main>
  );
}
