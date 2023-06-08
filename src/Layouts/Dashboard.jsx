import React, { useContext } from "react";
import "./dashboard.css";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiSettingsFill, RiLogoutBoxFill } from "react-icons/ri";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full sidebar-bg text-white items-center px-5">
            {/* Sidebar content here */}
            <Outlet></Outlet>
            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="md:w-24 w-14 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h4 className="text-2xl font-light">{user?.displayName}</h4>
            </div>
            <div className="w-full h-[1px] bg-white my-5"></div>
            <li className="">
              <Link className="second-btn">
                <MdManageAccounts size={32}></MdManageAccounts>
                Manage Classes
              </Link>
            </li>
            <li className="">
              <Link className="second-btn">
                <FaUsers size={32}></FaUsers>
                Manage Users
              </Link>
            </li>
            <div className="sidebar-end w-full  flex flex-col grow justify-end">
              <li className="">
                <Link className="third-btn">
                  <RiSettingsFill size={32}></RiSettingsFill>
                  Profile
                </Link>
              </li>
              <li className="">
                <Link className="third-btn">
                  <RiLogoutBoxFill size={32}></RiLogoutBoxFill>
                  Logout
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
