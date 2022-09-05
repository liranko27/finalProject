import React from "react";
import FormInput from "./FormInput";
import { useState } from "react";
import "../styles/MyForm.css";
import "../styles/LoginForm.css";
import { regInputs, regValues } from '../inputs/regFormInputs'
import { Api } from "../DAL/api";
function RegisterForm({ open, setOpen, login, setLogin }) {

  const [values, setValues] = useState(regValues);
  const inputs = regInputs();
  inputs[4].pattern = values.password

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.register(values)
    // let output = "";
    // for (const input in values) {
    //   output += `${input}: ${values[input]}\n`;
    // }
    // alert(output);
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
        <p onClick={() => setLogin(!login)}>You have account? click to login</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
