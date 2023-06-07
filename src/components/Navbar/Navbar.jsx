import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../shared/Container/Container";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink>Item 1</NavLink>
      </li>
      <li>
        <NavLink>Item 2</NavLink>
      </li>
      <li>
        <NavLink>Item 3</NavLink>
      </li>
    </>
  );
  return (
    <div className=" shadow-md">
      <Container>
        {" "}
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar px-0 ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1">Navbar Title</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal p-0">
                  {/* Navbar menu content here */}
                  {navItem}
                </ul>
              </div>
            </div>
            {/* Page content here */}
            {/* Content */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200">
              {/* Sidebar content here */}
              {navItem}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
