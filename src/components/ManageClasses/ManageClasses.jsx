import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageClasses = () => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classes = [],
    refetch,
    isLoading: classLoading,
  } = useQuery({
    queryKey: ["classes"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/adminClasses");
      return res.data;
    },
  });
  // const classes = [];
  return (
    <>
      <Helmet>
        <title>MyDraw | Manage Classes</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="control all the class"
            title="Manage Classes"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-full px-3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>class Info</th>
                <th>Instructor Info</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="space-y-5">
              {classes.map((item, index) => (
                <tr key={item._id} className="">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Name: {item.instructor_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Email: {item.instructor_email}
                    </span>
                  </td>
                  <td>{item.seats}</td>
                  <th className="text-right">${item.price}</th>
                  <td>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <span className="flex flex-col space-y-3">
                      <button className=" p-1 bg-blue-600 text-white hover:bg-blue-800 duration-300 rounded-full">
                        Approve
                      </button>
                      <button className=" p-1 bg-blue-600 text-white hover:bg-blue-800 duration-300 rounded-full">
                        Deny
                      </button>
                      <button className=" p-1 bg-blue-600 text-white hover:bg-blue-800 duration-300 rounded-full">
                        Send feedback
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
