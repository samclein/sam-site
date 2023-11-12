import { GameText } from "../ui/game-text";
import Image from "next/image";
import { differenceInYears } from "date-fns";
import { p2p } from "@/app/ui/fonts";

export default function CV() {
  return (
    <main
      className={`${p2p.className} flex min-h-screen flex-col items-center`}
    >
      <div className={`flex flex-col items-start justify-start gap-10 p-6 `}>
        <div className={"flex w-full flex-col items-center"}>
          <h1 className="text-3xl">Sam Clein</h1>
          <h2 className="pb-3">Software Engineer</h2>
          <div className="xsm flex flex-col items-center gap-4 md:flex-row">
            <Image
              className="rounded"
              src="/avatar.gif"
              alt={"An image of an avatar"}
              height={200}
              width={200}
            />
            <div className="items-begin flex flex-col justify-center gap-4">
              <p>
                Age: {differenceInYears(new Date(), new Date(1998, 12, 16))}
              </p>
              <p>YoE: {differenceInYears(new Date(), new Date(2021, 8, 21))}</p>
              <div className="flex flex-row">
                <p>Born:&nbsp;</p>
                <p className="mt-[-0.7rem] text-3xl">🇮🇪</p>
              </div>
              <div className="flex flex-row">
                <p>Living:&nbsp;</p>
                <p className="mt-[-0.7rem] text-3xl">🇬🇧</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/icons/home.png"
            alt="An image of a suitcase."
            height={100}
            width={100}
          />
          <div>
            <h3 className="text-xl">Living In</h3>
            <GameText className="text-sm">London, UK</GameText>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Image
            src="/icons/laptop.png"
            alt="An image of a suitcase."
            height={100}
            width={100}
          />
          <div>
            <h3 className="text-xl">Working At</h3>
            <GameText className="text-sm">Bloomberg L.P.</GameText>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 md:w-[480px]">
          <Image
            src="/icons/degree.png"
            alt="An image of a suitcase."
            height={100}
            width={100}
          />
          <div>
            <h3 className="text-xl">Studied At</h3>
            <GameText className="text-sm">University College Dublin</GameText>
          </div>
        </div>
      </div>
    </main>
  );
}
