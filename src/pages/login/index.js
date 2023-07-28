import LoginForm from "./LoginForm";
import Link from "next/link";

export default function login() {
  return (
    <div className="bg-loginBgMobile bg-no-repeat bg-cover bg-center w-screen h-screen sm:bg-loginBgDesktop/80 sm:bg-secondary/90 sm:bg-cover ">
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

        <LoginForm />

        <div className="text-center mt-16">
          <span className="text-white text-base font-medium">
            Não possui conta?
            <br />
          </span>

          <span className="text-primary text-base font-bold">
            <Link href="/register/stepone">Clique aqui</Link>
          </span>
          <span className="text-white text-base font-bold"> </span>
          <span className="text-white text-base font-medium">
            para se registrar
          </span>
        </div>
      </div>
    </div>
  );
}
