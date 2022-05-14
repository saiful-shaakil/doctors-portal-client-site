import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AppointmentForm = ({ treatment, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formSubmit = (e) => {
    e.preventDefault();
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      slot: e.target.slot.value,
      patientName: user.displayName,
      patientEmail: user.email,
      patientMobile: e.target.mobile.value,
      date: format(date, "PP"),
    };
    fetch("https://blooming-taiga-86351.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.success);
        if (data.success === false) {
          toast(`You already submit an appointment ${name} at ${date}`);
        }
        if (data.success === true) {
          toast(`Appoinment is submitted ${name} at ${date}`);
        }
      });
    console.log(booking);
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
            <select
              id="slot"
              aria-readonly
              className="select select-bordered w-full my-1 border-2 bg-gray-300 px-3 rounded-md"
            >
              {slots.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>
            <br />
            <input
              type="text"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              value={user.displayName}
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="email"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              value={user.email}
              name=""
              id=""
            />{" "}
            <br />
            <input
              type="text"
              className="my-2 border-2 py-1 px-3 w-full rounded-md"
              placeholder="Your Mobile Number"
              name="mobile"
              id="mobile"
              required
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
              htmlFor="form-modal"
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
