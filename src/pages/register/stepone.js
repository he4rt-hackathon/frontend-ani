import RegisterForm from "./components/registerForm";

export default function stepone() {
  return (
    <div className="bg-secondary bg-no-repeat bg-cover bg-center w-screen h-screen sm:absolute sm:bg-secondary/90 sm:bg-auto ">
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="w-[343px]">
          <span className="text-white text-xl font-bold tracking-wide">
            Sua
          </span>
          <span className="text-white text-xl font-bold tracking-wide"> </span>
          <span className="text-primary text-xl font-bold tracking-wide">
            vida financeira
          </span>
          <span className="text-white text-xl font-bold tracking-wide"> </span>
          <span className="text-white text-xl font-bold tracking-wide">
            de uma forma nova.
          </span>
        </div>
        <div className="w-[343px] text-white-secondary text-base font-normal mt-3">
          Tenha controle agora da sua vida financeira de uma forma rápida e
          fácil.
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}
