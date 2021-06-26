import React from "react";
import { NavLink } from "react-router-dom";
import "./_navitem.scss";

const NavItem = ({ icon, name, to, exact, isActive }) => {
  const params = {
    activeClassName: "active",
    className: "nav-item",
    to,
    exact,
    isActive,
  };
  return (
    <NavLink {...params}>
      <span className="icon">{icon}</span>
      <span className="label">{name}</span>
    </NavLink>
  );
};

export default NavItem;
