import { GameText } from "../ui/game-text";
import Image from "next/image";
import _ from "lodash";
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
              <p>YoE: {differenceInYears(new Date(), new Date(2021, 8, 21))}</p>
              <p>
                Age: {differenceInYears(new Date(), new Date(1998, 12, 16))}
              </p>
              <div className="flex flex-row">
                <p>Born:&nbsp;</p>
                <p className="mt-[-0.7rem] text-3xl">🇮🇪</p>
              </div>
              <div className="flex flex-row">
                <p>Located:&nbsp;</p>
                <p className="mt-[-0.7rem] text-3xl">🇬🇧</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Image
            className="md:h-100 md:w-100 h-[75px] w-[75px]"
            src="/icons/home.png"
            alt="An image of a home."
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
            className="md:h-100 md:w-100 h-[75px] w-[75px]"
            src="/icons/laptop.png"
            alt="An image of a laptop."
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
            className="md:h-100 md:w-100 h-[75px] w-[75px]"
            src="/icons/degree.png"
            alt="An image of a degree."
            height={100}
            width={100}
          />
          <div>
            <h3 className="text-xl">Studied At</h3>
            <GameText className="text-sm">University College Dublin</GameText>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="pb-1 text-xl">Skills:</h2>
          <div className="flex flex-row items-center">
            <Image
              className="rounded"
              src="/icons/typescript.png"
              alt="The typescript logo"
              height={75}
              width={75}
            />
            <div className="flex h-fit flex-row gap-2 pl-2">
              {_.range(5).map((key) => (
                <Image
                  key={key}
                  className="rounded"
                  src="/icons/star.png"
                  alt="A star icon"
                  height={50}
                  width={50}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Image
              className="rounded"
              src="/icons/python.png"
              alt="The python logo"
              height={75}
              width={75}
            />
            <div className="flex h-fit flex-row gap-2 pl-2">
              {_.range(4).map((key) => (
                <Image
                  key={key}
                  className="rounded"
                  src="/icons/star.png"
                  alt="A star icon"
                  height={50}
                  width={50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
