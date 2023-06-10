import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import useClasses from "../../Hooks/useClasses";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const MyClasses = () => {
  const [classes, , classLoading] = useClasses();
  // console.log(classes);
  if (classLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>MyDraw | My Classes</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="How Much classes i have"
          title="My Classes"
        ></SectionTitle>
      </div>
      <div className="w-full px-5">
        <div className="overflow-x-auto">
          <table className="table-sm md:table  table-zebra overflow-x-auto">
            {/* head */}
            <thead className="bg-gray-300">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Enrolled Students</th>
                <th>Status</th>
                <th>Feedback</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>{classItem?.name}</td>
                  <td>{classItem?.enrolled_students}</td>
                  <td>{classItem.status}</td>
                  <td>
                    {classItem?.status === "pending" ||
                    classItem?.status === "approve"
                      ? "No feedback"
                      : classItem.feedback}
                  </td>
                  <td className="text-right">
                    <Link to={`/dashboard/updateAClass/${classItem._id}`}>
                      <button className="text-blue-600 hover:scale-125 duration-300">
                        <FaEdit size={24}></FaEdit>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
