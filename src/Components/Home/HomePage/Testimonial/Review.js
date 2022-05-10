import React from "react";

const Review = ({ each }) => {
  const { name, review, img, location } = each;
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review}</p>
        <div className="flex items-center mt-5">
          <div>
            <img src={img} />
          </div>
          <div className=" pl-5">
            <p className="font-bold">{name}</p> <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
