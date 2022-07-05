import React from "react";
import LoginForm from "./LoginForm";

function NavLinks() {
  return (
    <ul className="links">
      <li>
        <a href="/">about</a>
      </li>
      <li>
        <a className="profile-btn" href="/">
          profile
        </a>
        <div className="profile-menu hidden">
          <h3 style={{ textDecoration: "underline" }}>My Profile</h3>
          <p className="myAccount-btn">My Account</p>
          {/*  Dont use this menu**
          <ul className="myAccount-list hidden">
            <li>Change password</li>
            <li>Change name</li>
            <li>Change address</li>
            <li>Change email</li>
          </ul> */}
          <div>
            <a href="/">my Wishlist</a>
          </div>
        </div>
      </li>
      <div>
        <li>
          <a className="signin" href="/">
            sign in
          </a>
          <LoginForm />
        </li>
      </div>
    </ul>
  );
}

export default NavLinks;
