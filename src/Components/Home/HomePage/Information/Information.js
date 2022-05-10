import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import location from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Information = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-4 lg:px-10">
      <InfoCard
        title="Opening Hours"
        bg="bg-gradient-to-r from-secondary to-primary"
        details="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
      ></InfoCard>
      <InfoCard
        title="Visit our location"
        bg="bg-accent"
        details="Brooklyn, NY 10036, United States"
        img={location}
      ></InfoCard>
      <InfoCard
        title="Contact us now"
        bg="bg-gradient-to-r from-secondary to-primary"
        details="+000 123 456789"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Information;
