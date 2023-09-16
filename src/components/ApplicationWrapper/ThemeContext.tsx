import { createContext } from "react";
import { similarProps } from "../similarprops";

const ThemeContext = createContext<similarProps>({
  darkmode: false,
  toggleMode: () => {},
});

export default ThemeContext;
