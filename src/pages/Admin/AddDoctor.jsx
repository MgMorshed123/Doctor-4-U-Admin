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

        <div>
          <div>
            <div>
              <p>Doctor Name</p>
              <input type="text" name="" id="" placeholder="Name" required />
            </div>

            <div>
              <p>Doctor Email</p>
              <input type="email" name="" id="" placeholder="email" required />
            </div>

            <div>
              <p>Doctor Password </p>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                required
              />
            </div>

            <div>
              <p> Experience </p>
              <select>
                <option value="1 Year"> 1 Year</option>
                <option value="2 Year"> 2 Year</option>
                <option value="3 Year"> 3 Year</option>
                <option value="4 Year"> 4 Year</option>
                <option value="5 Year"> 5 Year</option>
                <option value="6 Year"> 6 Year</option>
                <option value="7 Year"> 7 Year</option>
                <option value="8 Year"> 8 Year</option>
                <option value="9 Year"> 9 Year</option>
                <option value="10 Year"> 10 Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
