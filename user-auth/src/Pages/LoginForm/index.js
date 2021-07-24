import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormInput from "../../components/FormInput";
import { useState } from "react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const payloadObj = {
      email,
      password,
    };

    console.log(payloadObj);
  };

  const onChangeInp = (target) => {
    return target.type === "email"
      ? setEmail(target.value)
      : target.type === "password"
      ? setPassword(target.value)
      : null;
  };

  return (
    <Form className="container" onSubmit={onFormSubmit}>
      <FormInput
        inputId="emailInput"
        label="Enter Email"
        placeholder="Enter a valid Email"
        type="email"
        onChangeInp={onChangeInp}
      />
      <FormInput
        inputId="passwordInput"
        label="Enter Password"
        placeholder="Enter a valid Password"
        type="password"
        onChangeInp={onChangeInp}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
