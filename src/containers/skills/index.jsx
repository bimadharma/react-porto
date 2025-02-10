import React from "react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="Skills" className="Skills">
      <PageHanderContect headerText="Skills Me" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Skills;
