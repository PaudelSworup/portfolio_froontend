import React, { useContext } from "react";
import Nav from "../Nav";
import ThemeContext from "../ApplicationWrapper/ThemeContext";
import Cards from "../ReusableComponents/Cards";
import { useQuery } from "react-query";
import { ApiResponse } from "../similarprops";
import { getProtfolio } from "../APIS/API";
import Loading from "../Modals/LoadingModal";

const Portfolio = () => {
  const { darkmode } = useContext(ThemeContext);
  const { isLoading, error, data } = useQuery<ApiResponse>(
    ["portfolio"],
    async () => {
      const res = await getProtfolio();
      return res.data;
    }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <>
      <Nav darkmode={darkmode} />
      <div className="p-3">
        <h2
          className={`font-bold text-2xl text-center ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          PROJECTS
        </h2>
        {/* <div className="flex items-center justify-center flex-wrap gap-4"> */}
        <div className="grid  md:grid-cols-2 sm:mx-14   gap-4 xl:flex  scrollbar-hide flex-wrap ">
          {data?.portfolio.map((data, i) => {
            return <Cards key={i} mydata={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
