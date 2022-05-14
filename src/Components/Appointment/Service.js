import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span>No slot available this date.</span>
        )}{" "}
        {slots.length} {slots.length > 1 ? "seats" : "seat"} availabe.
        <div className="card-actions"></div>
        <label
          disabled={slots.length === 0}
          htmlFor="form-modal"
          onClick={() => setTreatment(service)}
          className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
