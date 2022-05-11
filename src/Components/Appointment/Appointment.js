import React, { useEffect, useState } from "react";
import chairPhoto from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import Service from "./Service";
import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [treatment, setTreatment] = useState(null);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* banner */}
      <div
        style={{
          background: `url(${bannerBg})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="hero min-h-screen"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chairPhoto}
            alt="chair"
            className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:pr-32">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
      {/* date */}
      <div>
        <p className="text-center text-secondary text-xl font-semibold my-5">
          You have selected {format(date, "PP")}
        </p>
      </div>
      {/* services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 py-10">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          ></Service>
        ))}
      </div>
      {treatment && <AppointmentForm date={date} treatment={treatment} />}
    </div>
  );
};

export default Appointment;
