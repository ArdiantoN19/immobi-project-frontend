import React from "react";
import { NavLink as Link, NavLinkProps, useLocation } from "react-router-dom";

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={`py-2 px-4 text-slate-600 text-sm hover:text-slate-900 hover:font-semibold transition-all ${
        pathname === props.to ? "text-slate-900 font-semibold" : ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
