import React from "react";
import chairPhoto from "../../../../assets/images/chair.png";
import bannerBg from "../../../../assets/images/bg.png";

const Banner = () => {
  return (
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
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6 lg:pr-16">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
