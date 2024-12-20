import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [atoken, setatoken] = useState(localStorage.getItem("atoken"));

  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/all-doctors",
        {},
        { headers: { atoken } }
      );

      if (data.success) {
        setDoctors(data.doctors);
        Swal.fire({
          title: data.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: data.message,
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        backendUrl,
        +"/api/admin/change-availablity",
        { docId },

        { headers: { atoken } }
      );

      if (data.success) {
        getAllDoctors();
        Swal.fire({
          title: data.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: data.message,
          icon: "error",
        });
      }
    } catch (error) {}
  };

  const value = {
    atoken,
    backendUrl,
    setatoken,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
