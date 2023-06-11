import React from "react";

import Slider from "../../components/Slider/Slider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import TopClasses from "../../components/TopClasses/TopClasses";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MyDraw | Home</title>
      </Helmet>
      <Slider></Slider>
      <SectionTitle
        subTitle="Join the class you like"
        title="Our Popular Classes"
      ></SectionTitle>
      <TopClasses></TopClasses>
    </>
  );
};

export default Home;
