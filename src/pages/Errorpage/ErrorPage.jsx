import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div>
      <div>
        <div className=" text-center flex items-center justify-center min-h-screen">
          <div>
            <div>
              <Lottie animationData={errorAnimation}></Lottie>
            </div>
            <p className="text-xl font-semibold mb-8">{error?.message}</p>
            <Link to="/" className="main-btn">
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
