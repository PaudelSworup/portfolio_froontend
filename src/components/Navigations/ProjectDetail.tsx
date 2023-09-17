import React, { useContext, useState, useRef } from "react";
import Nav from "../Nav";
import ThemeContext from "../ApplicationWrapper/ThemeContext";
import { FaPlay, FaTimes } from "react-icons/fa";
import { useQuery } from "react-query";
import { portfolio } from "../similarprops";
import { getPortfolioById } from "../APIS/API";
import { Link, useParams } from "react-router-dom";
import Loading from "../Modals/LoadingModal";
import { API } from "../../config";
import Error from "../Modals/ErrorModal";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  let ID: string = id as string;
  const { darkmode } = useContext(ThemeContext);
  const [show, setShow] = useState<boolean>(false);
  const [showFullText, setShowFullText] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = `${API}/video/${ID}`;
    }
    setShow(true);
  };

  const closeVideo = async () => {
    if (videoRef.current) {
      videoRef.current.src = "";
      setShow(false);
    }
  };

  const toggleTextVisibility = (): void => {
    setShowFullText(!showFullText);
  };

  const { isLoading, error, data } = useQuery<portfolio>(
    ["getSingleData", ID],
    async () => {
      const res = await getPortfolioById(ID);
      return res.data.portfolio;
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Nav darkmode={darkmode} />
      <div className="min-h-[70vh] p-5 relative">
        <div
          className={`fixed top-0 right-0 left-0 bottom-0 z-[-1] ${
            darkmode ? "opacity-[0.2]" : "opacity-[0.8]"
          }`}
        >
          <img
            className="w-[100%] h-[100%] object-cover"
            src={data?.bg_image_url}
            alt=""
          />
        </div>
        <div className="sm:min-h-[140px] min-h-[70px] min-w-[200px] mt-20">
          <h2 className=" text-3xl md:text-7xl font-bold font-serif tracking-widest text-white">
            {data?.project_title}
          </h2>
        </div>
        <div className="flex items-center mt-[20px]">
          <div>
            {show ? (
              <button
                onClick={closeVideo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center"
              >
                <FaTimes className="text-red-500" /> Close
              </button>
            ) : (
              <button
                onClick={playVideo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded inline-flex items-center"
              >
                <FaPlay /> Watch Demo
              </button>
            )}
          </div>
        </div>
        <div className="leading-[1.4] text-justify tracking-widest max-w-[760px] mt-[15px] text-lg text-[rgb(249,249,249)]">
          <p>
            {`${
              showFullText
                ? data?.description
                : data?.description.slice(0, data?.description.length / 2.5)
            }`}
            <>
              {data?.description && data.description.length > 100 && (
                <button
                  className="text-blue-700 underline mt-2"
                  onClick={toggleTextVisibility}
                >
                  {showFullText ? "See Less" : " See More..."}
                </button>
              )}
            </>
          </p>
        </div>
        {data?.live_url && (
          <div className="leading-[1.4] hover:underline text-justify tracking-widest max-w-[760px] mt-[15px] text-lg text-[rgb(249,249,249)]">
            <Link
              to={data?.live_url ? data.live_url.toString() : "/fallback-url"}
              target="_blank"
            >
              Visit Live Site
            </Link>
          </div>
        )}

        <div
          className={`${
            show ? "flex" : "hidden"
          } items-center justify-center sm:mx-[100px] max-w-[100%]  sm:pt-[20px] pt-[10px]`}
        >
          <video
            ref={videoRef}
            className="sm:w-[800px] sm:h-[500px]"
            autoPlay
            controls
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
