import React from "react";
import footerBackground from "../../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="footer px-20 pb-10 flex justify-between text-black"
      style={{
        background: `url(${footerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Emergency Checkup</a>
        <a className="link link-hover">Monthly Checkup</a>
        <a className="link link-hover">Weekly Checkup</a>
        <a className="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span className="footer-title">Oral Health</span>
        <a className="link link-hover">Fluoride Treatment</a>
        <a className="link link-hover">Cavity Filling</a>
        <a className="link link-hover">Teeth Whitening</a>
      </div>
      <div>
        <span className="footer-title">Our Address</span>
        <a className="link link-hover">New York - 10101010 Hudson</a>
      </div>{" "}
    </footer>
  );
};

export default Footer;
