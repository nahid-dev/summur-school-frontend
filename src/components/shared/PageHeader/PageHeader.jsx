import React from "react";
import "./pageHeader.css";
import { Slide } from "react-awesome-reveal";

const PageHeader = ({ heading }) => {
  return (
    <div className="header-bg h-[350px] flex items-center justify-center text-white uppercase">
      <Slide>
        <h4 className="text-4xl font-bold">{heading}</h4>
      </Slide>
    </div>
  );
};

export default PageHeader;
