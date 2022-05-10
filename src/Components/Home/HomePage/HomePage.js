import React from "react";
import AppointmentSection from "./AppointmentSection/AppointmentSection";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Information from "./Information/Information";
import Services from "./Services/Services";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Information></Information>
      <Services></Services>
      <AppointmentSection></AppointmentSection>
      <ContactUs></ContactUs>
    </div>
  );
};

export default HomePage;
