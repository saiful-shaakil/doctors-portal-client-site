import { Route, Routes } from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment";
import Footer from "./Components/Home/HomePage/Footer/Footer";
import HomePage from "./Components/Home/HomePage/HomePage";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
