import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
import useSelectedClass from "../../Hooks/useSelectedClass";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  const [selectedClasses, refetch, isLoading] = useSelectedClass();
  // console.log(selectedClasses);
  if (isLoading) {
    return <Loader></Loader>;
  }
  const handleDeleteClass = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://summer-camp-server-nahid-dev.vercel.app/selectedClass/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };
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
              {selectedClasses.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item?.name}</p>
                  </td>
                  <td>$ {item?.price}</td>
                  <th>
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button className="main-btn">Payment</button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeleteClass(item)}
                      className="btn btn-circle btn-outline hover:bg-red-600 hover:border-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MySelectedClasses;
