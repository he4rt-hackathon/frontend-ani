import { LoginForm } from "./components/loginForm";

export default function login() {
  return (
    <div className=" bg-loginBackground  bg-no-repeat bg-cover sm:bg-auto bg-center w-screen h-screen">
      <div className="flex flex-col justify-center h-[80vh] ">
        <div className="flex flex-col w-auto mx-4">
          <h1 className="text-white font-bold">
            Sua <span className="text-primary">vida financeira</span> de uma
            forma nova.
          </h1>
          <h2 className="text-white-secondary font-light">
            Tenha controle agora da sua vida financeira de uma forma rápida e
            fácil.
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
