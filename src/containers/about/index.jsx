import React from "react";
import PageHanderContect from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import profilePhoto from "../../assets/images/profile-2.jpeg";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    Value: "Bima Dharma",
  },
  {
    label: "Contact",
    Value: "089501725175",
  },
  {
    label: "Email",
    Value: "bimadharmayahya@gmail.com",
  },
];

const jobSummary =
  "An Information Systems student at Gunadarma University with skills in website development, front-end, UI/UX, and data analytics. I have experience actively participating in organizations, managing social media, and creating digital designs. I am committed to continuously deepening my knowledge and skills in the IT field and eager to seek collaborative experiences to apply my expertise. With high enthusiasm, I am ready to contribute to industry projects that support my career development and foster continuous skill growth.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHanderContect headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={0.5}
            delay={0.5}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}:</span>
                  <span className="value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.0}
            delay={0.5}
            start={{
              transform: "translateX(900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="box">
            <div className="photoWrapper">
              <img src={profilePhoto} alt="Bima Dharma" className="profilePhoto" />
            </div>
          </div>
        </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
