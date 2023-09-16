import React from "react";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { similarProps } from "./similarprops";

const Switchmode: React.FC<similarProps> = (props) => {
  return (
    <div className="flex items-center space-x-4">
      <label
        className={`relative inline-block w-14 h-8 ${
          props.darkmode ? "bg-[#333]" : "bg-[#73C0FC]"
        }  rounded-full p-1`}
      >
        <input
          type="checkbox"
          checked={props.darkmode}
          onChange={props.toggleMode}
          className="hidden"
        />
        <span
          className={`absolute left-[5px] top-[5px]  transition-transform duration-500 ease-in-out ${
            props.darkmode
              ? "translate-x-full bg-transparent"
              : "translate-x-0 bg-transparent"
          } w-5 h-5 rounded-full`}
        >
          {props.darkmode ? (
            <FaMoon className="text-xl text-blue-500" />
          ) : (
            <RiSunFill className="text-xl  text-yellow-400" />
          )}
        </span>
      </label>
    </div>
  );
};

export default Switchmode;
