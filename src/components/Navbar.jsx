import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  let links = [
    { to: "/", name: "Home" },
    { to: "/products", name: "Products" },
  ];
  return (
    <div className="d-flex p-2 bg-secondary align-items-center justify-content-between">
      <h4 className="m-0 logo">Navbar</h4>
      <ul className="d-flex gap-3 m-0">
        {links.map((link) => (
          <NavLink
          key={link.name}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "bg-white p-1 rounded text-decoration-none" : "p-1 rounded text-decoration-none"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
