import React from "react";
import { similarProps } from "./similarprops";
import { Link } from "react-router-dom";

const Overview: React.FC<similarProps> = (props) => {
  return (
    <div className="flex  flex-col gap-5 items-center  justify-center min-h-[90vh] sm:min-h-[50vh]">
      <h3 className={`text-4xl font-bold ${props.darkmode && "text-white"}`}>
        HEY, I'M SWORUP KC
      </h3>
      <p
        className={`tracking-widest p-5 sm:p-0 text-center text-lg ${
          props.darkmode && "text-white"
        } `}
      >
        I'm a frontend-focused full-stack web developer with a strong background
        in MERN stack development.
        <br /> Additionally, I'm currently exploring the world of Android app
        development, eager to broaden my skill set and craft captivating mobile
        applications.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 tracking-wider text-white font-bold py-2 px-4 rounded">
        <Link to="/projects">PROJECTS</Link>
      </button>
    </div>
  );
};

export default Overview;
