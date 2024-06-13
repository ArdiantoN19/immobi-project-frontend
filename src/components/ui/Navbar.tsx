import React from "react";
import NavLink from "./NavLink";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full py-3 mb-8">
      <h1 className="text-3xl font-bold">Immobi</h1>
      <ul className=" flex gap-2 list-none">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/karyawan">Karyawan</NavLink>
        </li>
        <li>
          <NavLink to="/department">Department</NavLink>
        </li>
        <li>
          <NavLink to="/jabatan">Jabatan</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
