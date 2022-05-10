import React from "react";
import AppointmentSection from "./AppointmentSection/AppointmentSection";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Information from "./Information/Information";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Information></Information>
      <Services></Services>
      <AppointmentSection></AppointmentSection>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default HomePage;
