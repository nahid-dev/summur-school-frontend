import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const hosted_image_api_key = import.meta.env.VITE_IMG_HOST;

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // console.log(user);
  // hosting image url
  const hosted_img_url = `https://api.imgbb.com/1/upload?key=${hosted_image_api_key}`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(hosted_img_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, seats } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            seats: parseFloat(seats),
            image: imgURL,
            instructor_name: user.displayName,
            instructor_email: user.email,
            status: "pending",
          };
          // console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>MyDraw | Add A Class</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="Tech what's you love"
          title="Add A Class"
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
              <label className="font-bold">Name</label>
              <input
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                type="text"
                placeholder="Enter your name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Image</label>
              <input
                type="file"
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                name="photo"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-600">Photo is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Instructor name </label>
              <input
                className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                type="email"
                placeholder="Enter your email"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">InstructorEmail</label>
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
                placeholder="Available seats"
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
                name="Price"
                placeholder="Price"
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

export default AddAClass;
