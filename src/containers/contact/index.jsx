import React from "react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact" className="Contact">
      <PageHanderContect headerText="Contact Me" icon={<BsInfoCircleFill size={40} />} />
    </section>
  );
};

export default Contact;
