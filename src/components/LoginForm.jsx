import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "../styles/MyForm.css";
import "../styles/LoginForm.css";
import { loginInputs, loginValues } from '../inputs/loginFormInputs'

function LoginForm({ open, setOpen, login, setLogin }) {
  const [values, setValues] = useState(loginValues);
  const inputs = loginInputs();

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
        <p onClick={() => setLogin(!login)}>Not register yet? click to register</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
