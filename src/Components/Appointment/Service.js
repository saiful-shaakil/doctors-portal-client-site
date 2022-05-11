import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="text-xl font-bold text-secondary text-center">{name}</h2>
        {slots.length ? (
          <span>{slots[0]}</span>
        ) : (
          <span>No slot available this date.</span>
        )}{" "}
        {slots.length} {slots.length > 1 ? "seats" : "seat"} availabe.
        <div class="card-actions"></div>
        <label
          for="form-modal"
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
