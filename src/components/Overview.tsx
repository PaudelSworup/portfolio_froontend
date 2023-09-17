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
        className={`tracking-widest p-5 sm:p-0 sm:text-center text-justify text-lg ${
          props.darkmode && "text-white"
        } `}
      >
        I'm a dedicated frontend-focused full-stack web developer with a robust
        foundation in MERN stack development.
        <br /> My experience encompasses both client and server-side
        technologies, allowing me to create seamless web applications.
        <br /> Moreover, I'm actively immersing myself in the exciting world of
        Android app development. My enthusiasm drives me to continuously expand
        my skill set, aiming to craft captivating mobile applications that
        enhance user experiences.
      </p>
      <Link
        to="/projects"
        className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all ${
          props.darkmode ? "bg-white" : "bg-[#447EAE]"
        }  rounded hover:bg-white group`}
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span
          className={`relative w-full text-left ${
            props.darkmode ? "text-black" : "text-white"
          } transition-colors duration-300 tracking-widest ease-in-out group-hover:text-white`}
        >
          PROJECTS
        </span>
      </Link>
    </div>
  );
};

export default Overview;
