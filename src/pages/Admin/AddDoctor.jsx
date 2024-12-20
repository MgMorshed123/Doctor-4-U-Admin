import React from "react";
import { assets } from "../../assets/assets_admin/assets";

const AddDoctor = () => {
  return (
    <form>
      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" srcset="" />
          </label>

          <input type="file" name="" id="" />
          <p>
            Upload Doctor <br /> Picture{" "}
          </p>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
