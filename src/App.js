import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Appointment from "./Components/Appointment/Appointment";
import Footer from "./Components/Home/HomePage/Footer/Footer";
import HomePage from "./Components/Home/HomePage/HomePage";
import NotFoundPage from "./Components/OtherPages/NotFoundPage";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
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
