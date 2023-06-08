import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";

const MyEnrolledClasses = () => {
  return (
    <>
      <Helmet>
        <title>MyDraw | My Enrolled Classes</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="confirm all classes for drawing"
          title="My Enrolled Classes"
        ></SectionTitle>
      </div>
    </>
  );
};

export default MyEnrolledClasses;
