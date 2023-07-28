import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const StepThreeForm = () => (
  <div className="flex justify-center items-center mt-11">
    <Form.Root className="w-[343px]  mx-4">
      <Form.Field className="grid mb-4" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Onde trabalha ?
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe o nome da empresa
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe um nome valido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Field className="grid mb-4" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Qual sua renda mensal ?
          </Form.Label>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe sua renda mensal
          </Form.Message>
          <Form.Message
            className="text-[13px] text-highEmphasis  opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor insira um valor valido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>

      <Select.Root>
        <Select.Trigger
          className="mt-4 inline-flex items-center w-full justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-secondary text-primary shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Food"
        >
          <Select.Value
            placeholder="Você sabe investir ?"
            className="text-primary placeholder:text-primary"
          />
          <Select.Icon className="text-primary">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className=" w-[343] overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.SelectItem value="0">Não</Select.SelectItem>
              <Select.SelectItem value="1">Sim</Select.SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-primary cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>

      <Form.Submit asChild>
        <button className="box-border w-full text-secondary shadow-primary-300 hover:bg-primary-500 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-primary px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none mt-11">
          Continuar
        </button>
      </Form.Submit>
    </Form.Root>
  </div>
);

export default StepThreeForm;
