import React from "react";
import footerBackground from "../../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      class="footer px-20 pb-10 flex justify-between text-black"
      style={{
        background: `url(${footerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Emergency Checkup</a>
        <a class="link link-hover">Monthly Checkup</a>
        <a class="link link-hover">Weekly Checkup</a>
        <a class="link link-hover">Deep Checkup</a>
      </div>
      <div>
        <span class="footer-title">Oral Health</span>
        <a class="link link-hover">Fluoride Treatment</a>
        <a class="link link-hover">Cavity Filling</a>
        <a class="link link-hover">Teeth Whitening</a>
      </div>
      <div>
        <span class="footer-title">Our Address</span>
        <a class="link link-hover">New York - 10101010 Hudson</a>
      </div>{" "}
    </footer>
  );
};

export default Footer;
