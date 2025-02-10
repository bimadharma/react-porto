import React from "react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Resume = () => {
  return (
    <section id="Resume" className="Resume">
      <PageHanderContect headerText="Resume Me" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Resume;
