import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "../styles/MyForm.css";
import "../styles/LoginForm.css";

function LoginForm({ open, setOpen, login, setLogin }) {
  const [values, setValues] = useState({
    username: "",
    password: "",
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
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 chars must includ at least 1 letter , 1 number and 1 spatial char",
      required: true,
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
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
        <h1>Login</h1>
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
        <a onClick={() => setLogin(!login)}>Not register yet? click to register</a>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
