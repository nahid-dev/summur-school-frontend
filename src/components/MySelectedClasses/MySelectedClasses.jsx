import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";

const MySelectedClasses = () => {
  return (
    <>
      <Helmet>
        <title>MyDraw | My Selected Classes</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="Drawing is my passion"
            title="My Selected Classes"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-full px-5">
        <div className="overflow-x-auto ">
          <table className="table-sm md:table">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>Class Name</p>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Payment</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Action</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MySelectedClasses;
