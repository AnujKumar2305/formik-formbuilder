import React from "react";
import { Input, InputProps } from "../ui/input";
import { Select } from "../ui/select";
import { SelectProps } from "@radix-ui/react-select";
import { useField } from "formik";
import { Label } from "../ui/label";

type Props = { inputType?: string; label?: string } & (
  | InputProps
  | SelectProps
);

const InputField = (props: Props) => {
  const { inputType = "input", label, ...rest } = props;
  let Component: typeof Input | typeof Select = Input;
  const [
    form,
    { initialTouched, initialError, initialValue, touched, ...meta },
  ] = useField(rest.name as string);
  switch (inputType) {
    case "input":
      Component = Input;
      break;
    case "select":
      Component = Select;
  }
  return (
    <div>
      {label && (
        <Label title={label} htmlFor={rest.name} className="flex left-0 mb-2">
          {label}
        </Label>
      )}
      <Component
        {...(rest as any)}
        {...form}
        {...meta}
        touched={touched.toString()}
        initialerror={initialError}
        initialvalue={initialValue}
        initialtouched={initialTouched.toString()}
      />
    </div>
  );
};

export default InputField;
