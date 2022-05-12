import { format } from "date-fns";
import React from "react";

const AppointmentForm = ({ treatment, date }) => {
  const { name, slots } = treatment;
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.slot.value);
  };
  return (
    <div>
      <input type="checkbox" id="form-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={formSubmit}>
            <input
              type="text"
              className="my-2 border-2 py-1 bg-gray-300 px-3 w-full rounded-md"
              value={format(date, "PP")}
              name=""
              id=""
            />{" "}
            <br />
            <select className="select select-bordered w-full my-1 border-2 bg-gray-300 px-3 rounded-md">
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <br />
            <input
              type="text"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              placeholder="Your Name"
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="text"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              placeholder="Your Mobile Number"
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="email"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              placeholder="Your Email"
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="submit"
              className="btn btn-primary uppercase font-bold bg-gradient-to-r from-gray-800 mt-2 w-full to-gray-900 text-white"
              value="Submit"
              id=""
            />{" "}
            <br />
          </form>
          <div className="modal-action">
            <label
              for="form-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
