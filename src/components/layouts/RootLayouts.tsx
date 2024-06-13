import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

const RootLayouts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayouts;
