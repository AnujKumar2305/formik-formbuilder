import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import InputField from "@/components/formik/InputField";

const formJson: Array<{
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}> = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
  },
  {
    name: "lastName",
    label: "Last Name",
    // placeholder: "Enter your last name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your Email",
  },
];

const SignIn = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="flex flex-col gap-5">
          {/* <InputField
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
          />
          <InputField
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          /> */}
          {formJson.map(({ label, name, type, placeholder }, index) => {
            return (
              <InputField
                key={index}
                label={label}
                name={name}
                placeholder={placeholder}
                type={type}
              />
            );
          })}
          <Button type="submit" title="Submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
