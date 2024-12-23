import React, { useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { atoken, setatoken } = useContext(AdminContext);

  const logout = () => {
    navigate("/");
    atoken && setatoken("");
    atoken && localStorage.removeItem("atoken");
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white ">
      <div className="flex items-center text:sm">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
          srcset=""
        />
        <p className="border py-0.5 rounded-full text-gray-600 ">
          {atoken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={() => logout()}
        className="bg-primary text-black text-sm px-10 py-2 rounded-full"
      >
        LogOut
      </button>
    </div>
  );
};

export default Navbar;
