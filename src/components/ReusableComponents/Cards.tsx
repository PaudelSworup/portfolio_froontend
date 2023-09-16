import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioData } from "../similarprops";
// import { ApiResponse } from "../similarprops";

const Cards: React.FC<portfolioData> = (props) => {
  // console.log(props.mydata);
  const [isRated, setIsRated] = useState<Number>(0);

  function handleStarHover(star: Number): void {
    setIsRated(star);
  }

  function handleStarClick(star: Number): void {
    alert("rating recorded");
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg h-[250px] w-full"
        src={props?.mydata?.image_url}
        alt="product image"
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-wide capitalize  text-gray-900 dark:text-white">
          {props?.mydata?.project_title}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          {[1, 2, 3, 4, 5].map((star: Number, i) => (
            <span key={i}>
              <FaStar
                className={`cursor-pointer text-xl   ${
                  star <= isRated ? "text-yellow-400" : "text-[#9E9E9E]"
                }`}
                onMouseOver={() => handleStarHover(star)}
                onClick={() => handleStarClick(star)}
              />
            </span>
          ))}
          <span
            className={`bg-blue-100 ${
              !isRated && "hidden"
            } text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3`}
          >
            {`${isRated}.0`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to={`details/${props?.mydata?._id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaArrowRight className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
