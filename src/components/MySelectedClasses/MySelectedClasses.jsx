import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";

const MySelectedClasses = () => {
  return (
    <div>
      <Helmet>
        <title>MyDraw | My Selected Classes</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="Drawing is my passion"
          title="My Selected Classes"
        ></SectionTitle>
      </div>
    </div>
  );
};

export default MySelectedClasses;
