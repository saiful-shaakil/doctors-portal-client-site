import React from "react";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import fluoride from "../../../../assets/images/fluoride.png";
import baby from "../../../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  return (
    <div className="mt-28 text-center">
      <h1 className="text-2xl font-bold uppercase text-primary">
        Our Services
      </h1>
      <h1 className="text-4xl mt-2 mb-16">Services We Provide</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 lg:px-10">
        <Service
          title="Cavity Filling"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={cavity}
        ></Service>
        <Service
          title="Fluoride Treatment"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={fluoride}
        ></Service>
        <Service
          title="Teeth Whitening"
          details="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          img={whitening}
        ></Service>
      </div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={baby} class="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-left lg:pl-16">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
