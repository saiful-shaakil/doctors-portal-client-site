import React from "react";
import quoteBg from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus iste voluptatibus reprehenderit eius aperiam, dolorem possimus aut ab optio.",
      name: "Winson Handy",
      img: people1,
      location: "California",
    },
    {
      _id: 2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus iste voluptatibus reprehenderit eius aperiam, dolorem possimus aut ab optio.",
      name: "Miss Taylor",
      img: people2,
      location: "California",
    },
    {
      _id: 3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus iste voluptatibus reprehenderit eius aperiam, dolorem possimus aut ab optio.",
      name: "Tom Holand",
      img: people3,
      location: "California",
    },
  ];
  return (
    <div className="px-10 my-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl text-primary font-bold uppercase">
            Testimonials
          </h1>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div className="w-16 lg:w-48">
          <img src={quoteBg} alt="" />
        </div>
      </div>
      <div className=" flex gap-5 flex-col lg:flex-row">
        {reviews.map((each) => (
          <Review key={each._id} each={each}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
