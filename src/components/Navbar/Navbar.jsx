import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../shared/Container/Container";
import mainLogo from "../../assets/main-logo.png";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // User LogOut:
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navItem = (
    <>
      <li className="md:me-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="md:me-3">
        <NavLink to="/instructor">Instructor</NavLink>
      </li>
      <li className="md:me-3">
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {user ? (
        <>
          <li className="md:me-3">
            <Link onClick={handleLogOut} to="/login">
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="md:me-3">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="md:me-3 ">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li className="md:me-3 order-first md:order-last">
            <div className="avatar">
              <div className="w-11 rounded-full ring ring-blue-600 ">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" shadow-md fixed z-10 w-full bg-black bg-opacity-30 text-white">
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
              <div className="flex-1">
                <Link to="/">
                  <div className="flex">
                    <img src={mainLogo} alt="" />
                    <span className="text-2xl font-light bg-blue-600 p-1 rounded-full px-3">
                      MyDraw
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal p-0 items-center">
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
            <ul className="menu p-4 w-80 h-full bg-white ">
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
