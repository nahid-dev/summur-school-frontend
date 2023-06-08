import React, { useContext } from "react";
import Container from "../../components/shared/Container/Container";
import "./signUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const hosted_image_api_key = import.meta.env.VITE_IMG_HOST;

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // hosting image url
  const hosted_img_url = `https://api.imgbb.com/1/upload?key=${hosted_image_api_key}`;

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
        console.log(imgResponse);
        if (imgResponse.success) {
          const imageURL = imgResponse.data.display_url;
          console.log(imageURL);
          // create User================
          createUser(data.email, data.password)
            .then((result) => {
              const signUpedUser = result.user;
              console.log(signUpedUser);

              // Update User ===============
              updateUser(data.name, imageURL)
                .then(() => {
                  const saveUser = {
                    name: data.name,
                    email: data.email,
                    user_image: imageURL,
                  };
                  fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.insertedId) {
                        Swal.fire({
                          icon: "success",
                          title: "Sign Up Successfully",
                        });
                        reset();
                      }
                    });
                })
                .catch((err) => {
                  console.log(err.message);
                });
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
      });
  };
  return (
    <div className="custom-bg">
      <Helmet>
        <title>MyDraw | Sign Up</title>
      </Helmet>
      <Container>
        <div className="min-h-screen flex items-center justify-center py-20 pt-24">
          <div className=" bg-white shadow-md p-5 md:p-10 rounded-md md:w-2/6">
            <form onSubmit={handleSubmit(onSubmit)} action="" className="">
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
                <label className="font-bold">Photo</label>
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
                <label className="font-bold">Email</label>
                <input
                  className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Password</label>
                <input
                  className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password min have 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password max have 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have a uppercase a lowercase a special
                    character .
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Confirm Password</label>
                <input
                  className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-3">
                <input className="main-btn " type="submit" value="Sign Up" />
              </div>
            </form>
            <div className="mt-2">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="underline text-blue-600">
                  Login
                </Link>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
