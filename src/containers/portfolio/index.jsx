import React from "react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="Portfolio">
      <PageHanderContect headerText="Portfolio Me" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Portfolio;
