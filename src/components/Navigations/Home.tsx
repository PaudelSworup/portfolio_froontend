import React, { useContext } from "react";
import Nav from "../Nav";
import SocialMedia from "../SocialMedia";
import Overview from "../Overview";
import ThemeContext from "../ApplicationWrapper/ThemeContext";

const Home: React.FC = () => {
  const { darkmode } = useContext(ThemeContext);

  return (
    <>
      <Nav darkmode={darkmode} />
      <SocialMedia />
      <Overview darkmode={darkmode} />
    </>
  );
};

export default Home;
