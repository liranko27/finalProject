import React from "react";

function NavLinks() {
  return (
    <ul className="links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">about</a>
      </li>
    </ul>
  );
}

export default NavLinks;

//       Dont use this menu**
// <li>
//       <div className="profile-menu hidden">
//         <h3 style={{ textDecoration: "underline" }}>My Profile</h3>
//         <p className="myAccount-btn">My Account</p>
//         <ul className="myAccount-list hidden">
//           <li>Change password</li>
//           <li>Change name</li>
//           <li>Change address</li>
//           <li>Change email</li>
//         </ul>
//         <div>
//           <a href="/">my Wishlist</a>
//         </div>
//       </div>
//     </li>
