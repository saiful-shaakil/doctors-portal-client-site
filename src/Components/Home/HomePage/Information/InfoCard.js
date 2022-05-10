import React from "react";

const InfoCard = ({ img, title, bg, details }) => {
  return (
    <div
      class={`card lg:card-side bg-base-100 shadow-xl bg-accent p-5 text-white ${bg}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
