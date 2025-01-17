import React, { useState } from "react";
import Input from "./components/Input";
import { GrMail } from "react-icons/gr";
import { FormProvider, useForm } from "react-hook-form";
import {
  desc_validation,
  email_validation,
  name_validation,
  num_validation,
  password_validation,
} from "../utils/inputValidations";
import { BsFillCheckSquareFill } from "react-icons/bs";

function Form() {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...num_validation} />
          <Input {...password_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill /> Message has been submited successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail /> Send Mail
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default Form;
