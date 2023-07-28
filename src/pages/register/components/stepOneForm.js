import * as Form from "@radix-ui/react-form";

const StepOneForm = () => (
  <div className="flex justify-center items-center mt-11">
    <Form.Root className="w-[343px]  mx-4">
      <Form.Field className="grid mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Usuário ou email
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe seu email ou usuário
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe um email ou usuário valido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="email"
            placeholder="Informe seu email"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Senha
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe sua senha
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor insira uma senha valida
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="password"
            placeholder="Informe sua senha"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="passwordConfirm">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Confirmar senha
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe sua senha
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor insira uma senha valida
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="passwordConfirm"
            placeholder="Informe sua senha"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            indicação
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe sua indicação
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe uma indicação valida
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="box-border w-full text-secondary shadow-primary-300 hover:bg-primary-500 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-primary px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none mt-11">
          Entrar
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default StepOneForm;
