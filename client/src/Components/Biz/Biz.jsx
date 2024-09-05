import React from "react";
import BestBusiness from "../Home/BestBusiness";
import FAQs from "./FAQs";
import Requirement from "./Requirement";
import Roadmap from "./Roadmap";

const Biz = () => {
  return (
    <div>
      <Requirement />
      <Roadmap />
      <BestBusiness />
      <FAQs />
    </div>
  );
};

export default Biz;
