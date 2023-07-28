import * as Form from "@radix-ui/react-form";

const StepTwoForm = () => (
  <div className="flex justify-center items-center mt-11">
    <Form.Root className="w-[343px]  mx-4">
      <Form.Field className="grid mb-4" name="nome">
        <div className="flex flex-col items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Nome completo
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8] mb-1"
            match="valueMissing"
          >
            Por favor informe seu nome completo
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8] mb-1"
            match="typeMismatch"
          >
            Por favor informe um nome valido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            placeholder="Informe seu nome completo"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="nascimento">
        <div className="flex flex-col items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Data de nascimento
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8] mb-1"
            match="valueMissing"
          >
            Por favor informe sua data de nascimento
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8] mb-1"
            match="typeMismatch"
          >
            Por favor insira uma data de nascimento valida
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="date"
            placeholder="Informe sua data de nascimento"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="cpf">
        <div className="flex flex-col items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            CPF
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8] mb-1"
            match="valueMissing"
          >
            Por favor informe seu CPF
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8] mb-1"
            match="typeMismatch"
          >
            Por favor insira um CPF valido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            placeholder="Informe seu CPF"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className="box-border w-full text-secondary shadow-primary-300 hover:bg-primary-500 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-primary px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none mt-11">
          Continuar
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default StepTwoForm;
