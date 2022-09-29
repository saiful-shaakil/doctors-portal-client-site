import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import LoadingPage from "../OtherPages/LoadingPage";

const AllUsers = () => {
  const [user, loading] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [admin, adminLoading] = useAdmin(user);
  useEffect(() => {
    fetch("https://blooming-taiga-86351.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // loading component
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  const makeAdmin = () => {
    const token = localStorage.getItem("accessToken");
    fetch(
      `https://blooming-taiga-86351.herokuapp.com/user/admin/${user?.email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-xs" onClick={makeAdmin}>
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
