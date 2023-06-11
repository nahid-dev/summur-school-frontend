import React, { useContext, useState } from "react";
import Container from "../../components/shared/Container/Container";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Swal.fire({
          icon: "success",
          title: "Successfully Login",
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <Helmet>
        <title>MyDraw | Login</title>
      </Helmet>
      <div className="custom-bg">
        <Container>
          <div className="min-h-screen flex items-center justify-center py-20 pt-24">
            <div className=" bg-white shadow-md p-5 md:p-10 rounded-md md:w-2/6">
              <form onSubmit={handleSubmit(onSubmit)} action="" className="">
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
                <div className="flex flex-col relative">
                  <label className="font-bold">Password</label>
                  <input
                    className="border px-3 py-2 my-2 w-full border-blue-600 rounded-md"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your Password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  <button
                    onClick={togglePasswordVisibility}
                    className="absolute top-10 right-5"
                  >
                    {passwordVisible ? (
                      <AiFillEyeInvisible size={22}></AiFillEyeInvisible>
                    ) : (
                      <AiFillEye size={22}></AiFillEye>
                    )}
                  </button>
                </div>

                <div className="flex flex-col mt-3">
                  <input className="main-btn " type="submit" value="Login" />
                </div>
              </form>
              <div className="mt-2">
                <p>
                  New to Here?{" "}
                  <Link to="/signUp" className="underline text-blue-600">
                    Sign Up
                  </Link>
                </p>
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
