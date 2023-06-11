import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div>
        <div className=" text-center flex items-center justify-center min-h-screen">
          <div>
            <h2 className="mb-5 font-light text-5xl md:text-9xl text-gray-600">
              <span className="">Error</span> {status || 404}
            </h2>
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
