import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia: React.FC = () => {
  return (
    <div className=" fixed mt-5 px-2">
      <div className=" bg-white p-2 shadow-xl rounded-md text-2xl flex flex-col gap-3">
        <Link to="https://www.facebook.com/SworupKcey" target="_blank">
          <FaFacebook className="text-blue-600" />
        </Link>
        <Link to="https://github.com/PaudelSworup" target="_blank">
          <FaGithub />
        </Link>

        <Link
          to="https://np.linkedin.com/in/sworup-kc-36227a187"
          target="_blank"
        >
          <FaLinkedin className="text-[#206EA6]" />
        </Link>

        <Link to="https://www.youtube.com/" target="_blank">
          <FaYoutube className="text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
