import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
import useEnrolledClasses from "../../Hooks/useEnrolledClasses";
import Loader from "../Loader/Loader";

const MyEnrolledClasses = () => {
  const [enrolledClasses, , enrolledLoading] = useEnrolledClasses();
  console.log(enrolledClasses);
  if (enrolledLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>MyDraw | My Enrolled Classes</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="confirm all classes for drawing"
            title="My Enrolled Classes"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="md:table table-sm table-zebra">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Class Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {enrolledClasses.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.classImage} alt="Avatar" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td> {item?.className}</td>
                  <td>$ {item?.price}</td>
                  <td>
                    <div className="badge badge-accent badge-outline">
                      {item.classStatus}
                    </div>
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

export default MyEnrolledClasses;
