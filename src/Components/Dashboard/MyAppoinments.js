import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import LoadingPage from "../OtherPages/LoadingPage";

const MyAppoinments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch(`https://blooming-taiga-86351.herokuapp.com/booking/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          navigate("/login");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setAppointments(data));
  }, [user]);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return appointments.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="table w-full">
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
  ) : (
    <>
      You didn't add any appointment.{" "}
      <Link className="text-secondary" to="/appointment">
        Add Now
      </Link>
    </>
  );
};

export default MyAppoinments;
