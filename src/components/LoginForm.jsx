import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "../styles/MyForm.css";
import "../styles/LoginForm.css";
import { loginInputs, loginValues } from '../inputs/loginFormInputs'
import { Api } from "../DAL/api";

function LoginForm({ open, setOpen, login, setLogin }) {
  const [values, setValues] = useState(loginValues);
  const inputs = loginInputs();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    Api.login(values)
    window.location.href = 'http://localhost:3000'// eslint-disable-next-line 
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
