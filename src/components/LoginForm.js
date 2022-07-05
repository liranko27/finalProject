import React from "react";

function LoginForm() {
  return (
    <div id="loginform" className="login-form hidden">
      <div className="login">
        <h4>Sign in</h4>
        <form>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>

          <input type="submit" value="Submit!" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
