import { useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Overview from "./Components/Overview";
import "../src/Components/DarkMode/darkmode.scss";

function App() {
  // DARK MODE IF
  const [theme, Settheme] = useState("light");
  // HANDL CLICK DARK
  const darkHandler = () => {
    Settheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);
  return (
    <>
      <Dashboard darkHandler={darkHandler} theme={theme} />
      <Overview theme={theme} />
    </>
  );
}

export default App;
