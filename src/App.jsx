import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard></Dashboard>} />
          <Route
            path="/all-appointments"
            element={<AllAppointment></AllAppointment>}
          />
          <Route path="/add-doctor" element={<AddDoctor></AddDoctor>} />
          <Route path="/doctor-list" element={<DoctorList></DoctorList>} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login></Login>
      <ToastContainer />
    </div>
  );
};

export default App;
