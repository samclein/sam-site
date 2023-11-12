import Image from "next/image";
import { differenceInYears } from "date-fns";
import { p2p } from "@/app/ui/fonts";

export default function CV() {
  return (
    <main
      className={`${p2p.className} flex min-h-screen flex-row justify-center p-6`}
    >
      <div className="flex h-fit flex-col justify-center md:flex-col">
        <h1 className="text-3xl">Sam Clein</h1>
        <h2 className="pb-1 ">Software Engineer</h2>
        <div className="flex flex-row gap-4">
          <Image
            className="rounded"
            src="/avatar.gif"
            alt={"An image of an avatar"}
            height={200}
            width={200}
          />
          <div className="items-begin flex flex-col justify-center gap-4  md:flex-col">
            <p className="">
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
    </main>
  );
}
