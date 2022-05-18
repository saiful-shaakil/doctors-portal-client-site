import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Appointment from "./Components/Appointment/Appointment";
import AllUsers from "./Components/Dashboard/AllUsers";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyAppoinments from "./Components/Dashboard/MyAppoinments";
import MyReviews from "./Components/Dashboard/MyReviews";
import Footer from "./Components/Home/HomePage/Footer/Footer";
import HomePage from "./Components/Home/HomePage/HomePage";
import NotFoundPage from "./Components/OtherPages/NotFoundPage";
import RequireAdmin from "./Components/OtherPages/RequireAdmin";
import RequireAuth from "./Components/OtherPages/RequireAuth";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route
            path="/dashboard"
            element={<MyAppoinments></MyAppoinments>}
          ></Route>
          <Route
            path="/dashboard/reviews"
            element={<MyReviews></MyReviews>}
          ></Route>
          <Route
            path="/dashboard/user"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
