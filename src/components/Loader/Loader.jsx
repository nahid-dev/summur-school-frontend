import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[80vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <MoonLoader size={50} color="blue"></MoonLoader>
    </div>
  );
};

export default Loader;
