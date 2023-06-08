import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";

const AddAClass = () => {
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
    </>
  );
};

export default AddAClass;
