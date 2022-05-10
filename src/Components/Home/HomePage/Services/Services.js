import React from "react";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import fluoride from "../../../../assets/images/fluoride.png";
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
    </div>
  );
};

export default Services;
