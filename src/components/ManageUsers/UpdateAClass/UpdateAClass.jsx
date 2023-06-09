import React, { useContext } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const UpdateAClass = () => {
  const updateClass = useLoaderData();
  // console.log(updateClass);
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const updatedClass = {
      price: parseFloat(data.price),
      seats: parseFloat(data.seats),
    };
    axiosSecure
      .patch(`/classes/${updateClass._id}`, updatedClass)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>MyDraw | Update A Class</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="Little Update for change"
          title="Update A Class"
        ></SectionTitle>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="border p-5 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div className="flex flex-col">
              <label className="font-bold">Name (readOnly)</label>
              <input
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                type="text"
                readOnly
                defaultValue={updateClass.name}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Image</label>
              <input
                type="file"
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                readOnly
                disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Instructor name (Read Only) </label>
              <input
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                type="email"
                placeholder="Enter your email"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">InstructorEmail (Read Only)</label>
              <input
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                type="email"
                placeholder="Enter your email"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Available Seats</label>
              <input
                type="number"
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                name="available seats"
                defaultValue={updateClass.seats}
                {...register("seats", { required: true })}
              />
              {errors.seats && (
                <span className="text-red-600">Seats is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Price</label>
              <input
                type="number"
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                defaultValue={updateClass.price}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-600">Seats is required</span>
              )}
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Add Class"
              className="main-btn w-full my-3"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateAClass;
