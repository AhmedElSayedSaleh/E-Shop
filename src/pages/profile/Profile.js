import React from "react";
import { Outlet } from "react-router-dom";
import {Sidebar} from "./";

const Profile = () => {
  return (
    <div className="border-bottom d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Profile;
