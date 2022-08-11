import React from "react";
import "../styles/footer.css";
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
function Footer() {
  return <footer>
    footer
    <div className="footer-links">
      <FaFacebookF />
      <BsGithub />
      <BsLinkedin />
    </div>
  </footer>;
}

export default Footer;
