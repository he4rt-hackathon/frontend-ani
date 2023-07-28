import StepTwoForm from "./components/stepTwoForm";
import * as Avatar from "@radix-ui/react-avatar";

export default function stepTwoForm() {
  return (
    <div className="bg-secondary/90 bg-no-repeat bg-cover bg-center w-screen h-screen sm:absolute sm:bg-auto ">
      <div className="flex flex-col justify-center items-center h-screen ">
        <Avatar.Root className="bg-secondary-50 inline-flex h-[128px] w-[128px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
          <Avatar.Fallback className="text-primary leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-bold text-xl">
            CAIXA
          </Avatar.Fallback>
        </Avatar.Root>

        <StepTwoForm />
      </div>
    </div>
  );
}
