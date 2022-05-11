import React, { useState } from "react";
import chairPhoto from "../../assets/images/chair.png";
import bannerBg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div
        style={{
          background: `url(${bannerBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
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
            <p className="ml-8">You have selected {format(date, "PP")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
