import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className=" fixed mt-5 px-2">
      <div className=" bg-white p-2 shadow-xl rounded-md text-2xl flex flex-col gap-3">
        <FaFacebook className="text-blue-600" />
        <FaGithub />
        <FaLinkedin className="text-[#206EA6]" />
        <FaYoutube className="text-red-600" />
      </div>
    </div>
  );
};

export default SocialMedia;
