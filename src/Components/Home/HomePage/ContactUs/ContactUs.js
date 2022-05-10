import React from "react";
import background from "../../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      style={{ background: `url(${background})` }}
      className="my-20 px-4 py-16"
    >
      <div className="text-center">
        <h1 className="text-xl font-bold text-primary">Contact Us </h1>
        <h1 className="text-3xl text-white my-4">Stay Connected With Us</h1>
        <form>
          <input
            type="email"
            className="w-1/4 py-2 px-5 rounded-md text-xl"
            placeholder="Email Address"
            name="email"
            id=""
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="w-1/4 my-4 py-2 px-5 rounded-md text-xl"
            name="subject"
            id=""
          />{" "}
          <br />
          <textarea
            id="txtid"
            name="txtname"
            rows="4"
            style={{ resize: "none" }}
            className="w-1/4 mb-4 h-40 py-2 px-5 rounded-md text-xl"
            placeholder="Your Message"
            cols="50"
            maxlength="200"
          ></textarea>
          <br />
          <button
            type="submit"
            class="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
