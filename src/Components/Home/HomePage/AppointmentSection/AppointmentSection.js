import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import appointmentBackground from "../../../../assets/images/appointment.png";

const AppointmentSection = () => {
  return (
    <div
      style={{ background: `url(${appointmentBackground})` }}
      className="mt-28"
    >
      <div class="hero text-white">
        <div class="hero-content pb-0 flex-col lg:flex-row">
          <div class="flex-1  mb-0 pb-0 hidden lg:block pr-10">
            <img src={doctor} className="mt-[-200px] mb-0 pb-0" />
          </div>
          <div className="text-left lg:pl-16 flex-1">
            <h1 className="text-xl font-bold text-primary mb-2">Appointment</h1>
            <h1 class="text-5xl font-bold">Make an appointment Today</h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white mb-5 lg:mb-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
