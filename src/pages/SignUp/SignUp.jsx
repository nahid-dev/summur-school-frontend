import React from "react";
import Container from "../../components/shared/Container/Container";
import "./signUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="custom-bg">
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
              <div className="flex flex-col">
                <input className="main-btn " type="submit" value="Sign Up" />
              </div>
            </form>
            <div className="mt-2">
              <p>
                Already have an account?{" "}
                <Link className="underline text-blue-600">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
