import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "../styles/MyForm.css";
import "../styles/LoginForm.css";

function RegisterForm({ open, setOpen, login, setLogin }) {

  const [values, setValues] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "username should be 3-16 chars and not inclued speatial char",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      errorMessage:
        "First name should be 3-16 chars and not inclued speatial char",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      errorMessage:
        "Last name should be 3-16 chars and not inclued speatial char",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "should be a valid email",
      required: true,
      pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
      required: true,
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password dont match ",
      required: true,
      pattern: values.password,
    },

  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    let output = "";
    for (const input in values) {
      output += `${input}: ${values[input]}\n`;
    }
    alert(output);
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return open === false ? (
    ""
  ) : (
    <div id="loginform" className="login-form ">
      <form className="MyForm" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          );
        })}
        <a onClick={() => setLogin(!login)}>You have account? click to login</a>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
