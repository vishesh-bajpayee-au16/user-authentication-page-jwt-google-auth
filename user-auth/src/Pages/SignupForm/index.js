import React from "react";
import FormInput from "../../components/FormInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const onChangeInp = (target) => {
    return target.type === "email"
      ? setEmail(target.value)
      : target.type === "password"
      ? setPassword(target.value)
      : target.id === "firstNameInput"
      ? setFirstname(target.value)
      : target.id === "lastNameInput"
      ? setlastname(target.value)
      : null;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const signupPayloadObj = {
      firstname,
      lastname,
      email,
      password,
    };

    console.log(signupPayloadObj);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Signup</h1>
        <Form className="container" onSubmit={onFormSubmit}>
          <FormInput
            inputId="firstNameInput"
            label="Enter first name"
            placeholder="your name must be 3 or more characters"
            type="text"
            onChangeInp={onChangeInp}
          />
          <FormInput
            inputId="lastNameInput"
            label="Enter last name"
            placeholder="your name must be 3 or more characters"
            type="text"
            onChangeInp={onChangeInp}
          />

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
      </div>
    </React.Fragment>
  );
};

export default SignupForm;
