import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoadingPage from "../OtherPages/LoadingPage";

const MyAppoinments = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch(
      `https://blooming-taiga-86351.herokuapp.com/booking?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [user]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{appointment.patientName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.slot}</td>
              <td>{appointment.treatmentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinments;
