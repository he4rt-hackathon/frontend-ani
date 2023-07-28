import * as Avatar from "@radix-ui/react-avatar";
import * as Progress from "@radix-ui/react-progress";
import { useState, useEffect } from "react";
import { EyeOpenIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-secondary/90 bg-no-repeat bg-cover bg-center w-screen h-screen sm:absolute sm:bg-auto ">
      <div className="w-full flex flex-col justify-center items-center h-screen">
        <div className="flex justify-between items-center w-[343px]  ">
          <h1 className="flex flex-col text-white text-xl font-bold tracking-wide ">
            Olá, <span className="text-primary">João Vitor</span>
          </h1>
          <PersonIcon className="text-primary w-[32px] h-[32px]" />
        </div>
        <div className="w-[342px] h-px bg-secondary-50 my-4" />

        <div className="flex justify-between items-center w-[343px]  ">
          <h1 className="flex flex-col text-white text-xs font-normal tracking-wide ">
            Total na conta:{" "}
            <span className="text-primary text-xl font-bold">R$ 200,00</span>
          </h1>

          <Avatar.Root className="bg-primary/10 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <EyeOpenIcon className="text-primary w-[24px] h-[24px]" />
          </Avatar.Root>
        </div>

        <div className="flex flex-col bg-primary-200/10 rounded-md w-[343px] my-8 p-4">
          <div className="flex flex-row justify-between mb-2">
            <h3 className=" font-normal text-mediumEmphasis">Credito atual:</h3>
            <h3 className=" font-bold text-highEmphasis">R$ 540,00</h3>
          </div>

          <Progress.Root
            className="relative overflow-hidden bg-primary/10 rounded-full w-[315px] h-[10px] mb-2"
            style={{
              // Fix overflow clipping in Safari
              // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
              transform: "translateZ(0)",
            }}
            value={progress}
          >
            <Progress.Indicator
              className="bg-primary w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
              style={{ transform: `translateX(-${100 - progress}%)` }}
            />
          </Progress.Root>

          <h3 className=" font-normal text-mediumEmphasis">
            Limite máximo: R$5.400,00
          </h3>
        </div>

        <div className="w-[342px]">
          <div className="flex justify-start text-mediumEmphasis text-md font-medium ">
            Confira algumas operações
          </div>
        </div>
      </div>
    </div>
  );
}
