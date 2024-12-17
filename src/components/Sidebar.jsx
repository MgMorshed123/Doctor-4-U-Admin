import React from "react";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_admin/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div>
      {aToken && (
        <ul>
          <NavLink>
            <img src={assets.home_icon} alt="" srcset="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink>
            <img src={assets.appointment_icon} alt="" srcset="" />
            <p>Appointment</p>
          </NavLink>

          <NavLink>
            <img src={assets.add_icon} alt="" srcset="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink>
            <img src={assets.people_icon} alt="" srcset="" />
            <p>Doctor List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
