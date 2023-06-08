import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";

const MyClasses = () => {
  return (
    <>
      <Helmet>
        <title>MyDraw | My Classes</title>
      </Helmet>
      <div>
        <SectionTitle
          subTitle="How Much classes i have"
          title="My Classes"
        ></SectionTitle>
      </div>
    </>
  );
};

export default MyClasses;
