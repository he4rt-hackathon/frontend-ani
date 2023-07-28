import * as Form from "@radix-ui/react-form";

const VerificationForm = () => (
  <div className="flex justify-center items-center mt-11">
    <Form.Root className="w-[343px]  mx-4">
      <Form.Field className="grid gap-4 grid-cols-4 grid-rows-1" name="numbers">
        <Form.Control asChild>
          <input
            className="text-center box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            autoFocus
            maxLength={1}
            required
          />
        </Form.Control>

        <Form.Control asChild>
          <input
            className="text-center box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            maxLength={1}
            required
          />
        </Form.Control>

        <Form.Control asChild>
          <input
            className="text-center box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            maxLength={1}
            required
          />
        </Form.Control>

        <Form.Control asChild>
          <input
            className="text-center box-border w-full bg-secondary bg-opacity-20 shadow-secondary-border inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-primary shadow-[0_0_0_1px] outline-none hover:shadow-primary focus:shadow-primary  selection:color-primary selection:text-primary"
            type="text"
            maxLength={1}
            required
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

export default VerificationForm;
